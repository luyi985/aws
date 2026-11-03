---
id: saa-messaging-sns-101
title: 发布订阅与消息扇出（Simple Notification Service）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=397
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=400
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=402
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=407
dependencies: []
---

# saa-messaging-sns-101: 发布订阅与消息扇出（Simple Notification Service）

## Learning Objective

在“订单事件发给库存队列与通知队列”的场景中，能说明发布订阅与消息扇出的判断依据，并指出适用限制。

## Scope

- Included: 发布订阅与消息扇出的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-messaging-sqs-096](saa-messaging-sqs-096.md)。

## Knowledge Point

发布订阅把一条消息送给多个订阅者，可用过滤策略限定各订阅者接收的范围。

## Logical Path

1. 需求：订单事件发给库存队列与通知队列。
2. 与独立队列组合后，每个下游可以按自己的速率处理和重试。
3. 结果：扇出实现独立消费。

## Key Terms

- Simple Notification Service：发布订阅把一条消息送给多个订阅者，可用过滤策略限定各订阅者接收的范围。

## Example

示意例：订单事件发给库存队列与通知队列，一个下游暂停不阻止另一个处理，说明扇出实现独立消费。

## Sources

- [课件 p.397：Amazon SNS](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=397)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.400：Amazon SNS – How to publish](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=400)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.402：SNS + SQS: Fan Out](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=402)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.407：SNS – Message Filtering](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=407)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
