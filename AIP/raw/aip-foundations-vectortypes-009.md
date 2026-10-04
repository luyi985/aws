# aip-foundations-vectortypes-009: 稠密向量与稀疏向量

## Concepts

### Dense Vector

Dense Vector（稠密向量）通常由 embedding model 生成，大多数维度都有非零值。

它主要用于表达语义信息，因此适合：

- 语义相似
- 同义表达
- 自然语言查询
- 词面不同但含义接近的内容匹配

例如：

`cheap car`

和：

`affordable automobile`

虽然关键词不同，但语义接近，因此 Dense retrieval 更容易把它们匹配起来。

### Sparse Vector

Sparse Vector（稀疏向量）的大多数维度为 0，只有少数特征有值。

它更适合保留显式关键词或特征信号，因此适合：

- 精确关键词
- 错误码
- 产品名
- ID
- 专有名词
- 明确 token 匹配

例如：

`ERR_CONN_RESET_1042`

如果文档中也出现这个错误码，Sparse retrieval 通常会有明显优势。

### Dense 与 Sparse 的核心区别

`Dense = 语义相似`

`Sparse = 关键词 / 显式特征匹配`

Dense 不要求查询词和文档中的词完全一致。

Sparse 更依赖词面或特征重合。

### Hybrid Search

Hybrid Search（混合检索）会同时使用多种检索方式，典型组合是：

`Dense Retrieval + Sparse Retrieval`

流程：

`Query → Dense Retrieval / Sparse Retrieval → Candidate Fusion → Ranking / Reranking → Top-K`

它同时利用 Dense 的语义召回能力和 Sparse 的精确关键词召回能力。

一种简单方法是加权：

`final_score = α × dense_score + β × sparse_score`

实际系统也可能使用：

- 分数归一化
- RRF（Reciprocal Rank Fusion）
- 各路先取 Top-N，再统一 rerank

更准确地说：

**Hybrid Search = 多种检索方式分别召回候选，再通过融合、加权或重排得到最终 Top-K。**

### Meta Search

Meta Search（元搜索）的重点是同时查询多个独立搜索来源，再聚合结果。

可以粗略区分为：

`Hybrid Search = 多种检索方法`

`Meta Search = 多个检索来源`

在企业 Agent 或 RAG 场景里，Meta Search 也常接近 Federated Search / Federated Retrieval。

## Understanding

本次学习形成了以下理解：

- Dense 更适合近义词和语义匹配。
- Sparse 更适合精确关键词和错误码。
- Hybrid Search 就是混合检索，多种检索方式先分别召回，再通过权重、融合或 rerank 获取最终 Top-K。
- Hybrid Search 和 Meta Search 有相似的“多路召回再汇总”感觉，但二者关注点不同：
  - Hybrid 是多种检索方法
  - Meta 是多个搜索来源

一个实用记忆方式：

`Dense = 语义召回`

`Sparse = 精确召回`

`Hybrid = 多种检索方式融合`

`Meta = 多个搜索源聚合`

## Open Questions

- None
