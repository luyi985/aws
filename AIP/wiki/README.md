---
title: AIP 知识导航
derived_from:
  - aip-agentic-actiongroups-022
  - aip-agentic-agentcore-024
  - aip-agentic-mcp-026
  - aip-agentic-memory-023
  - aip-agentic-multiagent-hitl-073
  - aip-agentic-planning-021
  - aip-agentic-qapps-029
  - aip-agentic-qbusiness-027
  - aip-agentic-qdeveloper-028
  - aip-agentic-strands-025
  - aip-bedrock-chunking-015
  - aip-bedrock-contentfiltering-018
  - aip-bedrock-continuedpretraining-012
  - aip-bedrock-customimport-013
  - aip-bedrock-finetuning-010
  - aip-bedrock-groundingcheck-019
  - aip-bedrock-knowledgebases-014
  - aip-bedrock-lora-011
  - aip-bedrock-reasoningpolicies-020
  - aip-bedrock-reranking-017
  - aip-bedrock-vectordatabases-016
  - aip-data-appflow-036
  - aip-data-bda-030
  - aip-data-comprehend-033
  - aip-data-glue-034
  - aip-data-textract-031
  - aip-data-transcribe-032
  - aip-data-wrangler-035
  - aip-foundations-modalities-002
  - aip-foundations-modelfamily-003
  - aip-foundations-promptanatomy-005
  - aip-foundations-promptmanagement-006
  - aip-foundations-prompttechniques-004
  - aip-foundations-semanticsearch-007
  - aip-foundations-transformer-001
  - aip-foundations-vectordimensionality-008
  - aip-foundations-vectortypes-009
  - aip-governance-audit-066
  - aip-governance-clarify-053
  - aip-governance-evaluationmetrics-046
  - aip-governance-evaluationtypes-045
  - aip-governance-lineage-054
  - aip-governance-llmjudge-047
  - aip-governance-responsibleai-052
  - aip-integration-apigateway-058
  - aip-integration-bedrockapi-055
  - aip-integration-bedrockflows-059
  - aip-integration-eventdriven-057
  - aip-integration-streaming-056
  - aip-observability-agenttrace-068
  - aip-observability-bedrock-067
  - aip-observability-modelmonitor-069
  - aip-operations-backoff-043
  - aip-operations-circuitbreaker-044
  - aip-operations-crossregion-039
  - aip-operations-latency-042
  - aip-operations-modelrouting-038
  - aip-operations-promptcaching-040
  - aip-operations-provisionedthroughput-060
  - aip-operations-semanticcache-041
  - aip-operations-tokenefficiency-037
  - aip-sagemaker-deployment-061
  - aip-sagemaker-mlops-062
  - aip-security-appsecurity-065
  - aip-security-dataredaction-064
  - aip-security-iampolicies-048
  - aip-security-kmsencryption-049
  - aip-security-macie-051
  - aip-security-privateconnectivity-050
  - aip-security-promptinjection-063
  - aip-testing-agenttroubleshooting-072
  - aip-testing-ragtroubleshooting-071
  - aip-testing-regression-070
  - aip-troubleshooting-context-074
last_synced: 2026-11-01
status: needs-review
---

# AIP 知识导航

这份 wiki 按问题和机制综合 74 篇已批准笔记，供复习、场景判断和回查使用。raw 是权威学习记录；wiki 的内容完成不代表实操能力或考试准备已全部验证。

## 主题入口

|主题|主要用途|
|---|---|
|[模型能力、选型与定制](models.md)|选型先过硬约束，再比较质量与成本；定制方式解决的不是同一个问题|
|[提示词、State 与上下文](prompts-context.md)|从 Prompt 结构到可管理资产；State 到 Context 的显式映射|
|[RAG 检索、排序与证据](rag.md)|检索前的知识工程；向量库的选择与隔离|
|[Agent 编排、工具与人工介入](agents.md)|从目标到可执行任务；显式计划：依赖与参数引用分别解决什么|
|[企业助手与应用形态](enterprise.md)|根据使用者与工作形态判断；企业检索：相关性必须服从访问范围|
|[从原始数据到可用知识](data.md)|按输入与期望输出选择提取能力；BDA：输出形态、Standard Output 与 Blueprint|
|[推理性能、容量与可靠性](performance.md)|把性能问题分解成可测部分；缓存：复用计算还是复用答案|
|[API、流式与后台任务](integration.md)|Bedrock API 选择表；流式是整条链路的性质|
|[安全、隐私与规则边界](security.md)|身份、资源与业务的分层授权；IAM 如何判断一次请求|
|[质量评估与安全发布](evaluation.md)|把指标与评分机制分开；可执行 Rubric 与 Judge 校准|
|[模型部署、血缘与 MLOps](mlops.md)|在线推理、批量推理与托管调用；发布资产与审批不是一个状态|
|[运行监控、审计与漂移](observability.md)|先看指标，再关联具体执行；Bedrock 指标和延迟诊断|
|[RAG 与 Agent 故障定位](troubleshooting.md)|按证据消失或变化的位置定位；三个贯穿诊断案例|

## 本轮审核

[全量审核与 raw 覆盖评估](audit-2026-11-01.md)：逐页记录 13 个主题、导航、考纲和来源清单的结论，区分 wiki 压缩遗漏与 raw 真正缺口。本轮补充六个主题的场景判断与错误选项。

## 三种使用方法

- 快速复习：先看每页选择表、边界和案例；说出“为何选它、何时不能选”。
- 场景排障：从 [故障定位](troubleshooting.md) 判断阶段，再跳到检索、API、安全或可观测性页寻找机制和证据。
- 考试查漏：[考纲覆盖表](exam-coverage.md) 对应全部 20 个 Task，同时列出已讲内容和缺口。没有把来源覆盖率当作考试覆盖率。

## 阅读后的自检

1. 能否沿数据流解释各组件如何配合，而不只是展开缩写？
2. 能否指出给定条件下错误选项为什么不适用？
3. 能否说出需要哪些输入、日志或指标来验证判断？
4. 遇到产品可用性、权限或版本条件，是否知道在哪里重新核验？

页面中的代码片段、数字与阈值为机制示意，不是经过部署验证的生产配置。没有宣称已完成真实 AWS 实验。

## 维护与待复核

- AgentCore：024 的整体定位与 072 的 harness 说明仍有范围/版本差异，详见 [Agent 页面](agents.md)。暂不修改 raw 或宣告替代关系。
- Model Monitor：保留 069 中的新客户可用性限制，见 [监控](observability.md)。
- KP 003 保留 raw 身份 aip-foundations-modelfamily-003；规划中的 aip-foundations-basemodels-003 是既有对应关系，不另造一篇 KP。
- 050 的端点名称、051 的独立场景验证和 069 的真实监控实操仍需复习/实践。
- raw 更新后，以 derived_from 与章节 Raw KPs 找到受影响内容；先修正 raw，再同步 wiki。来源版本摘要见 [source-manifest.json](source-manifest.json)。

status: needs-review 表示仍有上述产品定位或考纲缺口待处理，不表示全部正文不可用。

## KP 覆盖索引

|Raw KP|主题|
|---|---|
|[aip-agentic-actiongroups-022](../raw/aip-agentic-actiongroups-022.md)|[Agent 编排、工具与人工介入](agents.md)、[安全、隐私与规则边界](security.md)|
|[aip-agentic-agentcore-024](../raw/aip-agentic-agentcore-024.md)|[Agent 编排、工具与人工介入](agents.md)|
|[aip-agentic-mcp-026](../raw/aip-agentic-mcp-026.md)|[Agent 编排、工具与人工介入](agents.md)|
|[aip-agentic-memory-023](../raw/aip-agentic-memory-023.md)|[提示词、State 与上下文](prompts-context.md)、[Agent 编排、工具与人工介入](agents.md)|
|[aip-agentic-multiagent-hitl-073](../raw/aip-agentic-multiagent-hitl-073.md)|[Agent 编排、工具与人工介入](agents.md)、[质量评估与安全发布](evaluation.md)|
|[aip-agentic-planning-021](../raw/aip-agentic-planning-021.md)|[Agent 编排、工具与人工介入](agents.md)、[企业助手与应用形态](enterprise.md)|
|[aip-agentic-qapps-029](../raw/aip-agentic-qapps-029.md)|[企业助手与应用形态](enterprise.md)|
|[aip-agentic-qbusiness-027](../raw/aip-agentic-qbusiness-027.md)|[企业助手与应用形态](enterprise.md)|
|[aip-agentic-qdeveloper-028](../raw/aip-agentic-qdeveloper-028.md)|[企业助手与应用形态](enterprise.md)|
|[aip-agentic-strands-025](../raw/aip-agentic-strands-025.md)|[Agent 编排、工具与人工介入](agents.md)|
|[aip-bedrock-chunking-015](../raw/aip-bedrock-chunking-015.md)|[RAG 检索、排序与证据](rag.md)|
|[aip-bedrock-contentfiltering-018](../raw/aip-bedrock-contentfiltering-018.md)|[安全、隐私与规则边界](security.md)|
|[aip-bedrock-continuedpretraining-012](../raw/aip-bedrock-continuedpretraining-012.md)|[模型能力、选型与定制](models.md)|
|[aip-bedrock-customimport-013](../raw/aip-bedrock-customimport-013.md)|[模型能力、选型与定制](models.md)、[模型部署、血缘与 MLOps](mlops.md)|
|[aip-bedrock-finetuning-010](../raw/aip-bedrock-finetuning-010.md)|[模型能力、选型与定制](models.md)|
|[aip-bedrock-groundingcheck-019](../raw/aip-bedrock-groundingcheck-019.md)|[RAG 检索、排序与证据](rag.md)、[安全、隐私与规则边界](security.md)|
|[aip-bedrock-knowledgebases-014](../raw/aip-bedrock-knowledgebases-014.md)|[RAG 检索、排序与证据](rag.md)、[从原始数据到可用知识](data.md)|
|[aip-bedrock-lora-011](../raw/aip-bedrock-lora-011.md)|[模型能力、选型与定制](models.md)|
|[aip-bedrock-reasoningpolicies-020](../raw/aip-bedrock-reasoningpolicies-020.md)|[安全、隐私与规则边界](security.md)|
|[aip-bedrock-reranking-017](../raw/aip-bedrock-reranking-017.md)|[RAG 检索、排序与证据](rag.md)|
|[aip-bedrock-vectordatabases-016](../raw/aip-bedrock-vectordatabases-016.md)|[RAG 检索、排序与证据](rag.md)|
|[aip-data-appflow-036](../raw/aip-data-appflow-036.md)|[从原始数据到可用知识](data.md)|
|[aip-data-bda-030](../raw/aip-data-bda-030.md)|[从原始数据到可用知识](data.md)|
|[aip-data-comprehend-033](../raw/aip-data-comprehend-033.md)|[从原始数据到可用知识](data.md)|
|[aip-data-glue-034](../raw/aip-data-glue-034.md)|[从原始数据到可用知识](data.md)|
|[aip-data-textract-031](../raw/aip-data-textract-031.md)|[从原始数据到可用知识](data.md)|
|[aip-data-transcribe-032](../raw/aip-data-transcribe-032.md)|[从原始数据到可用知识](data.md)|
|[aip-data-wrangler-035](../raw/aip-data-wrangler-035.md)|[从原始数据到可用知识](data.md)|
|[aip-foundations-modalities-002](../raw/aip-foundations-modalities-002.md)|[模型能力、选型与定制](models.md)|
|[aip-foundations-modelfamily-003](../raw/aip-foundations-modelfamily-003.md)|[模型能力、选型与定制](models.md)|
|[aip-foundations-promptanatomy-005](../raw/aip-foundations-promptanatomy-005.md)|[提示词、State 与上下文](prompts-context.md)|
|[aip-foundations-promptmanagement-006](../raw/aip-foundations-promptmanagement-006.md)|[提示词、State 与上下文](prompts-context.md)|
|[aip-foundations-prompttechniques-004](../raw/aip-foundations-prompttechniques-004.md)|[提示词、State 与上下文](prompts-context.md)|
|[aip-foundations-semanticsearch-007](../raw/aip-foundations-semanticsearch-007.md)|[RAG 检索、排序与证据](rag.md)|
|[aip-foundations-transformer-001](../raw/aip-foundations-transformer-001.md)|[模型能力、选型与定制](models.md)|
|[aip-foundations-vectordimensionality-008](../raw/aip-foundations-vectordimensionality-008.md)|[RAG 检索、排序与证据](rag.md)|
|[aip-foundations-vectortypes-009](../raw/aip-foundations-vectortypes-009.md)|[RAG 检索、排序与证据](rag.md)|
|[aip-governance-audit-066](../raw/aip-governance-audit-066.md)|[运行监控、审计与漂移](observability.md)|
|[aip-governance-clarify-053](../raw/aip-governance-clarify-053.md)|[质量评估与安全发布](evaluation.md)|
|[aip-governance-evaluationmetrics-046](../raw/aip-governance-evaluationmetrics-046.md)|[质量评估与安全发布](evaluation.md)|
|[aip-governance-evaluationtypes-045](../raw/aip-governance-evaluationtypes-045.md)|[质量评估与安全发布](evaluation.md)|
|[aip-governance-lineage-054](../raw/aip-governance-lineage-054.md)|[模型部署、血缘与 MLOps](mlops.md)|
|[aip-governance-llmjudge-047](../raw/aip-governance-llmjudge-047.md)|[质量评估与安全发布](evaluation.md)|
|[aip-governance-responsibleai-052](../raw/aip-governance-responsibleai-052.md)|[质量评估与安全发布](evaluation.md)|
|[aip-integration-apigateway-058](../raw/aip-integration-apigateway-058.md)|[API、流式与后台任务](integration.md)、[安全、隐私与规则边界](security.md)|
|[aip-integration-bedrockapi-055](../raw/aip-integration-bedrockapi-055.md)|[API、流式与后台任务](integration.md)、[模型部署、血缘与 MLOps](mlops.md)|
|[aip-integration-bedrockflows-059](../raw/aip-integration-bedrockflows-059.md)|[企业助手与应用形态](enterprise.md)|
|[aip-integration-eventdriven-057](../raw/aip-integration-eventdriven-057.md)|[Agent 编排、工具与人工介入](agents.md)、[企业助手与应用形态](enterprise.md)、[推理性能、容量与可靠性](performance.md)、[API、流式与后台任务](integration.md)|
|[aip-integration-streaming-056](../raw/aip-integration-streaming-056.md)|[API、流式与后台任务](integration.md)|
|[aip-observability-agenttrace-068](../raw/aip-observability-agenttrace-068.md)|[运行监控、审计与漂移](observability.md)、[RAG 与 Agent 故障定位](troubleshooting.md)|
|[aip-observability-bedrock-067](../raw/aip-observability-bedrock-067.md)|[推理性能、容量与可靠性](performance.md)、[运行监控、审计与漂移](observability.md)|
|[aip-observability-modelmonitor-069](../raw/aip-observability-modelmonitor-069.md)|[运行监控、审计与漂移](observability.md)|
|[aip-operations-backoff-043](../raw/aip-operations-backoff-043.md)|[推理性能、容量与可靠性](performance.md)、[API、流式与后台任务](integration.md)|
|[aip-operations-circuitbreaker-044](../raw/aip-operations-circuitbreaker-044.md)|[推理性能、容量与可靠性](performance.md)|
|[aip-operations-crossregion-039](../raw/aip-operations-crossregion-039.md)|[推理性能、容量与可靠性](performance.md)|
|[aip-operations-latency-042](../raw/aip-operations-latency-042.md)|[推理性能、容量与可靠性](performance.md)|
|[aip-operations-modelrouting-038](../raw/aip-operations-modelrouting-038.md)|[推理性能、容量与可靠性](performance.md)|
|[aip-operations-promptcaching-040](../raw/aip-operations-promptcaching-040.md)|[推理性能、容量与可靠性](performance.md)|
|[aip-operations-provisionedthroughput-060](../raw/aip-operations-provisionedthroughput-060.md)|[推理性能、容量与可靠性](performance.md)|
|[aip-operations-semanticcache-041](../raw/aip-operations-semanticcache-041.md)|[推理性能、容量与可靠性](performance.md)|
|[aip-operations-tokenefficiency-037](../raw/aip-operations-tokenefficiency-037.md)|[提示词、State 与上下文](prompts-context.md)|
|[aip-sagemaker-deployment-061](../raw/aip-sagemaker-deployment-061.md)|[模型部署、血缘与 MLOps](mlops.md)|
|[aip-sagemaker-mlops-062](../raw/aip-sagemaker-mlops-062.md)|[质量评估与安全发布](evaluation.md)、[模型部署、血缘与 MLOps](mlops.md)|
|[aip-security-appsecurity-065](../raw/aip-security-appsecurity-065.md)|[企业助手与应用形态](enterprise.md)、[安全、隐私与规则边界](security.md)|
|[aip-security-dataredaction-064](../raw/aip-security-dataredaction-064.md)|[安全、隐私与规则边界](security.md)|
|[aip-security-iampolicies-048](../raw/aip-security-iampolicies-048.md)|[企业助手与应用形态](enterprise.md)、[安全、隐私与规则边界](security.md)|
|[aip-security-kmsencryption-049](../raw/aip-security-kmsencryption-049.md)|[安全、隐私与规则边界](security.md)|
|[aip-security-macie-051](../raw/aip-security-macie-051.md)|[从原始数据到可用知识](data.md)、[安全、隐私与规则边界](security.md)|
|[aip-security-privateconnectivity-050](../raw/aip-security-privateconnectivity-050.md)|[安全、隐私与规则边界](security.md)|
|[aip-security-promptinjection-063](../raw/aip-security-promptinjection-063.md)|[安全、隐私与规则边界](security.md)|
|[aip-testing-agenttroubleshooting-072](../raw/aip-testing-agenttroubleshooting-072.md)|[Agent 编排、工具与人工介入](agents.md)、[RAG 与 Agent 故障定位](troubleshooting.md)、[API、流式与后台任务](integration.md)|
|[aip-testing-ragtroubleshooting-071](../raw/aip-testing-ragtroubleshooting-071.md)|[RAG 检索、排序与证据](rag.md)、[RAG 与 Agent 故障定位](troubleshooting.md)|
|[aip-testing-regression-070](../raw/aip-testing-regression-070.md)|[质量评估与安全发布](evaluation.md)、[模型部署、血缘与 MLOps](mlops.md)、[RAG 与 Agent 故障定位](troubleshooting.md)|
|[aip-troubleshooting-context-074](../raw/aip-troubleshooting-context-074.md)|[提示词、State 与上下文](prompts-context.md)、[Agent 编排、工具与人工介入](agents.md)、[RAG 与 Agent 故障定位](troubleshooting.md)|
