---
id: saa-s3-intelligenttiering-066
title: 按访问模式自动分层（S3 Intelligent-Tiering）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=289
dependencies:
- saa-s3-storageclasses-065
---

# saa-s3-intelligenttiering-066: 按访问模式自动分层（S3 Intelligent-Tiering）

## Learning Objective

在“访问模式难预测的文档自动调整层级”的场景中，能说明按访问模式自动分层的判断依据，并指出适用限制。

## Scope

- Included: 按访问模式自动分层的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-storageclasses-065。

## Knowledge Point

智能分层根据对象的访问情况在访问层之间移动数据，减少手动预测访问频率的工作。

## Logical Path

1. 需求：访问模式难预测的文档自动调整层级。
2. 监控费用及可选归档层的恢复特性仍需纳入评估。
3. 结果：自动分层解决的是访问模式变化问题。

## Key Terms

- S3 Intelligent-Tiering：智能分层根据对象的访问情况在访问层之间移动数据，减少手动预测访问频率的工作。

## Example

示意例：访问模式难预测的文档自动调整层级，说明自动分层解决的是访问模式变化问题。

## Sources

- [课件 p.289：S3 Intelligent-Tiering](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=289)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
