---
id: saa-security-shield-172
title: 分布式拒绝服务防护（AWS Shield）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=684
dependencies: []
---

# saa-security-shield-172: 分布式拒绝服务防护（AWS Shield）

## Learning Objective

在“网络洪泛由抗拒绝服务机制缓解”的场景中，能说明分布式拒绝服务防护的判断依据，并指出适用限制。

## Scope

- Included: 分布式拒绝服务防护的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-edge-cloudfront-081](saa-edge-cloudfront-081.md)。

## Knowledge Point

拒绝服务防护缓解大量恶意流量对可用性的冲击，防护层级和支持能力取决于方案。

## Logical Path

1. 需求：网络洪泛由抗拒绝服务机制缓解。
2. 它与细粒度应用请求规则互补。
3. 结果：不同攻击层次需要不同控制。

## Key Terms

- AWS Shield：拒绝服务防护缓解大量恶意流量对可用性的冲击，防护层级和支持能力取决于方案。

## Example

示意例：网络洪泛由抗拒绝服务机制缓解，恶意 HTTP 模式再由应用防火墙过滤，说明不同攻击层次需要不同控制。

## Sources

- [课件 p.684：AWS Shield: protect from DDoS attack](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=684)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
