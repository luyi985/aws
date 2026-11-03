---
id: saa-messaging-kinesis-102
title: 可重放的数据流（Kinesis Data Streams）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=408
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=409
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=410
dependencies: []
---

# saa-messaging-kinesis-102: 可重放的数据流（Kinesis Data Streams）

## Learning Objective

在“设备事件按设备标识分区”的场景中，能说明可重放的数据流的判断依据，并指出适用限制。

## Scope

- Included: 可重放的数据流的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

数据流持续保存按分区组织的记录，消费者独立读取并可在保留范围内重放。

## Logical Path

1. 需求：设备事件按设备标识分区。
2. 分区键、容量模式和消费方式共同影响吞吐与顺序边界。
3. 结果：流服务保留事件以支持多次消费。

## Key Terms

- Kinesis Data Streams：数据流持续保存按分区组织的记录，消费者独立读取并可在保留范围内重放。

## Example

示意例：设备事件按设备标识分区，分析应用从记录位置重新读取，说明流服务保留事件以支持多次消费。

## Sources

- [课件 p.408：Amazon Kinesis Data Streams](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=408)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.409：Kinesis Data Streams](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=409)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.410：Kinesis Data Streams – Capacity Modes](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=410)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
