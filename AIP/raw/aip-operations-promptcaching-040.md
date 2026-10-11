# aip-operations-promptcaching-040: Prompt Caching 与静态前缀

## Concepts

### Prompt Caching

Prompt caching 用于复用多次请求中重复出现的提示前缀处理结果。

典型结构：

```text
[stable static prefix]
[dynamic request-specific suffix]
```

当静态前缀重复出现并命中缓存时，可以减少重复处理，从而降低延迟和输入 token 成本。

核心条件：

```text
stable prefix
+ sufficiently long prefix
+ repeated requests
→ useful prompt caching
```

其中最低 prefix token 要求、TTL、checkpoint 数量以及具体支持方式都取决于模型。

---

### Static Prefix

Static prefix 是多次请求中保持不变的前半部分，例如：

```text
system instructions
few-shot examples
shared long context
fixed business rules
tool definitions
```

动态内容通常放在后面：

```text
user-specific input
current document
current question
```

因此典型设计原则是：

```text
static first
dynamic last
```

---

### Cache Hit

Prompt caching 的收益依赖 cache hit。

例如：

```text
Request A:
[fixed rules]
[fixed few-shot]
[Contract A]

Request B:
[fixed rules]
[fixed few-shot]
[Contract B]
```

前面的固定部分保持一致，因此可以复用相同 prefix。

如果动态内容过早进入 prefix：

```text
[Contract A]
[fixed rules]

[Contract B]
[fixed rules]
```

则 prefix 发生变化，更容易 cache miss。

因此：

```text
stable prefix → cache hit opportunity ↑
changing prefix → cache hit opportunity ↓
```

---

### Implicit Prompt Caching

Implicit Prompt Caching 由 Bedrock / 模型自动尝试识别并复用符合条件的 prompt prefix。

应用不需要显式放置 cache checkpoint。

Mental model：

```text
Implicit
→ system automatically tries to reuse prefix
→ no explicit cache boundary required
→ best effort
```

即使 prompt 完全重复，也不能把 cache hit 当作绝对保证。

---

### Explicit Prompt Caching

Explicit Prompt Caching 允许应用通过模型/API 支持的 cache control 或 cache checkpoint，明确指定可缓存的 prompt prefix。

Mental model：

```text
Explicit
→ developer marks cache boundary
→ content before boundary is the reusable prefix
```

例如：

```text
Static A
Static B
Static C
--- checkpoint ---
Dynamic D
```

checkpoint 表示：

```text
cache-eligible prefix
= A + B + C
```

而 D 属于当前请求的动态部分。

因此一个非常实用的设计原则是：

```text
[longest stable reusable prefix]
             ↓
         checkpoint
             ↓
[dynamic suffix]
```

checkpoint 不应该跨过 dynamic boundary。

---

### Checkpoint Placement

假设：

```text
Static A
Static B
Static C
Dynamic D
```

如果 checkpoint 放在 B 后：

```text
A
B
--- checkpoint ---
C
D
```

则该 checkpoint 对应的可复用 prefix 为：

```text
A + B
```

如果 C 同样稳定且会重复使用，更合理的设计通常是：

```text
A
B
C
--- checkpoint ---
D
```

从而缓存更大的稳定 prefix：

```text
A + B + C
```

但如果 checkpoint 被放到 dynamic D 之后：

```text
A
B
C
D1
--- checkpoint ---
```

下一次请求变成：

```text
A
B
C
D2
--- checkpoint ---
```

由于 checkpoint 前的 prefix 已经发生变化：

```text
A+B+C+D1
≠
A+B+C+D2
```

cache reuse 会受到破坏。

因此正确原则不是：

```text
checkpoint 越后越好
```

而是：

```text
checkpoint 尽量放在
“最长、稳定、会重复使用的 prefix”
之后
```

---

### Minimum Prefix Size

Explicit Prompt Caching 只有在 checkpoint 前累计 prompt prefix 达到该模型要求的最小 token 数时，才能建立对应缓存。

如果未达到 minimum token requirement：

```text
inference can still succeed
but
prefix is not cached
```

具体 token threshold 取决于模型，不能把某一个数字作为所有 Bedrock 模型的统一规则。

---

### TTL

Prompt cache 有 TTL。

TTL 在成功 cache hit 后可以刷新；如果 TTL 时间内没有新的 hit，缓存最终失效。

不同模型支持的 TTL 不完全相同。

对于支持多个 TTL checkpoint 的模型，需要遵守相应顺序规则；例如支持 1-hour 与 5-minute TTL 的 Anthropic 模型中，较长 TTL checkpoint 必须位于较短 TTL checkpoint 之前。

考试和实际设计中应记：

```text
TTL / minimum tokens / checkpoint limits
→ model-specific
→ verify model support
```

而不是死记成所有模型统一参数。

---

### Cost Model

Prompt caching 的成本逻辑可以理解为：

```text
write once
read many
```

缓存建立时可能产生 cache-write token 成本；后续成功复用时使用 cache-read token rate。

因此：

```text
many repeated reads
→ caching benefit becomes larger
```

而：

```text
one-off request
→ little/no reuse
→ limited benefit
```

具体 cache-write / cache-read 费率取决于模型，不应把某个固定折扣比例当成所有 Bedrock 模型通用规则。

---

### Suitable Request Pattern

适合 prompt caching：

```text
stable prefix
+ prefix meets model minimum size
+ repeated requests
+ high cache reuse
```

不适合：

```text
prefix changes frequently
low repetition
one-off request
```

因此：

> prompt 很长并不自动意味着适合 caching。

完整条件应该理解成：

```text
stable
+ sufficiently long
+ repeatedly reused
```

---

### Prompt Template Relationship

Prompt template 和 prompt caching 不是同一个概念。

```text
Prompt template
→ structure / reuse / maintainability

Prompt caching
→ latency / input-cost optimization
```

但是良好的 prompt template 通常会明确分离 static 和 dynamic 内容：

```text
[system instructions]
[few-shot examples]
[shared context]
{{user_input}}
```

这种结构天然有利于 prompt caching。

---

### System Instructions

System instructions 通常指 system prompt 中用于规定模型行为的固定指令部分。

例如：

```text
You are a legal contract analyzer.
Always identify liability, termination, and unusual risks.
Return JSON.
```

它通常非常适合作为 static prefix 的组成部分。

---

## Understanding

用户首先把合同分析场景组织为：

> 3000 token 固定法律规则 + 500 token 固定 few-shot + 变量

形成了：

```text
stable content first
dynamic content last
```

的基本设计原则。

对于：

```text
A:
4000 tokens repeated system prompt
+ 200 tokens dynamic question

B:
500 tokens but entirely different every time
```

用户判断：

> A 更多相同的 prefix。

因此建立：

```text
large repeated prefix
→ higher caching value

short but constantly changing prompt
→ low caching value
```

对于把动态用户内容放入 static prefix，用户判断：

> 不行，这样 prefix 会经常变化，不利于 hit cache。

说明已经掌握 prefix stability 与 cache hit 之间的关系。

对于一次性调用：

> 如果只是被调用一次，caching 的收益就下降了。

因此形成：

```text
single use
→ little cache reuse
→ little caching benefit
```

用户进一步把 Prompt Template 与 Prompt Caching 联系起来：

> 这就是为啥要写 prompt template。

随后形成更准确区分：

```text
Prompt template
→ separates static and variable content

Prompt caching
→ reuses stable prefix processing
```

并总结：

> 都是 static 放前面，变量放后面。

---

对于 Explicit Prompt Caching，用户形成了 checkpoint mental model。

假设：

```text
Static A
Static B
Static C
Dynamic D
```

用户理解：

> 如果在 B 和 C 之间设 checkpoint，那么缓存边界对应 A + B。

进一步讨论后认识到，如果 C 同样稳定，那么通常可以把 checkpoint 放在 C 后：

```text
A
B
C
--- checkpoint ---
D
```

这样复用更多稳定内容。

用户随后提出反例：

> 如果 A、B、C 是 static，D 是 dynamic，我把 checkpoint 设在 D 后面会怎么样？

由此确认：

```text
A+B+C+D1
≠
A+B+C+D2
```

因为 dynamic D 已经进入 checkpoint 前的 prefix，后续请求变化会影响 cache reuse。

最终 checkpoint mental model：

```text
[longest stable reusable prefix]
             ↓
         checkpoint
             ↓
[dynamic suffix]
```

以及：

```text
checkpoint should not cross
the static → dynamic boundary
```

用户最终确认已经理解该设计。

---

## References

- `AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Performance & Caching > Prompt Caching (Static Prefix Discounting)`
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 293, ‘Intelligent Caching Systems: Prompt Caching’`
- `AIP/preRaw/AIPStudyGuide.pdf — PDF p. 6, ‘Latency and Caching’`
- `Amazon Bedrock User Guide — Prompt caching for faster model inference — https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html`
