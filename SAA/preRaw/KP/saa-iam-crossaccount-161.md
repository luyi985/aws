---
id: saa-iam-crossaccount-161
title: 跨账户访问的两条路径（Cross-account role and resource policy）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=636
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=637
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=638
- https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html
- preRaw/Design_Secure_Architectures/IAM.md#L196
dependencies:
- saa-iam-stssessions-215
- saa-iam-policies-004
verified_at: '2026-11-04'
---

# saa-iam-crossaccount-161: 跨账户访问的两条路径（Cross-account role and resource policy）

## Learning Objective

沿调用方授权、角色信任、临时会话和目标资源权限检查跨账户访问。

## Scope

- Included: 跨账户访问的两条路径的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-iam-stssessions-215、saa-iam-policies-004。

建议阅读（不阻塞学习）：[saa-iam-serviceroles-007](saa-iam-serviceroles-007.md)、[saa-s3-bucketpolicy-061](saa-s3-bucketpolicy-061.md)。

## Knowledge Point

跨账户角色访问先通过 STS 承担目标角色，再用其临时凭证操作资源。角色信任策略决定谁能承担，角色权限决定会话能做什么；资源策略则可在不改用该角色身份时直接授权受支持资源的访问。

## Logical Path

1. 调用账户授权主体调用目标角色的 sts:AssumeRole，同时目标角色信任该主体。
2. 获得临时角色会话后，按角色权限及适用边界访问目标资源。
3. 区分“承担角色失败”与“承担成功但资源操作拒绝”；后者不应通过单独扩大信任策略解决。

## Key Terms

- Cross-account role access：使用目标账户角色会话访问资源。
- Resource-based policy：附加在资源上、声明哪些主体可访问的策略。

## Example

示意例：账户 A 的应用可承担账户 B 的导出角色，但角色只有读对象权限，因此上传仍被拒绝。例子说明取得角色会话不等于获得所有资源操作权限。

## Sources

- [课件 p.636：IAM Roles vs Resource Based Policies](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=636)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.637：IAM Roles vs Resource-Based Policies](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=637)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.638：Amazon EventBridge – Security](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=638)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：临时凭证组成、信任策略、权限策略及会话限制](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html)。用于核验上述具体边界；查阅日期：2026-11-04。
- [本地笔记 IAM.md，L196](../Design_Secure_Architectures/IAM.md#L196)。补充课程定义或场景；笔记中的口号、绝对化说法不替代官方限制。
