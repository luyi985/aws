# aip-bedrock-groundingcheck-019: 上下文依据检查

## Concepts

### Contextual Grounding Check

Contextual Grounding Check 用于检查：

> 模型回答中的主要 claim，是否受到提供给模型的 reference context 支持。

基本流程：

```text
Question
+
Reference Context
→ Model Response
→ Contextual Grounding Check
→ supported / unsupported
```

它是 Amazon Bedrock Guardrails 中用于降低 hallucination risk 的能力之一。

### Grounding Means “Supported by Context”

这里的核心不是：

> “这个回答在现实世界绝对是真的吗？”

而是：

> “这个回答能不能从当前提供的上下文中得到支持？”

例如：

```text
Reference Context:
Premium plan includes 100GB storage.
```

模型回答：

```text
Premium plan includes 100GB storage
and unlimited API calls.
```

其中：

```text
100GB storage
→ supported

unlimited API calls
→ unsupported
```

所以后半句属于：

```text
unsupported / ungrounded claim
```

### Unsupported Is Not the Same as Contradiction

一个回答可能有两类问题：

```text
Contradiction
→ context says A
→ response says not-A

Ungrounded
→ response introduces a claim
→ context never supported it
```

例如：

```text
Context:
Plan includes 100GB storage.

Response:
Plan includes free airport lounge access.
```

这里不是直接 contradiction，而是：

> reference context 根本没有支持 “airport lounge access”。

因此更准确的判断是：

```text
not grounded
not supported by provided context
```

### Grounded Does Not Mean Real-World Truth

Contextual Grounding Check 只能检查给定材料。

如果：

```text
Context says X
Response says X
```

那么 response 可以被认为：

```text
well grounded
```

但这并不能证明：

```text
X is objectively true in the real world
```

因为 reference context 本身也可能：

```text
outdated
incorrect
incomplete
```

因此：

> Grounding 是“与给定依据一致”，不是“证明世界事实”。

### Threshold and Handling

当前 source 支持：

```text
grounding check / score
→ compare with threshold
```

如果低于要求，可以进行：

```text
reject
retry
human review
```

但 grounding check 本身也可能存在误判，因此不能理解成“保证零 hallucination”。

## Understanding

### User Mental Model

用户形成的核心理解：

> It examines whether the provided response is supported by the reference context.

这是 019 的核心。

可以压缩为：

```text
Response claim
+
Reference context
→ check support relationship
```

### Example Understanding

对于：

```text
Reference:
Premium plan includes 100GB storage.

Response:
Premium plan includes 100GB storage
and unlimited API calls.
```

用户正确识别：

```text
100GB storage
→ supported

unlimited API calls
→ not supported
```

并进一步理解：

> unsupported claim 不一定和 context 冲突，也可能只是 context 从未提到。

因此考试中优先使用：

```text
unsupported
ungrounded
not supported by context
```

而不是一律写成 `inconsistent`。

### Relationship with RAG

Contextual Grounding Check 很适合出现在 RAG 场景：

```text
Knowledge Base / Retrieval
→ retrieve context
→ LLM generates answer
→ Grounding Check
→ verify answer is supported by retrieved context
```

这里检查的是：

> generation 是否贴着 retrieved context 回答。

它不能解决：

```text
retrieved context itself is wrong
```

所以它不是外部事实验证器。

## Important Boundary

```text
well grounded
≠ guaranteed true

unsupported
≠ necessarily contradiction
```

以及：

```text
Contextual Grounding Check
→ reduces hallucination risk

but
→ does not guarantee zero hallucination
```

## Validation Evidence

### Scenario 1 — Supported Claim

```text
Context:
Refund period is 30 days.

Response:
Refund period is 30 days.
```

判断：

```text
grounded / supported
```

### Scenario 2 — Extra Unsupported Claim

```text
Context:
Refund period is 30 days.

Response:
All products can always be refunded with no conditions.
```

判断：

```text
unsupported / ungrounded
```

原因：

> “no conditions” 并没有被 reference context 支持。

### Scenario 3 — Grounded but Context May Be Wrong

如果过时文档写：

```text
Refund period is 60 days.
```

模型根据该文档回答：

```text
Refund period is 60 days.
```

从 grounding 角度：

```text
well grounded
```

但它仍可能在现实中是错误的。

### Exam Mental Model

```text
Need to check whether response
is supported by provided context?
→ Contextual Grounding Check
```

核心记忆：

> Contextual Grounding Check evaluates whether a model response is supported by the provided reference context, helping reduce hallucinations without proving absolute real-world truth.

## Open Questions

- None
