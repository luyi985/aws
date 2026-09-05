---
id: aip-foundations-modalities-002
title: 基础模型的模态
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — I. Foundational AI Concepts > Foundation Models (FMs) > Modalities (Text, Image, Audio, Video, Multimodal)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 52-53, ‘Multimodal Models and Pipelines’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 4, ‘Bedrock Data Automation (BDA)’"
dependencies: []
---

# aip-foundations-modalities-002: 基础模型的模态

## Learning Objective

能够区分文本、图像、音频、视频和多模态模型的输入输出边界。

## Scope

- Included: 单模态与多模态、五类模态及选型含义。
- Excluded: 各模态的编码算法、模型训练细节和产品价格。

## Source Context

导图在基础模型下明确列出 Text、Image、Audio、Video 与 Multimodal，本 KP 保留这一分类。

## Knowledge Point

模态（modality）是信息的表现形式。单模态模型只处理一种主要形式，多模态模型（multimodal model）能联合处理或生成多种形式；选型首先要匹配业务输入与期望输出。

## PDF Grounding

详细课件把多模态描述为混合文本、图像、音频、视频和文档，并展示文本与图像共同形成模型输入；Study Guide 以 BDA 同时处理文档、图像、视频和音频说明多模态能力在数据管道中的实际落点。

## Logical Path

1. 先识别业务数据属于哪些模态。
2. 再确认模型接受和产生哪些模态。
3. 输入输出能力匹配后，才能比较质量、延迟与成本。
4. “多模态”不代表所有模态组合都受支持，仍需核对模型接口。

## Key Terms

- 模态（`modality`）：文本、图像、音频或视频等信息形式。
- 多模态（`multimodal`）：在一个任务中联合处理多种信息形式。

## Example

示意示例：用户上传发票图片并要求输出文字摘要，需要图像输入与文本输出能力；该例展示了如何从输入输出确定模态需求。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“I. Foundational AI Concepts > Foundation Models (FMs) > Modalities (Text, Image, Audio, Video, Multimodal)”支持模态分类。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 52–53 页“Multimodal Models and Pipelines”支持多模态类型及组合输入。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 4 页“Bedrock Data Automation (BDA)”支持文档、图像、视频和音频的多模态处理场景。
