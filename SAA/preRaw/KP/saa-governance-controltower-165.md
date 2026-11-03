---
id: saa-governance-controltower-165
title: 多账户环境的基线治理（AWS Control Tower）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=651
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=652
dependencies:
- saa-governance-organizations-158
- saa-audit-config-157
- saa-governance-scp-159
---

# saa-governance-controltower-165: 多账户环境的基线治理（AWS Control Tower）

## Learning Objective

在“新账户创建后自动获得基线控制”的场景中，能说明多账户环境的基线治理的判断依据，并指出适用限制。

## Scope

- Included: 多账户环境的基线治理的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-governance-organizations-158、saa-audit-config-157、saa-governance-scp-159。

## Knowledge Point

控制塔编排多账户环境的建立与治理，结合预防性与检测性控制落实基线。

## Logical Path

1. 需求：新账户创建后自动获得基线控制。
2. 它利用底层组织和配置机制，仍需结合工作负载定义具体权限。
3. 结果：治理可以在账户进入组织时统一建立。

## Key Terms

- AWS Control Tower：控制塔编排多账户环境的建立与治理，结合预防性与检测性控制落实基线。

## Example

示意例：新账户创建后自动获得基线控制，说明治理可以在账户进入组织时统一建立。

## Sources

- [课件 p.651：AWS Control Tower](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=651)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.652：AWS Control Tower – Guardrails](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=652)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
