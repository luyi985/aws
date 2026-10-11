# aip-operations-promptcaching-040: Prompt Caching 与静态前缀

## Concepts

### Prompt Caching

Prompt caching 用于复用多次请求中重复出现的提示前缀处理结果。

它最适合这种结构：

```text
[stable static prefix]
[dynamic request-specific suffix]
```

当静态前缀被重复使用时，可以减少重复处理，从而降低延迟和成本。

### Static Prefix

Static prefix 是多次请求中保持不变的前半部分，例如：

```text
system instructions
few-shot examples
shared long context
fixed business rules
```

动态内容通常放在后面：

```text
user-specific input
current document
current question
```

因此典型设计是：

```text
static first
dynamic last
```

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

前面的固定部分保持一致，就更容易复用缓存。

如果动态内容进入前缀：

```text
[Contract A]
[fixed rules]

[Contract B]
[fixed rules]
```

则前缀频繁变化，cache hit 下降。

### Suitable Request Pattern

适合 prompt caching 的典型模式：

```text
large stable prefix
+ repeated requests
+ high cache reuse
```

不适合的模式包括：

```text
prefix changes frequently
low repetition
one-off request
```

因此 prompt 很长并不自动意味着适合 caching，关键是是否存在稳定且重复的 prefix。

### Prompt Template Relationship

Prompt template 和 prompt caching 不是同一个概念。

```text
Prompt template
→ structure / reuse / maintainability

Prompt caching
→ performance / latency / cost optimization
```

但是良好的 template 设计通常会把固定内容和变量内容分离：

```text
[system instructions]
[few-shot examples]
[shared context]
{{user_input}}
```

这种结构天然有利于形成稳定 static prefix。

### System Instructions

System instructions 通常指 system prompt 中用于规定模型行为的固定指令部分。

例如：

```text
You are a legal contract analyzer.
Always identify liability, termination, and unusual risks.
Return JSON.
```

它通常是 prompt caching 中最典型的 static prefix 内容之一。

## Understanding

用户首先判断合同分析系统应该排列为：

> 3000 token 固定法律规则 + 500 token 固定 few-shot + 变量

这说明已经理解：

```text
stable content first
dynamic content last
```

对于两种场景：

```text
A:
4000 tokens repeated system prompt
+ 200 tokens dynamic question

B:
500 tokens but entirely different every time
```

用户判断 A 更适合 caching：

> A 更多相同的 prefix。

因此建立了：

```text
large repeated prefix
→ higher caching value

short but constantly changing prompt
→ low caching value
```

对于“把动态用户问题放进 static prefix”这个场景，用户判断：

> 不行，这样 prefix 会经常变化，不利于 hit cache。

说明已经掌握 cache hit 的核心条件：前缀稳定性。

对于一次性调用场景，用户指出：

> 如果只是被调用一次，caching 的收益就下降了。

由此理解：

```text
single use
→ little cache reuse
→ little benefit
```

用户进一步把 Prompt Caching 与 Prompt Template 联系起来：

> 这就是为啥要写 prompt template。

随后进一步形成更准确的理解：

```text
Prompt template
→ separate static and variable parts

Prompt caching
→ reuse the static prefix
```

用户还指出：

> 而且都是 static 放前面，变量放后面。

最终形成设计原则：

```text
static first
dynamic last
```

对于 `system instructions`，用户确认其与 system prompt 的关系，并理解：

```text
system prompt
→ overall system message

system instructions
→ behavioral instructions inside the system prompt
```

最终 mental model：

```text
Prompt caching
→ reuse repeated static prefix

Best structure:
→ system instructions
→ few-shot examples
→ shared long context
→ dynamic user input at the end

High value:
→ stable prefix
→ repeated requests
→ high cache hit

Low value:
→ changing prefix
→ low repetition
→ one-off request
```

## References

- `AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Performance & Caching > Prompt Caching (Static Prefix Discounting)`
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 293, ‘Intelligent Caching Systems: Prompt Caching’`
- `AIP/preRaw/AIPStudyGuide.pdf — PDF p. 6, ‘Latency and Caching’`
