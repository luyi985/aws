# aip-bedrock-reranking-017: Rerank 模型与相关性改进

## Concepts

### Reranking

Reranking 是在第一次 retrieval 已经拿到一批 candidate chunks 之后，再用更精细的 query-document relevance 判断重新排序。

核心链路：

```text
User Query
→ First-stage Retrieval
→ Candidate Chunks
→ Reranker
→ Reordered Chunks
→ Top Relevant Chunks
→ LLM Context
```

它的目标不是扩大检索范围，而是：

> 提高已经召回候选中的排序质量。

### Two-Stage Retrieval

第一阶段负责快速召回：

```text
Query
→ Vector / Semantic Retrieval
→ Top-K Candidates
```

第二阶段负责更精细地排序：

```text
Top-K Candidates
→ Reranker
→ Relevance Scoring
→ Better Ranking
```

因此两阶段各自解决不同问题。

### Retriever vs Reranker

可以这样区分：

```text
Retriever
→ decides what enters candidate set
→ more related to recall

Reranker
→ decides what among candidates ranks highest
→ more related to relevance / precision
```

用户形成的理解：

> reranker 会 review 已经 retrieved 的 Top-K candidate，并把更 relevant 的结果放到前面。

### Reranker Boundary

Reranker 只能处理已经进入 candidate set 的内容。

例如：

```text
Retriever returns Top 20
Correct chunk is rank #12
→ Reranker can move it upward
```

但如果：

```text
Correct chunk is rank #200
Retriever only returns Top 20
```

那么：

```text
Correct chunk never enters reranker scope
→ reranker cannot recover it
```

核心边界：

> Reranker can only rerank what was already retrieved.

### Relevance Improvement

Source 支持的典型场景：

```text
Vector search returns 20 chunks
→ Reranker scores each chunk against query
→ Reorders candidates
→ Select top few
→ Send only most relevant chunks to LLM
```

这可以减少不相关 context，提高生成阶段拿到的内容质量。

### Latency Tradeoff

Reranking 增加了额外处理阶段：

```text
Retrieval
→ Reranking
→ Generation
```

因此 tradeoff 是：

```text
Better relevance
→ extra processing
→ higher latency
```

所以 reranker 并不是无条件都需要使用。

应判断：

> relevance improvement 是否值得额外 latency。

## Understanding

### When Reranker Helps

场景：

第一次 vector search 返回 20 个 chunks。

真正能回答问题的 chunk 已经被召回，但排在第 12。

用户判断：

> reranker 可以重新 review 所有 candidate，找到更 relevant 的 answer，并把它排到更靠前的位置。

这说明 reranking 的前提是：

> 正确内容已经存在于 initial candidate set 中。

### When Reranker Cannot Help

场景：

真正相关的 chunk 根本没有进入 retriever 返回的 Top-K。

用户判断：

> No, reranker cannot help because the chunk is not in its review scope.

这形成了最重要的边界：

```text
Bad ranking inside candidate set
→ Reranker may help

Correct chunk missing from candidate set
→ Reranker cannot help
```

### Recall vs Ranking Quality

用户现在形成的整体心智模型：

```text
Retriever
→ first make sure useful candidates are recalled

Reranker
→ then improve ordering among those candidates
```

因此：

> Retriever 决定“答案有没有进池子”，Reranker 决定“池子里的答案谁排前面”。

## Validation Evidence

### Scenario 1 — Relevant Chunk Already Retrieved

Retriever 返回 20 个 chunks，真正相关的 chunk 排第 12。

判断：

**Reranker can help.**

原因：

> 该 chunk 已经进入 candidate set，reranker 可以重新计算 relevance 并提升其排名。

### Scenario 2 — Relevant Chunk Was Never Retrieved

Retriever 只返回 Top 20，而真正相关的 chunk 排在第 200。

判断：

**Reranker cannot help.**

原因：

> 该 chunk 没有进入 reranker 的 review scope。

### Exam Mental Model

```text
Need broader recall?
→ improve retriever

Need better ordering of retrieved candidates?
→ use reranker
```

核心记忆：

> Reranking improves relevance among retrieved candidates, but it cannot recover a correct chunk that initial retrieval completely missed.

当前理解达到本 KP 的 **exam-ready working depth**。

## Open Questions

- None
