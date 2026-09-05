---
id: aip-bedrock-groundingcheck-019
title: 上下文依据检查
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — II. Amazon Bedrock Implementation > Guardrails & Safety > Contextual Grounding Check (Hallucination Prevention)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 54, ‘Amazon Bedrock Guardrails’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 3, ‘Bedrock Guardrails’"
dependencies:
  - aip-bedrock-knowledgebases-014
---

# aip-bedrock-groundingcheck-019: 上下文依据检查

## Learning Objective

能够说明上下文依据检查如何评估回答是否受到提供材料支持。

## Scope

- Included: Contextual grounding、回答与参考上下文的一致性、处置阈值。
- Excluded: 保证零幻觉、事实数据库设计和指标实现细节。

## Source Context

导图将 Contextual Grounding Check 标注为 Hallucination Prevention 手段。

## Knowledge Point

上下文依据检查（contextual grounding check）比较模型回答与提供的参考上下文，判断主要陈述是否有依据。它能降低无依据生成风险，但只能检查给定上下文，不能证明外部世界中的绝对真实性。

## PDF Grounding

详细课件把 contextual grounding check 列为 Guardrails 的组成，用于衡量响应与检索上下文的贴合程度。Study Guide 明确其目标是减少 hallucinations；两者支持“对给定依据的一致性检查”，而不是“证明世界事实”的边界。

## Logical Path

1. 应用向模型同时提供问题和参考材料。
2. 模型生成候选回答。
3. 依据检查评估回答与材料的支持关系。
4. 低于阈值时可拒答、重试或转人工，但仍可能有误判。

## Key Terms

- 上下文依据（`contextual grounding`）：回答可由所给上下文支持的程度。
- 幻觉（`hallucination`）：模型生成缺乏可靠依据的内容。

## Example

示意示例：政策片段只说明退款期为 30 天，回答却称“所有商品均无条件退款”；依据检查应识别额外断言。该例展示其检查边界。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“II. Amazon Bedrock Implementation > Guardrails & Safety > Contextual Grounding Check (Hallucination Prevention)”支持用途范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 54 页支持 contextual grounding check 属于 Guardrails 及其上下文一致性用途。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 3 页“Bedrock Guardrails”支持衡量响应与 retrieved context 的贴合并降低幻觉。
