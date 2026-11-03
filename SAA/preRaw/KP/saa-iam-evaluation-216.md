---
id: saa-iam-evaluation-216
title: 有效权限的合并与约束（IAM policy evaluation）
status: pending
sources:
- https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html
- preRaw/Design_Secure_Architectures/IAM.md#L122
dependencies:
- saa-iam-policies-004
verified_at: '2026-11-04'
---

# saa-iam-evaluation-216: 有效权限的合并与约束（IAM policy evaluation）

## Learning Objective

给定身份策略、资源策略与边界，指出允许、显式拒绝和隐式拒绝的作用。

## Scope

- Included: 有效权限的合并与约束的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-iam-policies-004。

## Knowledge Point

权限判断先确定请求主体、动作、资源和上下文，再评估适用策略。同账户身份与资源策略可共同授权，但权限边界、组织策略及主体类型会影响最终结果；显式拒绝覆盖适用允许。

## Logical Path

1. 不存在适用授权时通常为隐式拒绝。
2. 对适用策略检查允许，再应用边界或组织上限；不能用一条 Allow 解释所有场景。
3. 资源策略向用户、角色或会话直接授权有不同细节，跨账户还需单独检查两侧关系。

## Key Terms

- Explicit deny：策略明确拒绝请求。
- Implicit deny：没有取得所需有效授权而拒绝。
- Permissions boundary：限制身份策略最大可授予权限的边界。

## Example

示意例：用户策略允许读取报告，但适用策略明确拒绝非安全传输，HTTP 读取仍被拒绝。例子说明允许与显式拒绝的优先关系。

## Sources

- [AWS 官方：同账户策略合并、边界交集与显式拒绝](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html)。用于核验上述具体边界；查阅日期：2026-11-04。
- [本地笔记 IAM.md，L122](../Design_Secure_Architectures/IAM.md#L122)。补充课程定义或场景；笔记中的口号、绝对化说法不替代官方限制。
