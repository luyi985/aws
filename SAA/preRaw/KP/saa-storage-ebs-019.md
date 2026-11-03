---
id: saa-storage-ebs-019
title: 块存储的持久性与可用区边界（Elastic Block Store）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=94
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=95
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=97
dependencies: []
---

# saa-storage-ebs-019: 块存储的持久性与可用区边界（Elastic Block Store）

## Learning Objective

在“关闭根卷的随实例终止删除设置后终止实例”的场景中，能说明块存储的持久性与可用区边界的判断依据，并指出适用限制。

## Scope

- Included: 块存储的持久性与可用区边界的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

EBS 为实例提供网络块设备，卷绑定到可用区。

## Logical Path

1. 需求：关闭根卷的随实例终止删除设置后终止实例。
2. 实例终止后是否保留卷取决于删除配置，因此持久存储能力不等于所有卷都会自动保留。
3. 结果：数据生命周期需要显式配置。

## Key Terms

- Elastic Block Store：EBS 为实例提供网络块设备，卷绑定到可用区。

## Example

示意例：关闭根卷的随实例终止删除设置后终止实例，卷可保留，说明数据生命周期需要显式配置。

## Sources

- [课件 p.94：What’s an EBS Volume?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=94)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.95：EBS Volume](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=95)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.97：EBS – Delete on Termination attribute](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=97)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
