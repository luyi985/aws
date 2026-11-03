---
id: saa-analytics-msk-141
title: 托管 Kafka 与协议兼容（Amazon MSK）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=559
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=560
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=561
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=562
dependencies: []
---

# saa-analytics-msk-141: 托管 Kafka 与协议兼容（Amazon MSK）

## Learning Objective

在“已有 Kafka 消费者保留消费接口迁入托管集群”的场景中，能说明托管 Kafka 与协议兼容的判断依据，并指出适用限制。

## Scope

- Included: 托管 Kafka 与协议兼容的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-messaging-kinesis-102](saa-messaging-kinesis-102.md)。

## Knowledge Point

托管 Kafka 为需要 Kafka 协议与生态的流式应用管理代理基础设施。

## Logical Path

1. 需求：已有 Kafka 消费者保留消费接口迁入托管集群。
2. 选择时应比较客户端兼容、分区和消费模型，而非只比较是否能传消息。
3. 结果：生态兼容性会影响流服务选型。

## Key Terms

- Amazon MSK：托管 Kafka 为需要 Kafka 协议与生态的流式应用管理代理基础设施。

## Example

示意例：已有 Kafka 消费者保留消费接口迁入托管集群，说明生态兼容性会影响流服务选型。

## Sources

- [课件 p.559：Amazon Managed Streaming for Apache Kafka (Amazon MSK)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=559)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.560：Apache Kafka at a high level Kinesis IoT RDS Etc… MSK Cluster Etc… Broker 2 Broker 3 Broker 1Producers(your code) Consumers(y](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=560)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.561：Kinesis Data Streams vs. Amazon MSK Kinesis Data Streams](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=561)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.562：Amazon MSK Consumers Amazon MSK Kinesis Data Analytics for Apache Flink AWS GlueStreaming ETL JobsPowered by Apache Spark Str](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=562)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
