---
id: saa-network-subnets-178
title: 子网边界与地址容量（VPC and subnet）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=704
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=706
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=707
dependencies:
- saa-network-cidr-177
- saa-foundations-availabilityzones-002
---

# saa-network-subnets-178: 子网边界与地址容量（VPC and subnet）

## Learning Objective

在“为两个可用区分别分配不重叠子网”的场景中，能说明子网边界与地址容量的判断依据，并指出适用限制。

## Scope

- Included: 子网边界与地址容量的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-network-cidr-177、saa-foundations-availabilityzones-002。

## Knowledge Point

VPC 提供区域网络边界，子网属于单个可用区。

## Logical Path

1. 需求：为两个可用区分别分配不重叠子网。
2. 规划子网时要扣除 AWS 保留地址，并预留实例与服务接口的增长空间。
3. 结果：可用区部署需要配套地址规划。

## Key Terms

- VPC：区域范围内的逻辑隔离网络。
- Subnet：位于单个可用区内的地址范围。

## Example

示意例：为两个可用区分别分配不重叠子网，说明可用区部署需要配套地址规划。

## Sources

- [课件 p.704：VPC in AWS – IPv4](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=704)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.706：Adding Subnets Region VPC Availability Zone Private SubnetPublic Subnet](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=706)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.707：VPC – Subnet (IPv4)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=707)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
