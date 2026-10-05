# aip-bedrock-knowledgebases-014: Bedrock Knowledge Bases 自动化 RAG

## Concepts

### Bedrock Knowledge Bases

Bedrock Knowledge Bases 用来管理 RAG 流程中的多项 ingestion、retrieval 和 generation 工作。

核心链路：

```text
Source Documents
→ Parse
→ Chunk
→ Embed
→ Vector Store
→ Retrieve Relevant Chunks
→ Add to Model Context
→ Generate Answer
```

它的重点不是把文档直接交给 LLM，而是先把外部知识处理成可检索的形式。

### RAG

RAG（retrieval-augmented generation）先从受控知识源检索相关内容，再把这些内容作为 context 交给模型生成答案。

可以记成：

```text
External Knowledge
→ Retrieval
→ Context
→ LLM
→ Answer
```

RAG 更适合处理需要频繁更新的事实性知识。

例如：

```text
HR policy changes frequently
→ update knowledge source / ingestion
→ retrieve latest policy
→ answer with fresh context
```

这和 Fine-Tuning 的用途不同：

```text
Need fresh / changing knowledge
→ RAG

Need stable learned behavior
→ Fine-Tuning
```

Fine-Tuning 不适合作为频繁变化事实的主要更新机制。

### Ingestion

Knowledge Base 的 ingestion 流程可以概括为：

```text
Document
→ Parse
→ Chunk
→ Embedding
→ Vector Store
```

Source 支持从文档或结构化数据建立 embedding 并连接检索存储。

Knowledge Bases 被称为 Automated RAG，是因为它可以管理这条链路中的多项集成工作。

### Chunking

Chunking 把较大的文档拆成更适合检索的语义单元。

用户形成的理解：

1. model context window 有限制，大文档不能无限直接塞进模型；
2. retrieval 需要更小、更明确的 semantic units；
3. 每个 chunk 可以单独 embedding；
4. semantic search / KNN 更容易找到相关内容。

更准确地说：

> chunk 不一定是绝对“原子事实”，而是相对独立、语义完整的 retrieval unit。

Chunk size 存在 tradeoff：

```text
Too large
→ mixed semantics
→ retrieval precision may decrease

Too small
→ context gets fragmented
→ retrieved content may become incomplete
```

### Embedding Model

Embedding model 把文本转换成 multi-dimensional vector，使语义相似度可以被计算。

Indexing 阶段：

```text
Document Chunks
→ Embedding Model
→ Vectors
→ Vector Store
```

Retrieval 阶段：

```text
User Query
→ Embedding
→ Query Vector
→ KNN / Semantic Search
→ Relevant Chunks
```

关键要求是：

> document vectors 和 query vector 必须位于兼容的 embedding space 中，才能进行有意义的相似度比较。

### Retrieval and Generation

用户查询进入系统后，大致流程为：

```text
User Query
→ Query Embedding
→ Semantic Search / KNN
→ Relevant Chunks
→ Put Chunks into Model Context
→ LLM Generates Answer
```

这里 retrieval 的目标不是“让模型记住知识”，而是：

> 在 inference 时把当前相关知识动态提供给模型。

## Understanding

### Why RAG Instead of Fine-Tuning for Frequently Updated Knowledge

场景：

HR policy 每天可能发生变化，员工询问：

> “今年报销上限是多少？”

用户判断选择 RAG，原因是：

> data 会频繁更新，RAG 更容易更新知识；Fine-Tuning 主要用于改变 model behavior。

可以压缩为：

```text
Changing factual knowledge
→ RAG / Knowledge Base

Stable learned behavior
→ Fine-Tuning
```

### Knowledge Base as Automated RAG

用户已经把之前学习的模块串成了完整链路：

```text
Chunking
→ Embedding
→ Vector DB
→ Semantic Search
→ Retrieved Context
→ LLM
```

Bedrock Knowledge Bases 的作用，可以理解为：

> 帮助管理和自动化这条 RAG pipeline 中的多项 ingestion 和 retrieval 工作。

### Role of Embeddings

用户对 embedding 的理解：

```text
Index stage:
docs / chunks
→ vectors
→ vector DB

Retrieval stage:
query
→ vector
→ KNN / semantic search
→ relevant chunks
```

这说明 embedding 是 document 和 query 在 semantic search 中进行比较的桥梁。

### Automated Does Not Mean Responsibility-Free

Knowledge Bases 自动化了很多 RAG 集成工作，但并不会自动消除：

```text
data quality problems
permission problems
outdated source data
incorrect source content
```

如果知识源本身已经过期或质量很差，自动 RAG 也不会自动把事实修正正确。

同样，生产系统仍然需要负责 access control 和数据权限。

## Validation Evidence

### Scenario 1 — Frequently Updated HR Policy

需求：

员工需要查询频繁更新的 HR policy。

选择：

**Bedrock Knowledge Bases / RAG**

原因：

> 最新知识可以通过 retrieval 在 inference 时进入 context，不需要为了每次政策更新重新训练模型。

### Scenario 2 — Why Chunking

用户解释：

1. context window 有大小限制；
2. chunking 把大文档拆成更适合 semantic retrieval 的单元；
3. 每个 chunk 可以独立 embedding；
4. KNN / semantic search 可以更精确地找相关内容。

### Scenario 3 — Why Embedding Model

用户解释：

Indexing：

```text
documents
→ embedding model
→ multi-dimensional vectors
→ vector DB
```

Retrieval：

```text
query
→ embedding
→ vector search
→ KNN / semantic search
```

因此 embedding model 让 document 和 query 都进入可比较的 semantic vector space。

### Exam Mental Model

```text
Need current external knowledge?
→ RAG

Need managed RAG pipeline?
→ Bedrock Knowledge Bases

Knowledge Base flow:
source
→ parse
→ chunk
→ embed
→ vector store
→ retrieve
→ context
→ generate
```

核心记忆：

> Bedrock Knowledge Bases automates major parts of the RAG ingestion and retrieval pipeline, but it does not remove data-quality or permission responsibilities.

当前理解达到本 KP 的 **exam-ready working depth**。

## Open Questions

- None
