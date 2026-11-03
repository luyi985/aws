---
id: saa-operations-patching-202
title: 补丁规则与维护窗口（SSM Patch Manager）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=830
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=831
dependencies: []
---

# saa-operations-patching-202: 补丁规则与维护窗口（SSM Patch Manager）

## Learning Objective

在“先识别缺失补丁”的场景中，能说明补丁规则与维护窗口的判断依据，并指出适用限制。

## Scope

- Included: 补丁规则与维护窗口的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-operations-runcommand-201](saa-operations-runcommand-201.md)。

## Knowledge Point

补丁管理按规则扫描和安装更新，维护窗口限定允许执行的时间及目标。

## Logical Path

1. 需求：先识别缺失补丁。
2. 合规扫描与实际安装是不同动作，发布后仍需验证服务健康。
3. 结果：补丁运维需要同时管理规则与执行时机。

## Key Terms

- SSM Patch Manager：补丁管理按规则扫描和安装更新，维护窗口限定允许执行的时间及目标。

## Example

示意例：先识别缺失补丁，再在约定维护窗口安装，说明补丁运维需要同时管理规则与执行时机。

## Sources

- [课件 p.830：Systems Manager – Patch Manager](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=830)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.831：Systems Manager – Maintenance Windows](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=831)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
