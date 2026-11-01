---
id: aip-labs-strandsinvocation-075
title: Strands 代理的构建与单次调用
status: pending
sources:
- AIP/preRaw/AIP-Materials/AgentsLab/strandsagent.py — lines 1–59, Agent construction
  and __main__
- AIP/preRaw/AIP-Materials/AgentsLab/requirements.txt — lines 1–3
dependencies:
- aip-agentic-strands-025
---

# aip-labs-strandsinvocation-075: Strands 代理的构建与单次调用

## Learning Objective

能够说明 Agent 如何组合工具和系统提示，并追踪一次请求从输入到结果的执行边界。

## Scope

- Included: Agent 构造、tools 注册、system_prompt、单次调用与结果输出。
- Excluded: 演示问题的答案、角色口吻、固定算式和样本文本内容；当前默认模型及账号配置教程。

## Source Context

strandsagent.py 展示代理组合和调用路径。计算、时间、关键词任务与角色设定都是演示输入；学习目标是能换成其他任务后仍说明同样的调用结构。

## Knowledge Point

代理调用（agent invocation）由配置、请求执行和结果处理组成。Agent 构造函数接收工具集合与系统提示；调用实例时传入任务文本，再取得结果对象。工具注册只说明代理可使用哪些能力，不能证明每次请求都会执行全部工具。示例未显式传入模型或区域，相关默认值不由该文件证明。

## Logical Path

1. 先区分代理配置与本次任务输入。
2. 把工具集合和系统提示对应到能力与行为要求。
3. 追踪调用参数、结果对象与文本输出。
4. 替换任务主题后检查这条路径是否仍成立。

## Key Terms

- 代理调用（`agent invocation`）：将一次输入交给已配置代理执行的过程。
- 工具注册（`tool registration`）：把可调用工具加入代理可用能力集合。

## Example

源码结构示例：将 message 换成另一项需要工具的任务，仍沿 Agent(tools=..., system_prompt=...) → strandsagent(message) → result 的路径执行。它说明可复用的是组合与调用机制，无需背诵原来的算式、文本或角色口吻。

## Sources

- `AIP/preRaw/AIP-Materials/AgentsLab/strandsagent.py — lines 1–59, Agent construction and __main__`：支持本 KP 的配置、调用或接口机制；其中演示业务取值仅作例子。
- `AIP/preRaw/AIP-Materials/AgentsLab/requirements.txt — lines 1–3`：支持本 KP 的配置、调用或接口机制；其中演示业务取值仅作例子。
