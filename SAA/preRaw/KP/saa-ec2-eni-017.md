---
id: saa-ec2-eni-017
title: 网卡与网络身份（Elastic Network Interface）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=89
dependencies: []
---

# saa-ec2-eni-017: 网卡与网络身份（Elastic Network Interface）

## Learning Objective

在“把备用网卡移动到同一可用区的替代实例”的场景中，能说明网卡与网络身份的判断依据，并指出适用限制。

## Scope

- Included: 网卡与网络身份的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

弹性网络接口承载私有地址、安全组等网络属性，并绑定到某个可用区。

## Logical Path

1. 需求：把备用网卡移动到同一可用区的替代实例。
2. 部分接口可以在兼容实例之间移动，从而把网络身份与单台实例分离。
3. 结果：地址和安全组可随接口一起转移。

## Key Terms

- Elastic Network Interface：弹性网络接口承载私有地址、安全组等网络属性，并绑定到某个可用区。

## Example

示意例：把备用网卡移动到同一可用区的替代实例，说明地址和安全组可随接口一起转移。

## Sources

- [课件 p.89：Elastic Network Interfaces (ENI)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=89)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
