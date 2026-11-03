---
id: saa-messaging-deadletter-228
title: 隔离反复失败的消息（SQS dead-letter queue）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=799
- https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html
dependencies:
- saa-messaging-visibility-097
verified_at: '2026-11-04'
---

# saa-messaging-deadletter-228: 隔离反复失败的消息（SQS dead-letter queue）

## Learning Objective

说明重试阈值、隔离、诊断与重新驱动之间的关系。

## Scope

- Included: 隔离反复失败的消息的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-messaging-visibility-097。

## Knowledge Point

死信队列（dead-letter queue，DLQ）接收超过接收重试阈值仍未成功处理的消息，用于隔离和排查。它保留失败工作，不会修复消息内容或保证业务成功。

## Logical Path

1. 以 redrive policy 的 maxReceiveCount 控制移入条件。
2. 对死信数量告警，排查数据格式、权限或处理时长。
3. 修复后受控重新驱动并保持幂等；FIFO 把失败消息移出可能破坏业务要求的完整顺序。

## Key Terms

- Redrive policy：定义失败消息转入死信队列条件的策略。
- Redrive：把隔离消息重新送回处理流程。

## Example

示意例：格式错误订单反复失败后进入 DLQ，修复转换逻辑再重放。例子说明隔离阻止无效重试持续占用消费者，但恢复仍需人工或自动流程。

## Sources

- [课件 p.799：Lambda, SNS & SQS SQS SNS retries SQS DLQ Try, retry SQS FIFO DLQ Try, retryblocking DLQ asynchronous(poll) SQS + Lambda SQS ](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=799)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：maxReceiveCount、重投递与 FIFO 顺序风险](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html)。用于核验上述具体边界；查阅日期：2026-11-04。
