---
id: saa-audit-config-157
title: 资源配置历史与合规评估（AWS Config）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=617
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=618
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=619
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=620
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=621
dependencies: []
---

# saa-audit-config-157: 资源配置历史与合规评估（AWS Config）

## Learning Objective

在“规则发现安全组允许过宽访问后再触发修复”的场景中，能说明资源配置历史与合规评估的判断依据，并指出适用限制。

## Scope

- Included: 资源配置历史与合规评估的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-audit-cloudtrail-156](saa-audit-cloudtrail-156.md)。

## Knowledge Point

配置服务记录资源状态变化，并使用规则评估是否符合要求。

## Logical Path

1. 需求：规则发现安全组允许过宽访问后再触发修复。
2. 评估发现不合规与自动修复是不同步骤，不能把检测规则当成预防性拒绝。
3. 结果：配置合规检查关注资源状态。

## Key Terms

- Config rule：评估资源配置是否符合指定要求的规则。

## Example

示意例：规则发现安全组允许过宽访问后再触发修复，说明配置合规检查关注资源状态。

## Sources

- [课件 p.617：AWS Config](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=617)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.618：Config Rules](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=618)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.619：AWS Config Resource](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=619)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.620：Config Rules – Remediations](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=620)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.621：Config Rules – Notifications](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=621)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
