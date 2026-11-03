---
id: saa-dynamodb-globaltables-120
title: 多区域读写复制（DynamoDB global table）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=480
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html
dependencies:
- saa-dynamodb-datamodel-116
- saa-dynamodb-consistency-226
verified_at: '2026-11-04'
---

# saa-dynamodb-globaltables-120: 多区域读写复制（DynamoDB global table）

## Learning Objective

区分全球表的 MREC 与 MRSC，并避免把复制前提混用于不同模式。

## Scope

- Included: 多区域读写复制的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-dynamodb-datamodel-116、saa-dynamodb-consistency-226。

## Knowledge Point

全球表（global table）在多个区域提供表副本和多区域访问。MREC 提供跨区域最终一致复制；MRSC 在写入确认前同步到另一区域，并支持相应强一致读取。它们在区域组合、冲突与功能支持上不同。

## Logical Path

1. 先确定业务能否容忍区域间短时旧读。
2. MREC 以 Streams 复制，副本默认启用；MRSC 不依赖 Streams 来复制，不能把课件“必须启用 Streams”泛化到所有模式。
3. 按模式核对部署组合和限制；例如当前 MRSC 不支持 TTL，不能把另一模式的能力直接套用。

## Key Terms

- MREC：Multi-Region eventual consistency，跨区域最终一致模式。
- MRSC：Multi-Region strong consistency，跨区域强一致模式。

## Example

示意例：不同地区用户访问附近区域的副本，说明全球表通过复制改善地理分布访问。

## Sources

- [课件 p.480：DynamoDB Global Tables](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=480)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：MREC/MRSC 的复制、Streams 与 TTL 差异](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html)。用于核验上述具体边界；查阅日期：2026-11-04。
- [AWS 官方：表、LSI、GSI 与全球表的读取一致性](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html)。用于核验上述具体边界；查阅日期：2026-11-04。
