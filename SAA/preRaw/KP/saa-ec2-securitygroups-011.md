---
id: saa-ec2-securitygroups-011
title: 安全组如何限制访问（Security group）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=52
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=53
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=56
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=726
- https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html
dependencies: []
verified_at: '2026-11-04'
---

# saa-ec2-securitygroups-011: 安全组如何限制访问（Security group）

## Learning Objective

给出入站、出站和返回流量，判断安全组是否允许该连接。

## Scope

- Included: 安全组如何限制访问的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-iam-policies-004](saa-iam-policies-004.md)。

## Knowledge Point

安全组（security group）是关联资源的有状态（stateful）允许规则集合。规则按协议、端口及来源或目的地匹配；对已允许连接的响应流量，无需另建相反方向的允许规则。

## Logical Path

1. 先按连接发起方向检查相关允许规则。
2. 允许后，由连接跟踪放行相应返回流量；这不意味着任何反向新连接都被允许。
3. 引用另一个安全组表达来自其关联资源的流量范围，但不自动建立路由或授予应用权限。

## Key Terms

- Stateful：对已跟踪连接的返回流量保留状态。
- Security group reference：使用另一安全组标识相关流量来源或目的资源。

## Example

示意例：数据库只允许应用安全组访问数据库端口，响应应用连接的流量可返回；数据库主动向应用建立的新连接仍须另查规则。这体现有状态返回与新连接的区别。

## Sources

- [课件 p.52：Introduction to Security Groups](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=52)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.53：Security GroupsDeeper Dive](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=53)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.56：Referencing other security groupsDiagram EC2 InstanceIP XX.XX.XX.XX Port 123 Port 123 Port 123 Security Group 1InboundAuthori](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=56)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.726：Security Group vs. NACLsSecurity GroupNACLOperates at the instance levelOperates at the subnet levelSupports allow rules only](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=726)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：允许规则、流量方向和有状态返回流量](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html)。用于核验上述具体边界；查阅日期：2026-11-04。
