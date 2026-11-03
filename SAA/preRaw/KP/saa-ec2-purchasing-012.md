---
id: saa-ec2-purchasing-012
title: 按负载特征选择购买方式（EC2 purchasing options）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=64
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=65
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=66
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=67
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=71
dependencies: []
---

# saa-ec2-purchasing-012: 按负载特征选择购买方式（EC2 purchasing options）

## Learning Objective

区分计费优惠、容量保证与硬件隔离，按负载约束选择购买方式。

## Scope

- Included: 按负载特征选择购买方式的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

购买方式分别解决费用承诺、可回收容量、容量保证和租户隔离。按需无需长期承诺，预留实例和 Savings Plans 提供不同承诺模型；容量预留不能简单等同于折扣。

## Logical Path

1. 用稳定基线与突发部分拆分负载。
2. 对稳定使用比较预留实例和不同 Savings Plans 的承诺范围；对可重试任务评估 Spot。
3. 若需求是指定位置的容量保障，另外检查容量预留，而不是把优惠方案视作容量保证。

## Key Terms

- Savings Plans：以使用金额承诺换取符合范围的计算费用优惠。
- Capacity Reservation：针对容量可获得性建立的预留，需与计费优惠分开判断。

## Example

示意例：长期稳定基线评估承诺优惠，临时测试使用按需，说明持续时间与可预测性影响购买方式。

## Sources

- [课件 p.64：EC2 Instances Purchasing Options](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=64)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.65：EC2 On Demand](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=65)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.66：EC2 Reserved Instances](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=66)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.67：EC2 Savings Plans](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=67)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.71：EC2 Capacity Reservations](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=71)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
