---
id: saa-security-acm-170
title: 证书生命周期与部署位置（AWS Certificate Manager）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=675
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=676
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=677
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=678
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=679
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=680
dependencies:
- saa-elb-tls-035
---

# saa-security-acm-170: 证书生命周期与部署位置（AWS Certificate Manager）

## Learning Objective

在“为区域负载均衡器选择匹配区域的证书”的场景中，能说明证书生命周期与部署位置的判断依据，并指出适用限制。

## Scope

- Included: 证书生命周期与部署位置的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-elb-tls-035。

## Knowledge Point

证书管理服务处理证书申请、验证和受支持集成中的部署。

## Logical Path

1. 需求：为区域负载均衡器选择匹配区域的证书。
2. 证书区域需匹配入口类型，导入证书与托管签发证书的续期责任也不同。
3. 结果：证书存在不代表可部署到任意入口。

## Key Terms

- AWS Certificate Manager：证书管理服务处理证书申请、验证和受支持集成中的部署。

## Example

示意例：为区域负载均衡器选择匹配区域的证书，说明证书存在不代表可部署到任意入口。

## Sources

- [课件 p.675：AWS Certificate Manager (ACM)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=675)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.676：ACM – Requesting Public Certificates1.List domain names to be included in the certificate](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=676)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.677：ACM – Importing Public Certificates](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=677)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.678：ACM – Integration with ALB Auto Scaling group EC2 InstanceEC2 Instance AWS Certificate Manager Application Load BalancerWith ](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=678)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.679：API Gateway - Endpoint Types](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=679)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.680：ACM – Integration with API Gateway](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=680)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
