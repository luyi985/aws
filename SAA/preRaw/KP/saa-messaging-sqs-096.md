---
id: saa-messaging-sqs-096
title: 队列解耦与重复处理（SQS Standard queue）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=381
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=382
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=383
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=384
dependencies: []
---

# saa-messaging-sqs-096: 队列解耦与重复处理（SQS Standard queue）

## Learning Objective

在“订单提交先入队”的场景中，能说明队列解耦与重复处理的判断依据，并指出适用限制。

## Scope

- Included: 队列解耦与重复处理的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

队列把生产者提交任务与消费者处理任务分开，缓冲短时流量差异。

## Logical Path

1. 需求：订单提交先入队。
2. 标准队列可能重复投递且不保证严格顺序，消费者需要按业务要求处理重复。
3. 结果：解耦需要配合幂等处理。

## Key Terms

- SQS Standard queue：队列把生产者提交任务与消费者处理任务分开，缓冲短时流量差异。

## Example

示意例：订单提交先入队，后台按能力处理；相同订单消息重试时不重复扣款，说明解耦需要配合幂等处理。

## Sources

- [课件 p.381：Amazon SQSWhat’s a queue?Producer Producer Producer SQS Queue Consumer Consumer Consumer Consumer Send messagesPoll messages](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=381)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.382：Amazon SQS – Standard Queue](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=382)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.383：SQS – Producing Messages](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=383)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.384：SQS – Consuming Messages](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=384)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
