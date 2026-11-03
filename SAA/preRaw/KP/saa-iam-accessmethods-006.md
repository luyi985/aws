---
id: saa-iam-accessmethods-006
title: 控制台与程序化访问（AWS CLI and SDK）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=33
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=35
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=36
- preRaw/AWS_cloudshell.md#L14
dependencies: []
---

# saa-iam-accessmethods-006: 控制台与程序化访问（AWS CLI and SDK）

## Learning Objective

在“控制台和 CLI 都尝试列出同一个桶”的场景中，能说明控制台与程序化访问的判断依据，并指出适用限制。

## Scope

- Included: 控制台与程序化访问的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

控制台、命令行工具和开发工具包是调用 AWS 的不同入口。

## Logical Path

1. 需求：控制台和 CLI 都尝试列出同一个桶。
2. 访问方式不改变请求仍需经过身份验证和权限判断这一点，程序化访问也不等于必须在代码中保存长期密钥。
3. 结果：控制台与程序化访问。

## Key Terms

- AWS CLI：在命令行调用 AWS 服务接口的工具。
- AWS SDK：用于程序中调用 AWS 服务接口的语言库。

## Example

示意例：控制台和 CLI 都尝试列出同一个桶，若当前身份没有相应权限，两种入口都不能绕过授权检查。

## Sources

- [课件 p.33：How can users access AWS ?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=33)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.35：What’s the AWS CLI?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=35)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.36：What’s the AWS SDK?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=36)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [本地笔记 AWS_cloudshell.md，L14](../AWS_cloudshell.md#L14)。补充课程定义或场景；笔记中的口号、绝对化说法不替代官方限制。
