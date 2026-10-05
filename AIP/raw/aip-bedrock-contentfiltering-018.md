# aip-bedrock-contentfiltering-018: Guardrails 内容过滤

## Concepts

### Bedrock Guardrails

Bedrock Guardrails 用于对模型输入和输出应用内容控制。

当前 source 明确支持：

```text
User Input
→ Guardrails
→ Model
→ Guardrails
→ Final Response
```

Guardrails 可以同时作用在：

- prompt / input
- response / output

本 KP 重点区分三类控制：

```text
Topic Control
Word Filter
PII Redaction
```

它们解决的是不同问题。

### Topic Control

Topic Control 用来控制：

> 某一类主题是否允许被讨论。

例如：

```text
Allowed:
order status
refund
delivery

Disallowed:
medical diagnosis
```

如果客服机器人只允许处理订单问题，而用户要求：

> “根据我的症状判断我是不是得了糖尿病。”

那么应该触发：

```text
Topic Control
→ medical diagnosis is outside allowed scope
→ block / refuse
```

Topic Control 和 Intent Detection 有相似之处，但目的不同。

```text
Intent Detection
→ 用户想做什么？
→ classify for workflow / routing

Topic Control
→ 这个主题允不允许讨论？
→ classify for policy / safety enforcement
```

例如：

```text
“我要退款”

Intent Detection
→ refund_request
→ route to refund workflow

Topic Control
→ refund topic allowed
→ pass
```

### Word Filter

Word Filter 用来限制特定词语或表达。

```text
Specific word / expression
→ match
→ block / filter
```

它控制的是：

> “这个具体词能不能出现？”

而不是：

> “这个主题能不能讨论？”

因此一个 topic 即使整体允许，其中某个指定词仍然可能被 Word Filter 拦截。

可以记成：

```text
Topic Control
→ control discussion scope

Word Filter
→ control particular words / expressions
```

### PII Redaction

PII Redaction 用于识别并保护 personally identifiable information。

当前 source 支持：

```text
detect PII
→ remove / mask / redact
```

例如：

```text
“My Medicare number is 1234 56789 0.”
```

这里的问题不是 topic，也不是某个禁词，而是：

> 内容包含 sensitive personal identifier。

所以应使用：

```text
PII Redaction
→ detect identifier
→ mask / remove before exposure
```

PII Control 可以用于保护 prompt 或 response 中的敏感个人信息。

## Understanding

### Three Controls Solve Different Problems

用户形成的核心心智模型：

```text
Topic Control
→ disallow a topic

Word Filter
→ disallow particular words

PII Redaction
→ remove or mask sensitive personal information
```

三者不是替代关系。

同一段内容可能同时存在：

```text
allowed topic
+
blocked word
+
PII
```

因此不同控制可以同时生效。

### Topic Control Is Not Intent Detection

用户最初把 Topic Control 理解成类似 intent detection。

经过讨论形成的边界：

```text
Intent Detection
→ classify user goal
→ used for workflow / routing

Topic Control
→ classify discussion subject
→ used for safety / policy enforcement
```

二者都可能涉及内容分类，但最终目的不同。

### PII Is About Sensitive Identity Information

场景：

```text
“My Medicare number is 1234 56789 0.”
```

用户判断：

> PII Redaction，因为其中包含 confidential or sensitive user information。

更准确地说：

> 这里触发的是 personally identifiable information control。

Guardrail 可以对相关字段进行：

```text
remove
mask
redact
```

### Word Filter Is Exact Expression Control

用户总结：

> Word Filter is used to disallow particular words.

这是本 KP 中最重要的边界之一：

```text
Topic problem
→ Topic Control

Specific word problem
→ Word Filter

Sensitive identifier problem
→ PII Redaction
```

## Important Boundary

当前 source 还强调：

> Guardrails 并不能代替完整的应用安全和权限设计。

Content filtering 可能存在：

```text
false positives
false negatives
```

因此仍需配合应用层 access control 和其他安全机制。

## Validation Evidence

### Scenario 1 — Medical Diagnosis

客服机器人只允许讨论订单问题，用户要求模型判断自己是否患糖尿病。

判断：

**Topic Control**

原因：

> 这是一个 disallowed topic，不是 PII 或 specific-word 问题。

### Scenario 2 — Medicare Number

用户输入 Medicare number，并要求模型在回复中重复。

判断：

**PII Redaction**

原因：

> 内容包含 sensitive personal identifier，需要进行 mask / remove / redact。

### Scenario 3 — Banned Expression

公司规定某几个指定词不能出现在输入或输出中。

判断：

**Word Filter**

原因：

> Word Filter 专门用于限制 particular words / expressions。

### Exam Mental Model

```text
Is the problem about discussion scope?
→ Topic Control

Is the problem about a particular word?
→ Word Filter

Is the problem about sensitive personal information?
→ PII Redaction
```

核心记忆：

> Topic controls what can be discussed, Word Filter controls specific expressions, and PII Redaction protects sensitive personal information.

当前理解达到本 KP 的 **exam-ready working depth**。

## Open Questions

- None
