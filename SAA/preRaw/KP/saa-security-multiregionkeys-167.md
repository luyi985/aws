---
id: saa-security-multiregionkeys-167
title: 跨区域密钥与资源配置（KMS multi-Region key）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=663
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=664
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=665
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=666
dependencies:
- saa-security-kms-166
---

# saa-security-multiregionkeys-167: 跨区域密钥与资源配置（KMS multi-Region key）

## Learning Objective

在“主区域加密的数据在另一区域用相关副本密钥解密”的场景中，能说明跨区域密钥与资源配置的判断依据，并指出适用限制。

## Scope

- Included: 跨区域密钥与资源配置的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-security-kms-166。

## Knowledge Point

相关多区域密钥共享密钥材料，便于特定跨区域加解密场景。

## Logical Path

1. 需求：主区域加密的数据在另一区域用相关副本密钥解密。
2. 每个区域仍有独立资源标识、策略和管理配置，不能把密钥关联当成所有配置自动同步。
3. 结果：材料关联与管理边界不同。

## Key Terms

- KMS multi-Region key：相关多区域密钥共享密钥材料，便于特定跨区域加解密场景。

## Example

示意例：主区域加密的数据在另一区域用相关副本密钥解密，仍单独配置该区域策略，说明材料关联与管理边界不同。

## Sources

- [课件 p.663：KMS Multi-Region KeysAWS KMS us-east-1 multi-Region Primary keyarn:aws:kms:us-east-1:111122223333:key/mrk-1234abcd12ab34cd56e](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=663)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.664：KMS Multi-Region Keys](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=664)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.665：DynamoDB Global Tables and KMS Multi-Region Keys Client-Side encryption](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=665)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.666：Global Aurora and KMS Multi-Region Keys Client-Side encryption](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=666)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
