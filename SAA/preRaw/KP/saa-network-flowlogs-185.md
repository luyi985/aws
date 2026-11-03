---
id: saa-network-flowlogs-185
title: 用流量元数据排查连接（VPC Flow Logs）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=735
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=737
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=738
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=739
dependencies:
- saa-network-nacl-182
---

# saa-network-flowlogs-185: 用流量元数据排查连接（VPC Flow Logs）

## Learning Objective

在“看到目标端口流量被拒绝后继续检查安全组和网络 ACL”的场景中，能说明用流量元数据排查连接的判断依据，并指出适用限制。

## Scope

- Included: 用流量元数据排查连接的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-network-nacl-182。

## Knowledge Point

流日志记录接口等范围的流量元数据与接受或拒绝状态，帮助定位连接路径问题。

## Logical Path

1. 需求：看到目标端口流量被拒绝后继续检查安全组和网络 ACL。
2. 它不记录完整应用内容，也不能单独解释所有应用错误。
3. 结果：流日志用于缩小网络排查范围。

## Key Terms

- VPC Flow Logs：流日志记录接口等范围的流量元数据与接受或拒绝状态，帮助定位连接路径问题。

## Example

示意例：看到目标端口流量被拒绝后继续检查安全组和网络 ACL，说明流日志用于缩小网络排查范围。

## Sources

- [课件 p.735：VPC Flow Logs](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=735)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.737：VPC Flow Logs Syntax](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=737)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.738：VPC Flow Logs – Troubleshoot SG & NACL issues SubnetSecurity Group EC2 Instance NACL NACL InboundRules SG InboundRules Outbou](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=738)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.739：VPC Flow Logs – Architectures VPC Flow Logs CloudWatch LogsCloudWatch Contributor Insights Top-10 IP addresses CW Alarm Alert](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=739)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
