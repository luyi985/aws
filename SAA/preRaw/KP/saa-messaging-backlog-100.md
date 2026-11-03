---
id: saa-messaging-backlog-100
title: 按积压量扩展消费者（Queue-based scaling）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=386
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=393
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=395
dependencies:
- saa-messaging-sqs-096
- saa-scaling-asg-037
---

# saa-messaging-backlog-100: 按积压量扩展消费者（Queue-based scaling）

## Learning Objective

在“待处理订单持续增长时扩展消费者实例”的场景中，能说明按积压量扩展消费者的判断依据，并指出适用限制。

## Scope

- Included: 按积压量扩展消费者的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-messaging-sqs-096、saa-scaling-asg-037。

## Knowledge Point

队列吸收生产与处理速率的差异，消费者容量需要按待处理工作和允许等待时间调整。

## Logical Path

1. 需求：待处理订单持续增长时扩展消费者实例。
2. 只增加前端容量不能解决后台处理能力不足。
3. 结果：积压是生产速度超过处理速度的信号。

## Key Terms

- Queue-based scaling：队列吸收生产与处理速率的差异，消费者容量需要按待处理工作和允许等待时间调整。

## Example

示意例：待处理订单持续增长时扩展消费者实例，说明积压是生产速度超过处理速度的信号。

## Sources

- [课件 p.386：SQS with Auto Scaling Group (ASG) SQS Queue CloudWatch Metric – Queue LengthApproximateNumberOfMessages Auto Scaling Group EC](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=386)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.393：SQS with Auto Scaling Group (ASG) SQS Queue CloudWatch Metric – Queue LengthApproximateNumberOfMessages Auto Scaling Group EC](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=393)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.395：SQS as a buffer to database writes SQS Queue(infinitely scalable) Auto-Scaling Dequeue message Enqueue messagerequests SendMe](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=395)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
