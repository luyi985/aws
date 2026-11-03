---
id: saa-compute-batch-207
title: 按作业调度计算容量（AWS Batch）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=841
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=842
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=843
dependencies: []
---

# saa-compute-batch-207: 按作业调度计算容量（AWS Batch）

## Learning Objective

在“提交大量视频转码作业并按队列启动容器计算”的场景中，能说明按作业调度计算容量的判断依据，并指出适用限制。

## Scope

- Included: 按作业调度计算容量的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-ec2-spot-013](saa-ec2-spot-013.md)。

## Knowledge Point

批处理服务调度有起止边界的作业并提供相应计算容量，适合大量可排队任务。

## Logical Path

1. 需求：提交大量视频转码作业并按队列启动容器计算。
2. 它与按请求短时执行的函数在调度和运行边界上不同。
3. 结果：批处理以作业完成为目标管理容量。

## Key Terms

- AWS Batch：批处理服务调度有起止边界的作业并提供相应计算容量，适合大量可排队任务。

## Example

示意例：提交大量视频转码作业并按队列启动容器计算，说明批处理以作业完成为目标管理容量。

## Sources

- [课件 p.841：AWS Batch](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=841)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.842：AWS Batch – Simplified Example Trigger AWS Batch EC2 Instance Spot InstanceAmazon S3 Insert processed objectAmazon S3 ECS](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=842)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.843：Batch vs Lambda](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=843)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
