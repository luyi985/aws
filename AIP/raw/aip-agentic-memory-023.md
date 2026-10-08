# aip-agentic-memory-023: Agent 短期与长期记忆

## Concepts

### Agent Memory

Agent memory 保存未来步骤可能继续使用的信息。

当前 source 将它分成两类：

```text
Short-term memory
→ current session continuity

Long-term memory
→ persistent information across sessions
```

### Short-term Memory

Short-term memory 主要服务当前 session。

当前 source 将它具体化为：

```text
chat history
events
temporary session state
```

适合保存当前任务中暂时需要的信息。

例如：

```text
orderId = 12345
```

当前 session 还要继续查询、退款或处理这个订单，因此这个信息有用。

但新开一个 session 后通常不再需要，所以：

```text
temporary task context
→ short-term memory
```

### Long-term Memory

Long-term memory 用于跨 session 保留稳定、有持续价值的信息。

当前 source 支持的类型包括：

```text
preferences
facts
session summaries
extracted insights
```

例如：

```text
“以后都用中文回答我”
```

这是稳定偏好，而且未来多个 session 都可能有用，因此适合作为 long-term memory candidate。

### AgentCore Memory

当前 source 将 AgentCore Memory 放在长期记忆语境中，并描述为：

```text
persistent
scalable
serverless
```

它用于支持跨 session 的长期记忆持久化与检索。

当前 KP 不展开具体 storage API、默认 retention 或产品配额。

### Memory Lifecycle

可以把记忆生命周期理解成：

```text
interaction happens
→ information becomes available
→ decide whether it is temporary or persistent
→ store appropriately
→ retrieve when needed
```

长期记忆不是把完整对话全部永久保留，而是可以提取：

```text
preferences
facts
summaries
insights
```

作为未来可检索的信息。

### Memory Governance

长期记忆需要更严格的治理。

当前 source 强调需要考虑：

```text
consent
isolation
expiry
deletion
```

因此：

```text
useful now
≠ should be stored long-term
```

以及：

```text
possibly useful later
≠ automatically worth persisting
```

特别是敏感信息，即使未来可能有用，也不应该默认长期保存。

## Understanding

### Short-term vs Long-term Mental Model

用户形成的核心判断方式：

> 看这个信息在未来 session 里是否仍然稳定、有价值。

例如：

```text
orderId = 12345
→ current task only
→ short-term
```

原因是：

> 新开一个 session 后，大概率不会继续处理这个订单。

### Stable Preference

用户判断：

```text
“以后都用中文回答我”
→ long-term
```

因为这是一个用户习惯 / 稳定偏好，未来 session 仍然有价值。

更准确地说：

> 这类信息可以被持久化，并在未来 session 中检索和使用。

当前 source 没有规定必须以某一种具体“上下文格式”存储。

### Temporary Preference

用户判断：

```text
“我今天心情不好，回答简短一点”
→ short-term
```

原因是：

> 这是临时状态，明天可能就不成立。

因此：

```text
temporary preference
→ short-term
```

而不是：

```text
stable preference
→ long-term
```

### Long-term Memory Is Not "Store Everything"

用户进一步形成了：

> 长期记忆不是只要未来可能用得上就保存。

判断至少要看两件事：

```text
Will it likely be useful later?
Is it appropriate and safe to persist?
```

如果：

```text
future usefulness = uncertain
sensitivity = high
```

则不应默认写入 long-term memory。

### Sensitive Information

用户给出的判断：

> 不存 long-term，因为未来是否会用到并不确定，而且敏感信息长期储存有风险。

这符合当前 source 的治理边界。

可以压缩成：

```text
possible future value
+ sensitive
→ do not default to long-term persistence
```

### Decision Model

最终可以用这个判断框架：

```text
Information appears
↓
Is it needed only for current session?
→ yes → short-term

If not:
Will it remain useful across future sessions?
→ no / uncertain → do not persist long-term by default

If yes:
Is long-term storage appropriate?
Consider:
- consent
- sensitivity
- isolation
- expiry
- deletion
```

## Important Boundaries

```text
Short-term
≠ unimportant
```

短期信息可能对当前任务非常关键，只是生命周期短。

```text
Long-term
≠ save entire conversation forever
```

长期记忆可以是提取后的 preference / fact / summary / insight。

```text
useful
≠ safe to persist
```

长期价值和治理风险需要同时考虑。

```text
future possible use
≠ automatic long-term storage
```

## Exam Mental Model

可以记成：

> Short-term memory maintains continuity within a session, while long-term memory persists useful information across sessions and requires stronger governance.

典型判断：

```text
Current task state
→ short-term

Stable cross-session preference
→ long-term candidate

Sensitive / uncertain future value
→ do not default to long-term persistence
```

## Open Questions

- None
