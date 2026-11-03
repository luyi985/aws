---
id: saa-dns-routing-054
title: 按权重与延迟选择答案（DNS routing policy）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=206
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=207
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=208
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=209
dependencies:
- saa-dns-records-051
---

# saa-dns-routing-054: 按权重与延迟选择答案（DNS routing policy）

## Learning Objective

在“新版本设置较小权重用于逐步引流”的场景中，能说明按权重与延迟选择答案的判断依据，并指出适用限制。

## Scope

- Included: 按权重与延迟选择答案的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-dns-records-051。

## Knowledge Point

DNS 路由策略控制解析返回哪些目标，权重用于按比例分配解析答案，延迟策略选择延迟较低的区域。

## Logical Path

1. 需求：新版本设置较小权重用于逐步引流。
2. DNS 缓存使实际请求比例不一定精确等于配置权重。
3. 结果：策略影响解析选择而不直接逐条转发 HTTP 请求。

## Key Terms

- DNS routing policy：DNS 路由策略控制解析返回哪些目标，权重用于按比例分配解析答案，延迟策略选择延迟较低的区域。

## Example

示意例：新版本设置较小权重用于逐步引流，说明策略影响解析选择而不直接逐条转发 HTTP 请求。

## Sources

- [课件 p.206：Route 53 – Routing Policies](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=206)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.207：Routing Policies – Simple](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=207)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.208：Routing Policies – Weighted](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=208)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.209：Routing Policies – Latency-based](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=209)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
