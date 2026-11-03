---
id: saa-rds-dbsecurity-046
title: 数据库访问的多层控制（Database security）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=184
dependencies:
- saa-rds-manageddb-039
- saa-iam-serviceroles-007
---

# saa-rds-dbsecurity-046: 数据库访问的多层控制（Database security）

## Learning Objective

在“客户端能到达数据库端口却因认证失败被拒绝”的场景中，能说明数据库访问的多层控制的判断依据，并指出适用限制。

## Scope

- Included: 数据库访问的多层控制的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-rds-manageddb-039、saa-iam-serviceroles-007。

## Knowledge Point

数据库安全要分别处理网络可达性、连接身份、传输加密与静态加密。

## Logical Path

1. 需求：客户端能到达数据库端口却因认证失败被拒绝。
2. 安全组允许连接不代表数据库授权通过，加密也不会自动赋予访问权限。
3. 结果：网络许可与数据库身份验证是不同控制层。

## Key Terms

- Database security：数据库安全要分别处理网络可达性、连接身份、传输加密与静态加密。

## Example

示意例：客户端能到达数据库端口却因认证失败被拒绝，说明网络许可与数据库身份验证是不同控制层。

## Sources

- [课件 p.184：RDS & Aurora Security](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=184)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
