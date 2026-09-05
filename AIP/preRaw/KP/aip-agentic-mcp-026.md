---
id: aip-agentic-mcp-026
title: Model Context Protocol 工具接口
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — III. Agentic AI & Orchestration > Agent Frameworks > Model Context Protocol (MCP) (Standardized Tool Interface)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 256-257, ‘Model Context Protocol (MCP)’ and ‘Deploying your Own MCP Server’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 5, ‘III. Agentic AI > Agent Workflows’"
dependencies:
  - aip-agentic-actiongroups-022
---

# aip-agentic-mcp-026: Model Context Protocol 工具接口

## Learning Objective

能够解释 MCP 如何标准化 AI 应用与外部工具或上下文提供方的连接。

## Scope

- Included: Model Context Protocol、标准化接口、客户端、服务器和工具契约。
- Excluded: 协议字段细节、传输实现和特定服务器安装。

## Source Context

导图将 MCP 定位为“Standardized Tool Interface”。

## Knowledge Point

模型上下文协议（Model Context Protocol, MCP）定义 AI 应用发现和调用外部能力的标准接口。客户端连接提供工具或资源的服务器，依据结构化契约交换请求与结果，从而降低每个集成单独定制的成本。

## PDF Grounding

详细课件把 MCP 描述为 agent-tool 的标准接口，数据层使用 JSON-RPC 2.0，传输可用 stdio 或 HTTP streaming，并区分轻量 Lambda 与复杂 ECS/Fargate server 的部署选项。Study Guide 同样给出 JSON-RPC 2.0 与 HTTP/stdio，强调其 universal connector 角色。

## Logical Path

1. AI 应用需要访问外部数据和动作。
2. 每个服务的私有适配会增加集成复杂度。
3. MCP 用统一的发现与调用契约连接双方。
4. 标准接口不代表自动可信，权限、参数和返回内容仍需校验。

## Key Terms

- 模型上下文协议（`Model Context Protocol`）：连接 AI 应用与上下文能力的开放协议。
- 工具接口（`tool interface`）：描述可调用动作及其参数和结果的契约。

## Example

示意示例：一个支持 MCP 的客户端可发现文件搜索服务器暴露的工具，而无需为该客户端重新设计专有格式；这展示接口复用。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“III. Agentic AI & Orchestration > Agent Frameworks > Model Context Protocol (MCP) (Standardized Tool Interface)”支持协议定位。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 256–257 页支持协议层、传输方式及 MCP server 部署选择。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 5 页“Agent Workflows”支持 MCP 的 JSON-RPC 2.0、HTTP/stdio 与标准连接器定位。
