---
id: saa-databases-neptune-130
title: 图关系查询（Amazon Neptune）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=528
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=529
dependencies: []
---

# saa-databases-neptune-130: 图关系查询（Amazon Neptune）

## Learning Objective

在“查询用户朋友的共同朋友”的场景中，能说明图关系查询的判断依据，并指出适用限制。

## Scope

- Included: 图关系查询的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

图数据库把实体与关系作为核心模型，适合遍历多层连接。

## Logical Path

1. 需求：查询用户朋友的共同朋友。
2. 选择依据是关系查询本身，而不是数据能否勉强存到普通表中。
3. 结果：图模型把多跳关系遍历作为主要操作。

## Key Terms

- Amazon Neptune：图数据库把实体与关系作为核心模型，适合遍历多层连接。

## Example

示意例：查询用户朋友的共同朋友，说明图模型把多跳关系遍历作为主要操作。

## Sources

- [课件 p.528：Amazon Neptune](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=528)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.529：Amazon Neptune – Streams](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=529)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
