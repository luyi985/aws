---
id: aip-operations-latency-042
title: 延迟优化推理与 TTFT、OTPS
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Performance & Caching > Latency Optimized Inference (TTFT, OTPS)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 286 and 295, ‘Other Stuff CloudWatch Monitors’ and ‘Building Responsive AI Systems’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 6, ‘Latency and Caching’"
dependencies:
  - aip-operations-tokenefficiency-037
---

# aip-operations-latency-042: 延迟优化推理与 TTFT、OTPS

## Learning Objective

能够用 TTFT 与 OTPS 区分首字响应速度和持续生成速度。

## Scope

- Included: Latency optimized inference、TTFT、OTPS 及端到端体验。
- Excluded: 最新模型基准、网络调优命令和容量采购。

## Source Context

导图将 Latency Optimized Inference 与 TTFT、OTPS 关联。

## Knowledge Point

首个词元时间（time to first token, TTFT）衡量请求发出到首个输出出现的时间；每秒输出词元数（output tokens per second, OTPS）衡量开始生成后的速度。两者影响不同阶段的用户体验。

## PDF Grounding

详细课件说明 Bedrock latency-optimized inference 可通过 `performanceConfig` 请求，并分别优化 TTFT、OTPS 与 end-to-end latency；CloudWatch 可监控 TTFT、model latency、throttles 和错误。Study Guide 也把 TTFT 定位为 streaming response 的延迟指标，但未列出 OTPS。

## Logical Path

1. 请求先经历网络、排队和输入处理。
2. 首个输出出现形成 TTFT。
3. 后续内容以 OTPS 表示的速度持续生成。
4. 单看一个指标会遗漏总时长、质量和应用处理开销。

## Key Terms

- 首个词元时间（`time to first token, TTFT`）：从请求到首个输出词元的时长。
- 每秒输出词元数（`output tokens per second, OTPS`）：流式生成阶段的输出速率。

## Example

示意示例：聊天应用很快显示第一个字但长答案生成缓慢，表示 TTFT 好而 OTPS 较低；这展示两个指标不能互换。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“V. Operational Efficiency > Performance & Caching > Latency Optimized Inference (TTFT, OTPS)”支持指标范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 286、295 页支持 latency optimized inference 配置、TTFT、OTPS、E2E 与 CloudWatch 监控。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 6 页“Latency and Caching”支持以 TTFT 监控 streaming latency；未直接列出 OTPS。
