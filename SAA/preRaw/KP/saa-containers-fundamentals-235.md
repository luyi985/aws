---
id: saa-containers-fundamentals-235
title: 镜像到容器的运行关系（Container image and container）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=418
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=420
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=421
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=422
- https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-multi-architecture-image.html
dependencies: []
verified_at: '2026-11-04'
---

# saa-containers-fundamentals-235: 镜像到容器的运行关系（Container image and container）

## Learning Objective

沿构建、存储、拉取与运行说明镜像和容器的区别。

## Scope

- Included: 镜像到容器的运行关系的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

容器镜像（container image）打包运行所需的文件与配置；容器（container）是镜像的运行实例。容器与宿主共享内核等资源，不能把课件的跨环境便利理解为任意架构和操作系统都无条件兼容。

## Logical Path

1. 从构建说明产生镜像并保存到镜像仓库。
2. 运行平台拉取兼容镜像并建立容器实例。
3. 确认运行时、CPU 架构与内核兼容性；多个容器不等于多台独立虚拟机。

## Key Terms

- Container image：用于创建运行实例的软件与配置模板。
- Container：在兼容运行环境中执行镜像的实例。

## Example

示意例：同一镜像创建三个容器提供三个应用副本；更换为不兼容 CPU 架构的主机仍需相应镜像。例子说明镜像复用与环境兼容是两回事。

## Sources

- [课件 p.418：What is Docker?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=418)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.420：Where are Docker images stored?](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=420)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.421：Docker vs. Virtual Machines](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=421)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.422：Getting Started with Docker Dockerfile imageBuild Run container Docker Repository AmazonECR PushPull](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=422)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：不同 CPU 架构镜像与兼容平台选择](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-multi-architecture-image.html)。用于核验上述具体边界；查阅日期：2026-11-04。
