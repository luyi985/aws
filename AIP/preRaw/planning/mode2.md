# AIP Mode 2 Learning Plan

## Scope

- Learning root: `AIP/`
- KP root: `AIP/preRaw/KP/`
- KP count: 54
- KP status snapshot: 54 `pending`; 0 `learning`; 0 `review`; 0 `completed`
- Subject: 在 AWS 上设计、构建和治理生产级生成式 AI 应用（AWS Generative AI Application Engineering）
- Default learning goal: 建立可用于 AIP-C01 复习和架构判断的全局心智模型；各分支深度根据用户的理解证据和兴趣递归决定。
- Initial expansion depth: subject root → five system responsibilities
- Last analysis date: 2026-09-05

## Big Picture

这个主题研究的不是某个孤立模型或 AWS 服务，而是如何把基础模型变成可用、可运营、可信的业务系统。系统首先需要控制模型行为；再把合适的数据和知识交给模型；必要时让智能体使用工具完成动作；随后用运行工程保障成本、延迟和韧性；最后用安全、评估与治理约束整个生命周期。

五个部分形成一个闭环：模型与提示产生候选行为，数据与检索提供依据，智能体把回答扩展为多步骤行动，运行层让系统在真实负载下持续工作，可信治理层检查权限、风险和质量，并把评估结果反馈到模型、提示、检索和运行决策。

## Knowledge Tree

```text
在 AWS 上设计、构建和治理生产级生成式 AI 应用
├── 模型行为与适配
├── 知识、检索与数据供应
├── 智能体编排与应用体验
├── 生产运行效率与韧性
└── 可信、安全与治理
```

当前只展开到五项系统责任。每个分支的内部结构将在该分支成为当前焦点且确有必要时再展开一层。

## Node to KP Mapping

### 模型行为与适配（10 KPs）

这些 KP 支持“模型能处理什么、如何接受指令、如何选择及如何改变模型行为”的责任：

- `aip-foundations-transformer-001` — Transformer 预训练架构
- `aip-foundations-modalities-002` — 基础模型的模态
- `aip-foundations-basemodels-003` — 基础模型家族与选型
- `aip-foundations-prompttechniques-004` — Zero-shot、Few-shot 与 Chain-of-Thought
- `aip-foundations-promptanatomy-005` — 提示词的组成结构
- `aip-foundations-promptmanagement-006` — Bedrock Prompt Management
- `aip-bedrock-finetuning-010` — 监督式微调
- `aip-bedrock-lora-011` — LoRA 低秩适配
- `aip-bedrock-continuedpretraining-012` — 持续预训练
- `aip-bedrock-customimport-013` — 从 SageMaker 导入自定义模型

### 知识、检索与数据供应（14 KPs）

这些 KP 支持“如何把外部世界中的内容变成模型可检索、可解释、可更新的上下文”的责任：

- `aip-foundations-semanticsearch-007` — 语义搜索与 K 近邻
- `aip-foundations-vectordimensionality-008` — 向量维度与性能权衡
- `aip-foundations-vectortypes-009` — 稠密向量与稀疏向量
- `aip-bedrock-knowledgebases-014` — Bedrock Knowledge Bases 自动化 RAG
- `aip-bedrock-chunking-015` — RAG 文档分块策略
- `aip-bedrock-vectordatabases-016` — RAG 向量数据库选型
- `aip-bedrock-reranking-017` — Rerank 模型与相关性改进
- `aip-data-bda-030` — Bedrock Data Automation 多模态提取
- `aip-data-textract-031` — Amazon Textract 文档 OCR
- `aip-data-transcribe-032` — Amazon Transcribe 语音识别与毒性检测
- `aip-data-comprehend-033` — Amazon Comprehend 文本分析
- `aip-data-glue-034` — AWS Glue 数据管道基础
- `aip-data-wrangler-035` — SageMaker Data Wrangler
- `aip-data-appflow-036` — AWS AppFlow SaaS 数据集成

### 智能体编排与应用体验（9 KPs）

这些 KP 支持“如何把模型、计划、记忆和工具组织成能完成行动的系统，以及如何将其产品化”的责任：

- `aip-agentic-planning-021` — Bedrock Agent 规划模块
- `aip-agentic-actiongroups-022` — Bedrock Agent Action Groups
- `aip-agentic-memory-023` — Agent 短期与长期记忆
- `aip-agentic-agentcore-024` — AgentCore 的扩展与运行支撑
- `aip-agentic-strands-025` — Strands SDK 代理开发框架
- `aip-agentic-mcp-026` — Model Context Protocol 工具接口
- `aip-agentic-qbusiness-027` — Amazon Q Business
- `aip-agentic-qdeveloper-028` — Amazon Q Developer
- `aip-agentic-qapps-029` — Amazon Q Apps 无代码应用生成

### 生产运行效率与韧性（8 KPs）

这些 KP 支持“如何在真实负载下控制成本、延迟、容量和失败”的责任：

- `aip-operations-tokenefficiency-037` — Token 效率与上下文裁剪
- `aip-operations-modelrouting-038` — 静态与动态模型路由
- `aip-operations-crossregion-039` — Cross-Region Inference
- `aip-operations-promptcaching-040` — Prompt Caching 与静态前缀
- `aip-operations-semanticcache-041` — ElastiCache 语义缓存
- `aip-operations-latency-042` — 延迟优化推理与 TTFT、OTPS
- `aip-operations-backoff-043` — 指数退避与抖动
- `aip-operations-circuitbreaker-044` — Step Functions 与 DynamoDB 熔断器

### 可信、安全与治理（13 KPs）

这些 KP 支持“系统是否有依据、是否正确、谁能访问、数据是否安全、风险是否可审计”的责任：

- `aip-bedrock-contentfiltering-018` — Guardrails 内容过滤
- `aip-bedrock-groundingcheck-019` — 上下文依据检查
- `aip-bedrock-reasoningpolicies-020` — Automated Reasoning Policies
- `aip-governance-evaluationtypes-045` — 自动评估与人工评估
- `aip-governance-evaluationmetrics-046` — ROUGE、BERTScore、Faithfulness 与 Correctness
- `aip-governance-llmjudge-047` — LLM-as-a-Judge
- `aip-security-iampolicies-048` — IAM Role 与资源策略
- `aip-security-kmsencryption-049` — KMS 与静态、传输中加密边界
- `aip-security-privateconnectivity-050` — VPC 与 PrivateLink 私有连接
- `aip-security-macie-051` — Amazon Macie 敏感数据发现
- `aip-governance-responsibleai-052` — Responsible AI 的公平、可解释与安全支柱
- `aip-governance-clarify-053` — SageMaker Clarify 偏差检测
- `aip-governance-lineage-054` — SageMaker Lineage Tracking 与 MLOps 审计

### Unmapped KPs

None. All 54 KPs have one primary conceptual node. Cross-cutting roles are recorded below rather than duplicating KP identity.

## Relationship Notes

- Data-to-grounding chain: extraction/integration → structuring/chunking → embeddings/vector store → semantic retrieval/reranking → model context → grounding and RAG evaluation.
- Model-control alternatives: prompting, RAG, fine-tuning, continued pre-training and LoRA change different parts of the system; freshness, behavioral consistency, training data and operating cost determine which mechanism is appropriate.
- Agent execution chain: planning chooses steps; action groups or MCP expose tools; memory carries state; AgentCore/Strands provide runtime or framework support; Amazon Q products package these ideas for specific users.
- Operations feedback loop: token use, model routing, caching, cross-region capacity and latency metrics affect both cost and user experience; evaluation results feed back into those choices.
- Trust is cross-cutting: IAM, KMS, PrivateLink and Macie apply to training data, knowledge sources, inference and tools rather than forming an isolated final stage.
- Three safety checks answer different questions: content filtering asks whether material is allowed; contextual grounding asks whether the answer is supported by supplied context; automated reasoning asks whether it obeys formalized policy rules.
- Semantic representations are reused: embeddings support RAG retrieval and semantic caching, so quality, dimensionality and isolation decisions affect both branches.

## Validation Findings

- KP workspace gate passed: 54 readable Markdown KPs; all IDs are unique and well formed.
- Dependency validation passed: every dependency resolves to an existing KP; no dependency cycle was found.
- Hierarchy validation passed at the initial depth: the five children are system responsibilities at compatible abstraction levels and collectively cover all KPs.
- Several KPs are cross-cutting. They are assigned one primary node and linked through Relationship Notes to avoid duplicate conceptual identities.
- Scope limitation: the supplied PDFs also discuss Prompt/Bedrock Flows, human-in-the-loop, agent tracing, CloudWatch/X-Ray/CloudTrail observability, broader SageMaker deployment, IaC and other AWS services that do not have prepared KPs. Mode 2 covers the current 54-KP set and does not claim full coverage of the 682-page course or the entire AIP-C01 exam.
- Source caveat: `AIPStudyGuide.pdf` identifies itself as a non-comprehensive quick review. Some KP files correctly use it only for parent context while the detailed PDF supplies direct evidence.
- Source metadata caveat: the 682-page PDF has an incorrect embedded title, but all 682 pages were readable and the actual content identifies the AIP-C01 course.
- Blockers: None.

## Learning State

- `aws-genai-application-engineering`: `not_started`
- `model-intelligence-and-adaptation`: `not_started`
- `knowledge-retrieval-and-data-supply`: `not_started`
- `agentic-orchestration-and-experiences`: `not_started`
- `production-efficiency-and-resilience`: `not_started`
- `trust-security-and-governance`: `not_started`

## Understanding Evidence

None yet. The hierarchy has been presented, but no user response has demonstrated or confirmed understanding at the root level.

## Current Focus

- Node: `aws-genai-application-engineering`
- Parent: None
- Abstraction level: 0 — subject root
- Reason: Establish the role of all five system responsibilities and test whether the root model is sufficient before expanding any branch.

## Drill-down Path

`aws-genai-application-engineering`

## Open Branches

- `model-intelligence-and-adaptation`: intentionally collapsed pending the root-level depth decision.
- `knowledge-retrieval-and-data-supply`: intentionally collapsed pending the root-level depth decision.
- `agentic-orchestration-and-experiences`: intentionally collapsed pending the root-level depth decision.
- `production-efficiency-and-resilience`: intentionally collapsed pending the root-level depth decision.
- `trust-security-and-governance`: intentionally collapsed pending the root-level depth decision.

## Integration Summary

Initial hypothesis pending user validation: a production GenAI system is understood as a five-part loop—shape model behavior, supply grounded knowledge, orchestrate actions, operate reliably, and continuously constrain/evaluate trust. No branch is yet marked understood, and no final integration conclusion has been accepted.
