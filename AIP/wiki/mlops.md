---
title: 模型部署、血缘与 MLOps
derived_from:
  - aip-bedrock-customimport-013
  - aip-governance-lineage-054
  - aip-integration-bedrockapi-055
  - aip-sagemaker-deployment-061
  - aip-sagemaker-mlops-062
  - aip-testing-regression-070
last_synced: 2026-11-01
status: current
---

# 模型部署、血缘与 MLOps

[返回导航](README.md) · [考试覆盖与缺口](exam-coverage.md)

## 在线推理、批量推理与托管调用

|工作负载|考虑方向|关键理由|
|---|---|---|
|用户请求需及时预测|SageMaker 实时 Endpoint|模型作为在线服务|
|积累的数据离线统一预测|Batch Transform|批量处理，不要求长期在线接口|
|调用 Bedrock 支持的模型|Bedrock runtime|调用托管基础模型|
|已有兼容自定义模型资产进入 Bedrock|Custom Model Import|导入资产并接入推理|

实时 Endpoint 与 Batch Transform 的资源生命周期及费用结构不同，不能因为每天调用少就认为持续在线资源没有成本。Serverless Inference 是另一种支持范围与约束，需要单独核对，不能等同于所有 SageMaker Endpoint。

这些选项是部署/调用方式，不会自动代替模型能力评估。

Raw KPs: `aip-bedrock-customimport-013`, `aip-integration-bedrockapi-055`, `aip-sagemaker-deployment-061`

## 发布资产与审批不是一个状态

S3 保存模型制品和报告，ECR 保存推理镜像，Model Registry 管理模型版本、指标、元数据及审批信息。Registered、Approved 和 Deployed 是不同事实：注册成功不等于获批，获批也不自动触发部署，除非已配置自动流程。

SageMaker Pipelines 可组织准备数据、训练/微调、评估、门槛判断和注册等步骤；Step Functions 更通用于业务与服务编排。两者侧重不同，不要求每个系统都同时采用。

Lineage 追溯数据、处理、训练、模型及部署关系。仅有“V2”标签不能复现，需要对应数据、代码、参数、制品、评估规则和配置。Lineage 也不自动保存所有资产或完成回滚。

Raw KPs: `aip-governance-lineage-054`, `aip-sagemaker-mlops-062`

## Blue/Green 切流与自动回滚的真实条件

|策略|流量变化|要关注什么|
|---|---|---|
|All at once|一次全部切换|失败影响范围大|
|Canary|先小部分，再切剩余|观察期和告警|
|Linear|固定增量分多步切换|每阶段监控与停止条件|

这里指支持的 SageMaker Blue/Green 场景。课程中通用的多阶段渐进发布与产品具体 Canary/Linear 命名应区分。

Baking Period 是观察阶段，配置的 CloudWatch Alarm 才能驱动相应自动防护。HTTP 错误率低不意味着推荐质量正常；若要因超预算推荐回滚，需要采集相应业务质量指标并接入判断。

Deployment Guardrails 是部署保护，Bedrock Guardrails 是内容/规则防护，不是同一个功能。

Raw KPs: `aip-sagemaker-mlops-062`, `aip-testing-regression-070`

## 回滚案例与验收清单

V2 离线正确率提高，但线上错误率或 P95 显著变差：停止扩量，按配置恢复已验证版本，再调查真实输入和运行差异。不要事后降低验收门槛来使新版本通过。

回滚要能定位旧模型制品、镜像、Endpoint 配置和应用接口。若 V2 改了输出 JSON，后端也跟着改变，只回滚模型仍可能故障。部署版本恢复不会撤销已经发出的通知、付款或数据库写入。

复习应能解释：Registry 管版本，Lineage 管来源关系，Pipelines 执行流程，Deployment Guardrails 控制切流，Alarm 提供触发信号。发布成功、技术健康与业务质量达标需要分别验证。

Raw KPs: `aip-governance-lineage-054`, `aip-sagemaker-mlops-062`, `aip-testing-regression-070`

## 考试场景：候选模型如何安全进入生产

场景：V1 正在运行，V2 离线评分更高。先检查验收门槛、登记候选及相关资产、审批，再部署和受控切流；上线后观察已配置的技术与业务指标。

|题目要求或异常|判断|典型错误选项|
|---|---|---|
|保存权重、镜像、版本及审批信息|区分 S3、ECR 与 Registry 的职责|Registry 代替所有资产存储|
|追查模型使用的数据与参数|Lineage 加实际保留的资产|只有 V2 标签即可复现|
|先小流量，观察后切剩余|此处 SageMaker Blue/Green Canary|将所有多阶段切流都称为产品 Canary|
|固定增量分多次切换|Linear|把它与两阶段 Canary 混为一谈|
|HTTP 正常，但推荐违反预算|采集约束满足等业务质量信号|错误率告警自动理解答案质量|
|回滚模型后接口仍报错|检查制品、镜像、Endpoint 配置和应用接口兼容性|恢复权重即完成所有恢复|
|新版已发出错误通知|部署回滚不自动撤销副作用|版本恢复等于业务补偿|

每天夜间处理一批历史数据、不要求即时返回时，应比较 Batch Transform 与持续在线 Endpoint 的资源生命周期。Registered、Approved、Deployed、技术健康和业务质量达标分别需要证据。

Raw KPs: `aip-sagemaker-deployment-061`, `aip-sagemaker-mlops-062`

## 原始笔记与来源边界

本页综合已批准的 raw；例子、数字和数据结构为教学用途。未将来源链接的存在当作所有产品能力的重新核验。具体原始文档、页码与当时查阅状态保留在各 raw 中。

- [aip-bedrock-customimport-013](../raw/aip-bedrock-customimport-013.md)
- [aip-governance-lineage-054](../raw/aip-governance-lineage-054.md)
- [aip-integration-bedrockapi-055](../raw/aip-integration-bedrockapi-055.md)
- [aip-sagemaker-deployment-061](../raw/aip-sagemaker-deployment-061.md)
- [aip-sagemaker-mlops-062](../raw/aip-sagemaker-mlops-062.md)
- [aip-testing-regression-070](../raw/aip-testing-regression-070.md)
