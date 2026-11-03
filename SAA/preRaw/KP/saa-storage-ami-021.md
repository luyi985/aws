---
id: saa-storage-ami-021
title: 机器镜像与实例复制（Amazon Machine Image）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=100
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=101
dependencies:
- saa-storage-snapshots-020
---

# saa-storage-ami-021: 机器镜像与实例复制（Amazon Machine Image）

## Learning Objective

在“把安装好应用的服务器制作成镜像”的场景中，能说明机器镜像与实例复制的判断依据，并指出适用限制。

## Scope

- Included: 机器镜像与实例复制的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-storage-snapshots-020。

## Knowledge Point

镜像封装操作系统、软件与配置，用作创建实例的模板。

## Logical Path

1. 需求：把安装好应用的服务器制作成镜像。
2. 提前制作镜像能减少启动后的配置工作，镜像维护与复制范围仍需管理。
3. 结果：镜像复制的是启动模板而非实时运行状态。

## Key Terms

- Amazon Machine Image：镜像封装操作系统、软件与配置，用作创建实例的模板。

## Example

示意例：把安装好应用的服务器制作成镜像，再创建两台相同配置的实例，说明镜像复制的是启动模板而非实时运行状态。

## Sources

- [课件 p.100：AMI Overview](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=100)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.101：AMI Process (from an EC2 instance)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=101)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
