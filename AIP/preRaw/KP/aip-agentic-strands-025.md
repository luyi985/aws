---
id: aip-agentic-strands-025
title: Strands SDK 代理开发框架
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — III. Agentic AI & Orchestration > Agent Frameworks > Strands SDK (Python Open Source)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 235-238, ‘Strands Agents’, built-in tools, agent loop, and quickstart"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 5, ‘III. Agentic AI > Agent Workflows’"
dependencies:
  - aip-agentic-planning-021
  - aip-agentic-actiongroups-022
---

# aip-agentic-strands-025: Strands SDK 代理开发框架

## Learning Objective

能够说明 Strands SDK 作为 Python 开源代理框架所抽象的核心开发元素。

## Scope

- Included: Strands SDK、Python、open source、模型—工具—代理循环的框架角色。
- Excluded: 最新 API、安装步骤和框架横向排名。

## Source Context

导图把 Strands SDK 标注为 Python Open Source 的 Agent Framework。

## Knowledge Point

代理软件开发工具包（agent SDK）将模型调用、工具声明、消息和执行循环组织成可组合代码。Strands SDK 在导图中代表 Python 开源实现；框架简化编排，但业务契约与安全责任仍属于应用。

## PDF Grounding

详细课件说明 Strands 是 Amazon 发布的开源 Python agent SDK，可构建专用与多 agent 系统，集成 Bedrock、Lambda、Step Functions、MCP 及自定义 Python tools，并展示 input—reasoning—tool selection/execution—response 循环。Study Guide 未点名 Strands，只提供 orchestrator、worker、synthesizer 与串并行 workflow 的上位编排语境。

## Logical Path

1. 代理需要连接模型、提示、状态与工具。
2. SDK 为这些元素提供统一抽象和执行循环。
3. 开发者用 Python 组合业务代理并扩展工具。
4. 框架默认行为会演进，实际使用需依赖对应版本文档。

## Key Terms

- 软件开发工具包（`software development kit, SDK`）：用于构建应用的一组库与接口。
- 代理循环（`agent loop`）：模型选择动作、接收结果并继续决策的循环。

## Example

示意示例：开发者声明天气工具并把它交给代理循环，模型在需要时选择调用；这展示 SDK 如何连接模型决策与代码工具。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“III. Agentic AI & Orchestration > Agent Frameworks > Strands SDK (Python Open Source)”支持框架与实现语言范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 235–238 页支持 Strands 的开源 Python 定位、工具集成和 agent loop。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 5 页“Agent Workflows”支持多 agent 编排语境；未直接描述 Strands SDK。
