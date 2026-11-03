---
id: saa-iam-serviceroles-007
title: 服务如何取得访问权限（IAM role）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=37
- https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html
- preRaw/Design_Secure_Architectures/IAM.md#L42
dependencies:
- saa-iam-policies-004
verified_at: '2026-11-04'
---

# saa-iam-serviceroles-007: 服务如何取得访问权限（IAM role）

## Learning Objective

说明服务承担角色时，信任关系与操作权限分别解决什么问题。

## Scope

- Included: 服务如何取得访问权限的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-iam-policies-004。

建议阅读（不阻塞学习）：[saa-iam-stssessions-215](saa-iam-stssessions-215.md)。

## Knowledge Point

服务角色（service role）让受信任的 AWS 服务以指定权限执行操作。信任策略决定谁可承担角色，权限策略决定角色会话可做什么；临时凭证不需要以用户长期密钥形式写入应用。

## Logical Path

1. 确认服务能否按信任策略承担角色。
2. 检查角色策略是否允许目标动作和资源。
3. 由支持的凭证提供机制取得并刷新临时凭证；不能把“临时”理解为任何客户端都会自动续期。

## Key Terms

- Trust policy：定义谁能够承担角色的资源策略。
- Permissions policy：定义角色会话可以执行的操作。

## Example

示意例：EC2 上的应用需要读取 S3，给实例配置允许读取目标对象的角色，说明服务权限应绑定到工作负载身份。

## Sources

- [课件 p.37：IAM Roles for Services](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=37)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：临时凭证组成、信任策略、权限策略及会话限制](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html)。用于核验上述具体边界；查阅日期：2026-11-04。
- [本地笔记 IAM.md，L42](../Design_Secure_Architectures/IAM.md#L42)。补充课程定义或场景；笔记中的口号、绝对化说法不替代官方限制。
