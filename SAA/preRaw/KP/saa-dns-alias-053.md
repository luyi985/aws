---
id: saa-dns-alias-053
title: 根域名如何指向 AWS 入口（Route 53 Alias）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=203
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=204
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=205
dependencies:
- saa-dns-records-051
---

# saa-dns-alias-053: 根域名如何指向 AWS 入口（Route 53 Alias）

## Learning Objective

在“example.com 使用 Alias 指向负载均衡器”的场景中，能说明根域名如何指向 AWS 入口的判断依据，并指出适用限制。

## Scope

- Included: 根域名如何指向 AWS 入口的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-dns-records-051。

## Knowledge Point

普通规范名称记录指向另一主机名，但不能用于区域顶点。

## Logical Path

1. 需求：example.com 使用 Alias 指向负载均衡器。
2. Alias 是 Route 53 对受支持目标的扩展，可以让根域名跟随 AWS 资源地址变化。
3. 结果：不必把入口当前的 IP 固定写入域名记录。

## Key Terms

- Alias record：Route 53 为受支持目标提供、可用于根域名的扩展记录。

## Example

示意例：example.com 使用 Alias 指向负载均衡器，说明不必把入口当前的 IP 固定写入域名记录。

## Sources

- [课件 p.203：CNAME vs Alias](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=203)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.204：Route 53 – Alias Records](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=204)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.205：Route 53 – Alias Records Targets](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=205)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
