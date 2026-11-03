---
id: saa-ec2-hibernate-018
title: 休眠与停止的区别（EC2 hibernation）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=90
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=91
dependencies: []
---

# saa-ec2-hibernate-018: 休眠与停止的区别（EC2 hibernation）

## Learning Objective

在“初始化时间很长的内存应用恢复休眠状态后减少重建工作”的场景中，能说明休眠与停止的区别的判断依据，并指出适用限制。

## Scope

- Included: 休眠与停止的区别的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

休眠把内存状态保存到持久磁盘，恢复时可继续使用先前运行状态。

## Logical Path

1. 需求：初始化时间很长的内存应用恢复休眠状态后减少重建工作。
2. 普通停止保留磁盘但不保留内存，是否可休眠还受实例及加密配置约束。
3. 结果：休眠主要保留运行上下文。

## Key Terms

- EC2 hibernation：休眠把内存状态保存到持久磁盘，恢复时可继续使用先前运行状态。

## Example

示意例：初始化时间很长的内存应用恢复休眠状态后减少重建工作，说明休眠主要保留运行上下文。

## Sources

- [课件 p.90：EC2 Hibernate](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=90)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.91：EC2 Hibernate](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=91)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
