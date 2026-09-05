---
id: aip-governance-evaluationtypes-045
title: 自动评估与人工评估
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Evaluation (QA) > Automatic vs. Human Evaluation"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 421 and 429, ‘Human Evaluation’ and ‘Bedrock Model Evaluations’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 9, ‘VII. Governance and QA > Evaluation Techniques’"
dependencies: []
---

# aip-governance-evaluationtypes-045: 自动评估与人工评估

## Learning Objective

能够比较自动评估和人工评估的速度、一致性、判断深度与成本。

## Scope

- Included: Automatic evaluation、human evaluation、评测集和组合策略。
- Excluded: 特定平台操作、完整统计设计和标注供应流程。

## Source Context

导图在 Evaluation (QA) 下直接对比 Automatic 与 Human Evaluation。

## Knowledge Point

自动评估（automatic evaluation）用程序化指标或模型快速重复评分；人工评估（human evaluation）由人按量表判断质量、偏好或风险。二者通常互补：自动方法适合规模与回归，人类适合细腻语境和高风险判断。

## PDF Grounding

详细课件说明 human evaluation 特别适合 UX、contextual relevance、creativity 与复杂意外场景；Bedrock automatic evaluations 则覆盖生成、摘要、问答、分类等任务，human-based job 可让人比较两个模型。Study Guide 进一步指出 GenAI 的非确定性使主观人工判断不可缺少。

## Logical Path

1. 先定义任务成功标准和代表性数据集。
2. 自动评估提供快速、一致的批量信号。
3. 人工评估补充主观质量、边界和风险判断。
4. 两者都受样本、量表和评审偏差影响。

## Key Terms

- 自动评估（`automatic evaluation`）：由程序或模型执行的评测。
- 人工评估（`human evaluation`）：由人类评审员按标准判断结果。

## Example

示意示例：每天用自动指标检测摘要回归，每次发布再抽样由领域专家判断是否遗漏关键义务；这展示两类评估的互补。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“VI. Governance, Security & QA > Evaluation (QA) > Automatic vs. Human Evaluation”支持评估分类。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 421、429 页支持人工评价维度及 Bedrock 自动/人工评估任务。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 9 页“Evaluation Techniques”支持非确定性、人工评估与 Bedrock Evaluation Jobs。
