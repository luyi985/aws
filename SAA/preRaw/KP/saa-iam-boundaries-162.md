---
id: saa-iam-boundaries-162
title: 委派管理的权限边界（Permissions boundary）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=639
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=640
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=641
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=642
dependencies:
- saa-iam-policies-004
---

# saa-iam-boundaries-162: 委派管理的权限边界（Permissions boundary）

## Learning Objective

在“允许开发者创建角色但要求带指定边界”的场景中，能说明委派管理的权限边界的判断依据，并指出适用限制。

## Scope

- Included: 委派管理的权限边界的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-iam-policies-004。

## Knowledge Point

权限边界约束身份策略可授予的最大权限，并不自行授予权限。

## Logical Path

1. 需求：允许开发者创建角色但要求带指定边界。
2. 它常用于委派创建角色等工作，完整评估仍需考虑策略类型及主体差异。
3. 结果：委派权限可以被限制在可控范围。

## Key Terms

- Permissions boundary：权限边界约束身份策略可授予的最大权限，并不自行授予权限。

## Example

示意例：允许开发者创建角色但要求带指定边界，说明委派权限可以被限制在可控范围。

## Sources

- [课件 p.639：IAM Permission Boundaries](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=639)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.640：IAM Permission Boundaries](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=640)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.641：IAM Policy Evaluation Logic](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=641)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.642：Example IAM Policy](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=642)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
