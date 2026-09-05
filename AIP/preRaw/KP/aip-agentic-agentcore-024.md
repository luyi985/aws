---
id: aip-agentic-agentcore-024
title: AgentCore 的扩展与运行支撑
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — III. Agentic AI & Orchestration > Agent Frameworks > AgentCore (Scale & Harness)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 240-243, ‘Amazon Bedrock AgentCore’ and AgentCore capabilities"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 5, ‘III. Agentic AI > Agent Memory’"
dependencies:
  - aip-agentic-planning-021
  - aip-agentic-memory-023
---

# aip-agentic-agentcore-024: AgentCore 的扩展与运行支撑

## Learning Objective

能够说明 AgentCore 在代理规模化运行与支撑能力中的定位。

## Scope

- Included: AgentCore、scale、harness 及代理运行层关注点。
- Excluded: 当前组件清单、价格、区域支持和部署教程。

## Source Context

导图在 Agent Frameworks 下将 AgentCore 概括为“Scale & Harness”。

## Knowledge Point

AgentCore 在导图中代表代理的规模化运行支撑层（agent runtime harness）：为代理提供可运营的基础能力，使开发者把重点放在规划、工具和业务逻辑，同时仍需设计权限、状态与可观测性。

## PDF Grounding

详细课件将 AgentCore 定位为 serverless 的大规模部署与运行层，支持不同 agent frameworks，并列出 Runtime、Identity、Memory、Gateways、Policies、Evaluations 与 Observability 等能力。Study Guide 只直接展开 AgentCore Memory，但确认其 scalable、serverless 特征。

## Logical Path

1. 本地代理原型包含模型、工具和状态。
2. 生产运行还需扩展、隔离、身份和观测等支撑。
3. AgentCore 类能力承接这些运行问题。
4. 托管支撑不会自动修复错误工具或不安全业务逻辑。

## Key Terms

- 代理运行支撑（`agent runtime harness`）：承载代理执行及运行治理的基础层。
- 扩展（`scale`）：在负载增长时维持容量与服务目标的能力。

## Example

示意示例：一个代理从单用户演示扩展到多团队使用时，需要会话隔离、身份、日志与弹性运行；这展示运行支撑层解决的问题。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“III. Agentic AI & Orchestration > Agent Frameworks > AgentCore (Scale & Harness)”支持其定位范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 240–243 页支持 AgentCore 的 serverless runtime、框架兼容性及运行能力集合。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 5 页支持 AgentCore Memory 的 scalable、serverless 运行语境；未列出全部 AgentCore 组件。
