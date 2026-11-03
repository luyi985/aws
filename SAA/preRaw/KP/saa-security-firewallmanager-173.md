---
id: saa-security-firewallmanager-173
title: 跨账户集中安全策略（AWS Firewall Manager）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=685
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=686
dependencies:
- saa-governance-organizations-158
- saa-security-waf-171
---

# saa-security-firewallmanager-173: 跨账户集中安全策略（AWS Firewall Manager）

## Learning Objective

在“新建账户的应用入口自动纳入统一 Web 防火墙策略”的场景中，能说明跨账户集中安全策略的判断依据，并指出适用限制。

## Scope

- Included: 跨账户集中安全策略的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-governance-organizations-158、saa-security-waf-171。

## Knowledge Point

防火墙管理器向组织内资源集中部署和维护受支持的安全策略。

## Logical Path

1. 需求：新建账户的应用入口自动纳入统一 Web 防火墙策略。
2. 它负责一致管理，实际流量检查由相关防护服务执行。
3. 结果：集中治理降低策略遗漏。

## Key Terms

- AWS Firewall Manager：防火墙管理器向组织内资源集中部署和维护受支持的安全策略。

## Example

示意例：新建账户的应用入口自动纳入统一 Web 防火墙策略，说明集中治理降低策略遗漏。

## Sources

- [课件 p.685：AWS Firewall Manager](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=685)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.686：WAF vs. Firewall Manager vs. Shield](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=686)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
