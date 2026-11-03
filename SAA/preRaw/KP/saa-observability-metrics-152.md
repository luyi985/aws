---
id: saa-observability-metrics-152
title: 指标的维度与采集边界（CloudWatch metric）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=582
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=583
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=593
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=594
dependencies: []
---

# saa-observability-metrics-152: 指标的维度与采集边界（CloudWatch metric）

## Learning Objective

在“实例 CPU 指标可见但内存使用需要代理上报”的场景中，能说明指标的维度与采集边界的判断依据，并指出适用限制。

## Scope

- Included: 指标的维度与采集边界的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

指标是带时间戳的测量值，命名空间和维度用于区分来源。

## Logical Path

1. 需求：实例 CPU 指标可见但内存使用需要代理上报。
2. 某些操作系统层指标需要代理采集，不能假设所有监控数据都会默认出现。
3. 结果：监控覆盖取决于采集来源。

## Key Terms

- Metric：带时间戳和维度的测量值。
- Dimension：用于区分指标来源或属性的键值。

## Example

示意例：实例 CPU 指标可见但内存使用需要代理上报，说明监控覆盖取决于采集来源。

## Sources

- [课件 p.582：Amazon CloudWatch Metrics](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=582)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.583：CloudWatch Metric Streams](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=583)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.593：CloudWatch Logs Agent & Unified Agent](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=593)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.594：CloudWatch Unified Agent – Metrics](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=594)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
