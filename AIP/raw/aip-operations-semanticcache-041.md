# aip-operations-semanticcache-041: ElastiCache 语义缓存

## Concepts

### Semantic Cache

Semantic cache 的目标，是对“表达不同但语义相近”的请求复用已经生成过的结果，从而减少重复推理。

典型流程：

```text
new query
→ embedding
→ semantic similarity search
→ threshold decision
→ metadata / scope / freshness validation
→ cache hit: reuse previous result
→ cache miss: retrieve / infer / write new cache entry
```

它与普通 key-value cache 的区别在于：

```text
exact cache
→ key 必须精确匹配

semantic cache
→ 允许不同文本表达
→ 只要语义足够接近
```

例如：

```text
“怎么重置密码？”
“忘记密码怎么办？”
```

虽然文本不同，但可能可以复用同一个通用答案。

---

### Embedding Similarity

Semantic cache 通常会把 query 转换成 embedding，然后通过 nearest-neighbor / similarity search 查找最接近的历史 query。

Mental model：

```text
query
→ embedding
→ nearest neighbors
→ similarity score
```

similarity score 只回答：

> 两个问题“语义像不像”。

它并不能单独回答：

> 旧答案“能不能安全复用”。

---

### Similarity Threshold

系统通常会设置 similarity threshold：

```text
similarity >= threshold
→ candidate cache hit

similarity < threshold
→ cache miss
```

threshold 存在 trade-off：

```text
threshold 太低
→ hit rate ↑
→ wrong reuse risk ↑

threshold 太高
→ correctness ↑
→ hit rate ↓
→ model calls ↑
```

因此 threshold 是“语义匹配风险”的控制参数。

---

### Metadata / Scope Check

Semantic similarity 很高，并不意味着业务上下文相同。

例如：

```text
“我的订单 123 到哪了？”
“我的订单 456 到哪了？”
```

两句话语义结构非常相近，但：

```text
orderId = 123
orderId = 456
```

属于不同业务实体，因此不能直接复用答案。

更安全的判断模型是：

```text
semantic match
AND metadata / scope match
→ possible cache hit
```

metadata 可以包括：

```text
userId
tenantId
orderId
accountId
policyVersion
language
business scope
```

因此可以记：

> Semantic similarity 决定“像不像”，metadata / business scope 决定“能不能复用”。

---

### Metadata Source

metadata 不一定由模型提取。

如果业务上下文本身已经存在于结构化请求中，例如：

```text
GET /users/U1001/orders/123
```

那么：

```text
userId = U1001
orderId = 123
```

应该直接来自 application context、API payload、JWT、path parameter 或数据库上下文。

只有当输入是纯自然语言时：

```text
“帮我查订单 123 什么时候到”
```

才可能需要 entity extraction：

```text
natural language
→ extract orderId = 123
```

这种 extraction 可以由规则、parser 或 LLM structured extraction 完成。

如果使用 LLM，应继续经过：

```text
LLM extraction
→ schema validation
→ business validation
→ metadata filter
```

而不是直接信任模型输出。

---

### Semantic Cache vs Deterministic Cache

对于强结构化业务 API：

```text
GET /orders/{orderId}
```

通常更适合普通 deterministic cache：

```text
cache key
= userId + orderId
```

因为业务资源本身已经有稳定 key。

Semantic cache 更适合：

```text
natural-language query
+ multiple equivalent expressions
+ reusable answer
```

例如：

```text
“怎么重置密码？”
“密码忘了怎么办？”
“我登录不了，想改密码”
```

这种场景 exact-string cache 容易 miss，而 semantic cache 可以命中相似问题。

因此：

```text
strongly structured resource lookup
→ deterministic key cache

natural-language reusable Q&A
→ semantic cache
```

也可以组合：

```text
metadata filter
+ semantic similarity search
```

---

### Freshness and Cache Invalidation

即使 semantic similarity 很高，缓存结果也可能已经过期。

例如：

```text
cached answer:
“公司的年假是 20 天”
```

后来 policy 更新为 25 天。

此时：

```text
semantic match = true
freshness = false
```

旧答案仍不能复用。

因此实际判断应该是：

```text
semantic match
AND scope valid
AND freshness valid
→ reuse
```

否则：

```text
→ cache miss
→ refresh source
→ regenerate answer
→ update cache
```

freshness 可以通过 TTL、timestamp、version 或其他业务规则判断。

---

### Similarity vs Freshness

这两个判断解决的问题不同：

```text
similarity threshold
→ 判断“问题像不像”

TTL / version / freshness check
→ 判断“答案还新不新”
```

例如：

```text
Q1:
“现在 AUD/USD 汇率多少？”

Q2:
“澳元兑美元现在是多少？”
```

两个问题 semantic similarity 可能非常高。

但汇率属于高频变化数据，即使：

```text
similarity = high
```

如果 cache age 超过允许范围：

```text
freshness = invalid
→ do not reuse
```

所以：

> Similarity threshold 解决 semantic correctness risk；freshness / invalidation 解决 stale-data risk。

---

### Version-Based Invalidation

如果缓存答案依赖某个版本化知识源，例如：

```text
cached policyVersion = v3
current policyVersion = v4
```

即使 query similarity 很高，也应该：

```text
version mismatch
→ invalidate cache
→ retrieve fresh source
→ regenerate answer
→ write new response + metadata(version=v4)
```

这里不能只让 LLM“重新想一次”。

更可靠的流程是：

```text
fresh authoritative source / retrieval
→ updated context
→ LLM generation
```

---

### ElastiCache 的角色

ElastiCache 在 semantic caching 中主要承担低延迟存储与检索角色。

可保存的信息包括：

```text
query representation / embedding
original query
response
metadata
freshness-related information
```

核心逻辑不是：

> ElastiCache 自己理解语义。

而是：

```text
embedding
→ similarity search
→ threshold decision
→ metadata / freshness validation
```

缓存层负责快速保存和访问结果。

---

### Semantic Cache 与 Prompt Cache

两者优化的对象不同。

Prompt cache：

```text
repeated prompt prefix
→ reuse prefix processing
```

主要作用：

```text
reduce repeated input processing
→ lower latency
→ lower input cost
```

Semantic cache：

```text
similar query
→ reuse previous response
```

主要作用：

```text
avoid repeated inference
→ lower latency
→ lower inference cost
```

最简 mental model：

```text
Prompt cache
= reuse prompt processing

Semantic cache
= reuse previous result
```

Prompt cache 不是简单地“把 input token 删除掉”，而是命中缓存后，不再以普通方式重复处理那些相同 prefix。

---

## Concept Relationships

Semantic cache 的核心关系可以理解为：

```text
embedding
→ 提供 semantic similarity

similarity threshold
→ 判断是否进入 candidate hit

metadata / scope
→ 判断业务上下文是否一致

freshness / version
→ 判断缓存结果是否仍有效

cache store
→ 保存 query / embedding / response / metadata
```

最终只有：

```text
semantic match
AND scope match
AND freshness valid
```

都满足时，才应该真正复用缓存结果。

它与 deterministic cache 的边界是：

```text
stable business key available
→ prefer deterministic cache

free-form language with equivalent meanings
→ semantic cache adds value
```

它与 prompt cache 的边界是：

```text
prompt cache
→ reuse input-side processing

semantic cache
→ reuse output/result-side computation
```

---

## Understanding

用户首先形成了：

> Semantic cache 的目的是按语义找到相似的问题，返回 cache 的结果，以此提高性能。

随后通过订单场景识别出 semantic similarity 的局限：

```text
“我的订单 123”
“我的订单 456”
```

即使 embedding similarity 很高，因为：

```text
orderId 不同
```

也应该重新查询。

用户进一步追问：

> 怎么让模型知道这是 order specific items？

由此建立：

```text
semantic similarity
≠
business identity
```

以及：

```text
metadata / business scope
→ 应作为硬约束
```

而不是只依赖 prompt。

用户随后指出：

> metadata extract 依旧是靠模型对吗？

进一步明确：

```text
structured API context
→ metadata should come directly from application context

unstructured natural language
→ may require entity extraction
```

用户又进一步质疑：

> 如果 metadata 从 API payload 来，而 API 的目的本身固定，那 semantic cache 就没啥意义了。

由此区分出：

```text
strongly structured API
→ deterministic cache usually sufficient

natural-language reusable Q&A
→ semantic cache valuable
```

这是 semantic cache 的重要适用边界。

对于 freshness 场景，用户判断：

> 汇率是高频变化信息，需要加 freshness check；如果低于可接受条件，则重新查询。

因此建立：

```text
semantic similarity
AND freshness
```

必须同时满足。

对于 version 变化，用户判断：

> 如果发现 meta 中 version updated，则重新查询，并更新 cache 里的 meta。

进一步修正为：

```text
version mismatch
→ refresh authoritative source
→ regenerate
→ update cache metadata
```

而不是让 LLM 仅依赖内部记忆重新回答。

最后用户总结：

> Prompt cache 是通过 prefix match 减少 input processing；semantic cache 是通过 similarity / metadata check 找到缓存过的答案来提高性能。

最终 mental model：

```text
Prompt cache
→ reuse repeated prefix processing

Semantic cache
→ reuse previous answer/result
  when similarity + scope + freshness are valid
```

---

## References

- Inherited from source KP; underlying source not re-opened in this session: `../preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Performance & Caching > Semantic Caching (ElastiCache)`
- Inherited from source KP; underlying source not re-opened in this session: `../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 292, ‘Intelligent Caching Systems: Semantic Caching’`
- Inherited from source KP; underlying source not re-opened in this session: `../preRaw/AIPStudyGuide.pdf — PDF p. 6, ‘Latency and Caching’`
