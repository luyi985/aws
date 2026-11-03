---
id: saa-cache-patterns-049
title: 缓存填充与失效策略（Cache-aside and write-through）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=191
dependencies:
- saa-cache-elasticache-048
---

# saa-cache-patterns-049: 缓存填充与失效策略（Cache-aside and write-through）

## Learning Objective

在“商品页首次读取数据库并回填缓存”的场景中，能说明缓存填充与失效策略的判断依据，并指出适用限制。

## Scope

- Included: 缓存填充与失效策略的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-cache-elasticache-048。

## Knowledge Point

旁路缓存先查缓存，未命中时读数据库再回填；写穿在更新持久数据时同步更新缓存。

## Logical Path

1. 需求：商品页首次读取数据库并回填缓存。
2. 策略选择影响命中率、写入成本与陈旧数据风险。
3. 结果：快读依赖一致的更新策略。

## Key Terms

- Cache-aside：缓存未命中时由应用读取后端并回填的模式。
- Write-through：写入后端时协调更新缓存的模式。

## Example

示意例：商品页首次读取数据库并回填缓存，后续请求直接命中；更新商品时需处理缓存失效，说明快读依赖一致的更新策略。

## Sources

- [课件 p.191：Patterns for ElastiCache](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=191)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
