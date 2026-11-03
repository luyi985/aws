---
id: saa-containers-ecr-108
title: 镜像存储与拉取授权（Elastic Container Registry）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=436
dependencies: []
---

# saa-containers-ecr-108: 镜像存储与拉取授权（Elastic Container Registry）

## Learning Objective

在“部署失败于拉取镜像时检查仓库权限与网络路径”的场景中，能说明镜像存储与拉取授权的判断依据，并指出适用限制。

## Scope

- Included: 镜像存储与拉取授权的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

容器镜像仓库存储和分发镜像，使用 IAM 控制访问并提供扫描与生命周期功能。

## Logical Path

1. 需求：部署失败于拉取镜像时检查仓库权限与网络路径。
2. 运行任务前需确保镜像地址和拉取身份正确。
3. 结果：应用代码启动前就依赖镜像交付链路。

## Key Terms

- Elastic Container Registry：容器镜像仓库存储和分发镜像，使用 IAM 控制访问并提供扫描与生命周期功能。

## Example

示意例：部署失败于拉取镜像时检查仓库权限与网络路径，说明应用代码启动前就依赖镜像交付链路。

## Sources

- [课件 p.436：Amazon ECR](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=436)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
