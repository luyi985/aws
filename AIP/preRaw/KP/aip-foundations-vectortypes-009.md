---
id: aip-foundations-vectortypes-009
title: 稠密向量与稀疏向量
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — I. Foundational AI Concepts > Embeddings & Vector Theory > Dense vs. Sparse Vectors"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 46, ‘Sparse vs. Dense Embeddings’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 4, ‘Vector Store Optimization (OpenSearch)’"
dependencies: []
---

# aip-foundations-vectortypes-009: 稠密向量与稀疏向量

## Learning Objective

能够区分稠密向量与稀疏向量的表示特点及典型检索用途。

## Scope

- Included: 非零分布、语义表示、词项表示及基本选型思路。
- Excluded: 具体编码模型、混合检索实现和索引参数调优。

## Source Context

导图在 Embeddings & Vector Theory 下单列“Dense vs. Sparse Vectors”。

## Knowledge Point

稠密向量（dense vector）的大多数维度都有数值，常用于压缩表达语义特征；稀疏向量（sparse vector）的大多数维度为零，常保留可解释的词项或特征信号。两者可服务不同检索需求。

## PDF Grounding

详细课件把 sparse 表示为大型但大多为空的向量，把 dense 表示为更小且含更多非零信息的向量。Study Guide 未直接比较 sparse 与 dense，但补充 dense embedding 存储可能昂贵，可用 binary vectors 或 FP16 压缩；这增加了表示类型之外的存储权衡。

## Logical Path

1. 向量用多个维度表示对象特征。
2. 稠密表示把信息分散到多数维度。
3. 稀疏表示只激活少量维度。
4. 选择取决于语义匹配、精确词项匹配和基础设施能力。

## Key Terms

- 稠密向量（`dense vector`）：多数分量为非零值的向量。
- 稀疏向量（`sparse vector`）：只有少量分量为非零值的向量。

## Example

示意示例：搜索产品编号时精确词项信号很重要，搜索“适合雨天的鞋”时语义信号更重要；这展示了稀疏与稠密表示的不同优势。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“I. Foundational AI Concepts > Embeddings & Vector Theory > Dense vs. Sparse Vectors”支持两类向量的对比主题。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 46 页“Sparse vs. Dense Embeddings”直接比较稀疏和稠密表示。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 4 页“Vector Store Optimization (OpenSearch)”补充稠密向量的存储负担与压缩路径；未单独定义稀疏向量。
