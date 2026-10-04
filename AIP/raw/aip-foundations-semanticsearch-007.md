# aip-foundations-semanticsearch-007: 语义搜索与 K 近邻

## Concepts

### Semantic Search
Semantic Search（语义搜索）不是依赖完全相同的关键词，而是比较 query 和文档在语义上的接近程度。

基本流程：

Query / Documents
→ Embedding
→ Vector Space
→ Similarity
→ Top-K candidates

因此，即使 query 和文档使用不同词汇，只要表达的含义接近，也可能被检索出来。

### Embedding
Query 和文档通过一致的 embedding model 转换成向量，并放入同一个 vector space。

例如：

"How do I regain access to my account?"

可能与：

"Restore access to your account if you cannot log in."

具有较高的向量相似度，即使两句话没有完全相同的关键词。

### K-Nearest Neighbor (KNN)
KNN 根据距离或相似度，从候选向量中选择最接近 query 的 K 个候选。

例如：

K = 5

表示返回距离 query 最近 / similarity 最高的 5 个候选。

K 控制的是候选数量，并不代表 similarity 必须超过某个固定值。

### Top-K vs Similarity Threshold
Top-K 控制返回候选的数量。

Similarity threshold 控制候选必须达到的最低相似度要求。

两者可以同时使用：

Top-K = 5
threshold = 0.7

即先寻找最相关的候选，再过滤掉低于最低相似度要求的结果。

## Understanding

- Semantic Search 的核心不是匹配关键词，而是利用 embedding 比较语义上的接近程度。
- K 增大只意味着 retrieve 更多候选，不保证这些候选具有更高的 similarity。
- K 太小可能漏掉真正相关的文档；K 太大则可能引入更多 noise，并占用更多 LLM context。
- 增大 K 通常有机会改善 recall，但可能降低 precision，因此 K 并不是越大越好。
- Reranker 只能重新排序已经 retrieved 的候选。如果正确文档排名第 8，而 Retriever 只取 Top-5，后续 Reranker 无法把它找回来。
- 如果 Retriever 取 Top-20，而正确文档已经位于候选集合中的第 15 位，Reranker 则有机会重新评分并把它提升到更高位置。
- 高 similarity 只说明文档与 query 在当前向量空间中语义接近，不代表文档内容一定事实正确、最新或符合业务规则。

因此：

Retriever 找的是 relevant context，而不是 guaranteed truth。

## Open Questions

- None
