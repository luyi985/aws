---
id: aip-bedrock-lora-011
title: LoRA 低秩适配
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — II. Amazon Bedrock Implementation > Model Customization > LoRA (Low-Rank Adaptation)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 28, ‘Low-Rank Adaptation (LoRA)’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 2, ‘Fine-Tuning (Custom Models)’"
dependencies:
  - aip-bedrock-finetuning-010
---

# aip-bedrock-lora-011: LoRA 低秩适配

## Learning Objective

能够解释 LoRA 如何以少量可训练参数适配基础模型。

## Scope

- Included: LoRA 的核心思想、与全参数微调的区别和基本取舍。
- Excluded: 矩阵推导、训练代码及 Bedrock 当前支持型号。

## Source Context

导图将 LoRA（Low-Rank Adaptation）列为模型定制方法。

## Knowledge Point

低秩适配（Low-Rank Adaptation, LoRA）通常冻结原模型的大部分权重，只训练插入的低秩参数，从而减少需要更新和保存的参数量。它是参数高效微调（parameter-efficient fine-tuning）的一种方式。

## PDF Grounding

详细课件说明 LoRA 不更新完整模型，而是在通常与注意力权重相关的位置加入并训练低秩矩阵，从而减少内存和计算需求。Study Guide 未单列 LoRA，但其微调章节提供了“用额外专有数据适配既有模型”的上位语境。

## Logical Path

1. 全参数微调需要更新大量模型权重。
2. LoRA 用较小的低秩更新表达任务变化。
3. 训练与存储需求通常因此降低。
4. 参数更少不保证任务质量，仍需与基线比较。

## Key Terms

- 低秩适配（`Low-Rank Adaptation`）：用低秩参数增量适配模型的方法。
- 参数高效微调（`parameter-efficient fine-tuning`）：只训练少量参数的微调类别。

## Example

示意示例：同一基础模型为两个业务分别保存小型适配器，而不复制全部模型权重；这展示了 LoRA 的参数复用思路。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“II. Amazon Bedrock Implementation > Model Customization > LoRA (Low-Rank Adaptation)”支持本 KP 的方法主题。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 28 页“Low-Rank Adaptation (LoRA)”直接支持低秩增量、内存与计算收益。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 2 页“Fine-Tuning (Custom Models)”支持 LoRA 所属的模型适配语境；未直接展开 LoRA 机制。
