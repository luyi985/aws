---
id: saa-iac-cloudformation-199
title: 声明式基础设施与依赖（AWS CloudFormation）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=821
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=822
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=823
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=824
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=825
- preRaw/code_v2025-10-27/cloudformation/0-just-ec2.yaml#L2
dependencies: []
---

# saa-iac-cloudformation-199: 声明式基础设施与依赖（AWS CloudFormation）

## Learning Objective

在“模板声明实例引用安全组”的场景中，能说明声明式基础设施与依赖的判断依据，并指出适用限制。

## Scope

- Included: 声明式基础设施与依赖的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-iam-serviceroles-007](saa-iam-serviceroles-007.md)。

## Knowledge Point

模板声明所需资源及关系，由编排服务按依赖创建和更新。

## Logical Path

1. 需求：模板声明实例引用安全组。
2. 服务角色决定编排操作可用权限，模板可审查不代表任何更新都没有替换风险。
3. 结果：资源关系可进入版本管理与自动编排。

## Key Terms

- AWS CloudFormation：模板声明所需资源及关系，由编排服务按依赖创建和更新。

## Example

示意例：模板声明实例引用安全组，创建时先满足依赖，说明资源关系可进入版本管理与自动编排。

## Sources

- [课件 p.821：What is CloudFormation](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=821)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.822：Benefits of AWS CloudFormation (1/2)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=822)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.823：Benefits of AWS CloudFormation (2/2)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=823)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.824：CloudFormation + Infrastructure Composer](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=824)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.825：CloudFormation – Service Role](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=825)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [配套代码 0-just-ec2.yaml，L2](../code_v2025-10-27/cloudformation/0-just-ec2.yaml#L2)。示例实现参考，未运行；读取的本地提交为 22ce5d14c5da846c47c3fd9bc1a09c685e09e586。
