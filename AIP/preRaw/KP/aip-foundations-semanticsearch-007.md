---
id: aip-foundations-semanticsearch-007
title: 语义搜索与 K 近邻
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — I. Foundational AI Concepts > Embeddings & Vector Theory > Semantic Search (K-Nearest Neighbor)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 29-37, ‘Retrieval Augmented Generation’, ‘Embeddings’, and ‘Using Knowledge Bases’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 2, ‘Retrieval-Augmented Generation (RAG)’"
dependencies:
  - aip-foundations-vectortypes-009
---

# aip-foundations-semanticsearch-007: 语义搜索与 K 近邻

## Learning Objective

能够解释语义搜索如何借助向量和 K 近邻返回意义相近的内容。

## Scope

- Included: 嵌入、相似度、K 近邻与语义检索的基本流程。
- Excluded: 近似近邻索引算法推导、数据库配置和 RAG 端到端实现。

## Source Context

导图在 Embeddings & Vector Theory 下把 Semantic Search 与 K-Nearest Neighbor 直接关联。

## Knowledge Point

语义搜索（semantic search）把查询和候选内容表示为向量，再用 K 近邻（K-nearest neighbor, KNN）按距离或相似度选出最接近的 K 个候选，因此可以超越纯关键词匹配。

## PDF Grounding

详细课件把嵌入描述为表达数据含义的向量，并在 Knowledge Bases 流程中显示查询经语义搜索返回结果；Study Guide 把 RAG 类比为开卷考试，明确它通过向量存储的语义搜索把相关上下文加入提示。

## Logical Path

1. 使用一致的嵌入模型编码查询与文档。
2. 在同一向量空间计算距离或相似度。
3. 返回得分最高的 K 个候选。
4. 相似度只表示向量接近，不自动等于事实相关或业务正确。

## Key Terms

- 语义搜索（`semantic search`）：按含义相似度检索内容。
- K 近邻（`K-nearest neighbor`）：选取距离查询最近的 K 个候选。

## Example

示意示例：查询“如何重置登录密码”可能找到标题为“恢复账户访问”的文档；这展示了语义接近可以在关键词不完全相同时发挥作用。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“I. Foundational AI Concepts > Embeddings & Vector Theory > Semantic Search (K-Nearest Neighbor)”支持语义搜索与 KNN 的关联。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 29–37 页支持嵌入、向量检索、语义搜索与 RAG 的连接。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 2 页“Retrieval-Augmented Generation (RAG)”支持向量存储语义搜索与上下文增强。
