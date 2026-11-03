---
id: saa-messaging-visibility-097
title: 可见性超时与消费确认（SQS visibility timeout）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=389
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=390
- https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html
dependencies:
- saa-messaging-sqs-096
verified_at: '2026-11-04'
---

# saa-messaging-visibility-097: 可见性超时与消费确认（SQS visibility timeout）

## Learning Objective

沿接收、处理、删除、超时顺序解释消息何时可能再次被消费。

## Scope

- Included: 可见性超时与消费确认的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-messaging-sqs-096。

## Knowledge Point

可见性超时（visibility timeout）暂时隐藏已接收但未确认删除的消息，降低并发重复处理的机会。标准队列的至少一次投递（at-least-once delivery）意味着窗口内也不能严格保证没有重复投递。

## Logical Path

1. 消费者接收消息后开始处理；接收不会把消息从队列删除。
2. 成功完成业务后删除消息；处理较长时可延长可见性窗口。
3. 未删除且超时后消息重新可见；消费者应使用业务幂等机制，不把可见性窗口当作互斥锁。

## Key Terms

- Visibility timeout：消息被接收后暂时隐藏的时间窗口。
- DeleteMessage：完成消费后用于移除消息的确认操作。
- Idempotency：同一业务操作重复执行仍产生一次有效结果的性质。

## Example

示意例：订单消息处理后在删除确认前进程退出，消息随后重投递。消费者用订单标识识别已完成订单，避免再次扣款。这说明消息隐藏不替代业务幂等。

## Sources

- [课件 p.389：SQS – Message Visibility Timeout](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=389)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.390：SQS visibility timeout timeline](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=390)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：暂时隐藏、删除确认与至少一次投递边界](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html)。用于核验上述具体边界；查阅日期：2026-11-04。
