---
id: aip-bedrock-customimport-013
title: 从 SageMaker 导入自定义模型
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — II. Amazon Bedrock Implementation > Model Customization > Custom Model Import (from SageMaker)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 317, ‘Optimizing FM Deployments’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 7, ‘V. Managing Models with SageMaker AI > Model Deployment’"
dependencies:
  - aip-foundations-basemodels-003
---

# aip-bedrock-customimport-013: 从 SageMaker 导入自定义模型

## Learning Objective

能够说明自定义模型导入在 SageMaker 训练资产与 Bedrock 推理之间承担的角色。

## Scope

- Included: Custom Model Import、模型资产来源、兼容性验证和推理消费边界。
- Excluded: 当前支持架构清单、控制台命令和部署配额。

## Source Context

导图将“Custom Model Import (from SageMaker)”作为 Bedrock 模型定制路径。

## Knowledge Point

自定义模型导入（custom model import）用于把兼容的外部或 SageMaker 模型资产带入 Bedrock 的托管推理环境。导入不等于重新训练，关键在于架构、权重格式和运行要求是否受支持。

## PDF Grounding

详细课件直接说明可在 SageMaker AI 训练或调优模型，再通过 Bedrock Custom Model Import 获得 serverless inference。Study Guide 未写 Custom Model Import，但说明 S3 中的训练模型可部署到 SageMaker persistent endpoint 或用于 Batch Transform，形成与 Bedrock serverless 导入路径的对照。

## Logical Path

1. 模型先在 SageMaker 等环境中完成训练或适配。
2. 导出模型架构、权重与必要配置。
3. 验证兼容性后导入 Bedrock 供推理调用。
4. 导入路径不自动迁移训练流水线或所有运行依赖。

## Key Terms

- 自定义模型导入（`custom model import`）：将已有模型资产接入托管推理服务。
- 模型工件（`model artifact`）：模型权重、配置等可部署资产。

## Example

示意示例：团队在 SageMaker 完成领域模型训练，再导出兼容工件供 Bedrock 应用调用；这展示了训练与推理环境的衔接。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“II. Amazon Bedrock Implementation > Model Customization > Custom Model Import (from SageMaker)”支持导入路径。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 317 页“Optimizing FM Deployments”直接支持 SageMaker 训练/调优后通过 Custom Model Import 部署到 Bedrock。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 7 页“Model Deployment”支持 SageMaker 模型工件的部署语境；未直接描述 Bedrock 导入。
