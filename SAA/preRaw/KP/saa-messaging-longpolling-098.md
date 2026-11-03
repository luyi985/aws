---
id: saa-messaging-longpolling-098
title: 减少空轮询（SQS long polling）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=391
dependencies:
- saa-messaging-sqs-096
---

# saa-messaging-longpolling-098: 减少空轮询（SQS long polling）

## Learning Objective

在“低流量队列不再每秒反复空查”的场景中，能说明减少空轮询的判断依据，并指出适用限制。

## Scope

- Included: 减少空轮询的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-messaging-sqs-096。

## Knowledge Point

长轮询允许接收请求在没有消息时等待，减少频繁空响应。

## Logical Path

1. 需求：低流量队列不再每秒反复空查。
2. 等待时长与客户端超时需要配合，但不会改变消息确认机制。
3. 结果：长轮询节约的是无效请求。

## Key Terms

- SQS long polling：长轮询允许接收请求在没有消息时等待，减少频繁空响应。

## Example

示意例：低流量队列不再每秒反复空查，而让一次接收等待消息，说明长轮询节约的是无效请求。

## Sources

- [课件 p.391：Amazon SQS - Long Polling](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=391)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
