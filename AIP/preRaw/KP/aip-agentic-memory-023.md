---
id: aip-agentic-memory-023
title: Agent 短期与长期记忆
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — III. Agentic AI & Orchestration > Bedrock Agents > Agent Memory (Short-term Sessions vs. Long-term AgentCore)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 234 and 243, ‘Adding Memory’ and ‘Adding AgentCore Memory’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 5, ‘III. Agentic AI > Agent Memory’"
dependencies:
  - aip-agentic-planning-021
---

# aip-agentic-memory-023: Agent 短期与长期记忆

## Learning Objective

能够区分会话内短期状态与跨会话长期记忆的生命周期和风险。

## Scope

- Included: Short-term sessions、long-term memory、AgentCore 语境和记忆治理。
- Excluded: 具体存储 API、保留期默认值和产品配额。

## Source Context

导图把 Agent Memory 表达为 Short-term Sessions 与 Long-term AgentCore 的对比。

## Knowledge Point

代理记忆（agent memory）保存未来步骤可能使用的信息。短期记忆通常服务一次会话的连续性；长期记忆跨会话保留稳定偏好或事实，需要更严格的同意、隔离、过期和删除控制。

## PDF Grounding

详细课件将短期记忆具体化为 session 中的 chat history 与 events，将长期记忆具体化为 extracted insights、session summaries、preferences、facts 及 Memory Records/Strategies。Study Guide 进一步把 AgentCore Memory 定位为可扩展、serverless 的持久化方案。

## Logical Path

1. 当前会话需要保留刚发生的交互状态。
2. 某些信息可能对未来会话持续有用。
3. 长期记忆需提取、存储并在合适时检索。
4. 不应把所有对话都长期保存，敏感性和过期风险必须治理。

## Key Terms

- 短期记忆（`short-term memory`）：主要在当前会话中使用的状态。
- 长期记忆（`long-term memory`）：可跨会话检索的持久信息。

## Example

示意示例：当前会话的临时订单号属于短期状态，用户明确保存的语言偏好可作为长期记忆；这展示生命周期差异。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“III. Agentic AI & Orchestration > Bedrock Agents > Agent Memory (Short-term Sessions vs. Long-term AgentCore)”支持记忆分类。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 234、243 页支持 sessions/events 与 Memory Records/Strategies 的短期、长期分类。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 5 页“Agent Memory”支持两类记忆及 AgentCore Memory 的 serverless 扩展定位。
