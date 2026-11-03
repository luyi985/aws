---
id: saa-dynamodb-ttl-121
title: 过期项目自动清理（DynamoDB Time To Live）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=481
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html
dependencies:
- saa-dynamodb-datamodel-116
verified_at: '2026-11-04'
---

# saa-dynamodb-ttl-121: 过期项目自动清理（DynamoDB Time To Live）

## Learning Objective

区分业务有效期与后台删除时间，并说明 TTL 字段格式。

## Scope

- Included: 过期项目自动清理的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-dynamodb-datamodel-116。

## Knowledge Point

TTL（Time To Live）按项目的 Number 类型 Unix 秒级时间戳标记过期，由后台异步删除，通常可能延后数天。已过期但未删除的项目仍可能被读到。

## Logical Path

1. 为项目设置受支持格式的到期时间。
2. 到期立即失效的业务在读取时判断或过滤过期项目，不等待物理删除。
3. 后台删除用于减少保留数据；不能把 TTL 当作精确调度或合规即时擦除保证。

## Key Terms

- Expiration timestamp：以 Unix 秒数表示的项目到期时刻。
- Asynchronous deletion：到期后由后台进程完成、非即时的删除。

## Example

示意例：会话到期后应用立即拒绝使用，项目随后被后台删除，说明业务失效与物理删除可以发生在不同时间。

## Sources

- [课件 p.481：DynamoDB – Time T o Live (TTL)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=481)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：秒级时间戳、延迟删除及过滤过期项目](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html)。用于核验上述具体边界；查阅日期：2026-11-04。
