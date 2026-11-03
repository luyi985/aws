---
id: saa-governance-ram-229
title: 跨账户共享受支持资源（AWS Resource Access Manager）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=752
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=755
- https://docs.aws.amazon.com/ram/latest/userguide/what-is.html
dependencies:
- saa-governance-organizations-158
verified_at: '2026-11-04'
---

# saa-governance-ram-229: 跨账户共享受支持资源（AWS Resource Access Manager）

## Learning Objective

区分资源共享、资源复制与跨账户承担角色。

## Scope

- Included: 跨账户共享受支持资源的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-governance-organizations-158。

## Knowledge Point

资源访问管理器（Resource Access Manager，RAM）把受支持资源共享给其他账户或组织范围，让多个账户使用同一资源。共享不改变资源所有者，也不会自动配置业务网络路径。

## Logical Path

1. 确认目标资源类型支持共享。
2. 选择获准账户或组织范围并按适用规则建立共享。
3. 另行配置使用权限和路由；共享中转网关不等于所有 VPC 互通。

## Key Terms

- Resource share：关联资源、共享权限和接收主体的共享单元。

## Example

示意例：网络账户共享 Transit Gateway 给应用账户，应用账户仍需建立接入并配置路由。例子说明共享授权与数据通路分别建立。

## Sources

- [课件 p.752：Transit Gateway](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=752)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.755：Transit Gateway – Share Direct Connect between multiple accounts AWS DirectConnect Location Corporatedata center Clients Clie](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=755)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：共享受支持资源而不复制资源](https://docs.aws.amazon.com/ram/latest/userguide/what-is.html)。用于核验上述具体边界；查阅日期：2026-11-04。
