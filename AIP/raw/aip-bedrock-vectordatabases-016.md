# aip-bedrock-vectordatabases-016: RAG 向量数据库选型

## Concepts

### Vector Database

Vector Database 用于存储 embedding，并执行 similarity search。

在 RAG 中，典型流程是：

Text
→ Embedding Model
→ Vector
→ Vector Database

查询时：

Query
→ Query Embedding
→ Similarity Search
→ Top-K Chunks
→ LLM Context

### Metadata Filtering

Metadata filtering 用于在 vector similarity 之外限制检索范围。

例如：

- tenant_id
- department
- document_type
- access_level

它有两个主要作用：

1. 提高 retrieval relevance
2. 在 multi-tenant 场景中提供 logical isolation

例如：

tenant_id = A
→ 只在 Tenant A 的 chunks 中做 semantic search

需要注意：

Metadata filtering 本身不等于完整 security control。

生产系统仍需要 authentication、authorization、IAM / application-level access control，以及 server-side tenant validation。

### Vector Database Selection

Vector DB 选型不能只看 similarity search performance。

还需要比较：

- Retrieval quality
- Metadata filtering
- Query latency
- Throughput
- Scaling
- Cost
- Security / networking
- Existing technology stack
- Operational responsibility
- Integration capability

### Embedding Cost Boundary

Embedding token consumption 通常不是 Vector DB 本身的主要选型差异。

Embedding cost 更多取决于：

- embedding model
- chunk size
- chunk count
- re-embedding frequency

Vector DB 通常接收到的是已经生成好的 vectors。

### Aurora / PostgreSQL

如果核心业务数据已经存在于 PostgreSQL / Aurora，并且 workload 同时需要 relational queries、metadata 和 semantic search，则优先复用现有 relational data store 的 vector capability 往往可以减少数据迁移和系统复杂度。

核心理解：

Existing data gravity matters.

### OpenSearch

当 workload 主要围绕 semantic search、keyword search、metadata filtering，并且系统运行在 AWS、团队已有 OpenSearch 经验时，OpenSearch 是一个强匹配候选。

最终选型仍需要结合实际 workload、产品能力和测试结果确认。

### Dedicated Managed Vector Database

对于 vector-first workload，managed vector/search service 的一个重要价值是减少基础设施维护责任，例如 capacity、scaling、availability 和 failure recovery。

### Hybrid Search

> 本节是本次学习讨论中的补充理解；原 KP source 没有展开 Hybrid Search 的具体实现。

Hybrid Search 同时利用 lexical / keyword retrieval 与 vector semantic retrieval。

可以理解为：

Keyword / BM25 search
+
Vector similarity search
→ Result fusion / reranking
→ Final Top-K

Keyword search 更适合 exact token、error code、identifier、product name 等精确匹配。

Vector search 更适合自然语言语义、paraphrase 和 meaning similarity。

因此在技术文档 RAG 中，例如查询：

`Kafka UNKNOWN_TOPIC_OR_PARTITION 是什么原因？`

Keyword retrieval 可以强命中 `UNKNOWN_TOPIC_OR_PARTITION`，而 semantic retrieval 可以补充“topic 不存在、partition 不存在”等语义相关内容。

Hybrid Search 的核心心智模型：

- Keyword Search = 字面像不像
- Vector Search = 意思像不像
- Hybrid Search = 两个信号都利用
- Metadata Filter = 哪些文档允许参与搜索

## Understanding

Vector Database selection 本质上不是：

“哪个 Vector DB 最强？”

而是：

RAG Requirements
→ Retrieval
→ Filtering
→ Performance
→ Cost
→ Security
→ Existing Stack
→ Operations
→ Storage Choice

如果已有大量 relational data：

Aurora / PostgreSQL + vector
通常比为了 semantic search 单独引入新的 datastore 更自然。

如果系统是 search-heavy，并且 semantic search、keyword search、metadata filtering 都是核心需求，则 OpenSearch 一类 search-oriented system 会成为强候选。

如果是新的 vector-first workload，并且希望减少 infrastructure maintenance，则 managed vector/search service 更合适。

Metadata filtering 主要解决 scope、relevance 和 logical tenant isolation，而不是高并发。

高并发能力更多取决于 scaling、throughput、latency、capacity model、partitioning / sharding 和 managed service capabilities。

Hybrid Search 适合自然语言语义与 exact terms / error codes / identifiers 同时重要的 RAG 场景。

## Open Questions

- None
