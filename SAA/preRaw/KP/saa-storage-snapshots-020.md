---
id: saa-storage-snapshots-020
title: 快照如何支持恢复与迁移（EBS snapshot）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=98
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=99
dependencies:
- saa-storage-ebs-019
---

# saa-storage-snapshots-020: 快照如何支持恢复与迁移（EBS snapshot）

## Learning Objective

在“从可用区 A 的卷创建快照”的场景中，能说明快照如何支持恢复与迁移的判断依据，并指出适用限制。

## Scope

- Included: 快照如何支持恢复与迁移的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-storage-ebs-019。

## Knowledge Point

快照记录卷在某个时间点的数据状态，可用于创建新卷。

## Logical Path

1. 需求：从可用区 A 的卷创建快照。
2. 通过复制快照并在目标位置恢复，可以跨可用区或区域重建存储。
3. 结果：迁移通过快照恢复而非直接移动原卷完成。

## Key Terms

- EBS snapshot：快照记录卷在某个时间点的数据状态，可用于创建新卷。

## Example

示意例：从可用区 A 的卷创建快照，再在可用区 B 创建卷，说明迁移通过快照恢复而非直接移动原卷完成。

## Sources

- [课件 p.98：EBS Snapshots](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=98)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.99：EBS Snapshots Features](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=99)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
