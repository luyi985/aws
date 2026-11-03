---
id: saa-analytics-flink-140
title: 有状态流处理（Managed Service for Apache Flink）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=558
dependencies:
- saa-messaging-kinesis-102
---

# saa-analytics-flink-140: 有状态流处理（Managed Service for Apache Flink）

## Learning Objective

在“持续计算最近几分钟的设备平均温度”的场景中，能说明有状态流处理的判断依据，并指出适用限制。

## Scope

- Included: 有状态流处理的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-messaging-kinesis-102。

## Knowledge Point

流处理框架持续计算事件，可维护窗口与状态。

## Logical Path

1. 需求：持续计算最近几分钟的设备平均温度。
2. 托管平台负责执行资源等工作，但事件时间、状态恢复和业务计算逻辑仍需设计。
3. 结果：流处理可在不断到达的数据上维护窗口结果。

## Key Terms

- Stream processing：在持续到达的数据上维护状态并持续计算结果。

## Example

示意例：持续计算最近几分钟的设备平均温度，说明流处理可在不断到达的数据上维护窗口结果。

## Sources

- [课件 p.558：Amazon Managed Service for Apache Flink](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=558)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
