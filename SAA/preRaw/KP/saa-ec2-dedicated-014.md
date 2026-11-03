---
id: saa-ec2-dedicated-014
title: 专用硬件隔离的选择（Dedicated Host and Dedicated Instance）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=69
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=70
dependencies: []
---

# saa-ec2-dedicated-014: 专用硬件隔离的选择（Dedicated Host and Dedicated Instance）

## Learning Objective

在“软件许可按物理服务器绑定时评估专用宿主机”的场景中，能说明专用硬件隔离的选择的判断依据，并指出适用限制。

## Scope

- Included: 专用硬件隔离的选择的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

专用实例提供租户硬件隔离，专用宿主机进一步提供物理服务器级别的可见性与放置控制。

## Logical Path

1. 需求：软件许可按物理服务器绑定时评估专用宿主机。
2. 已有软件许可或合规要求可能需要宿主机级别控制。
3. 结果：租户隔离与物理放置控制是不同需求。

## Key Terms

- Dedicated Host and Dedicated Instance：专用实例提供租户硬件隔离，专用宿主机进一步提供物理服务器级别的可见性与放置控制。

## Example

示意例：软件许可按物理服务器绑定时评估专用宿主机，说明租户隔离与物理放置控制是不同需求。

## Sources

- [课件 p.69：EC2 Dedicated Hosts](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=69)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.70：EC2 Dedicated Instances](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=70)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
