---
id: aip-bedrock-finetuning-010
title: 监督式微调
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — II. Amazon Bedrock Implementation > Model Customization > Fine-Tuning (Labeled Data, S3, Titan/Meta/Cohere)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 25-26, ‘Fine-tuning’ and ‘Fine-tuning in Bedrock: Custom Models’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 2, ‘Fine-Tuning (Custom Models)’"
dependencies:
  - aip-foundations-basemodels-003
---

# aip-bedrock-finetuning-010: 监督式微调

## Learning Objective

能够说明使用标注数据和 S3 进行模型微调的目的、流程与适用边界。

## Scope

- Included: Fine-tuning、labeled data、S3 和导图所列模型家族的关系。
- Excluded: 实时支持矩阵、训练超参数和生产操作步骤。

## Source Context

导图将 Fine-Tuning 与 Labeled Data、S3 及 Titan/Meta/Cohere 并列在模型定制分支。

## Knowledge Point

监督式微调（supervised fine-tuning）用标注的输入输出样本调整基础模型，使其更稳定地遵循特定任务或风格。在 Bedrock 场景中，训练数据可由 S3 提供，但能否微调取决于具体模型支持。

## PDF Grounding

详细课件说明文本模型使用 prompt-completion 标注对，图像模型使用图像 S3 路径及描述，并列出 Titan、Cohere、Meta 作为可定制家族示例。Study Guide 还强调专有训练数据的敏感性，可结合 VPC 与 PrivateLink 保护训练路径。

## Logical Path

1. 先确认提示或 RAG 是否已满足需求。
2. 准备与目标行为一致的高质量标注数据。
3. 使用受支持模型执行定制并保留独立评估集。
4. 微调会产生维护与漂移成本，也不能替代事实检索。

## Key Terms

- 监督式微调（`supervised fine-tuning`）：用标注样本继续调整模型参数。
- 标注数据（`labeled data`）：带有期望答案或类别的训练数据。

## Example

示意示例：企业用“工单文本—标准分类”样本微调模型，并用未参与训练的工单验收；这展示了标注数据与独立评估的作用。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“II. Amazon Bedrock Implementation > Model Customization > Fine-Tuning (Labeled Data, S3, Titan/Meta/Cohere)”支持本 KP 的范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 25–26 页支持微调用途、文本标注对、图像 S3 数据及模型家族示例。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 2 页“Fine-Tuning (Custom Models)”支持训练数据形式、长期 token 权衡与私有连接保护。
