---
id: aip-operations-backoff-043
title: 指数退避与抖动
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Resiliency Patterns > Exponential Backoff & Jitter"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 302, ‘Exponential Backoff’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 7, ‘System Resiliency’"
dependencies: []
---

# aip-operations-backoff-043: 指数退避与抖动

## Learning Objective

能够说明指数退避与抖动如何降低临时故障下的重试拥塞。

## Scope

- Included: Exponential backoff、jitter、可重试错误、上限与终止条件。
- Excluded: 特定 SDK 默认值、幂等实现细节和永久错误分类全集。

## Source Context

导图将 Exponential Backoff & Jitter 列为韧性模式。

## Knowledge Point

指数退避（exponential backoff）让连续重试的等待时间逐步增加；抖动（jitter）加入随机变化，避免大量客户端同时再次请求。它们适合临时性、可重试失败，不适合无条件重试所有错误。

## PDF Grounding

详细课件给出受控重试示例：从约 100 ms 开始、backoff factor 2、最多 3–5 次，并加入约 ±100 ms jitter 避免客户端同步重试；这些数值应作为资料示例而非通用固定值。Study Guide 将 exponential backoff 明确列为模型故障的系统韧性手段。

## Logical Path

1. 临时限流或服务错误可能稍后恢复。
2. 立即密集重试会进一步放大负载。
3. 指数退避拉开时间，抖动分散不同客户端。
4. 需要最大次数、总时限、错误分类和幂等保护。

## Key Terms

- 指数退避（`exponential backoff`）：按递增间隔安排重试。
- 抖动（`jitter`）：在等待时间中加入随机性。

## Example

示意示例：100 个客户端遇到限流后采用不同随机等待，而非整齐地每秒同时重试；这展示抖动如何减少“惊群”。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“V. Operational Efficiency > Resiliency Patterns > Exponential Backoff & Jitter”支持韧性策略。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 302 页支持退避、最大次数、jitter 及避免同步重试的目的。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 7 页“System Resiliency”支持 exponential backoff 用于推理故障恢复。
