# aip-agentic-strands-025: Strands SDK 代理开发框架

## Concepts

### Strands Positioning

Strands SDK 是一个用于构建 Agent 的 Python 开源框架。

它解决的是：

> 如何把 model、prompt/messages、tools、state 和 agent loop 组织成一个可运行的 Agent application。

可以理解为：

```text
Model
+ Prompt / Messages
+ Tools
+ State
+ Agent Loop
→ Agent Application
```

### What Strands Simplifies

如果完全不用 Agent framework，开发者通常需要自己处理大量 orchestration glue code，例如：

```text
build prompt/messages
call model
parse model output
detect tool call
dispatch tool
feed tool result back
update state
decide continue/stop
```

Strands 主要简化：

```text
model invocation
tool registration
tool dispatch
message handling
tool-result feedback
agent loop
```

因此开发者可以更聚焦在：

```text
model choice
instructions
tools
business logic
authorization
memory policy
HITL
```

### Agent Loop

Agent loop 可以抽象为：

```text
input
→ reasoning
→ tool selection
→ tool execution
→ observe result
→ continue or stop
→ response
```

Strands 提供框架来承载这个循环，但不会替开发者决定业务规则。

### Framework Abstraction Boundary

Strands 简化的是 orchestration，不是业务责任。

因此：

```text
framework abstraction
≠ business correctness
```

例如这些仍然需要 application 自己实现：

```text
user authorization
business-rule validation
safe side-effect handling
domain logic
memory policy
```

### Strands vs LangGraph

两者都可以用来构建 Agent，但抽象重点不同。

Strands 更偏：

```text
agent-first
→ define model + tools + instructions
→ framework runs the agent loop
```

LangGraph 更偏：

```text
workflow/state-machine-first
→ explicitly define nodes
→ define edges / transitions
→ control execution path
```

简单理解：

```text
Strands
→ model-driven agent loop

LangGraph
→ developer-controlled workflow/state transitions
```

如果目标是快速构建 tool-using agent，Strands 的 abstraction 更直接。

如果需要显式控制：

```text
branching
retry
HITL
deterministic flow
state transition
```

LangGraph 往往更自然。

两者不是绝对互斥，只是抽象重心不同。

### Strands vs AgentCore

Strands 和 AgentCore 位于不同层：

```text
Strands / LangGraph
→ build the agent

AgentCore
→ run / scale / isolate / observe the agent
```

Strands 负责 application/framework layer。

AgentCore 负责 runtime/platform layer。

## Understanding

用户首先把一个完整 Agent 拆成：

```text
1. Model adapter
2. Prompt template
3. State management
4. Agent loop
   - planning
   - tool calling
   - validation
   - memory
   - reflection
   - HITL
5. Result return
```

进一步形成的理解是：

> Strands 简化了 orchestration，但该由 Agent application 自己处理的逻辑还是需要自己实现。

也就是说：

```text
Strands
→ reduces orchestration boilerplate

Application
→ still owns agent behavior and business rules
```

用户明确指出：

> planning、tool、memory 还是得由 agent logic 处理。

更准确地说，Strands 可以帮助组织和执行这些逻辑，但不会替开发者设计它们。

关于 Strands 与 LangGraph，用户需要区分的是两者的抽象方式：

```text
Strands
→ 更偏 Agent abstraction

LangGraph
→ 更偏 workflow / state graph abstraction
```

最终 mental model：

```text
Strands
→ how to compose and run agent logic

LangGraph
→ how to explicitly control agent workflow

AgentCore
→ how to operate the agent in production
```

## References

- `AIP/preRaw/NotebookLM Mind Map.png — III. Agentic AI & Orchestration > Agent Frameworks > Strands SDK (Python Open Source)`
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 235-238, ‘Strands Agents’, built-in tools, agent loop, and quickstart`
- `AIP/preRaw/AIPStudyGuide.pdf — PDF p. 5, ‘III. Agentic AI > Agent Workflows’`
