# aip-foundations-vectordimensionality-008: 向量维度与性能权衡

## Concepts

### Vector Dimensionality
Vector dimensionality 表示一个 embedding vector 包含多少个数值分量。

例如：

[0.2, 0.7, -0.1]

是一个 3-dimensional vector。

更高维度可能保留更多可区分的信息，但不代表 retrieval quality 一定更高。

### Dimensionality Cost

维度增加通常会增加：

- Vector storage
- Memory / data transfer
- Similarity computation
- Query latency
- Infrastructure cost

例如使用 float32 时，1024D vector 的原始 vector data 大约是 256D 的 4 倍。

### Retrieval Quality

Dimension 的选择需要结合实际 retrieval quality 评估，例如 Recall@K。

Recall 可以理解为：

“应该找到的 relevant documents，我实际找到了多少？”

更高 dimension 是否值得，需要通过代表性数据实际测试，而不能仅根据 dimension 大小判断。

## Understanding

Vector dimensionality 是一个工程 trade-off：

Retrieval Quality
↕
Storage
Latency
Compute
Cost

例如：

256D  → Recall@10 = 94%, latency = 20ms
1024D → Recall@10 = 94.5%, latency = 55ms

如果 retrieval quality 只提升 0.5%，但 storage、latency 和 compute cost 明显增加，那么选择 1024D 未必值得。

反过来，如果：

256D  → Recall@10 = 72%
1024D → Recall@10 = 94%

在 retrieval quality 很重要的业务中，更高 dimension 带来的成本可能值得。

因此不能使用：

“dimension 越高越好”

这种绝对规则。

应该使用代表性数据，在 retrieval quality 与 operational performance / cost 之间做权衡。

核心理解：

Nothing is free.

增加 vector dimensionality 可能获得更多表示能力，但需要为此支付 storage、compute、latency 和 cost。

## Open Questions

- None
