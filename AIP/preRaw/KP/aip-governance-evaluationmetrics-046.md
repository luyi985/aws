---
id: aip-governance-evaluationmetrics-046
title: ROUGE、BERTScore、Faithfulness 与 Correctness
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Evaluation (QA) > Metrics (ROUGE, BERTScore, Faithfulness, Correctness)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 425, 427, and 430, ‘ROUGE’, ‘BERTscore’, and ‘Bedrock Model Evaluations’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 9, ‘Evaluation Techniques’"
dependencies:
  - aip-governance-evaluationtypes-045
---

# aip-governance-evaluationmetrics-046: ROUGE、BERTScore、Faithfulness 与 Correctness

## Learning Objective

能够区分四类指标分别测量的信号，并避免把单一分数当作整体质量。

## Scope

- Included: ROUGE、BERTScore、faithfulness、correctness 的评价对象。
- Excluded: 指标公式推导、库实现和统一通过阈值。

## Source Context

导图在 Evaluation Metrics 中列出 ROUGE、BERTScore、Faithfulness、Correctness。

## Knowledge Point

ROUGE 关注候选与参考文本的词片重合；BERTScore 用上下文化表示比较语义相似；忠实度（faithfulness）检查回答是否受给定依据支持；正确性（correctness）检查答案是否符合目标事实或参考。它们不能互相替代。

## PDF Grounding

详细课件把 ROUGE 用于摘要/翻译中的 words、n-grams 或片段重合，把 BERTScore 用 embedding 比较语义并降低同义改写敏感性；RAG evaluation 还区分 retrieval relevance/coverage 与生成结果的 correctness 等指标。Study Guide 补充 completeness、helpfulness、logical coherence、faithfulness 以及 reference responses/contexts。

## Logical Path

1. 先确定任务最重要的质量维度。
2. 表面重合可用 ROUGE 类信号观察。
3. 语义相似可用 BERTScore 类信号补充。
4. RAG 还需分别检查依据忠实度与答案正确性，并结合人工样本。

## Key Terms

- 忠实度（`faithfulness`）：回答陈述受所给上下文支持的程度。
- 正确性（`correctness`）：回答与预期事实或答案相符的程度。

## Example

示意示例：“车辆”与参考答案“汽车”词面重合较低但语义接近；回答若额外编造价格则忠实度下降。该例展示指标关注点不同。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“VI. Governance, Security & QA > Evaluation (QA) > Metrics (ROUGE, BERTScore, Faithfulness, Correctness)”支持指标集合。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 425、427、430 页分别支持 ROUGE、BERTScore 与 RAG evaluation 指标边界。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 9 页“Evaluation Techniques”支持 correctness、completeness、helpfulness、coherence、faithfulness 及参考数据。
