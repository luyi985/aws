---
id: saa-security-parameterstore-168
title: 分层配置与加密参数（SSM Parameter Store）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=669
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=670
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=671
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=672
dependencies: []
---

# saa-security-parameterstore-168: 分层配置与加密参数（SSM Parameter Store）

## Learning Objective

在“开发和生产应用读取各自路径的配置”的场景中，能说明分层配置与加密参数的判断依据，并指出适用限制。

## Scope

- Included: 分层配置与加密参数的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-iam-serviceroles-007](saa-iam-serviceroles-007.md)。

## Knowledge Point

参数存储集中管理配置值、版本和层级路径，并可用 KMS 保护敏感参数。

## Logical Path

1. 需求：开发和生产应用读取各自路径的配置。
2. 应用读取还需路径权限，配置存储本身不等于自动轮换凭证。
3. 结果：层级和授权可以共同隔离环境。

## Key Terms

- SSM Parameter Store：参数存储集中管理配置值、版本和层级路径，并可用 KMS 保护敏感参数。

## Example

示意例：开发和生产应用读取各自路径的配置，说明层级和授权可以共同隔离环境。

## Sources

- [课件 p.669：SSM Parameter Store](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=669)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.670：SSM Parameter Store Hierarchy](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=670)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.671：Standard and advanced parameter tiersStandard AdvancedTotal number of parameters allowed(per AWS account and Region) 10,000 1](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=671)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.672：Parameters Policies (for advanced parameters)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=672)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
