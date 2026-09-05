---
id: aip-bedrock-chunking-015
title: RAG 文档分块策略
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — II. Amazon Bedrock Implementation > Retrieval Augmented Generation (RAG) > Chunking Strategies (Standard, Hierarchical, Semantic)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 41-44, ‘More on Chunking’ and Bedrock chunking strategy slides"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF pp. 2-3, ‘Optimizing Embeddings & Retrieval’"
dependencies: []
---

# aip-bedrock-chunking-015: RAG 文档分块策略

## Learning Objective

能够比较标准、层次化与语义分块对检索上下文的影响。

## Scope

- Included: Standard、Hierarchical、Semantic chunking 的核心差异和选择依据。
- Excluded: 特定服务的参数默认值、解析器实现和完整检索评测。

## Source Context

导图把三种 Chunking Strategies 列为 RAG 的独立组成。

## Knowledge Point

分块（chunking）把长文档切成可索引单元。标准分块按长度或重叠规则切分；层次化分块（hierarchical chunking）保留父子结构；语义分块（semantic chunking）尽量在主题边界切分。

## PDF Grounding

详细课件说明 standard chunking 可指定每块 token 数与 overlap，hierarchical chunking 先命中精确 child 再用较大 parent 补足上下文，semantic chunking 借助 FM 按内容边界切分。Study Guide 同样强调分块决定每个向量代表的 token 数量及精度—上下文权衡。

## Logical Path

1. 长文档通常不能作为一个检索单元高效使用。
2. 分块边界决定候选片段携带多少上下文。
3. 不同策略在完整性、粒度与成本间取舍。
4. 最佳策略应由真实问题的检索和回答质量验证。

## Key Terms

- 标准分块（`standard chunking`）：按固定长度等规则切分。
- 层次化分块（`hierarchical chunking`）：保留大小块父子关系。
- 语义分块（`semantic chunking`）：按内容意义边界切分。

## Example

示意示例：政策文档若在条款中间按字符数截断会丢失条件；按完整条款语义切分可保留条件与结论。该例展示分块边界的影响。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“II. Amazon Bedrock Implementation > Retrieval Augmented Generation (RAG) > Chunking Strategies (Standard, Hierarchical, Semantic)”支持三类策略。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 41–44 页直接比较 standard、hierarchical 与 semantic chunking 的机制。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 2–3 页“Optimizing Embeddings & Retrieval”支持分块对 token 粒度、精度和上下文的影响。
