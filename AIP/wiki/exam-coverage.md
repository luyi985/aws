---
title: AIP-C01 考纲覆盖与待补清单
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

# AIP-C01 考纲覆盖与待补清单

本表是内容审阅映射，不是考试命中率或通过概率。74/74 只表示 raw 已纳入主题来源，不表示官方所有 Skill 均已充分覆盖。这里把“已有可解释的主体内容”与“仍缺实现或细节”同时列出；没有把整项任务标成完全掌握。

## 官方领域与权重

|领域|权重|
|---|---:|
|1 模型集成、数据管理与合规|31%|
|2 实现与集成|26%|
|3 AI 安全、保密与治理|20%|
|4 运行效率与优化|12%|
|5 测试、验证与故障诊断|11%|

## 逐任务映射

|Task|任务|Wiki 入口|已覆盖与剩余缺口|
|---|---|---|---|
|1.1|需求分析与方案设计|[模型能力、选型与定制](models.md)、[企业助手与应用形态](enterprise.md)|模型和应用形态判断已有；POC、Well-Architected GenAI Lens 与可复用架构验证待补|
|1.2|模型选择与配置|[模型能力、选型与定制](models.md)、[推理性能、容量与可靠性](performance.md)、[模型部署、血缘与 MLOps](mlops.md)|选型、定制、路由和恢复已有；AppConfig 驱动切换及具体部署配置待补|
|1.3|数据校验与处理|[从原始数据到可用知识](data.md)|提取、映射、编目、转换和校验已有；Glue Data Quality 作业、模型特定输入完整示例待补|
|1.4|向量存储方案|[RAG 检索、排序与证据](rag.md)|过滤、选型和成本因素已有；分片、多索引、删除传播与增量同步实施待补|
|1.5|检索增强机制|[RAG 检索、排序与证据](rag.md)、[RAG 与 Agent 故障定位](troubleshooting.md)|切块、Embedding、Hybrid、Rerank、分阶段排障已有；query expansion/decomposition 实现待补|
|1.6|Prompt 策略与治理|[提示词、State 与上下文](prompts-context.md)|结构、示例、变量、版本、State 和回归已有；模板审批与完整治理自动化待补|
|2.1|Agent 与工具|[Agent 编排、工具与人工介入](agents.md)、[API、流式与后台任务](integration.md)|规划、依赖、MCP、Schema、HITL 和恢复边界已有；可运行 loop、MCP 部署与高级协作实践待补|
|2.2|模型部署策略|[模型部署、血缘与 MLOps](mlops.md)、[推理性能、容量与可靠性](performance.md)|Endpoint、Batch、容量模式和发布防护已有；容器加载、GPU/内存资源配置待补|
|2.3|企业集成|[企业助手与应用形态](enterprise.md)、[API、流式与后台任务](integration.md)、[安全、隐私与规则边界](security.md)|事件与 API 分工、身份与权限已有；混合环境连接、CI/CD 和 GenAI gateway 完整实现待补|
|2.4|模型 API 集成|[API、流式与后台任务](integration.md)、[推理性能、容量与可靠性](performance.md)|API 选择、流式、异步、重试和路由已有；真实 SDK 请求响应和异常验证待补|
|2.5|应用集成与开发工具|[API、流式与后台任务](integration.md)、[企业助手与应用形态](enterprise.md)|Gateway、Flows、Q Developer 与接口设计已有；Amplify、开发流水线与日志查询操作待补|
|3.1|输入输出安全|[安全、隐私与规则边界](security.md)、[质量评估与安全发布](evaluation.md)|注入、过滤、Grounding、结构和执行校验已有；对抗测试集及完整配置待补|
|3.2|数据安全与隐私|[安全、隐私与规则边界](security.md)|IAM、端点、TLS/KMS、PII 和最小化已有；Lake Formation 与复杂跨账户场景待补|
|3.3|治理与合规|[运行监控、审计与漂移](observability.md)、[模型部署、血缘与 MLOps](mlops.md)|审计、来源、保留、审批和生命周期已有；Model Cards 与组织级治理流程待补|
|3.4|Responsible AI|[质量评估与安全发布](evaluation.md)、[运行监控、审计与漂移](observability.md)|公平性、解释、证据和偏差校准已有；分组指标实测及政策检查流水线待补|
|4.1|成本与资源效率|[推理性能、容量与可靠性](performance.md)、[提示词、State 与上下文](prompts-context.md)|Token、缓存、路由、容量利用率权衡已有；具体预算测算、批量与自动扩缩容待补|
|4.2|性能优化|[推理性能、容量与可靠性](performance.md)、[API、流式与后台任务](integration.md)、[RAG 检索、排序与证据](rag.md)|TTFT、OTPS、流式、检索与并发约束已有；temperature/top-p/top-k、索引调优与负载实验待补|
|4.3|监控体系|[运行监控、审计与漂移](observability.md)、[RAG 与 Agent 故障定位](troubleshooting.md)|指标、日志、Trace、漂移及告警响应已有；Dashboard/Alarm/IaC、工具和向量库运维自动化待补|
|5.1|评估体系|[质量评估与安全发布](evaluation.md)、[RAG 检索、排序与证据](rag.md)|Rubric、Judge 校准、回归、Canary/A-B 和检索指标已有；自动化报告、持续评估代码及合成用户流程待补|
|5.2|故障诊断|[RAG 与 Agent 故障定位](troubleshooting.md)、[提示词、State 与上下文](prompts-context.md)|Context、检索、工具、参数、权限和 Prompt 定位已有；真实 AWS 日志与故障注入练习待补|

## 本轮 raw 覆盖复核（行政记录，2026-11-01）

本轮读取 74 篇 raw，并核对全部 wiki 页面。详细逐页结论见 [全量审核报告](audit-2026-11-01.md)。

|待补方向|raw 现状|处理类别|
|---|---|---|
|语义缓存业务范围与版本失效|041 已详细讲解|已补回 wiki|
|模型发布、资产、审批与回滚|061/062 已有场景与边界|已补回 wiki|
|重试、参数、权限与重复处理|043/057/072 已有分类与必要性|已补回 wiki；崩溃窗口协议仍缺|
|AppConfig|未找到展开|新增学习内容|
|Glue Data Quality|034 仅提规则管理职责|需补规则与失败处理|
|采样 temperature/top-p/生成 top-k|未找到明确展开；检索 Top-K 不等同此项|新增学习内容|
|RAG 增量/删除/迁移与查询扩展分解|已有入库和排障主线，未有完整维护方案|需补流程与场景|
|MCP 部署|026 有协议与授权；无 Lambda/ECS 部署方案|需补选型与配置|
|Lake Formation、Model Cards|未找到明确展开|新增学习内容|
|CI/CD、容量、可观测性与持续评估操作|概念分散存在，实施证据不足|按场景补充与实操|

这里的“已有”不是独立实操验收；“未找到”针对 raw 内容，不断言原始课程 PDF 没有。仍不计算考试覆盖百分比或通过概率。

## 如何使用

先在主题页解释机制、根据条件做选择，并说明另一个选项为何不适合；再读 raw 的例子或来源。不会解释的条目回到主题学习，缺实施证据的条目安排实操。不能因为术语熟悉就标记为已掌握。

后续补充优先级是编辑建议：先补 API/SDK、检索更新、Agent 可靠执行等跨题型基础，再补容量测算、CI/CD、采样参数及治理配置。它依据当前缺口和领域权重，不是对真实考题频率的预测。

本轮补充主要恢复已批准 raw 的知识，未把尚未学习的新配置自动写成已验证结论。新增知识应先进入相应学习记录并确认，再同步 wiki。

## 来源

下列官方考纲在 2026-11-01 审阅中查阅；网页自身说明其清单非穷尽，不能据此声称覆盖全部考题。

- [AIP-C01 总览](https://docs.aws.amazon.com/aws-certification/latest/ai-professional-01.html)
- [Domain 1](https://docs.aws.amazon.com/aws-certification/latest/ai-professional-01/ai-professional-01-domain1.html)
- [Domain 2](https://docs.aws.amazon.com/aws-certification/latest/ai-professional-01/ai-professional-01-domain2.html)
- [Domain 3](https://docs.aws.amazon.com/aws-certification/latest/ai-professional-01/ai-professional-01-domain3.html)
- [Domain 4](https://docs.aws.amazon.com/aws-certification/latest/ai-professional-01/ai-professional-01-domain4.html)
- [Domain 5](https://docs.aws.amazon.com/aws-certification/latest/ai-professional-01/ai-professional-01-domain5.html)

Raw 来源全集与具体主题映射见 [导航](README.md)。尚未完成每个 Skill 的独立实操验收。
