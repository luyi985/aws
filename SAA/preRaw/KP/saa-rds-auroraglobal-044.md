---
id: saa-rds-auroraglobal-044
title: 跨区域数据库读取与恢复（Aurora Global Database）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=177
dependencies:
- saa-rds-aurora-042
---

# saa-rds-auroraglobal-044: 跨区域数据库读取与恢复（Aurora Global Database）

## Learning Objective

在“主区域写入订单”的场景中，能说明跨区域数据库读取与恢复的判断依据，并指出适用限制。

## Scope

- Included: 跨区域数据库读取与恢复的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-rds-aurora-042。

## Knowledge Point

全球数据库把主区域写入复制到其他区域，支持跨区域读取和恢复设计。

## Logical Path

1. 需求：主区域写入订单。
2. 复制、提升与应用流量切换是不同步骤，不能把跨区域副本直接视作任意区域写入。
3. 结果：副本存在不等于切换已完成。

## Key Terms

- Aurora Global Database：全球数据库把主区域写入复制到其他区域，支持跨区域读取和恢复设计。

## Example

示意例：主区域写入订单，远端区域读取复制数据；主区域故障时再执行提升与切流，说明副本存在不等于切换已完成。

## Sources

- [课件 p.177：](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=177)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
