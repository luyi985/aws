---
id: saa-governance-organizations-158
title: 多账户管理与组织单元（AWS Organizations）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=625
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=626
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=627
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=628
dependencies: []
---

# saa-governance-organizations-158: 多账户管理与组织单元（AWS Organizations）

## Learning Objective

在“开发和生产分别使用账户并放入不同组织单元”的场景中，能说明多账户管理与组织单元的判断依据，并指出适用限制。

## Scope

- Included: 多账户管理与组织单元的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

组织服务把账户分组并集中管理账单和治理。

## Logical Path

1. 需求：开发和生产分别使用账户并放入不同组织单元。
2. 账户与 VPC 是不同隔离层，组织单元用于向一组账户施加管理规则。
3. 结果：多账户设计建立明确的管理边界。

## Key Terms

- AWS Organizations：组织服务把账户分组并集中管理账单和治理。

## Example

示意例：开发和生产分别使用账户并放入不同组织单元，说明多账户设计建立明确的管理边界。

## Sources

- [课件 p.625：AWS Organizations](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=625)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.626：AWS OrganizationsRoot Organizational Unit (OU) Management AccountOU (Dev) Member Accounts OU (Prod) OU (HR) OU (Finance)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=626)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.627：Organizational Units (OU) - ExamplesBusiness Unit Management Account Sales OU Retail OU Finance OU SalesAccount 1SalesAccount](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=627)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.628：AWS Organizations](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=628)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
