---
id: saa-iam-stssessions-215
title: 临时凭证的签发与续用（STS AssumeRole）
status: pending
sources:
- https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html
- preRaw/Design_Secure_Architectures/IAM.md#L179
dependencies:
- saa-iam-serviceroles-007
verified_at: '2026-11-04'
---

# saa-iam-stssessions-215: 临时凭证的签发与续用（STS AssumeRole）

## Learning Objective

说明临时凭证的三个组成部分、权限来源和到期后的处理。

## Scope

- Included: 临时凭证的签发与续用的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-iam-serviceroles-007。

## Knowledge Point

安全令牌服务（Security Token Service，STS）可通过 AssumeRole 签发临时角色会话凭证，包括访问键、密钥和会话令牌。临时凭证会到期，业务权限受角色及可选会话策略等约束。

## Logical Path

1. 先由信任关系和调用权限决定能否承担角色。
2. 会话策略可以进一步限制角色会话，不能扩大角色权限。
3. 客户端必须使用仍有效的凭证；支持的 SDK 凭证提供器可以刷新，手工固定凭证不会自动续期。

## Key Terms

- Session token：临时凭证中与访问键和密钥一起使用的会话令牌。
- Session policy：限制临时会话权限的策略。

## Example

示意例：应用把一次 AssumeRole 的三个凭证值写死，过期后访问失败；改由支持刷新的凭证提供器取得新会话。例子说明临时凭证与自动续期不是同一概念。

## Sources

- [AWS 官方：临时凭证组成、信任策略、权限策略及会话限制](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html)。用于核验上述具体边界；查阅日期：2026-11-04。
- [本地笔记 IAM.md，L179](../Design_Secure_Architectures/IAM.md#L179)。补充课程定义或场景；笔记中的口号、绝对化说法不替代官方限制。
