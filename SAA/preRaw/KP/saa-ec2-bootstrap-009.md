---
id: saa-ec2-bootstrap-009
title: 实例首次启动初始化（EC2 user data）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=44
- preRaw/code_v2025-10-27/ec2-fundamentals/ec2-user-data.sh#L4
dependencies: []
---

# saa-ec2-bootstrap-009: 实例首次启动初始化（EC2 user data）

## Learning Objective

在“实例首次启动自动安装 Web 服务并生成主页”的场景中，能说明实例首次启动初始化的判断依据，并指出适用限制。

## Scope

- Included: 实例首次启动初始化的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

用户数据脚本用于自动完成实例启动配置，课程中的默认行为是在首次启动时运行。

## Logical Path

1. 需求：实例首次启动自动安装 Web 服务并生成主页。
2. 它适合安装软件和配置服务，设计时应考虑执行权限与重复运行的影响。
3. 结果：初始化脚本把手动部署步骤变成可重复的启动过程。

## Key Terms

- EC2 user data：用户数据脚本用于自动完成实例启动配置，课程中的默认行为是在首次启动时运行。

## Example

示意例：实例首次启动自动安装 Web 服务并生成主页，说明初始化脚本把手动部署步骤变成可重复的启动过程。

## Sources

- [课件 p.44：EC2 User Data](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=44)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [配套代码 ec2-user-data.sh，L4](../code_v2025-10-27/ec2-fundamentals/ec2-user-data.sh#L4)。示例实现参考，未运行；读取的本地提交为 22ce5d14c5da846c47c3fd9bc1a09c685e09e586。
