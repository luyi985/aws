---
id: aip-operations-semanticcache-041
title: ElastiCache 语义缓存
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Performance & Caching > Semantic Caching (ElastiCache)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 292, ‘Intelligent Caching Systems: Semantic Caching’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 6, ‘Latency and Caching’"
dependencies:
  - aip-foundations-semanticsearch-007
---

# aip-operations-semanticcache-041: ElastiCache 语义缓存

## Learning Objective

能够解释语义缓存如何对意义相近的请求复用答案，并识别其正确性风险。

## Scope

- Included: Semantic caching、embedding similarity、ElastiCache、命中阈值和失效。
- Excluded: 具体 ElastiCache 数据结构、集群配置和产品支持承诺。

## Source Context

导图在 Performance & Caching 下把 Semantic Caching 与 ElastiCache 关联。

## Knowledge Point

语义缓存（semantic caching）不要求请求文本完全相同，而是用向量相似度判断新请求是否可复用旧答案。它可借助低延迟缓存保存查询表示与结果，但必须控制相似度阈值、权限和数据新鲜度。

## PDF Grounding

详细课件说明 semantic cache 保存 prompt 与 response 的 embeddings，可使用 ElastiCache for Valkey、MemoryDB 或 OpenSearch；新 prompt 先嵌入，再按 nearest neighbors 与 similarity threshold 决定命中。Study Guide 只讨论一般 latency/caching 和 prompt cache，未单独展开 semantic cache。

## Logical Path

1. 为请求计算语义表示。
2. 在缓存中查找足够相似且作用域一致的旧请求。
3. 命中时返回或复用旧结果，未命中时调用模型并写回。
4. 相似问题未必有相同答案，个性化和时效数据应谨慎缓存。

## Key Terms

- 语义缓存（`semantic cache`）：按意义相似度复用结果的缓存。
- 缓存失效（`cache invalidation`）：在结果过期或条件变化时停止复用。

## Example

示意示例：“怎么修改密码”和“密码如何重置”可能共享通用帮助答案；涉及具体账户状态时则不应跨用户复用。该例展示命中边界。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“V. Operational Efficiency > Performance & Caching > Semantic Caching (ElastiCache)”支持主题与实现语境。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 292 页直接支持 embedding cache、低延迟向量存储、近邻查询与阈值命中。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 6 页“Latency and Caching”支持缓存降低推理延迟的上位语境；未直接描述 semantic caching。
