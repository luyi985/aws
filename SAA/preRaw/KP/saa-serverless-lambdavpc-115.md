---
id: saa-serverless-lambdavpc-115
title: 函数访问私有数据库（Lambda VPC networking）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=467
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=468
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=469
- https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc-internet.html
dependencies:
- saa-serverless-lambda-111
- saa-network-subnets-178
verified_at: '2026-11-04'
---

# saa-serverless-lambdavpc-115: 函数访问私有数据库（Lambda VPC networking）

## Learning Objective

解释 VPC 函数为什么能连私有数据库却未必能访问公网。

## Scope

- Included: 函数访问私有数据库的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-serverless-lambda-111、saa-network-subnets-178。

建议阅读（不阻塞学习）：[saa-ec2-eni-017](saa-ec2-eni-017.md)。

## Knowledge Point

Lambda 的 VPC 配置使用指定子网中的网络接口访问私有资源，并受路由、安全组和角色权限约束。把函数放到公有子网不会给它公网 IP，也不会自动获得互联网访问。

## Logical Path

1. 先确认函数到私有目标的路由与安全组许可。
2. 需要公网 IPv4 出口时，配置适用的 NAT 和互联网路由；仅有 VPC 连接不够。
3. 访问受支持 AWS 服务也可评估 VPC 端点；私有目标访问与互联网出口应分别验证。

## Key Terms

- VPC configuration：函数使用的 VPC、子网及安全组配置。
- Internet egress：从私网发起公网访问所需的网络出口。

## Example

示意例：函数可访问私有数据库却无法调用公网 API 时检查出口路由，说明私网访问和公网出口是不同需求。

## Sources

- [课件 p.467：Lambda by default VPC & Private Subnet AWS Cloud Private RDS DynamoDB Not working Default Lambda Deployment Public www works](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=467)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.468：Private subnet Lambda in VPC](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=468)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.469：Lambda with RDS Proxy](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=469)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：私有资源访问与互联网出口须分别配置](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc-internet.html)。用于核验上述具体边界；查阅日期：2026-11-04。
