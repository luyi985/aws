---
id: saa-dns-hybrid-057
title: 混合网络中的双向解析（Route 53 Resolver endpoint）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=224
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=225
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=226
dependencies:
- saa-dns-records-051
---

# saa-dns-hybrid-057: 混合网络中的双向解析（Route 53 Resolver endpoint）

## Learning Objective

在“办公室解析云内数据库使用入站端点”的场景中，能说明混合网络中的双向解析的判断依据，并指出适用限制。

## Scope

- Included: 混合网络中的双向解析的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-dns-records-051。

## Knowledge Point

入站端点让本地解析器查询 AWS 私有名称，出站端点与转发规则让云内查询到达本地解析器。

## Logical Path

1. 需求：办公室解析云内数据库使用入站端点。
2. 名称解析还依赖实际网络连接。
3. 结果：方向按查询来源区分。

## Key Terms

- Route 53 Resolver endpoint：入站端点让本地解析器查询 AWS 私有名称，出站端点与转发规则让云内查询到达本地解析器。

## Example

示意例：办公室解析云内数据库使用入站端点，云应用解析内部目录服务使用出站端点，说明方向按查询来源区分。

## Sources

- [课件 p.224：Route 53 – Hybrid DNS](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=224)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.225：Route 53 – Resolver Endpoints](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=225)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.226：Route 53 – Resolver Endpoints](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=226)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
