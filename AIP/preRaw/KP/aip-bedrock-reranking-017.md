---
id: aip-bedrock-reranking-017
title: Rerank 模型与相关性改进
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — II. Amazon Bedrock Implementation > Retrieval Augmented Generation (RAG) > Rerank Models (Relevance Improvement)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 192, ‘Re-ranker Models in Amazon Bedrock’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF pp. 2-3, ‘RAG’ and ‘Optimizing Embeddings & Retrieval’"
dependencies:
  - aip-foundations-semanticsearch-007
---

# aip-bedrock-reranking-017: Rerank 模型与相关性改进

## Learning Objective

能够解释重排序模型在初次检索之后如何改善候选相关性。

## Scope

- Included: 两阶段检索、rerank、相关性与延迟成本权衡。
- Excluded: 具体重排序模型、API 配置和训练方法。

## Source Context

导图把 Rerank Models 与 Relevance Improvement 直接关联。

## Knowledge Point

重排序（reranking）先接收初次检索得到的候选集合，再用更精细的查询—文档匹配模型重新排序。它可改善送入生成模型的上下文相关性，但会增加处理步骤与延迟。

## PDF Grounding

详细课件说明 Bedrock reranker 会计算各 chunk 对查询的相关性并重新排序，可在 Knowledge Base 调用中指定或直接使用 Rerank API。Study Guide 未单列 reranker，但强调 RAG 表现高度依赖检索相关性，并用 metadata filtering 改善候选质量。

## Logical Path

1. 第一阶段快速召回较多候选。
2. 重排序模型逐项评估查询与候选的关系。
3. 只把排名靠前的片段送入生成上下文。
4. 若初次召回完全漏掉正确片段，重排序无法把它找回来。

## Key Terms

- 重排序（`reranking`）：对已召回候选重新计算次序。
- 相关性（`relevance`）：候选内容对当前查询的有用程度。

## Example

示意示例：向量检索返回 20 段相似文本，重排序后只选最能回答问题的 4 段；这展示了重排序优化精度而非扩大召回范围。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“II. Amazon Bedrock Implementation > Retrieval Augmented Generation (RAG) > Rerank Models (Relevance Improvement)”支持机制目的。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 192 页直接支持 chunk 相关性评分、排序、Rerank API 与 Knowledge Base 集成。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 2–3 页支持检索相关性与 metadata filtering 的上位质量语境；未直接描述 reranker。
