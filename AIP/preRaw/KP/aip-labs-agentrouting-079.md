---
id: aip-labs-agentrouting-079
title: Agent Squad 按职责路由请求
status: pending
sources:
- AIP/preRaw/AIP-Materials/AgentsLab/squad_demo.py — lines 54–96 and 114–137
dependencies:
- aip-agentic-multiagent-hitl-073
- aip-labs-agentadapter-080
---

# aip-labs-agentrouting-079: Agent Squad 按职责路由请求

## Learning Objective

能够说明候选代理描述、分类器、注册和 route_request 怎样形成请求分派，并通过元数据核对实际选择。

## Scope

- Included: 代理职责描述、候选注册、独立分类器、路由调用和结果元数据。
- Excluded: 记忆演示角色名称、问题答案和固定模型 ID；并行协作与未提供的准确率评估。

## Source Context

squad_demo.py 给出工具代理与通用代理的路由示例。演示职责只用于解释分类输入，学习目标是请求分派机制及其验证方式。

## Knowledge Point

请求路由（request routing）根据输入与候选职责选择处理者。示例先注册两个代理，再通过独立分类器和 route_request 产生结果；metadata.agent_name 用于显示所选代理，output 保存业务回复。职责描述是分类依据的一部分，不保证选择一定正确；路由选择与回答内容应分别核对。

## Logical Path

1. 先区分候选代理与分类器的角色。
2. 检查描述怎样表达代理的能力边界。
3. 追踪候选注册到 route_request 的输入。
4. 用 agent_name 核对选择，再检查输出是否来自预期处理路径。

## Key Terms

- 分类器（`classifier`）：根据输入和候选描述选择处理者的组件。
- 路由元数据（`routing metadata`）：记录请求实际分派结果的信息。

## Example

示意示例：一类问题需要工具，另一类问题可直接问答；为两类代理给出可区分描述后，应核对返回的 agent_name。这里练习的是描述、分类和验证，不是记忆示例问题属于哪个角色。

## Sources

- `AIP/preRaw/AIP-Materials/AgentsLab/squad_demo.py — lines 54–96 and 114–137`：支持本 KP 的配置、调用或接口机制；其中演示业务取值仅作例子。
