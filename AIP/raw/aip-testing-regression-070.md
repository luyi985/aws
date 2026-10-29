# aip-testing-regression-070: Golden Dataset、回归测试、Canary 与 A/B 验证

## Concepts

### 1. Golden Dataset — 标准测试集

Golden Dataset 是经过验证、具有代表性的测试用例集合，用于评估 LLM、RAG 和 Agent 的输出及行为。LLM 输出有非确定性，不一定能够用字符串完全相等判断。

```json
{"id":"case-001","question":"What is the capital of Australia?","reference_answer":"Canberra","category":"factual_qa"}
```

测试集应覆盖正常问答、复杂多文档推理、缺少答案时拒答、旧版本文档、权限隔离、敏感数据保护以及 Tool Calling。除了问题，还应包含合理的预期结果、参考依据和类别。对支付或删除等有副作用的工具，需 Mock、Sandbox 和确定性的权限验证，不能仅依赖 LLM 打分。

### 2. Offline Regression Testing — 离线回归测试

当 Prompt、Model 或 RAG Pipeline 改动时，使用同一套 Golden Dataset 对当前版本 A 和候选版本 B 进行评估，检查是否引入质量退化。

示例变更：Chunk Size 从 500 增为 1,000，加入 Reranker，修改 System Prompt。

| 指标 | Version A | Version B |
|---|---:|---:|
| Correctness | 82% | 89% |
| Faithfulness | 94% | 91% |
| P95 Latency | 3.0s | 4.8s |
| Cost / Request | $0.01 | $0.02 |

这些为教学示例。B 的 Correctness 提升，但 Faithfulness、延迟和成本退化，不能只看单项分数。控制模型、Prompt、知识库版本与评分标准；必要时重复执行，避免将随机波动误认为质量变化。

### 3. Acceptance Threshold — 发布验收门槛

Acceptance Threshold 将评估结果映射到发布准入规则，例如：

```text
Correctness >= 85%
Faithfulness >= 92%
P95 Latency <= 4 seconds
Cost / Request <= $0.025
```

阈值仅为教学示例，不是 AWS 默认值。按此标准，B 虽然 Correctness 与成本达标，但 Faithfulness 和 Latency 不达标，不能直接发布。

应在评估前约定门槛，避免事后人为调整。高风险权限绕过、数据泄露、未授权交易等应具备独立硬性安全要求，不能用总体质量均分抵消。

### 4. Canary Release — 金丝雀发布

Canary 将少量生产流量先导向新版本，监控运行指标、业务结果和异常，再决定是否扩大范围。

```text
Phase 1: B = 5%
Phase 2: B = 25%
Phase 3: B = 50%
Phase 4: B = 100%
```

每阶段检查 Tool Execution Errors、P95 Latency、Task Success Rate、成本和用户反馈。异常时停止扩量并按系统设计回滚。

**Canary 重在限制发布风险，而非证明 B 统计上优于 A。** 仅做流量划分不够，还需监控、停止与回滚能力。生产中有副作用的 Agent Tool 仍需独立权限、Sandbox/Mock 验证和必要审批。

### 5. A/B Testing — 对照实验

A/B Testing 通过合理的随机分配，比较不同版本的实际业务效果。

```text
Eligible Users
    ↓
Random Assignment
    ├── Group A → Original RAG
    └── Group B → RAG + Reranker
    ↓
Compare: Task Success / Acceptance / Correctness /
         Faithfulness / Latency / Cost
```

需要考虑样本量、用户群差异、实验时段及其他混杂因素，不能仅凭少量样本的均分差异得出可靠结论。

## Concept Relationships

```text
Prompt / Model / RAG Change
          ↓
Golden Dataset
          ↓
Offline Regression Testing
          ↓
Acceptance Threshold
          ↓
Pass? ── No → Fix / Reject
  │
 Yes
  ↓
Canary Release
  ↓
Monitor Production Signals
  ↓
Stable? ── No → Stop / Rollback
  │
 Yes
  ↓
Gradual Rollout
  ↓
Optional A/B Testing
  ↓
Continuous Monitoring
```

Golden Dataset 提供可重复测试依据；Offline Regression 比较变更前后；Acceptance Threshold 是发布准入条件；Canary 验证有限真实流量下的风险；A/B Testing 评估业务效果。两种线上手段可以组合，但不能互相替代。

| | Canary | A/B Testing |
|---|---|---|
| 目标 | 降低发布风险 | 比较效果 |
| 关键问题 | 新版本能否安全运行？ | 哪个版本对业务更好？ |
| 关注指标 | Errors / Latency / Stability | Task Success / 用户体验 |
| 决策 | 扩量或回滚 | 保留哪个方案 |

**AWS 服务映射**：Amazon Bedrock Model Evaluation 支持相应模型评估任务；CloudWatch 负责监控和告警；SageMaker Deployment Guardrails 适用于支持的 SageMaker Endpoint 安全部署及流量转移。Bedrock Agent 应用的流量路由和回滚可在应用发布层设计，不能直接假设 SageMaker Endpoint 的部署机制对所有 Bedrock Agent 自动生效。

## Example

DeepResearch Agent 更新 Prompt，离线 Golden Dataset 全部达标，但生产中可能暴露未覆盖的 Tool Calling 问题。

合理步骤：离线评估 → 验收门槛 → 5% 合适生产流量 Canary → 监控 Tool Errors、Latency、Task Success、Cost → 无异常则逐步扩大，异常则停止和回滚。对具有副作用的工具，先完成 Mock/Sandbox 和确定性安全测试，真实调用依旧受权限及审批控制约束。

## Understanding

本次用户在上线判断题中明确选择 **B**：“先发布到 5% 流量，监控 Tool Errors、Latency 和 Task Success，正常后逐步扩大”。这表明在该示例中能正确应用 Canary，并区分离线评估与真实生产环境验证。

## References

以下四项源自 preRaw KP；本次笔记整理未重新阅读底层课件或官方页面，保留来源身份但不把继承来源冒充本次直接核验。

- [AWS Certified Generative AI Developer 课程资料](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — AIP-C01 course slides / detailed coverage（继承，未重新读取）
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — AIP-C01 Study Guide (Detailed)（继承，未重新读取）
- [Amazon Bedrock — Model Evaluation](https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation.html)（继承来源）
- [Amazon SageMaker — Deployment Guardrails](https://docs.aws.amazon.com/sagemaker/latest/dg/deployment-guardrails-blue-green.html)（继承来源）
