---
id: aip-labs-queuereceipt-093
title: SQS 接收与删除之间的收据句柄
status: pending
sources:
- AIP/preRaw/AIP-Materials/sqs/sqs.sh — lines 7–18
dependencies:
- aip-integration-eventdriven-057
---

# aip-labs-queuereceipt-093: SQS 接收与删除之间的收据句柄

## Learning Objective

能够说明接收消息后的可见性窗口与删除动作，并识别删除请求为什么需要本次接收的 receipt handle。

## Scope

- Included: send-message、receive-message、等待参数、visibility timeout 和 delete-message。
- Excluded: 创建队列、恰好一次处理保证和源码里示例句柄的实际使用。

## Source Context

sqs.sh 包含发送、接收和删除片段，但队列地址与收据句柄是材料中的固定示例值。

## Knowledge Point

收据句柄（receipt handle）标识一次接收操作得到的消息处理机会。接收命令设置等待时间和可见性窗口，删除命令另行携带句柄。因此“已经接收”与“已经删除”是两步；阅读练习应把当前返回的句柄传到删除步骤，不能复用材料中的长字符串。

## Logical Path

1. 从发送动作识别消息进入的队列。
2. 读取接收的等待和可见性参数。
3. 找到删除动作需要的 receipt handle。
4. 区分处理过程、可见性窗口与最终确认删除。

## Key Terms

- 收据句柄（`receipt handle`）：接收操作返回、供后续删除等动作使用的句柄。
- 可见性超时（`visibility timeout`）：消息接收后暂时不向其他消费者显示的时间窗口。

## Example

示意示例：消费者收到消息后处理成功，再用这次返回的句柄删除；只执行 receive-message 并不能代替 delete-message。这个例子展示队列处理确认与读取数据的区别。

## Sources

- `AIP/preRaw/AIP-Materials/sqs/sqs.sh — lines 7–18`：发送、接收参数和删除句柄字段。
