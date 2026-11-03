---
id: saa-ec2-instancetypes-010
title: 按资源瓶颈选择实例（EC2 instance family）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=46
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=47
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=48
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=49
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=50
dependencies: []
---

# saa-ec2-instancetypes-010: 按资源瓶颈选择实例（EC2 instance family）

## Learning Objective

在“内存中处理大数据集的程序优先评估内存优化系列”的场景中，能说明按资源瓶颈选择实例的判断依据，并指出适用限制。

## Scope

- Included: 按资源瓶颈选择实例的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

实例系列分别侧重通用、计算、内存或存储需求。

## Logical Path

1. 需求：内存中处理大数据集的程序优先评估内存优化系列。
2. 选择应先识别工作负载的主要瓶颈，再比较系列与规格，而不是只看虚拟处理器数量。
3. 结果：实例选择应匹配资源使用特征。

## Key Terms

- EC2 instance family：实例系列分别侧重通用、计算、内存或存储需求。

## Example

示意例：内存中处理大数据集的程序优先评估内存优化系列，说明实例选择应匹配资源使用特征。

## Sources

- [课件 p.46：EC2 Instance Types - Overview](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=46)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.47：EC2 Instance Types – General Purpose](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=47)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.48：EC2 Instance Types – Compute Optimized](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=48)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.49：EC2 Instance Types – Memory Optimized](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=49)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.50：EC2 Instance Types – Storage Optimized](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=50)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
