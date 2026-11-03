---
id: saa-s3-storageclasses-065
title: 访问频率与恢复时间的取舍（S3 storage class）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=284
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=285
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=286
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=287
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=288
- https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html
dependencies:
- saa-s3-objects-060
verified_at: '2026-11-04'
---

# saa-s3-storageclasses-065: 访问频率与恢复时间的取舍（S3 storage class）

## Learning Objective

根据访问频率、读取等待、可重建性和保留期限选择 S3 存储类别。

## Scope

- Included: 访问频率与恢复时间的取舍的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-objects-060。

## Knowledge Point

存储类别（storage class）是访问性能、冗余与计费结构的选择。Standard 用于频繁访问；Standard-IA 用于低频但需即时读取；One Zone-IA 仅在一个可用区，适合可重建数据。Glacier 各类别的恢复方式不同，不能全部视为离线归档。

## Logical Path

1. 先排除不满足冗余与可用区故障要求的类别；持久性与可用性是不同指标。
2. Glacier Instant Retrieval 可毫秒级读取；Flexible Retrieval 和 Deep Archive 要先恢复，等待可达分钟至小时或更久。
3. 再比较低频或归档类别的取回费用、最短计费时长与小对象开销。Instant/Flexible 通常有 90 天、Deep Archive 有 180 天最短存储计费要求。
4. 访问模式未知时结合 KP-066 的智能分层；低延迟单区需求结合 KP-067。

## Key Terms

- Durability：数据不丢失的设计能力。
- Availability：请求到来时数据能被访问的能力。
- Retrieval：从归档存储恢复或读取数据的过程。

## Example

示意例：合规档案需跨可用区保留且允许等待恢复，可评估归档层；可重新生成且必须即时读取的副本可评估 One Zone-IA。例子说明先满足恢复和冗余约束，再比较费用。

## Sources

- [课件 p.284：S3 Storage Classes](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=284)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.285：S3 Durability and Availability](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=285)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.286：S3 Standard – General Purpose](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=286)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.287：S3 Storage Classes – Infrequent Access](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=287)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.288：Amazon S3 Glacier Storage Classes](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=288)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：访问延迟、冗余范围、最短计费时长和归档恢复](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html)。用于核验上述具体边界；查阅日期：2026-11-04。
