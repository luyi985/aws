---
id: saa-analytics-emr-136
title: 托管分布式数据处理（Amazon EMR）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=546
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=547
dependencies: []
---

# saa-analytics-emr-136: 托管分布式数据处理（Amazon EMR）

## Learning Objective

在“批量分析历史日志时扩展工作节点”的场景中，能说明托管分布式数据处理的判断依据，并指出适用限制。

## Scope

- Included: 托管分布式数据处理的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

托管大数据平台运行分布式处理框架，并按任务配置计算节点。

## Logical Path

1. 需求：批量分析历史日志时扩展工作节点。
2. 应区分需要持续工作的主节点与可以弹性调整的处理容量。
3. 结果：数据处理容量可按作业生命周期管理。

## Key Terms

- Amazon EMR：托管大数据平台运行分布式处理框架，并按任务配置计算节点。

## Example

示意例：批量分析历史日志时扩展工作节点，结束后释放，说明数据处理容量可按作业生命周期管理。

## Sources

- [课件 p.546：Amazon EMR](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=546)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.547：Amazon EMR – Node types & purchasing](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=547)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
