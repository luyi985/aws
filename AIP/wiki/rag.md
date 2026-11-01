---
title: RAG 检索、排序与证据
derived_from:
  - aip-foundations-semanticsearch-007
  - aip-foundations-vectordimensionality-008
  - aip-foundations-vectortypes-009
  - aip-bedrock-knowledgebases-014
  - aip-bedrock-chunking-015
  - aip-bedrock-vectordatabases-016
  - aip-bedrock-reranking-017
  - aip-bedrock-groundingcheck-019
  - aip-testing-ragtroubleshooting-071
last_synced: 2026-11-01
status: current
---

# RAG 检索、排序与证据

[返回导航](README.md) · [考试覆盖与缺口](exam-coverage.md)

## 检索前的知识工程

RAG 的链路是原文解析、切块、向量化、索引、检索、排序、Context 组装、生成。每一步都会改变证据是否可被找到和解释。

|切块策略|机制|适用判断|代价或风险|
|---|---|---|---|
|固定大小与 overlap|按长度切分并重复边界部分|结构相对简单、易于调参|结论与适用条件可能分离；重复增加存储和 Token|
|层次切块|以 child 精确检索，再提供 parent 背景|局部命中需较大上下文|最终输入更大|
|语义切块|按主题或语义边界组织|固定边界破坏内容时值得评估|处理成本与边界质量需验证|

Query 和文档向量要处于可比较的表示空间。维度更高不保证召回更好；同为 float32，1024D 原始向量数据量约为 256D 的四倍，尚未计算索引等开销。以 Recall、延迟和成本联合评估。

Dense 适合同义表达，Sparse 保留错误码、产品名等显式信号。查询 Kafka 错误码时，Hybrid 可让词项命中与语义补充共同参与。

Raw KPs: `aip-foundations-semanticsearch-007`, `aip-foundations-vectordimensionality-008`, `aip-foundations-vectortypes-009`, `aip-bedrock-knowledgebases-014`, `aip-bedrock-chunking-015`

## 向量库的选择与隔离

|场景信号|候选方向|需要验证|
|---|---|---|
|已有 Aurora/PostgreSQL，业务同时需要关系查询和向量查询|复用现有数据平台的向量能力|规模、延迟、过滤能力、业务负载影响|
|搜索为核心，混合关键词与向量，已有 OpenSearch 经验|OpenSearch|检索质量、索引及运维成本|
|向量为核心，优先减少基础设施维护|受管理向量/搜索服务|支持特性、集成、成本与责任边界|

这不是固定赢家列表。比较维度包括延迟、吞吐、过滤、扩展、安全网络、已有技术栈与运维责任。Embedding 成本主要由模型、切块数量、文本规模和重新向量化频率决定，不应直接算成某个数据库固有优势。

tenant_id 等元数据可以限制搜索集合，但租户值必须来自可信的服务端授权上下文。用户传入 tenant_id 并不自动证明有权访问该租户。

Raw KPs: `aip-bedrock-vectordatabases-016`

## 候选集、Reranking 与最终输入

初始检索取较多候选，Reranker 再做更细的 query-document 相关性判断。候选中有正确块，最终 Top-K 仍可能丢掉它。排序输入缺标题、版本或被截断，也可能改变结果。

专用 Reranker 不一定提供可编辑 Prompt；只有使用可配置的 LLM 排序方案时，才应把评分 Prompt 当成直接调参点。

选出正确块还不够：最终请求必须包含完整正文、来源、版本与适用条件。Grounding 只判断回答是否受给定证据支持，不保证证据有效。旧政策 15 天、回答也是 15 天，可以忠实但不符合当前 20 天政策。

Raw KPs: `aip-bedrock-reranking-017`, `aip-bedrock-groundingcheck-019`, `aip-testing-ragtroubleshooting-071`

## 检索指标与可重复验证

Recall@K = 返回的相关块数 / 全部已标注相关块数。
Precision@K = 返回的相关块数 / 实际返回块数。

4 个已标注相关块，返回 5 个其中 3 个相关：Recall 为 75%，Precision 为 60%。不知道相关块全集时，不能凭参考答案直接宣称测出了块级 Recall。

对固定排名增加 K 不会降低 Recall，但 Precision 可能变化，并增加后续处理开销。分别记录初始召回和最终选择的指标，避免“检索很好”掩盖排序损失。

用同一组问题对比切块、Embedding、过滤和 Top-K，记录 Chunk ID、版本、各阶段结果及最终输入。排障入口见 [故障定位](troubleshooting.md)。

Raw KPs: `aip-foundations-vectordimensionality-008`, `aip-testing-ragtroubleshooting-071`

## 原始笔记与来源边界

本页综合已批准的 raw；例子、数字和数据结构为教学用途。未将来源链接的存在当作所有产品能力的重新核验。具体原始文档、页码与当时查阅状态保留在各 raw 中。

- [aip-foundations-semanticsearch-007](../raw/aip-foundations-semanticsearch-007.md)
- [aip-foundations-vectordimensionality-008](../raw/aip-foundations-vectordimensionality-008.md)
- [aip-foundations-vectortypes-009](../raw/aip-foundations-vectortypes-009.md)
- [aip-bedrock-knowledgebases-014](../raw/aip-bedrock-knowledgebases-014.md)
- [aip-bedrock-chunking-015](../raw/aip-bedrock-chunking-015.md)
- [aip-bedrock-vectordatabases-016](../raw/aip-bedrock-vectordatabases-016.md)
- [aip-bedrock-reranking-017](../raw/aip-bedrock-reranking-017.md)
- [aip-bedrock-groundingcheck-019](../raw/aip-bedrock-groundingcheck-019.md)
- [aip-testing-ragtroubleshooting-071](../raw/aip-testing-ragtroubleshooting-071.md)
