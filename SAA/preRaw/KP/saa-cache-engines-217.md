---
id: saa-cache-engines-217
title: 缓存引擎的能力取舍（Valkey Redis OSS and Memcached）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=189
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=192
- https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/SelectEngine.html
dependencies:
- saa-cache-elasticache-048
verified_at: '2026-11-04'
---

# saa-cache-engines-217: 缓存引擎的能力取舍（Valkey Redis OSS and Memcached）

## Learning Objective

按数据结构、复制和缓存重建需求选择缓存引擎。

## Scope

- Included: 缓存引擎的能力取舍的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-cache-elasticache-048。

## Knowledge Point

Memcached 与 Valkey/Redis OSS 都是内存键值引擎，但数据结构和复制能力不同。课件的 Redis/Memcached 比较需要结合当前服务支持 Valkey 的事实理解。

## Logical Path

1. 简单对象缓存可评估 Memcached。
2. 排序集合等数据结构或复制故障转移需求可评估 Valkey/Redis OSS。
3. 再按节点型或无服务器部署核对备份、扩展及版本能力，不能把单一部署限制泛化为所有形态。

## Key Terms

- Sorted set：成员唯一、按分数排序的数据结构。
- Replication：在多个节点维护数据副本。

## Example

示意例：实时排行榜需要按分数有序更新，选择支持排序集合的引擎；可随时重建的简单页面对象缓存另行比较。例子说明数据操作决定引擎选择。

## Sources

- [课件 p.189：ElastiCache – Redis vs MemcachedREDIS](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=189)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.192：ElastiCache – Redis Use Case](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=192)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：Memcached 与 Valkey/Redis OSS 的能力选择](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/SelectEngine.html)。用于核验上述具体边界；查阅日期：2026-11-04。
