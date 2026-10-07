# aip-agentic-actiongroups-022: Bedrock Agent Action Groups

## Concepts

### Action Group

Action Group 向 Bedrock Agent 声明一组可以执行的相关 actions / tools。

核心作用：

```text
Agent planning
→ selects an action
→ builds structured parameters
→ invokes execution backend
→ receives result
```

Action Group 本身不是业务执行逻辑，而是把“Agent 可以做什么”暴露出来。

### API Schema / OpenAPI Schema

API Schema 描述 Agent 可调用操作的契约，包括：

- operation / function
- description
- input parameters
- parameter types
- required / optional fields
- outputs / responses

因此可以把它理解为：

```text
OpenAPI Schema
= complete tool/API contract
```

而所谓 Parameter Contract 只是这个 Schema 里面参数定义的部分，并不是另一套独立机制。

例如：

```text
getOrderStatus(orderId)
```

Schema 中可能包含：

```text
orderId
type: string
required: true
description: target order id
```

### Parameter Definition

Agent 需要根据 schema 知道：

```text
parameter name
parameter type
required / optional
parameter meaning
```

这些信息帮助 Agent 正确构造 tool arguments。

如果 required 参数缺失，当前 source 支持 Agent 向用户继续追问。

例如：

```text
User:
"帮我取消订单"
```

而 schema 要求：

```text
cancelOrder(orderId, reason)

orderId = required
reason = optional
```

则合理行为是：

```text
Agent
→ detects missing orderId
→ asks user for orderId
```

而不是猜测参数。

### Execution Backend

真正的业务动作由 Lambda 或其他 execution backend 完成。

例如：

```text
Agent
→ cancelOrder(orderId="123")
→ Lambda/backend
→ real cancellation logic
```

所以：

```text
Schema
→ describes how to call

Backend
→ actually performs the action
```

### Authorization Boundary

Schema 不是授权机制。

即使 Agent 生成了 syntactically valid tool call：

```text
cancelOrder(orderId="123")
```

也不代表这个操作应该被允许。

执行端仍然需要做：

```text
identity validation
authorization
input validation
business validation
```

因此：

```text
syntactically valid
≠ authorized
```

真正权限不足时，应由 execution layer 拒绝操作。

## Understanding

### Planning vs Action vs Tool Calling

用户建立的核心模型：

```text
Planning
→ 决定需要做哪些 actions

Action
→ 某一步业务目标

Tool Call
→ 用具体工具实现某个 action
```

更准确地说：

> Planning 不是把 query 简单拆成 tool calls，而是把 goal 拆成 subtasks / actions，其中一部分 action 需要映射到 tool calls。

例如：

```text
User:
"Check order 123 and cancel it if paid"
```

可能拆成：

```text
Action 1:
get order status

Action 2:
check whether status == PAID

Action 3:
cancel order if condition is satisfied
```

其中：

```text
get real order status
→ needs external tool

check whether status == PAID
→ may be internal reasoning

cancel real order
→ needs external tool
```

所以：

```text
Action ≠ Tool Call
```

而是：

```text
Action
→ what needs to be done

Tool Call
→ concrete external mechanism used to do it
```

### Action Dependency Mental Model

当前 021/022 source 支持：

```text
planning
→ actions
→ execution
→ observation/result
→ possible replanning
```

我们进一步用工程类比理解 action dependencies。

模型知识补充：

```text
Action A
→ produces result
→ Action B depends on result
→ Action C may depend on B
```

例如：

```text
getOrderStatus
      ↓
order status result
      ↓
check paid?
      ↓
if paid
      ↓
cancelOrder
```

依赖可以理解成：

```text
data dependency
sequence dependency
conditional dependency
```

因此一个 action 是否能够执行，取决于它的前置依赖是否满足。

可以用类似 DAG / scheduler 的方式理解：

```text
Planner
→ creates or updates action graph

Scheduler
→ finds ready actions

Action
→ performs one business step

Tool call
→ concrete external execution

Observation
→ updates state and unlocks / changes downstream actions
```

这个 DAG / scheduler 实现是模型知识类比，不是当前 022 source 明确规定的 Bedrock 内部实现。

### Missing Parameters vs HITL

用户最初把“缺失 required 参数时向用户追问”理解为 HITL。

行为方向正确，但术语需要收窄。

当前 022 source 支持的是：

```text
missing required parameter
→ ask user for missing information
```

这不等于完整意义上的 HITL workflow。

HITL 还可能包含：

```text
human approval
manual review
risk confirmation
execution gating
```

这些属于更广的 Human-in-the-Loop 场景。

### Security Mental Model

用户形成的理解：

> Schema 可以帮助判断调用参数是否满足契约，但不能解决权限问题。

这是 022 的关键边界。

因此完整分工可以记成：

```text
Planning
→ decides what action is needed

OpenAPI Schema
→ defines how the action can be called

Action Group
→ exposes available tools/actions

Tool Call
→ requests concrete execution

Lambda / backend
→ validates and performs the real operation

Observation
→ feeds result back to planning
```

## Important Boundaries

```text
OpenAPI Schema
≠ authorization
```

```text
Action
≠ Tool Call
```

```text
valid parameters
≠ permitted operation
```

```text
missing parameter clarification
≠ full HITL workflow
```

```text
Action Group
≠ business execution logic itself
```

## Exam Mental Model

可以压缩成：

> Bedrock Agent Action Groups expose executable tools to an agent.  
> OpenAPI / API schemas describe operations, parameters, and outputs, while Lambda or another backend performs the real action and must enforce authorization and business validation.

关键判断：

```text
Need to describe what tools exist
and how the agent should call them?
→ Action Group + API Schema
```

```text
Need to perform the actual business action?
→ Lambda / execution backend
```

```text
Need to decide whether the caller is allowed?
→ execution-side authorization
```

## Open Questions

- None
