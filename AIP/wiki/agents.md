---
title: Agent 编排、工具与人工介入
derived_from:
  - aip-agentic-planning-021
  - aip-agentic-actiongroups-022
  - aip-agentic-agentcore-024
  - aip-agentic-strands-025
  - aip-agentic-mcp-026
  - aip-agentic-multiagent-hitl-073
  - aip-testing-agenttroubleshooting-072
last_synced: 2026-11-01
status: needs-review
---

# Agent 编排、工具与人工介入

## 决策、接口与执行
Planner 分解目标，根据 observation 调整下一步。Action 是业务步骤，Tool Call 是实现部分步骤的具体调用。Strands 等框架组织模型调用、工具分派和循环；MCP 标准化发现、描述及调用外部能力；Action Groups 暴露工具契约。实际业务服务仍承担参数、授权及业务规则检查。

## 依赖与协作
先确认型号，再查询价格；型号确定后，价格、保修和评价调查可以并行。Orchestrator 分派并检查缺项，Worker 在边界内行动，Synthesizer 结合需求与证据回答。共享输入必须一致，Worker 返回来源、实际型号和未知事项。

缺信息可返回 needs_input，由协调者统一澄清。审批需要独立 approval_id，绑定工作流、checkpoint、动作参数和版本；不能把笼统“同意”匹配到多个待审批动作。参数变化后应重新确认，并防止重复执行。

## AgentCore 定位待复核
KP 024 将 AgentCore 整体概括为生产运行支撑层；KP 072 记录 managed harness 可托管 Agent 循环，以及 code-defined agents 路径。这两篇 raw 尚未建立显式替代或修订关系。本页保留差异，不把“AgentCore 不提供规划/循环”推广为当前全平台结论。修正权威 raw 后再更新本节。

Runtime 的承载、隔离与可观测性不消除业务授权和输入校验责任。相关：[安全](security.md)、[故障定位](troubleshooting.md)。

## Raw 来源

- [aip-agentic-planning-021](../raw/aip-agentic-planning-021.md)
- [aip-agentic-actiongroups-022](../raw/aip-agentic-actiongroups-022.md)
- [aip-agentic-agentcore-024](../raw/aip-agentic-agentcore-024.md)
- [aip-agentic-strands-025](../raw/aip-agentic-strands-025.md)
- [aip-agentic-mcp-026](../raw/aip-agentic-mcp-026.md)
- [aip-agentic-multiagent-hitl-073](../raw/aip-agentic-multiagent-hitl-073.md)
- [aip-testing-agenttroubleshooting-072](../raw/aip-testing-agenttroubleshooting-072.md)
