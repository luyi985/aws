---
id: saa-s3-storagelens-072
title: 用存储指标定位优化机会（S3 Storage Lens）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=307
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=308
dependencies:
- saa-s3-objects-060
---

# saa-s3-storagelens-072: 用存储指标定位优化机会（S3 Storage Lens）

## Learning Objective

在“发现某桶旧版本占用持续增长后检查生命周期”的场景中，能说明用存储指标定位优化机会的判断依据，并指出适用限制。

## Scope

- Included: 用存储指标定位优化机会的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-objects-060。

## Knowledge Point

存储分析汇总账户、桶等范围的使用和保护指标，帮助发现成本与数据保护问题。

## Logical Path

1. 需求：发现某桶旧版本占用持续增长后检查生命周期。
2. 指标指出需要调查的位置，并不直接执行对象修改。
3. 结果：汇总指标可引导具体存储策略调整。

## Key Terms

- S3 Storage Lens：存储分析汇总账户、桶等范围的使用和保护指标，帮助发现成本与数据保护问题。

## Example

示意例：发现某桶旧版本占用持续增长后检查生命周期，说明汇总指标可引导具体存储策略调整。

## Sources

- [课件 p.307：S3 – Storage Lens](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=307)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.308：Storage Lens – Default Dashboard](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=308)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
