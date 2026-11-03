---
id: saa-storage-instancestore-022
title: 临时本地存储的边界（Instance store）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=102
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=103
dependencies: []
---

# saa-storage-instancestore-022: 临时本地存储的边界（Instance store）

## Learning Objective

在“把可以重新计算的排序中间文件放在实例存储”的场景中，能说明临时本地存储的边界的判断依据，并指出适用限制。

## Scope

- Included: 临时本地存储的边界的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

实例存储依附宿主机本地硬件，适合高性能临时数据。

## Logical Path

1. 需求：把可以重新计算的排序中间文件放在实例存储。
2. 停止、终止或硬件故障可能导致数据丢失，必须由应用承担需要的复制与恢复。
3. 结果：高性能临时盘适合可重建数据。

## Key Terms

- Instance store：实例存储依附宿主机本地硬件，适合高性能临时数据。

## Example

示意例：把可以重新计算的排序中间文件放在实例存储，说明高性能临时盘适合可重建数据。

## Sources

- [课件 p.102：EC2 Instance Store](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=102)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.103：Local EC2 Instance Store Very high IOPS](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=103)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
