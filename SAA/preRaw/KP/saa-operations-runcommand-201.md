---
id: saa-operations-runcommand-201
title: 对受管节点批量执行命令（SSM Run Command）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=829
dependencies: []
---

# saa-operations-runcommand-201: 对受管节点批量执行命令（SSM Run Command）

## Learning Objective

在“对某资源组统一执行诊断脚本并收集结果”的场景中，能说明对受管节点批量执行命令的判断依据，并指出适用限制。

## Scope

- Included: 对受管节点批量执行命令的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-operations-sessionmanager-200](saa-operations-sessionmanager-200.md)。

## Knowledge Point

远程命令把文档化操作发送到选定受管节点，并跟踪执行状态和输出。

## Logical Path

1. 需求：对某资源组统一执行诊断脚本并收集结果。
2. 它适合非交互式批量运维，与单个交互会话不同。
3. 结果：批量操作可按受管目标组织。

## Key Terms

- SSM Run Command：远程命令把文档化操作发送到选定受管节点，并跟踪执行状态和输出。

## Example

示意例：对某资源组统一执行诊断脚本并收集结果，说明批量操作可按受管目标组织。

## Sources

- [课件 p.829：Systems Manager – Run Command](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=829)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
