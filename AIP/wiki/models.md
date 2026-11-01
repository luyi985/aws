---
title: 模型能力、选型与定制
derived_from:
  - aip-foundations-transformer-001
  - aip-foundations-modalities-002
  - aip-foundations-modelfamily-003
  - aip-bedrock-finetuning-010
  - aip-bedrock-lora-011
  - aip-bedrock-continuedpretraining-012
  - aip-bedrock-customimport-013
last_synced: 2026-11-01
status: current
---

# 模型能力、选型与定制

[返回导航](README.md) · [考试覆盖与缺口](exam-coverage.md)

## 选型先过硬约束，再比较质量与成本

Transformer 是架构，self-attention 让 token 表示结合上下文；next-token prediction 是任务，不应把两者等同。预训练让模型形成统计能力，不意味着所有事实都可靠，也不会自动扩展输入模态。

选型按以下顺序收敛：

1. 写出输入和输出：扫描件文字提取、图片内容理解、音频理解和文本生成是不同能力。
2. 检查模型是否原生支持所需模态。支持图片输入不代表支持图片输出；把音频转为文字也会损失语调等信息。
3. 使用代表性任务比较质量，检查复杂条件、长输入和失败时行为。
4. 在质量达标的候选中比较延迟、成本和上下文容量，而不是用参数规模代替任务评估。

例如，识别架构图中的组件关系要求视觉理解；只需取出扫描表格中的文字和结构时，应同时考虑专门的提取能力。选型的证据是任务样本表现，不是“最强模型”的标签。

Raw KPs: `aip-foundations-transformer-001`, `aip-foundations-modalities-002`, `aip-foundations-modelfamily-003`

## 定制方式解决的不是同一个问题

|方式|输入资产|改变什么|不要误判为|
|---|---|---|---|
|监督微调|标注的输入—期望输出|任务行为、格式、风格|保证新事实始终正确|
|LoRA|微调数据与少量可训练参数|以较少训练参数适配模型|一种独立模型家族|
|持续预训练|大量领域语料|领域术语与语言分布适应|针对具体任务的标注学习|
|Custom Model Import|兼容的已训练模型制品|将资产接入托管推理环境|训练或自动转换任意模型|

LoRA 的核心是冻结基础权重、训练低秩适配参数，降低相对全量微调的资源开销；是否达到任务要求仍需评估。持续预训练让模型熟悉领域表达，不等于完成合规问答系统。

导入前需检查模型资产与目标推理服务的兼容性；“在 SageMaker 训练过”本身不足以保证可导入。训练、制品导出、导入和推理是不同步骤。

Raw KPs: `aip-bedrock-finetuning-010`, `aip-bedrock-lora-011`, `aip-bedrock-continuedpretraining-012`, `aip-bedrock-customimport-013`

## 场景判断与验证

**场景一：** 模型理解任务，但输出格式经常不符合公司标注标准。先把标准和样本明确化；是否需要监督微调取决于提示方案及任务评估，不能只因存在企业数据就训练。

**场景二：** 已有领域模型资产，希望交由 Bedrock 托管推理。调查导入兼容性与运行方式，而不是重新做持续预训练。

验证时保留相同的代表性输入，比较任务质量和资源开销。训练集上的成功不能替代独立样本评估。模型调用、部署和回滚分别见 [API](integration.md) 与 [MLOps](mlops.md)。

Raw KPs: `aip-foundations-modelfamily-003`, `aip-bedrock-finetuning-010`, `aip-bedrock-continuedpretraining-012`, `aip-bedrock-customimport-013`

## 原始笔记与来源边界

本页综合已批准的 raw；例子、数字和数据结构为教学用途。未将来源链接的存在当作所有产品能力的重新核验。具体原始文档、页码与当时查阅状态保留在各 raw 中。

- [aip-foundations-transformer-001](../raw/aip-foundations-transformer-001.md)
- [aip-foundations-modalities-002](../raw/aip-foundations-modalities-002.md)
- [aip-foundations-modelfamily-003](../raw/aip-foundations-modelfamily-003.md)
- [aip-bedrock-finetuning-010](../raw/aip-bedrock-finetuning-010.md)
- [aip-bedrock-lora-011](../raw/aip-bedrock-lora-011.md)
- [aip-bedrock-continuedpretraining-012](../raw/aip-bedrock-continuedpretraining-012.md)
- [aip-bedrock-customimport-013](../raw/aip-bedrock-customimport-013.md)
