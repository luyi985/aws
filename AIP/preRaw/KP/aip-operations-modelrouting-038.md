---
id: aip-operations-modelrouting-038
title: 静态与动态模型路由
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Optimization > Intelligent Model Routing (Static vs. Dynamic)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 288 and 296, ‘Cost-Effective Model Selection’ and ‘Building Responsive AI Systems’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 6, ‘Model Selection & Routing’"
dependencies:
  - aip-foundations-basemodels-003
---

# aip-operations-modelrouting-038: 静态与动态模型路由

## Learning Objective

能够区分静态和动态模型路由，并说明路由决策的质量、成本与延迟依据。

## Scope

- Included: Intelligent model routing、static、dynamic、路由信号和回退。
- Excluded: 当前托管路由产品、价格与具体分类器实现。

## Source Context

导图将 Intelligent Model Routing 拆为 Static 与 Dynamic。

## Knowledge Point

模型路由（model routing）为每个请求选择合适模型。静态路由按预设规则固定选择；动态路由根据请求复杂度、风险、负载或效果预测实时选择，以在质量、成本和延迟之间取舍。

## PDF Grounding

详细课件建议让较小模型承担总结、压缩、分类或分块，并用 Bedrock Intelligent Prompt Routing 按复杂度分层。Study Guide 同样指出当 RAG 或 tools 承担“智能”时小模型可能足够，并建议用 Bedrock Evaluations 将模型表现与成本一起比较。

## Logical Path

1. 不同请求未必需要相同模型能力。
2. 静态规则简单、可预测，但适应性有限。
3. 动态路由用运行信号选择候选模型。
4. 错误路由会影响质量，需监控、回退和统一评估。

## Key Terms

- 静态路由（`static routing`）：按固定规则选择模型。
- 动态路由（`dynamic routing`）：按每次请求特征实时选择模型。

## Example

示意示例：简单分类进入轻量模型，复杂合同分析进入能力更强的模型；这展示动态路由按任务复杂度分配资源。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“V. Operational Efficiency > Optimization > Intelligent Model Routing (Static vs. Dynamic)”支持路由分类。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 288、296 页支持 cost/capability tradeoff、任务分层与 Intelligent Prompt Routing。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 6 页“Model Selection & Routing”支持按复杂度动态路由及质量—成本评估。
