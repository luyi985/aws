# aip-operations-tokenefficiency-037: Token 效率与上下文裁剪

## Concepts

### Token Efficiency
Token efficiency 不是追求最少 token，而是在保留完成任务所需信息的前提下减少无效 token。

```text
token efficiency
= minimum sufficient tokens
```

### CountTokens
CountTokens 类能力用于在模型调用前估算输入 token 规模。它帮助识别输入规模、上下文超限风险和成本压力，但不会决定删什么，也不会自动做 summary 或 pruning。

```text
CountTokens -> measurement
Application / Agent logic -> optimization decision
```

### Context Pruning
Context pruning 根据 relevance、necessity、duplication 和 recency 移除低价值上下文。不能简单按 oldest-first 删除，因为旧信息仍可能包含关键约束。

一个实用顺序是：

```text
1. Remove irrelevant context
2. Remove duplicated information
3. Compress old but still useful context
4. Keep recent high-value context
```

长历史可以通过 summary 压缩，而不是直接丢弃仍有价值的信息。

### RAG Context Optimization
RAG 可通过 retrieval filtering、metadata filtering、chunk limiting 和 relevance selection 控制输入规模，但不能为了省 token 删除回答所需的关键证据。

### Over-Pruning
如果 pruning 后成本和延迟下降，但 correctness 或 faithfulness 明显下降，就是 over-pruning，优化失败。Context pruning 必须通过任务质量评估验证。

## Understanding

用户给出的 pruning 策略是：

```text
1. 删除和用户需求无关的信息
2. 删除重复信息
3. 保留最近的重要消息
4. 对旧 conversation 做 summary
```

用户理解到 pruning 不应该简单按照时间删除旧消息，因为旧信息仍可能是当前任务所需的关键约束。

对于 CountTokens，用户理解为：它用于估计 LLM request 的 token 规模，本身不能对内容进行删改。

对于 RAG pruning，用户明确指出：如果把有用的 chunk 也删除，就是 over-pruning，因此即使 token、成本或延迟下降也不算成功。

用户进一步提出：如果 context optimization 本身依赖 LLM request，例如用 LLM 做 summarization，那么优化动作本身也会消耗 token。因此 token optimization 还要考虑优化开销：

```text
optimization cost
vs
future token savings
vs
task quality
```

这也意味着应区分 deterministic pruning 与 LLM-based compression。前者可通过规则、过滤和限制完成，不必额外调用 LLM；后者会产生额外 inference/token 成本，只有当后续复用带来的节省和质量收益值得时才合理。

最终 mental model：

```text
Measure -> CountTokens
Reduce waste -> Context pruning
Preserve evidence -> Quality constraint
Account for optimization overhead -> especially LLM summarization
Validate -> correctness / task quality
```

## References

- `AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Optimization > Token Efficiency (CountTokens API, Context Pruning)`
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 285 and 287, ‘Token Efficiency’`
- `AIP/preRaw/AIPStudyGuide.pdf — PDF p. 6, ‘IV. Operational Efficiency and Optimization > Cost & Token Efficiency’`
