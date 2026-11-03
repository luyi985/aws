---
id: saa-rds-cloning-219
title: 写时复制创建测试数据库（Aurora cloning）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=183
- https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html
dependencies:
- saa-rds-aurora-042
verified_at: '2026-11-04'
---

# saa-rds-cloning-219: 写时复制创建测试数据库（Aurora cloning）

## Learning Objective

说明克隆为何快，以及克隆后写入为何不直接改写源集群。

## Scope

- Included: 写时复制创建测试数据库的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-rds-aurora-042。

## Knowledge Point

Aurora 克隆使用写时复制（copy-on-write）建立独立集群卷，初始共享已有数据页；源或克隆发生修改时为变化分配独立存储。它是测试环境能力，不是持续同步副本。

## Logical Path

1. 先以原集群的数据页建立克隆视图。
2. 任一侧修改产生独立页，另一侧的逻辑数据保持独立。
3. 克隆仍包含生产数据，应单独控制权限与数据脱敏。

## Key Terms

- Copy-on-write：共享未改动数据、发生写入时再分配独立副本的机制。

## Example

示意例：测试克隆上修改某张表不会自动修改生产表；随着测试写入增加，额外存储增长。例子说明快速创建与后续数据隔离同时成立。

## Sources

- [课件 p.183：Aurora Database Cloning](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=183)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：写时复制、共享初始数据页与独立写入](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Clone.html)。用于核验上述具体边界；查阅日期：2026-11-04。
