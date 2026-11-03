---
id: saa-rds-dbproxy-047
title: 连接池如何保护数据库（RDS Proxy）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=185
dependencies:
- saa-rds-manageddb-039
---

# saa-rds-dbproxy-047: 连接池如何保护数据库（RDS Proxy）

## Learning Objective

在“大量短时函数通过代理共享数据库连接”的场景中，能说明连接池如何保护数据库的判断依据，并指出适用限制。

## Scope

- Included: 连接池如何保护数据库的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-rds-manageddb-039。

## Knowledge Point

代理汇聚并复用应用到数据库的连接，减轻连接大量创建时的资源压力。

## Logical Path

1. 需求：大量短时函数通过代理共享数据库连接。
2. 代理仍需访问数据库的网络路径与有效身份，也不能消除慢查询本身。
3. 结果：连接池主要缓解连接数量和连接管理压力。

## Key Terms

- RDS Proxy：代理汇聚并复用应用到数据库的连接，减轻连接大量创建时的资源压力。

## Example

示意例：大量短时函数通过代理共享数据库连接，说明连接池主要缓解连接数量和连接管理压力。

## Sources

- [课件 p.185：Amazon RDS Proxy](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=185)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
