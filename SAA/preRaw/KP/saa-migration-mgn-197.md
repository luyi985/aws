---
id: saa-migration-mgn-197
title: 服务器重新托管迁移（Application Migration Service）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=794
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=795
dependencies: []
---

# saa-migration-mgn-197: 服务器重新托管迁移（Application Migration Service）

## Learning Objective

在“先启动测试实例确认应用与外部依赖”的场景中，能说明服务器重新托管迁移的判断依据，并指出适用限制。

## Scope

- Included: 服务器重新托管迁移的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

建议阅读（不阻塞学习）：[saa-recovery-strategies-194](saa-recovery-strategies-194.md)。

## Knowledge Point

应用迁移通过复制服务器数据并在云端启动测试或切换实例，减少重装应用的工作。

## Logical Path

1. 需求：先启动测试实例确认应用与外部依赖。
2. 重新托管不自动完成架构现代化，依赖关系和启动验证仍需处理。
3. 结果：复制完成只是迁移流程的一部分。

## Key Terms

- Application Migration Service：应用迁移通过复制服务器数据并在云端启动测试或切换实例，减少重装应用的工作。

## Example

示意例：先启动测试实例确认应用与外部依赖，再安排最终切换，说明复制完成只是迁移流程的一部分。

## Sources

- [课件 p.794：AWS Application Discovery Service](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=794)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.795：AWS Application Migration Service (MGN)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=795)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
