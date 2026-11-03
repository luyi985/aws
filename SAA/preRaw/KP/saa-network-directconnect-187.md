---
id: saa-network-directconnect-187
title: 专线连接与加密边界（AWS Direct Connect）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=744
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=746
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=747
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=748
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=749
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=750
dependencies:
- saa-network-subnets-178
---

# saa-network-directconnect-187: 专线连接与加密边界（AWS Direct Connect）

## Learning Objective

在“主专线故障后转入 VPN 备份”的场景中，能说明专线连接与加密边界的判断依据，并指出适用限制。

## Scope

- Included: 专线连接与加密边界的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-network-subnets-178。

建议阅读（不阻塞学习）：[saa-network-vpn-186](saa-network-vpn-186.md)。

## Knowledge Point

专线提供到 AWS 的专用网络连接，但私有链路不自动等于端到端加密。

## Logical Path

1. 需求：主专线故障后转入 VPN 备份。
2. 关键系统需要考虑多链路或 VPN 备份，并验证实际切换路径。
3. 结果：连接性能、加密与冗余是需要分别设计的维度。

## Key Terms

- AWS Direct Connect：专线提供到 AWS 的专用网络连接，但私有链路不自动等于端到端加密。

## Example

示意例：主专线故障后转入 VPN 备份，说明连接性能、加密与冗余是需要分别设计的维度。

## Sources

- [课件 p.744：Direct Connect (DX)](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=744)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.746：Direct Connect Gateway](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=746)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.747：Direct Connect – Connection Types](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=747)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.748：Direct Connect – Encryption](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=748)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.749：Direct Connect - ResiliencyHigh Resiliency for Critical Workloads One connection at multiple locations Maximum Resiliency for](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=749)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.750：Site-to-Site VPN connection as a backup](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=750)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
