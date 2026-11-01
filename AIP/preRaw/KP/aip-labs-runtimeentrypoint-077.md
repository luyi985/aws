---
id: aip-labs-runtimeentrypoint-077
title: AgentCore 请求入口与响应封装
status: pending
sources:
- AIP/preRaw/AIP-Materials/AgentsLab/agentcore.py — lines 3–5 and 27–48, app, invoke,
  app.run
- AIP/preRaw/AIP-Materials/AgentsLab/strandsagent.py — lines 26–38
dependencies:
- aip-agentic-agentcore-024
- aip-labs-strandsinvocation-075
---

# aip-labs-runtimeentrypoint-077: AgentCore 请求入口与响应封装

## Learning Objective

能够说明运行时入口如何把请求字段映射为代理输入，再把结果封装为响应，并识别实例与请求状态的边界。

## Scope

- Included: BedrockAgentCoreApp、entrypoint、payload 映射、代理创建位置、响应对象和服务启动。
- Excluded: 演示请求的业务答案、关键词任务内容；未提供的鉴权、参数校验和记忆实现。

## Source Context

agentcore.py 将代理调用放入运行时入口。研究对象是服务请求与代理调用的连接方式，payload 内的示例任务只用于展示数据映射。

## Knowledge Point

运行时入口（runtime entrypoint）把传输载荷中的字段映射成代理输入，再封装返回结果。源码在 invoke 内创建 Agent，读取 payload.get("prompt", "")，执行代理并返回 response 文本。context 没有参与处理，未显式设置跨请求状态存储；app.run() 则负责启动应用。

## Logical Path

1. 先区分应用启动与单次入口处理。
2. 追踪 payload 字段到代理调用参数。
3. 确定代理实例的创建位置及结果封装。
4. 核对代码实际使用了哪些状态或上下文字段，避免推断未实现的会话能力。

## Key Terms

- 运行时入口（`runtime entrypoint`）：运行时收到请求后调用的处理函数。
- 请求载荷（`payload`）：服务收到的输入数据。

## Example

示意示例：把 {"prompt": "任务A"} 交给入口，prompt 的值成为代理输入，最终结果进入 response 字段。将任务A换成任务B不会改变字段映射；该例展示接口结构，不要求学习任务本身。

## Sources

- `AIP/preRaw/AIP-Materials/AgentsLab/agentcore.py — lines 3–5 and 27–48, app, invoke, app.run`：支持本 KP 的配置、调用或接口机制；其中演示业务取值仅作例子。
- `AIP/preRaw/AIP-Materials/AgentsLab/strandsagent.py — lines 26–38`：支持本 KP 的配置、调用或接口机制；其中演示业务取值仅作例子。
