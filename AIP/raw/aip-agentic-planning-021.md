# aip-agentic-planning-021: Bedrock Agent 规划模块

## Concepts

### Planning Module

Planning Module 的作用是：

> 把用户的高层目标分解成较小、可执行的子任务，并决定下一步应该采取什么 action。

基本过程：

```text
User Goal
→ Planning
→ break into subproblems
→ choose action / tool
→ observe result
→ feed result back
→ decide next step
```

### Problem Decomposition

复杂目标通常不能一步完成。

例如：

```text
“帮我安排一次客户会议”
```

可以拆成：

```text
1. 查双方空闲时间
2. 选择合适时段
3. 创建会议邀请
```

这就是 problem decomposition：

> 把一个复杂目标拆成工具可以处理的小问题。

### Dynamic Planning

Planning 不是一次性生成计划后就机械执行到底。

它可以根据中间结果调整后续 action：

```text
Plan
→ Act
→ Observe
→ Re-plan if needed
```

例如：

```text
Goal:
Book a suitable flight

Action:
Search flights

Observation:
Returned flight is over budget

Planning:
Change constraints
→ search again
```

因此：

```text
Fixed Workflow
→ predefined path

Agent Planning
→ dynamic path based on observations
```

### Observation Feeds Back Into Planning

Action 的执行结果会成为新的 observation。

即使 action 失败，error 本身也可以成为 planning 的输入：

```text
Initial Plan:
a → b → c

a → success
b → success
c → error

error
→ observation
→ planner reassesses next action
```

核心 mental model：

> Error is also an observation.

因此失败并不一定意味着整个任务立即结束。

Planning 可以根据新的 observation 决定是否改变后续执行策略。

### Planning Is Not Unlimited Autonomy

Planning 可能做出错误决策，因此需要限制。

当前 source 明确提到：

```text
permissions
step limits
validation rules
```

用于约束 Agent 的执行。

因此：

```text
dynamic planning
≠ unlimited autonomy
```

## Understanding

### User Mental Model

用户将 Planning 理解为：

> 类似边做边计划，根据现有情况调整 action。

这个理解准确抓住了 dynamic planning：

```text
Plan
→ Act
→ Observe
→ adjust next action
```

用户也将它类比成 ReAct-style 的执行循环。

这里需要区分：

- 当前 KP source 明确支持：根据 observation 动态调整 action
- `ReAct` 是帮助理解的模型知识类比，不是当前 KP 要求掌握的 source terminology

### Fixed Workflow vs Agent Planning

对于：

```text
A → B → C
```

如果无论中间发生什么都固定执行同一路径：

```text
Fixed Workflow
```

而如果：

```text
B 的结果
→ 改变 C 或选择新的 action
```

则体现：

```text
Agent Planning
```

核心区别：

```text
Fixed Workflow
→ path decided in advance

Agent Planning
→ next step can depend on current observations
```

### Failure Scenario

用户提出：

```text
Planning A generates:
action a
action b
action c

a success
b success
c error
```

正确理解是：

```text
c error
→ becomes observation
→ feedback into planning
→ determine what to do next
```

当前 source 支持的是：

> intermediate results are fed back into planning, and planning may adjust later actions.

像以下具体策略：

```text
retry
fallback
rollback
human approval
```

属于工程实现上的扩展，不是当前 KP source 明确逐项定义的内容。

### Exam Mental Model

可以压缩成：

> Planning Module decomposes a high-level goal into executable subproblems and dynamically chooses or adjusts actions based on intermediate observations.

以及：

```text
Goal
→ Decompose
→ Act
→ Observe
→ Re-plan
```

## Important Boundary

```text
Planning
≠ fixed workflow
```

并且：

```text
Planning
≠ one-time planning only
```

而是：

```text
planning can continue during execution
```

同时：

```text
dynamic planning
≠ unlimited autonomy
```

因为仍需权限、步数和验证规则限制。

## Open Questions

- None
