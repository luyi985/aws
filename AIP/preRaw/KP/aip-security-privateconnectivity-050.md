---
id: aip-security-privateconnectivity-050
title: VPC 与 PrivateLink 私有连接
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Security & Identity > VPC & PrivateLink (Secure Model Communication)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 522, ‘AWS PrivateLink (VPC Endpoint Services)’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF pp. 2 and 9, fine-tuning security and ‘Security, Identity, and Compliance’"
dependencies: []
---

# aip-security-privateconnectivity-050: VPC 与 PrivateLink 私有连接

## Learning Objective

能够说明 VPC 与 PrivateLink 如何让工作负载私下访问受支持的模型服务端点。

## Scope

- Included: VPC、AWS PrivateLink、interface endpoint、private communication 和网络边界。
- Excluded: 路由表命令、DNS 故障排查、费用和具体服务支持列表。

## Source Context

导图将 VPC & PrivateLink 与 Secure Model Communication 关联。

## Knowledge Point

虚拟私有云（Virtual Private Cloud, VPC）提供隔离网络环境；AWS PrivateLink 通过接口端点（interface endpoint）让 VPC 工作负载私下访问受支持服务，而无需把流量路径设计为经公共互联网暴露。

## PDF Grounding

详细课件说明 PrivateLink 不要求 VPC peering、internet gateway、NAT 或 route table，通过 service 侧 network load balancer 与 consumer VPC 中 ENI 建立连接。Study Guide 把 VPC/PrivateLink 用于保护敏感 fine-tuning 数据，避免流量暴露到公共互联网。

## Logical Path

1. 应用运行在 VPC 内并需要调用模型服务。
2. PrivateLink 在子网中创建面向服务的私有端点接口。
3. 安全组、DNS 和端点策略共同约束连接。
4. 私有网络路径不等于自动授权，IAM 与数据保护仍必须配置。

## Key Terms

- AWS PrivateLink（`AWS PrivateLink`）：通过私有 IP 访问受支持服务的网络技术。
- 接口端点（`interface endpoint`）：VPC 中连接 PrivateLink 服务的弹性网络接口。

## Example

示意示例：私有子网中的应用通过接口端点调用 Bedrock，并同时用 IAM 限制模型操作；这展示网络控制与身份控制的互补。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“VI. Governance, Security & QA > Security & Identity > VPC & PrivateLink (Secure Model Communication)”支持网络主题。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 522 页支持 PrivateLink 的私有连接结构及与 peering、IGW、NAT 的区别。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 2、9 页支持使用 VPC/PrivateLink 保护敏感微调数据和私有服务通信。
