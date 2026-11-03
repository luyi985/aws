---
id: saa-s3-accesslogs-077
title: 对象请求日志的用途（S3 server access logging）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=327
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=328
dependencies:
- saa-s3-objects-060
---

# saa-s3-accesslogs-077: 对象请求日志的用途（S3 server access logging）

## Learning Objective

在“业务桶的访问记录写到独立日志桶后查询请求来源”的场景中，能说明对象请求日志的用途的判断依据，并指出适用限制。

## Scope

- Included: 对象请求日志的用途的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-s3-objects-060。

## Knowledge Point

访问日志记录桶请求信息供审计与分析，日志写入另一个桶。

## Logical Path

1. 需求：业务桶的访问记录写到独立日志桶后查询请求来源。
2. 应避免把日志写回同一个来源桶造成递归增长，并理解日志交付的完整性边界。
3. 结果：日志存储需要与业务对象分离。

## Key Terms

- S3 server access logging：访问日志记录桶请求信息供审计与分析，日志写入另一个桶。

## Example

示意例：业务桶的访问记录写到独立日志桶后查询请求来源，说明日志存储需要与业务对象分离。

## Sources

- [课件 p.327：S3 Access Logs](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=327)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.328：S3 Access Logs: Warning](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=328)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
