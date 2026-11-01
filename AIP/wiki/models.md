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

## 从任务确定模型
Transformer 的 self-attention 建模 token 与上下文的关系；架构与 next-token prediction 任务需要区分。选型先检查输入和输出模态，再比较任务质量、延迟和成本。能接收图片不等于能生成图片，文本模型也不会因为做过预训练就自然获得原生音频能力。

## 如何改变能力
|需求|对应机制|关键边界|
|---|---|---|
|适应任务行为、格式或风格|监督微调，使用标注输入输出|需要验证泛化表现|
|降低微调资源消耗|LoRA，训练少量低秩参数|不是独立的知识检索系统|
|适应领域术语和分布|持续预训练，使用领域语料|与教会具体任务的监督微调不同|
|部署已有自定义制品|Custom Model Import|导入不等于重新训练|

选购助手若需要实时价格，应从外部证据获取；模型选型和训练解决能力问题，检索解决运行时证据供给。可继续阅读 [RAG](rag.md)。

## Raw 来源

- [aip-foundations-transformer-001](../raw/aip-foundations-transformer-001.md)
- [aip-foundations-modalities-002](../raw/aip-foundations-modalities-002.md)
- [aip-foundations-modelfamily-003](../raw/aip-foundations-modelfamily-003.md)
- [aip-bedrock-finetuning-010](../raw/aip-bedrock-finetuning-010.md)
- [aip-bedrock-lora-011](../raw/aip-bedrock-lora-011.md)
- [aip-bedrock-continuedpretraining-012](../raw/aip-bedrock-continuedpretraining-012.md)
- [aip-bedrock-customimport-013](../raw/aip-bedrock-customimport-013.md)
