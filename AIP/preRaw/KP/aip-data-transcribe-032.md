---
id: aip-data-transcribe-032
title: Amazon Transcribe 语音识别与毒性检测
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — IV. Data Engineering for GenAI > Automation & Extraction > Amazon Transcribe (ASR, Toxicity Detection)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 111-113, ‘Amazon Transcribe’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF pp. 4-5, ‘Amazon Transcribe’"
dependencies: []
---

# aip-data-transcribe-032: Amazon Transcribe 语音识别与毒性检测

## Learning Objective

能够区分 Transcribe 的自动语音识别与毒性检测输出在数据流程中的用途。

## Scope

- Included: ASR、transcript、toxicity detection 及下游使用边界。
- Excluded: 支持语言、实时 API、准确率承诺和音频预处理算法。

## Source Context

导图在 Amazon Transcribe 节点列出 ASR 与 Toxicity Detection。

## Knowledge Point

自动语音识别（automatic speech recognition, ASR）将语音转为文字；毒性检测（toxicity detection）对内容中的攻击性等风险信号进行识别。前者生成可搜索文本，后者提供风险标签，两者不是同一任务。

## PDF Grounding

详细课件说明 Transcribe 用 ASR 转写语音，Custom Vocabularies 处理术语、品牌和缩写，Custom Language Models 学习领域上下文；toxicity detection 同时利用语气/音高和文本信号。Study Guide 还列出 PII redaction、automatic language identification 与多类有害内容标签。

## Logical Path

1. 音频先被转写为带时间信息的文本。
2. 文本或音频内容可进一步接受风险分析。
3. 下游系统据输出执行搜索、分析或审核。
4. 口音、噪声和语境会影响结果，不能把检测标签当作最终裁决。

## Key Terms

- 自动语音识别（`automatic speech recognition, ASR`）：把语音信号转换成文本。
- 毒性检测（`toxicity detection`）：识别有害或攻击性表达的分类任务。

## Example

示意示例：呼叫录音先生成逐字稿，再标记可能需要人工审核的片段；这展示转写与风险检测的流水线关系。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“IV. Data Engineering for GenAI > Automation & Extraction > Amazon Transcribe (ASR, Toxicity Detection)”支持两项能力范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 111–113 页支持 ASR、准确率定制及基于语音和文本的 toxicity detection。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 4–5 页“Amazon Transcribe”支持 PII、语言识别、词汇/语言模型和毒性类别。
