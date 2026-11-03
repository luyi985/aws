---
id: saa-dns-georouting-056
title: 按地理信息选择解析目标（Geolocation and geoproximity routing）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=215
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=216
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=217
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=219
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=220
dependencies:
- saa-dns-routing-054
---

# saa-dns-georouting-056: 按地理信息选择解析目标（Geolocation and geoproximity routing）

## Learning Objective

在“业务要求某国用户进入指定站点时选择地理规则”的场景中，能说明按地理信息选择解析目标的判断依据，并指出适用限制。

## Scope

- Included: 按地理信息选择解析目标的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-dns-routing-054。

## Knowledge Point

地理位置、地理邻近和基于地址范围的策略采用不同选择依据，多值答案则可返回多个健康地址。

## Logical Path

1. 需求：业务要求某国用户进入指定站点时选择地理规则。
2. 应从地域规则还是延迟目标出发选择，不能混为一谈。
3. 结果：按地理信息选择解析目标。

## Key Terms

- Geolocation and geoproximity routing：地理位置、地理邻近和基于地址范围的策略采用不同选择依据，多值答案则可返回多个健康地址。

## Example

示意例：业务要求某国用户进入指定站点时选择地理规则，而不是假设最低延迟总会满足该地域要求。

## Sources

- [课件 p.215：Routing Policies – Geolocation](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=215)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.216：Routing Policies – Geoproximity](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=216)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.217：Routing Policies – Geoproximity us-east-1 us-west-1 Bias: 0 Bias: 0](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=217)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.219：Routing Policies – IP-based Routing](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=219)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.220：Routing Policies – Multi-Value](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=220)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
