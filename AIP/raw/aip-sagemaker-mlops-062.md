# aip-sagemaker-mlops-062: 模型部署防护、Registry、Pipelines 与回滚

## Concepts

### 1. MLOps 发布链路

模型发布除了代码和容器，还需要管理模型制品、数据来源、评估结果、审批状态和部署配置。

本节聚焦 SageMaker 管理模型的链路，不直接等同于所有 Bedrock Prompt 或 Agent 应用的部署方式。

贯穿教学案例：生产运行 V1，微调后的 V2 离线评分更高，准备上线；上线后可能出现延迟、错误率或业务质量退化。

### 2. Model Registry：版本、元数据与审批

Model Registry 用于组织模型版本，关联指标、元数据、审批状态与血缘信息。

| 组件 | 主要职责 |
|---|---|
| S3 | 保存模型权重、评估报告等文件 |
| ECR | 保存推理容器镜像 |
| Model Registry | 管理模型版本及相关发布信息 |

可以使用 Model Package Group 管理同一用途的模型，把候选注册为不同版本。

简化教学记录：

```json
{
  "modelGroup": "product-recommendation",
  "version": 2,
  "modelArtifact": "s3://example/models/v2/model.tar.gz",
  "evaluationReport": "s3://example/evaluation/v2/report.json",
  "approvalStatus": "PendingManualApproval"
}
```

这不是 AWS API 原始格式。

需要区分：

- Registered：版本已记录。
- Approved：按照审批流程允许进入后续部署。
- Deployed：已实际部署。

注册不等于获批，获批也不代表自动上线。自动部署需要另行配置触发和执行流程。

### 3. SageMaker Pipelines：执行 ML 开发流程

Pipelines 是面向 ML 开发的工作流编排服务，可组织数据处理、训练或微调、评估及相关后续步骤，并追踪执行。

教学流程：

准备数据 → 微调 → 评估 → 检查门槛 → 注册候选 → 审批 → 部署。

步骤和门槛需要明确配置。Pipelines 不会自动理解业务上什么算好模型。

例如 V2 Correctness 达标，但关键安全测试失败，应拒绝继续推进，不能用较高平均分抵消独立硬性门槛。

与 Step Functions 的区别主要在侧重点：

| 服务 | 侧重点 |
|---|---|
| Step Functions | 通用业务与服务编排 |
| SageMaker Pipelines | ML 开发流程和 SageMaker 作业集成 |

二者存在能力重叠，不要求所有模型相关任务都只能使用 Pipelines，也不要求每个项目同时使用两者。

### 4. Lineage：追溯模型如何产生

版本号用于定位对象，Lineage 用于追溯产生对象的过程。

调查 V2 时，可能需要追查：

- 训练数据版本。
- 基础模型。
- 训练或微调作业。
- 评估数据与规则。
- 相关代码、参数、制品和配置。

可复现需要保留对应资产，而不只是一个 V2 标签。本概念连接已学 KP 054。

### 5. Deployment Guardrails：控制生产切流

离线通过不代表生产环境一定表现正常，真实输入、负载和环境可能不同。

Deployment Guardrails 提供适用 SageMaker Endpoint 更新场景中的流量切换和自动回滚等部署防护。Endpoint 类型与功能组合存在适用限制，实施时需要核对。

本节重点是 Blue/Green：

- Blue：旧版 V1 运行环境。
- Green：新版 V2 运行环境。

先准备新环境，再控制流量切换。

| 策略 | 切换方式 |
|---|---|
| All at once | 一次全部切至新版 |
| Canary | 先切一小部分，观察后再切剩余流量 |
| Linear | 按固定增量分多步切换 |

SageMaker Blue/Green 的 Canary 是小流量与剩余流量两个阶段；多次固定增量切换属于 Linear。

Baking Period 是配置的观察阶段。配置的 CloudWatch Alarm 在相应观察阶段触发时，可以启动自动回滚。

这些 Deployment Guardrails 属于部署防护，与 Bedrock 内容安全 Guardrails 不是同一个功能。

### 6. 告警决定自动防护能发现什么

假设有以下教学结果：

| 指标 | V1 | V2 |
|---|---:|---:|
| 离线 Correctness | 85% | 90% |
| 线上错误率 | 0.5% | 8% |
| P95 延迟 | 2 秒 | 7 秒 |

配置适当的错误率或延迟告警后，部署流程才能据此判断是否停止推进或回滚。

部署防护不会天然理解回答内容是否正确。HTTP 200、延迟正常，不代表业务质量达标。

例如 V2 频繁推荐超预算产品，但技术指标正常，需要额外采集业务质量信号，再配置相应监控与告警，才能据此参与部署决策。

### 7. 约束满足率与 Faithfulness

这两个指标不应混用：

| 场景 | 主要问题 |
|---|---|
| 资料与回答都写 $450，但用户预算为 $300 | 预算约束未满足；Faithfulness 仍可能较高 |
| 资料写 $450，回答却声称 $280 | 回答偏离证据，Faithfulness 不达标，价格事实也不正确 |

Faithfulness 关注答案是否得到所给证据支持。

Constraint Satisfaction 关注是否满足用户明确要求。

因此，发现“超预算推荐”应优先检查预算约束满足情况，不能把所有不遵守用户要求的问题都称为 Faithfulness 下降。

### 8. Rollback：恢复已验证的部署

回滚需要准确定位：

- 旧模型制品。
- 对应推理容器。
- Endpoint 配置。
- 与应用接口的兼容关系。

如果 V2 输出结构变化，后端也随之修改，只回滚模型可能仍然造成接口错误。

模型或部署版本回滚不会自动撤销已经完成的付款、通知和数据库写入。恢复服务版本与补偿业务副作用是不同问题。

## Concept Relationships

### 发布链路中的职责分工

| 环节 | 职责 |
|---|---|
| Pipelines | 组织并执行数据、训练、评估等步骤 |
| Registry | 管理候选版本、相关指标与审批 |
| Lineage | 追溯版本来源和关联过程 |
| Deployment Guardrails | 控制切流并响应已配置的告警 |
| Rollback | 恢复已验证的部署版本和配置 |

### 离线验收与生产防护

离线评估决定候选是否满足已知测试要求；渐进发布与监控观察真实环境风险。二者互补，不能相互替代。

### 技术健康与业务质量

错误率、延迟反映服务运行情况；答案正确性和约束满足率反映任务质量。正常技术指标不能证明正常业务结果。

### 版本追溯与恢复

Registry 和 Lineage 帮助定位版本及来源，制品与配置保留支持准确恢复。审批、部署、运行正常和业务质量达标是不同状态。

## Understanding

面对“HTTP 200、延迟正常，但频繁推荐超预算产品”的场景，用户回答：

> 不能，这是 Faithfulness 的指标不达标。

该回答正确识别：仅靠错误率与延迟告警无法发现该问题。

讨论修正了指标归类：超预算推荐更直接对应约束满足率；如果回答准确复述资料中的价格，Faithfulness 仍可能较高。

用户随后表示理解。此处记录为本次讨论中的概念修正，不据此推断已完成独立迁移验证。

本次未创建 Registry、运行 Pipelines、执行灰度发布或真实回滚测试，不据此认定已具备独立实操能力。

## References

### 继承来源，未重新读取底层资料

- [AWS Certified Generative AI Developer 课程资料](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — AIP-C01 course slides / detailed coverage；原始 KP 未提供具体页码。
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — AIP-C01 Study Guide (Detailed)；原始 KP 未提供具体页码。

### 继承来源，本次直接读取

- [SageMaker Model Registry](https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry.html) — 模型版本、元数据、审批与血缘。
- [SageMaker Pipelines](https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines.html) — ML 工作流编排、作业集成与执行追踪。
- [Deployment Guardrails](https://docs.aws.amazon.com/sagemaker/latest/dg/deployment-guardrails.html) — 部署防护、切流、适用边界与自动回滚。

### 本次直接读取的补充来源

- [Blue/Green Deployments](https://docs.aws.amazon.com/sagemaker/latest/dg/deployment-guardrails-blue-green.html) — Blue/Green、Canary、Linear、Baking Period 与 CloudWatch Alarm。

### KP 血缘

- [原始 KP 定义](../preRaw/KP/aip-sagemaker-mlops-062.md) — 本次直接读取。

模型 V1/V2、评分和性能数字、简化注册记录与选购助手场景均为本次教学示例。
