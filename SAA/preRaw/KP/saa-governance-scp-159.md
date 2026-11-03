---
id: saa-governance-scp-159
title: 组织权限上限（Service Control Policy）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=628
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=629
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=630
- https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html
- https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html
dependencies:
- saa-governance-organizations-158
- saa-iam-policies-004
verified_at: '2026-11-04'
---

# saa-governance-scp-159: 组织权限上限（Service Control Policy）

## Learning Objective

判断 SCP 为什么能限制管理员角色，却不能自行授予业务权限。

## Scope

- Included: 组织权限上限的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-governance-organizations-158、saa-iam-policies-004。

## Knowledge Point

服务控制策略（SCP）给适用组织账户的主体设定权限上限，本身不授权具体操作。有效授权仍需相关策略允许，且显式拒绝优先；管理账户和服务关联角色等适用例外需要分别判断。

## Logical Path

1. 先确认主体及账户是否在 SCP 适用范围。
2. 沿组织层级检查允许范围和显式拒绝，再与身份权限结合。
3. 成员账户管理员策略不能越过适用 SCP 的禁止项；跨账户资源访问还要考虑资源侧授权。

## Key Terms

- SCP：Service Control Policy，对适用组织主体约束最大权限的策略。

## Example

示意例：成员账户角色有管理员策略，但受组织策略禁止某操作，说明账户内允许可能仍受组织上限约束。

## Sources

- [课件 p.628：AWS Organizations](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=628)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.629：SCP HierarchyOU (Root) Management Account OU (Sandbox) OU (Test) Account AAccount D FullAWSAccessDeny AthenaFullAWSAccess + D](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=629)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.630：SCP ExamplesBlocklist and Allowlist strategies More examples: https://docs.aws.amazon.com/organizations/latest/userguide/orgs](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=630)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：同账户策略合并、边界交集与显式拒绝](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html)。用于核验上述具体边界；查阅日期：2026-11-04。
- [AWS 官方：不授予权限、成员账户范围与适用例外](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html)。用于核验上述具体边界；查阅日期：2026-11-04。
