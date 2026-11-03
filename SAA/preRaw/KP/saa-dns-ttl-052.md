---
id: saa-dns-ttl-052
title: DNS 缓存与变更传播（DNS Time To Live）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=202
dependencies:
- saa-dns-resolution-050
---

# saa-dns-ttl-052: DNS 缓存与变更传播（DNS Time To Live）

## Learning Objective

在“客户端仍使用缓存中的旧地址”的场景中，能说明DNS 缓存与变更传播的判断依据，并指出适用限制。

## Scope

- Included: DNS 缓存与变更传播的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-dns-resolution-050。

## Knowledge Point

生存时间决定解析器可缓存答案多久。

## Logical Path

1. 需求：客户端仍使用缓存中的旧地址。
2. 较长缓存降低查询频率，但变更后旧答案可能持续生效，因此 DNS 修改不意味着所有客户端立即切换。
3. 结果：流量切换受缓存窗口影响。

## Key Terms

- DNS Time To Live：生存时间决定解析器可缓存答案多久。

## Example

示意例：客户端仍使用缓存中的旧地址，直到缓存到期才查询新值，说明流量切换受缓存窗口影响。

## Sources

- [课件 p.202：Route 53 – Records TTL (Time T o Live) Client Web Server DNS Requestmyapp.example.com? TTL AmazonRoute 53A 12.34.56.78(with T](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=202)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
