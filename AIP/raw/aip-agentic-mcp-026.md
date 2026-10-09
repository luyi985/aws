# aip-agentic-mcp-026: Model Context Protocol 工具接口

## Concepts

### MCP Positioning

Model Context Protocol（MCP）定义 AI application / Agent 与外部 tools、resources 或 services 之间的标准连接协议。

核心目标：

```text
AI Client
    ↓
   MCP
    ↓
MCP Server
    ↓
Tools / Resources / Services
```

它减少了每个 Agent framework 为不同外部系统单独实现专有 integration adapter 的成本。

### MCP Client and Server

MCP Client 位于 AI application / Agent 一侧。

MCP Server 位于能力提供方一侧，并暴露：

```text
tools
resources
capabilities
schemas
```

Client 可以通过标准协议发现这些能力并调用。

### Standardized Tool Contract

MCP 主要标准化：

```text
tool discovery
tool description
input schema
invocation contract
result exchange
```

它不负责具体业务动作本身怎么实现。

例如：

```text
deleteCustomer(customerId)
```

MCP 负责描述和暴露这个能力。

真正执行：

```text
load customer
check authorization
validate business rules
delete record
write audit log
```

仍然属于 MCP Server 后面的 application / service logic。

因此：

```text
MCP
→ interface / protocol contract

Business Service
→ actual execution
```

### Discovery and Decoupling

没有 MCP 时：

```text
Agent Framework
├─ custom Jira adapter
├─ custom GitHub adapter
├─ custom DB adapter
└─ custom internal API adapter
```

支持 MCP 后：

```text
Agent Framework
→ MCP Client
→ dynamically discover tools
→ consume schemas
→ invoke through common protocol
```

因此 framework 不需要预先硬编码每一种 tool integration。

但 runtime 时仍然需要读取 tool schema，才能让 Agent 理解：

```text
what tools exist
what each tool does
what parameters are required
```

### Validation and Authorization Boundary

合法的 MCP schema 不代表调用一定可以执行。

一个 tool invocation 至少可能需要：

```text
1. Schema validation
2. Authorization
3. Business-rule validation
```

例如：

```text
deleteCustomer(customerId)
```

需要验证：

```text
customerId 是否符合 schema

current user 是否有 delete 权限

这个具体 customer 是否允许删除
```

因此：

```text
valid MCP request
≠ authorized operation
≠ valid business action
```

MCP 提供 protocol contract，但权限与业务规则必须由适当的 server / application layer enforcement。

### MCP vs Action Groups

Action Group 更偏 Bedrock Agent 内部的 tool integration 机制。

MCP 更偏通用协议：

```text
Action Group
→ Bedrock-specific tool definition / execution integration

MCP
→ standardized client/server tool protocol
```

### MCP vs Strands / LangGraph

Strands 和 LangGraph 负责构建 Agent。

MCP 负责 Agent 和外部能力之间的标准化连接。

```text
Strands / LangGraph
→ agent orchestration

MCP
→ tool integration protocol

Business Service
→ actual execution
```

多个不同 Agent framework 只要支持 MCP，就可以复用同一个 MCP Server 暴露的工具能力。

## Understanding

用户首先形成的核心理解：

> MCP 提供一个规范，它不管具体执行，只管能力如何被标准化暴露。

进一步明确：

```text
MCP
→ exposes capability contract

Business logic
→ performs actual operation
```

对于 tool execution，用户主动拆出了三层检查：

```text
1. 参数是否符合 MCP tool schema
2. 用户是否有权限执行操作
3. 业务规则是否允许这次操作
```

例如：

> 即使用户有 delete 权限，也可能存在业务规则禁止删除自己的账户。

因此用户建立了：

```text
schema validity
≠ authorization
≠ business validity
```

关于多个 Agent framework 使用 MCP，用户认为主要价值是：

> 责任解耦。

更准确地说：

```text
Agent framework
→ 不需要为每个外部 tool 写专有 adapter

MCP
→ 统一暴露、发现和调用能力

MCP Server / Service
→ 负责真正执行和 enforcement
```

需要保留的修正：

> framework 并不是完全“不需要知道 tool schema”；它不需要提前硬编码 schema，但运行时会通过 MCP discovery 获取 tool definition/schema，供 Agent 做工具选择和参数生成。

最终 mental model：

```text
Agent Framework
→ decide when to use a tool

MCP
→ standardize how tools are exposed and invoked

Tool Service
→ execute safely and correctly
```

## References

- `AIP/preRaw/NotebookLM Mind Map.png — III. Agentic AI & Orchestration > Agent Frameworks > Model Context Protocol (MCP) (Standardized Tool Interface)`
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 256-257, ‘Model Context Protocol (MCP)’ and ‘Deploying your Own MCP Server’`
- `AIP/preRaw/AIPStudyGuide.pdf — PDF p. 5, ‘III. Agentic AI > Agent Workflows’`
