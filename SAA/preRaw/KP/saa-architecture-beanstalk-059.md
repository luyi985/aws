---
id: saa-architecture-beanstalk-059
title: 托管应用环境的边界（Elastic Beanstalk）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=262
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=263
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=265
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=266
dependencies: []
---

# saa-architecture-beanstalk-059: 托管应用环境的边界（Elastic Beanstalk）

## Learning Objective

在“同一个应用选择单实例测试环境和负载均衡生产环境”的场景中，能说明托管应用环境的边界的判断依据，并指出适用限制。

## Scope

- Included: 托管应用环境的边界的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-scaling-asg-037](saa-scaling-asg-037.md)。

## Knowledge Point

应用部署平台按环境配置创建计算、负载均衡和伸缩等资源，让开发者主要提交应用版本。

## Logical Path

1. 需求：同一个应用选择单实例测试环境和负载均衡生产环境。
2. 底层资源仍存在，部署形态与环境容量仍需选择。
3. 结果：托管部署不等于所有环境采用同一架构。

## Key Terms

- Elastic Beanstalk：应用部署平台按环境配置创建计算、负载均衡和伸缩等资源，让开发者主要提交应用版本。

## Example

示意例：同一个应用选择单实例测试环境和负载均衡生产环境，说明托管部署不等于所有环境采用同一架构。

## Sources

- [课件 p.262：Elastic Beanstalk – Overview](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=262)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.263：Elastic Beanstalk – Components](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=263)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.265：Web Ser ver Tier vs. Worker Tier Auto Scaling group Web Environment(myapp.us-east-1.elasticbeanstalk.com) Security Group Avai](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=265)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.266：Elastic Beanstalk Deployment ModesSingle InstanceGreat for devHigh Availability with Load BalancerGreat for prod Availability](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=266)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
