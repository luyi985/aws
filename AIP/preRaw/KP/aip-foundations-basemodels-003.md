---
id: aip-foundations-basemodels-003
title: 基础模型家族与选型
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — I. Foundational AI Concepts > Foundation Models (FMs) > Base Models (Nova, Titan, Claude, Llama, Jurassic, Mistral)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 17-18, ‘Foundation Models’ and ‘AWS Foundation Models (Base Models)’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF pp. 1-2, ‘Foundation Models (FMs)’"
dependencies:
  - aip-foundations-transformer-001
  - aip-foundations-modalities-002
---

# aip-foundations-basemodels-003: 基础模型家族与选型

## Learning Objective

能够说明为什么应按任务约束比较 Nova、Titan、Claude、Llama、Jurassic 与 Mistral 等模型家族。

## Scope

- Included: 导图列出的模型家族、按能力与约束选型的思路。
- Excluded: 实时型号清单、价格、基准排名和供应商营销比较。

## Source Context

导图把多个基础模型家族并列，强调 Bedrock 场景中的模型选择，而非单一默认模型。

## Knowledge Point

基础模型（foundation model）家族在模态、上下文长度、质量、延迟、成本和定制能力上可能不同。选型应从业务需求和可验证指标出发，而不是只看模型名称。

## PDF Grounding

详细课件按用途区分模型：Jurassic-2 面向多语言文本，Claude 面向对话、问答与工作流，Stable Diffusion 面向图像，Titan 覆盖文本与嵌入，Nova 还包含视频模型。Study Guide 重复这些能力差异，说明模型家族必须按任务模态和能力匹配，而不是视为可互换产品。

## Logical Path

1. 明确任务模态、质量门槛和合规限制。
2. 形成候选模型家族并统一测试输入。
3. 比较效果、延迟、成本与运行区域等约束。
4. 型号能力会变化，实际决策需查阅当时的官方信息。

## Key Terms

- 模型家族（`model family`）：由同一供应方或技术路线形成的一组相关模型。
- 模型选型（`model selection`）：基于任务证据选择模型的过程。

## Example

示意示例：客服摘要候选方案用同一批脱敏工单测试两种模型，并同时记录正确性、响应时间与单次成本；这展示了多约束选型。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“I. Foundational AI Concepts > Foundation Models (FMs) > Base Models (Nova, Titan, Claude, Llama, Jurassic, Mistral)”支持候选家族范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 17–18 页列出主要模型家族及文本、图像、嵌入和视频用途。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 1–2 页“Foundation Models (FMs)”支持模型家族之间的能力差异。
