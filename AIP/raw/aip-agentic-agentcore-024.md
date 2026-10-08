# aip-agentic-agentcore-024: AgentCore 的扩展与运行支撑

## Concepts

### AgentCore Positioning

AgentCore 是 Agent 的生产运行支撑层，而不是 Agent 的 Planning 或业务逻辑本身。

可以理解为：

```text
Agent logic
├─ Planning
├─ Tools
├─ Memory usage
└─ Business rules

AgentCore
├─ Runtime
├─ Identity
├─ Memory infrastructure
├─ Gateway
├─ Policies
├─ Observability
└─ Evaluation
```

核心定位：

> AgentCore provides the production runtime harness required to operate agents at scale.

### Runtime

Runtime 是真正承载 Agent 执行的运行环境。

它关注：

```text
execution
scaling
concurrency
session isolation
runtime lifecycle
```

可以类比传统应用中的：

```text
application code
→ container / serverless runtime / execution environment
```

Runtime 不负责决定 Agent 下一步做什么。

```text
Planning
→ decides what to do

Runtime
→ provides the environment in which it runs
```

### Session Isolation

多用户生产环境中，不同用户和 session 的状态必须隔离。

例如：

```text
User A
→ Session A

User B
→ Session B
```

如果 User A 能读到 User B 的 session state，这是 runtime / isolation 层的问题，而不是 Planning 问题。

AgentCore 提供承载、隔离和管理 session 的运行能力。

具体 session context 中保存什么业务状态，仍然由 Agent / application logic 决定。

```text
AgentCore
→ manages lifecycle and isolation

Agent logic
→ manages meaning of the context
```

### Identity and Policy

AgentCore Identity / Policy 提供运行和资源访问层面的身份与控制能力。

但它不替代 application-level authorization。

例如：

```text
AgentCore Identity / Policy
→ agent/service 是否允许访问某个 tool/resource

Application authorization
→ 当前用户是否允许执行具体业务动作
```

因此：

```text
resource permission
≠ business permission
```

### Gateway

Gateway 是 Agent 访问外部 tools、APIs 或 services 的统一接入层。

```text
Agent
  ↓
AgentCore Gateway
  ↓
External tools / APIs / services
```

它属于 production integration layer，而不是 Planning。

可以把它和 Action Group 区分：

```text
Action Group
→ 定义 Agent 能看到哪些 actions，以及调用契约

Gateway
→ 提供生产环境下访问外部工具/API 的统一接入能力
```

### Memory Infrastructure

AgentCore 可以提供 scalable memory infrastructure，但它不决定所有 memory policy。

```text
AgentCore
→ provides persistence/runtime capability

Agent logic
→ decides what information should be stored or used
```

因此：

```text
memory infrastructure
≠ memory semantics
```

### Observability

Observability 用于观察 Agent 的运行行为，例如：

```text
which tool was selected
what parameters were passed
whether the call succeeded
where execution failed
```

它可以帮助定位 Planning、Tool 或 Runtime 问题。

但：

```text
observability
≠ automatic correction
```

如果 Planning 逻辑或 prompt 导致 Agent 总是选择错误的 tool，仍然需要修改 Agent logic。

### AgentCore Boundary

AgentCore 能解决：

```text
scale
runtime
session isolation
identity
integration
observability
memory infrastructure
```

但不会自动修复：

```text
bad planning
bad prompts
wrong tool definitions
unsafe business rules
incorrect application authorization
```

## Understanding

用户形成的核心 mental model：

> Agent business logic 负责 Planning、Tool 和 Memory 等行为；AgentCore 负责让这些 Agent 能力在生产环境中被运行、隔离和治理。

对于多用户 session：

> 多用户的 session 管理属于 AgentCore 的运行支撑范畴。

进一步修正为：

```text
AgentCore
→ 提供 session lifecycle / isolation / runtime support

Agent logic
→ 决定 session context 中具体保存什么业务状态
```

对于权限，用户明确区分：

> AgentCore 的 Identity 和 Policy 是 resource 层面的，app level 依旧要做 authorization，确保用户有执行这个业务操作的权限。

因此：

```text
resource authorization
≠ application authorization
```

对于错误 Planning，用户判断：

> 如果 Planning 选择了错误的工具，需要修改 Planning 中的提示词或逻辑。

AgentCore 可以辅助排查：

> 通过 logs 和 observability 检查工具是否调用正确、调用链在哪一步出现问题。

因此最终理解可以压缩成：

```text
AgentCore
→ run
→ scale
→ isolate
→ observe
→ govern

Agent logic
→ reason
→ plan
→ choose tools
→ apply business rules
```

## References

- `AIP/preRaw/NotebookLM Mind Map.png — III. Agentic AI & Orchestration > Agent Frameworks > AgentCore (Scale & Harness)`
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 240-243, ‘Amazon Bedrock AgentCore’ and AgentCore capabilities`
- `AIP/preRaw/AIPStudyGuide.pdf — PDF p. 5, ‘III. Agentic AI > Agent Memory’`
