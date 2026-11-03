---
id: saa-ec2-spot-013
title: 可中断计算的适用条件（Spot instance）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=68
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=74
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=77
dependencies: []
---

# saa-ec2-spot-013: 可中断计算的适用条件（Spot instance）

## Learning Objective

在“图像批处理把每张图片作为可重试任务”的场景中，能说明可中断计算的适用条件的判断依据，并指出适用限制。

## Scope

- Included: 可中断计算的适用条件的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

竞价实例利用可回收的闲置容量降低计算成本。

## Logical Path

1. 需求：图像批处理把每张图片作为可重试任务。
2. 应用必须能承受中断，并通过重试、检查点或重新调度继续工作；实例分散有助于降低容量集中风险。
3. 结果：可恢复性是采用竞价容量的条件。

## Key Terms

- Spot instance：竞价实例利用可回收的闲置容量降低计算成本。

## Example

示意例：图像批处理把每张图片作为可重试任务，中断后从未完成任务继续，说明可恢复性是采用竞价容量的条件。

## Sources

- [课件 p.68：EC2 Spot Instances](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=68)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.74：EC2 Spot Instance Requests](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=74)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.77：Spot Fleets](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=77)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
