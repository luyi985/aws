---
id: saa-cache-elasticache-048
title: 应用缓存与会话存储（Amazon ElastiCache）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=186
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=187
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=188
dependencies: []
---

# saa-cache-elasticache-048: 应用缓存与会话存储（Amazon ElastiCache）

## Learning Objective

在“用户会话放到共享缓存后可由多台应用服务器读取”的场景中，能说明应用缓存与会话存储的判断依据，并指出适用限制。

## Scope

- Included: 应用缓存与会话存储的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-rds-manageddb-039](saa-rds-manageddb-039.md)。

## Knowledge Point

内存缓存为经常读取的数据或会话提供快速访问，减少数据库压力。

## Logical Path

1. 需求：用户会话放到共享缓存后可由多台应用服务器读取。
2. 应用必须决定哪些数据进入缓存，以及缓存不可用或过期时如何处理。
3. 结果：外置状态有助于横向扩展。

## Key Terms

- Amazon ElastiCache：内存缓存为经常读取的数据或会话提供快速访问，减少数据库压力。

## Example

示意例：用户会话放到共享缓存后可由多台应用服务器读取，说明外置状态有助于横向扩展。

## Sources

- [课件 p.186：Amazon ElastiCache Overview](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=186)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.187：ElastiCache Solution Architecture - DB Cache](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=187)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.188：ElastiCache Solution Architecture – User Session Store](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=188)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
