---
id: saa-security-waf-171
title: 应用层请求过滤（AWS Web Application Firewall）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=681
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=682
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=683
dependencies: []
---

# saa-security-waf-171: 应用层请求过滤（AWS Web Application Firewall）

## Learning Objective

在“对特定恶意请求模式进行阻止”的场景中，能说明应用层请求过滤的判断依据，并指出适用限制。

## Scope

- Included: 应用层请求过滤的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-elb-alb-030](saa-elb-alb-030.md)。

## Knowledge Point

Web 防火墙按 HTTP 请求特征允许、阻止或限速流量，部署在受支持的应用入口。

## Logical Path

1. 需求：对特定恶意请求模式进行阻止。
2. 它不能替代网络路由和应用自身的身份授权。
3. 结果：请求过滤与业务授权承担不同职责。

## Key Terms

- AWS Web Application Firewall：Web 防火墙按 HTTP 请求特征允许、阻止或限速流量，部署在受支持的应用入口。

## Example

示意例：对特定恶意请求模式进行阻止，同时应用继续检查用户权限，说明请求过滤与业务授权承担不同职责。

## Sources

- [课件 p.681：AWS WAF – Web Application Firewall](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=681)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.682：AWS WAF – Web Application Firewall](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=682)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.683：WAF – Fixed IP while using WAF with a Load Balancer](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=683)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
