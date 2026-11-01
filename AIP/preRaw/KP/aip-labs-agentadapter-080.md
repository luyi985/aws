---
id: aip-labs-agentadapter-080
title: 将 Strands 调用适配为 Agent Squad 接口
status: pending
sources:
- AIP/preRaw/AIP-Materials/AgentsLab/squad_demo.py — lines 3–51 and 99–111
- AIP/preRaw/AIP-Materials/AgentsLab/requirements.txt — lines 1–3
dependencies:
- aip-labs-strandsinvocation-075
---

# aip-labs-agentadapter-080: 将 Strands 调用适配为 Agent Squad 接口

## Learning Objective

能够解释适配层如何转换请求和返回消息，并检查身份、会话与历史参数是否实际跨越框架边界。

## Scope

- Included: Agent 子类、process_request、输入转交、AgentResult 到 ConversationMessage 的转换与上下文映射。
- Excluded: 示例代理名称和业务任务内容；自动历史同步、异步优化及 SDK 内部实现。

## Source Context

StrandsAdapterAgent 展示两个框架间的接口适配。它的可迁移知识是调用和数据转换，而不是被包装代理的计算或角色设定。

## Knowledge Point

适配器（adapter）满足目标接口，并把实际执行交给另一个组件。源码将 input_text 传给全局 Strands 代理，再把结果文本包装为 assistant 消息。方法接收 user_id、session_id 和 chat_history，但没有把它们转交给 Strands；接口签名兼容不能单独证明状态语义也已兼容。

## Logical Path

1. 先读目标接口要求的输入和输出。
2. 逐项追踪输入参数是否转交或转换。
3. 检查结果如何成为目标消息格式。
4. 确认未处理的上下文及共享实例边界，不把适配完成误当成会话能力完成。

## Key Terms

- 适配器（`adapter`）：转换不同组件调用方式和数据格式的代码。
- 上下文映射（`context mapping`）：将身份、会话或历史信息转交到实际执行组件的安排。

## Example

源码示例：两个请求带不同 session_id，适配器却只将 input_text 传入同一个 Strands 实例。它展示返回消息格式正确与会话上下文正确是两个检查项，不意味着已证明发生数据泄漏。

## Sources

- `AIP/preRaw/AIP-Materials/AgentsLab/squad_demo.py — lines 3–51 and 99–111`：支持本 KP 的配置、调用或接口机制；其中演示业务取值仅作例子。
- `AIP/preRaw/AIP-Materials/AgentsLab/requirements.txt — lines 1–3`：支持本 KP 的配置、调用或接口机制；其中演示业务取值仅作例子。
