---
id: aip-labs-actionresponse-081
title: Bedrock 函数型 Action Group 的 Lambda 消息契约
status: pending
sources:
- AIP/preRaw/AIP-Materials/weather.py — lines 4–43, lambda_handler
dependencies:
- aip-agentic-actiongroups-022
---

# aip-labs-actionresponse-081: Bedrock 函数型 Action Group 的 Lambda 消息契约

## Learning Objective

能够根据 weather.py 对应输入事件字段与函数响应结构，并区分演示天气文本和真实外部工具结果。

## Scope

- Included: actionGroup、function、parameters、functionResponse、TEXT 响应和 messageVersion。
- Excluded: OpenAPI 型 Action Group 结构、控制台绑定流程和真实天气服务接入。

## Source Context

weather.py 直接展示函数型 Action Group 的事件读取和嵌套响应，补充 KP 022 的概念范围。

## Knowledge Point

动作响应契约（action response contract）要求工具结果与调用它的函数信息对应。示例按参数名称提取 city 和 units，再把文本放进 functionResponse.responseBody.TEXT.body，并返回原事件的 messageVersion。天气值固定为 75 和 sunny，没有查询天气 API，也没有按单位换算。

## Logical Path

1. 先识别事件中的动作组、函数名和参数列表。
2. 按 name 提取参数，检查 city 缺失和 units 默认值。
3. 把业务文本放入指定的嵌套响应字段。
4. 核对返回的动作组、函数与版本，并识别固定演示数据。

## Key Terms

- 函数响应（`function response`）：动作组函数执行后返回给代理的结构化结果。
- 参数列表（`parameters`）：按名称描述的函数输入集合。

## Example

示意示例：参数为 city=Sydney、units=Celsius 时，代码返回的文字仍是“75 degrees Celsius and sunny”。它演示参数映射和响应封装，不表示 Sydney 实际气温为 75°C，也没有执行温度换算。

## Sources

- `AIP/preRaw/AIP-Materials/weather.py — lines 4–43, lambda_handler`：函数型事件读取、默认值、固定文本和嵌套返回结构。
