# aip-bedrock-chunking-015: RAG 文档分块策略

## Concepts

### Chunking

Chunking 是把长文档切成较小的 retrieval units。

基本流程：

Document
→ Chunking
→ Chunks
→ Embedding
→ Vector Store
→ Retrieval

Chunking 会直接影响：

- 每个 embedding 代表什么内容
- retrieval precision
- context completeness
- token usage
- storage / processing cost

因此 chunk 并不是越小或越大越好，而是需要在 retrieval precision 与 context completeness 之间权衡。

### Standard Chunking

Standard Chunking 按固定长度等规则切分文档，例如：

- 固定 token 数
- 固定 character 数
- 可选 overlap

示例：

chunk_size = 500
overlap = 100

则：

Chunk 1 = token 1–500
Chunk 2 = token 401–900
Chunk 3 = token 801–1300

Overlap 可以降低关键信息正好被切在 chunk boundary 上的风险。

但它也会增加：

- chunk 数量
- embedding 数量
- storage
- 重复内容
- retrieval token usage

Standard Chunking 的主要风险是：

- Boundary problem
- Context fragmentation

即固定长度切分可能破坏完整语义或条件关系。

### Hierarchical Chunking

当前 KP source 支持的核心机制是：

- 使用较小的 Child Chunk 做更精确的 retrieval
- 使用较大的 Parent Chunk 补充更完整的 context
- 保留 Parent-Child relationship

核心思想可以总结为：

Child
→ semantic focus / retrieval precision

Parent
→ context completeness

例如：

Parent P1 = 退款政策

Child C1 = 实体商品退款
Child C2 = 数字商品退款
Child C3 = 特殊商品退款

每个 child 都带有：

parent_id = P1

#### Working Principle

典型检索流程：

Document
→ Create Parent Chunks
→ Create Child Chunks
→ Child Embedding + Parent Reference
→ Semantic Search on Child
→ Hit Child
→ Resolve parent_id
→ Retrieve Parent
→ Send richer context to LLM

例如：

Query:
“数字商品下载后还能退款吗？”

首先进行：

Query
→ embedding
→ semantic search on child chunks

命中：

Child C2 = 数字商品退款规则

然后：

C2.metadata.parent_id = P1

系统再取得：

Parent P1 = 完整退款政策

因此：

Child 用来找得准。

Parent 用来给得全。

一个重要理解是：

Retrieval granularity
可以不同于
Generation context granularity

#### Simple Engineering Implementation

下面属于常见工程实现方式，不是当前 KP source 规定的唯一实现。

可以保存两类数据：

Parent Store:

{
  id: "P1",
  text: "完整退款政策..."
}

Child / Vector Store:

{
  id: "C2",
  parent_id: "P1",
  text: "数字商品退款规则...",
  embedding: [...]
}

查询时：

query_vector = embed(query)

hits = vector_db.search(
    query_vector,
    top_k=5
)

parent_ids = deduplicate(
    hit.parent_id for hit in hits
)

parents = document_store.get_many(parent_ids)

return parents

如果 Top-K child hits 是：

C1 → P1
C2 → P1
C3 → P1
C4 → P2
C5 → P3

则应先去重：

P1, P2, P3

再取得 Parent chunks。

这样可以避免：

- duplicate context
- token waste
- unnecessary context window usage

#### How to Create Child Chunks

Hierarchical Chunking 本身定义的是 Parent-Child relationship。

Child 具体怎么切，可以使用不同策略，例如：

- fixed-size splitting
- recursive splitting
- structure-aware splitting
- semantic splitting

因此可以出现：

Hierarchical structure
+
Fixed-size child splitting

也可以出现：

Hierarchical structure
+
Semantic child splitting

例如技术文档：

Chapter
└── Section = Parent
    ├── Semantic Child A
    ├── Semantic Child B
    └── Semantic Child C

这里：

Hierarchy
→ 保留 context structure

Semantic child
→ 提高 retrieval precision

#### Child Size Trade-off

Child 太小：

- semantic context 可能不完整
- 容易只有半句话、半个条件
- retrieval unit 本身缺少独立含义

Child 太大：

- 容易混入多个主题
- embedding semantic focus 下降
- retrieval precision 可能下降

例如：

不好的 child：

“但下载后不可退款。”

它缺少：

- 什么商品
- 什么前置条件
- 与什么规则形成对比

更好的 child：

“数字商品在下载前可以退款，
但下载完成后不支持退款。”

因此：

Parent 优先保证 context completeness。

Child 优先保证 semantic focus。

### Semantic Chunking

当前 KP source 支持的核心机制是：

Semantic Chunking 尽量按照内容的语义或主题边界切分，而不是仅按照固定 token 长度机械切分。

例如一篇文档依次讨论：

- 退款政策
- 配送政策
- 保修政策

Standard Chunking 可能按照固定长度切成：

Chunk 1 = 退款 + 一部分配送
Chunk 2 = 剩余配送 + 一部分保修

而 Semantic Chunking 的目标更接近：

Chunk 1 = 退款政策
Chunk 2 = 配送政策
Chunk 3 = 保修政策

这样每个 chunk 的 embedding 会更加聚焦。

#### Working Principle

概念上可以理解为：

Document
→ Analyze local semantic meaning
→ Detect semantic / topic boundaries
→ Split at meaningful boundaries
→ Create semantically coherent chunks
→ Embed chunks
→ Semantic retrieval

核心判断不是：

“已经到 500 tokens 了吗？”

而是：

“这里是否发生了明显的语义 / 主题变化？”

例如：

Paragraph A:
数字商品退款政策...

Paragraph B:
标准配送时间为 3 到 5 个工作日...

Paragraph C:
电子产品提供 12 个月保修...

Semantic Chunking 会尽量识别：

A → refund topic

B → shipping topic

C → warranty topic

并在这些 topic boundaries 之间切开。

#### Why It Can Improve Retrieval Precision

如果一个 chunk 同时包含：

退款 + 配送 + 保修

那么它的 embedding 需要同时表示多个主题。

这可能使向量的语义表示变得更宽泛。

如果分别切成：

Refund Chunk
Shipping Chunk
Warranty Chunk

那么每个 embedding 的 semantic focus 更集中。

因此 query：

“数字商品下载后可以退款吗？”

更容易精准匹配：

Refund Chunk

而不是一个混合了多个主题的大 chunk。

#### Simple Engineering Implementation

下面属于工程层面的通用实现思路，不是当前 KP source 指定的唯一算法。

一种简化实现可以是：

1. 先把大文档切成 sentence / paragraph units
2. 对这些 units 生成 embedding 或让 FM 判断语义
3. 比较相邻 units 的 semantic similarity
4. 当语义变化超过某个 threshold 时创建 boundary
5. 合并 boundary 之间的内容形成 chunk

概念流程：

Paragraph 1
   ↓ similar

Paragraph 2
   ↓ similar

Paragraph 3
   ↓ semantic shift detected
---------------- boundary

Paragraph 4
   ↓ similar

Paragraph 5

最终：

Chunk A = Paragraph 1–3
Chunk B = Paragraph 4–5

伪代码可以理解为：

units = split_into_paragraphs(document)

current_chunk = []

for unit in units:

    if semantic_similarity(
        current_topic,
        unit
    ) >= threshold:

        current_chunk.append(unit)

    else:

        save(current_chunk)
        current_chunk = [unit]

这种实现只是帮助理解工作原理。

实际系统可能：

- 使用 embedding similarity
- 使用 FM 判断 topic shift
- 使用其他 semantic boundary detection 方法

#### Large Document Consideration

“文档大于 context window 就不能做 Semantic Chunking”并不准确。

更合理的工程方式是：

Large Document
→ preliminary splitting / sliding window
→ local semantic analysis
→ semantic boundary detection
→ semantic chunks

因此 context window 是 processing constraint，而不是 Semantic Chunking 无法处理大文档的绝对限制。

#### Cost Trade-off

相比简单 Standard Chunking：

Standard Chunking
→ rule-based
→ cheap
→ fast
→ predictable

Semantic Chunking
→ requires semantic analysis
→ more computation
→ potentially more input tokens
→ higher latency
→ higher cost

因此 Semantic Chunking 的收益需要通过实际 retrieval quality 来验证。

## Understanding

- Standard Chunking 简单、便宜、速度快，但可能切断完整语义。
- Overlap 可以减少 boundary problem，但会增加 storage、embedding 数量和重复 context。
- Hierarchical Chunking 的核心不是识别某种特殊字符，而是保留 Parent-Child relationship。
- Hierarchical Chunking 可以让 retrieval granularity 和 generation context granularity 不相同。
- Child 更适合 semantic search，因为语义更聚焦。
- Parent 更适合最终提供给 LLM，因为上下文更完整。
- 多个 child 命中同一个 parent 时，应根据 parent_id 去重。
- Parent 优先保证 context completeness。
- Child 优先保证 semantic focus。
- Child 具体怎么切并不由 Hierarchical Chunking 本身唯一决定，可以采用 fixed-size、recursive、structure-aware 或 semantic splitting。
- Semantic Chunking 根据语义边界切分，因此比纯固定长度切分更有机会保持主题完整和提高 retrieval precision。
- Semantic Chunking 的本质不是固定长度，而是识别 semantic / topic boundary。
- Semantic Chunking 如果依赖 FM 或 embedding analysis，会增加 processing、latency 和 cost。
- 文档超过单次 context window 并不意味着不能进行 Semantic Chunking，可以通过 preliminary splitting / sliding window 分段处理。

对于结构清晰的技术文档：

Chapter / Section / Subsection
→ 优先考虑 Hierarchical Chunking

工程上可以组合：

Hierarchical structure
+
Semantic child splitting

从而获得：

Hierarchy
→ Context structure

Semantic Child
→ Retrieval precision

对于 FAQ：

- 内容较短
- 每条独立
- 没有明显 Parent-Child hierarchy

Hierarchical Chunking 通常没有明显收益。

可以优先考虑：

Standard / Recursive-style splitting

尽量保持每条 FAQ 的语义完整。

## Open Questions

- None
