---
id: saa-security-inspector-175
title: 软件漏洞与暴露风险评估（Amazon Inspector）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=693
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=694
dependencies: []
---

# saa-security-inspector-175: 软件漏洞与暴露风险评估（Amazon Inspector）

## Learning Objective

在“镜像扫描发现存在已知漏洞的依赖包”的场景中，能说明软件漏洞与暴露风险评估的判断依据，并指出适用限制。

## Scope

- Included: 软件漏洞与暴露风险评估的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

漏洞评估检查受支持计算资源和镜像的软件等风险，并给出发现项用于排序处理。

## Logical Path

1. 需求：镜像扫描发现存在已知漏洞的依赖包。
2. 它着重已知漏洞等问题，区别于行为异常检测。
3. 结果：扫描用于推动软件修复。

## Key Terms

- Amazon Inspector：漏洞评估检查受支持计算资源和镜像的软件等风险，并给出发现项用于排序处理。

## Example

示意例：镜像扫描发现存在已知漏洞的依赖包，修复后重新发布，说明扫描用于推动软件修复。

## Sources

- [课件 p.693：Amazon Inspector](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=693)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.694：What does Amazon Inspector evaluate?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=694)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
