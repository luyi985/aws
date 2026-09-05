---
id: aip-operations-crossregion-039
title: Cross-Region Inference
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Optimization > Cross-Region Inference (Quotas & Availability)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 304-305, ‘Bedrock Cross-Region Inference’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 6, ‘IV. Operational Efficiency and Optimization’"
dependencies:
  - aip-operations-modelrouting-038
---

# aip-operations-crossregion-039: Cross-Region Inference

## Learning Objective

能够说明跨区域推理如何利用区域容量，并识别配额、可用性和数据边界。

## Scope

- Included: Cross-region inference、quotas、availability、流量路由和合规约束。
- Excluded: 当前区域矩阵、具体配额数值、价格和故障转移配置。

## Source Context

导图将 Cross-Region Inference 与 Quotas、Availability 关联。

## Knowledge Point

跨区域推理（cross-region inference）允许请求在符合配置的多个区域容量间路由，以改善吞吐或可用性。设计时需同时确认模型区域支持、服务配额、数据驻留和失败行为。

## PDF Grounding

详细课件说明跨区域推理可应对服务中断、区域配额或峰值容量，并区分 geographic profile（适合 data residency 约束）与 global profile（最大吞吐）；组织 SCP 可能阻止目标区域。Study Guide 未单列跨区域推理，只提供高负载、配额和 provisioned throughput 的上位运营语境。

## Logical Path

1. 单一区域可能遇到容量或配额约束。
2. 推理配置可将请求路由到可用区域。
3. 多区域容量提高调度选择。
4. 跨区不等于无限容量，也可能受延迟、合规和区域支持限制。

## Key Terms

- 跨区域推理（`cross-region inference`）：跨多个 AWS 区域调度模型推理。
- 服务配额（`service quota`）：账户或区域内允许使用的资源上限。

## Example

示意示例：主区域繁忙时，请求在批准区域集合内使用另一地区容量；这展示可用性收益及“批准区域”边界。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“V. Operational Efficiency > Optimization > Cross-Region Inference (Quotas & Availability)”支持主题与约束。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 304–305 页支持中断、配额、峰值、geographic/global profile、数据驻留与 SCP 约束。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 6 页“Operational Efficiency and Optimization”支持容量与高负载优化语境；未直接展开 cross-region inference。
