---
id: aip-bedrock-continuedpretraining-012
title: 持续预训练
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — II. Amazon Bedrock Implementation > Model Customization > Continued Pre-training (Unlabeled Data)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 27, ‘Continued Pre-Training’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 2, ‘Fine-Tuning (Custom Models)’"
dependencies:
  - aip-foundations-transformer-001
---

# aip-bedrock-continuedpretraining-012: 持续预训练

## Learning Objective

能够区分使用未标注数据的持续预训练与使用标注数据的任务微调。

## Scope

- Included: Continued pre-training、unlabeled data、领域适配目标。
- Excluded: 训练算法细节、数据规模阈值和产品支持矩阵。

## Source Context

导图明确把 Continued Pre-training 与 Unlabeled Data 关联。

## Knowledge Point

持续预训练（continued pre-training）让已有模型继续从未标注数据（unlabeled data）学习领域语言和分布；它主要适配领域知识表达，而监督式微调主要对齐带标签的任务行为。

## PDF Grounding

详细课件明确持续预训练只需提供未标注文本，让模型熟悉特定领域或主题，并将结果称为 custom model。Study Guide 只描述带 prompt-completion 标签的 fine-tuning，因此可作为对照：两者同属定制，但训练数据形式不同。

## Logical Path

1. 基础模型已有通用预训练能力。
2. 领域语料可能包含特殊术语与表达分布。
3. 未标注语料可用于继续预训练以缩小领域差距。
4. 它成本较高且可能造成能力偏移，需要通用与领域评估。

## Key Terms

- 持续预训练（`continued pre-training`）：在基础预训练后继续进行的领域训练。
- 未标注数据（`unlabeled data`）：没有人工目标答案的语料。

## Example

示意示例：模型继续阅读大量无问答标签的行业文档以熟悉术语；这展示了持续预训练与标注式问答微调的区别。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“II. Amazon Bedrock Implementation > Model Customization > Continued Pre-training (Unlabeled Data)”支持训练方式与数据类型。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 27 页“Continued Pre-Training”直接支持未标注文本、领域熟悉和自定义模型结果。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 2 页“Fine-Tuning (Custom Models)”提供有标签微调的对照语境；未单独说明持续预训练。
