---
id: saa-iam-identities-003
title: 身份与权限分组（IAM identities）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=25
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=26
- https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html
- preRaw/Design_Secure_Architectures/content.md#L32
- https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html
dependencies: []
verified_at: '2026-11-04'
---

# saa-iam-identities-003: 身份与权限分组（IAM identities）

## Learning Objective

区分用户、组与角色，并为员工登录和应用访问选择适合的身份。

## Scope

- Included: 身份与权限分组的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

身份（identity）标识请求主体，策略决定其可执行的动作。用户组只容纳用户，不容纳角色或其他组。IAM 用户可以表示人或工作负载，但应优先评估联合身份和临时角色凭证，而不是把“用户只代表人”当成类型限制。

## Logical Path

1. 先确定调用主体是员工还是工作负载。
2. 把身份与权限分开：创建身份不自动授予业务权限。
3. 用户可通过组集中获得权限；工作负载以适当角色获得临时访问。

## Key Terms

- IAM user：具有名称和可配置凭证的账户内身份。
- IAM group：用于向一组用户分配权限的容器。
- IAM role：由可信主体承担、用于取得临时权限的身份。

## Example

示意例：将三名开发者加入开发组并给组分配只读权限，三人继承相同权限，说明用户组减少重复授权。

## Sources

- [课件 p.25：IAM: Users & Groups](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=25)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.26：IAM: Permissions](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=26)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：临时凭证组成、信任策略、权限策略及会话限制](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html)。用于核验上述具体边界；查阅日期：2026-11-04。
- [本地笔记 content.md，L32](../Design_Secure_Architectures/content.md#L32)。补充课程定义或场景；笔记中的口号、绝对化说法不替代官方限制。
- [AWS 官方：IAM 用户可表示人或工作负载，优先采用联合身份及临时凭证](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html)。用于核验上述具体边界；查阅日期：2026-11-04。
