---
id: aip-bedrock-contentfiltering-018
title: Guardrails 内容过滤
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — II. Amazon Bedrock Implementation > Guardrails & Safety > Content Filtering (Topic, Word, PII Redaction)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 54, ‘Amazon Bedrock Guardrails’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 3, ‘Bedrock Guardrails’"
dependencies: []
---

# aip-bedrock-contentfiltering-018: Guardrails 内容过滤

## Learning Objective

能够区分主题、词语和 PII 脱敏三类内容控制的作用。

## Scope

- Included: Topic、Word、PII Redaction 控制及输入输出应用位置。
- Excluded: 完整安全策略、法规解释和具体策略参数。

## Source Context

导图在 Guardrails & Safety 下列出 Topic、Word 与 PII Redaction。

## Knowledge Point

内容过滤（content filtering）用规则或检测器限制不合适内容。主题策略控制讨论范围，词语过滤匹配指定表达，个人身份信息脱敏（PII redaction）识别并遮盖敏感字段；三者解决的问题不同。

## PDF Grounding

详细课件明确 Guardrails 同时过滤 prompts 与 responses，并列出 word、topic、profanity 与 PII 控制。Study Guide 补充 PII 可移除或 masking，Guardrails 还可接入 agents 与 knowledge bases，说明过滤既有处置方式也有集成位置。

## Logical Path

1. 先定义允许与禁止的内容边界。
2. 选择主题、词语或 PII 等匹配控制。
3. 对输入和输出按风险应用检测或处置。
4. 过滤可能误报或漏报，需监控并配合应用层权限。

## Key Terms

- 内容过滤（`content filtering`）：检测并阻止、替换或标记内容的控制。
- 个人身份信息（`personally identifiable information, PII`）：可识别个人的敏感信息。

## Example

示意示例：客服机器人允许讨论订单但拒绝医疗建议，并把回复中的身份证号替换为占位符；这展示了主题控制与 PII 脱敏的不同职责。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“II. Amazon Bedrock Implementation > Guardrails & Safety > Content Filtering (Topic, Word, PII Redaction)”支持三类内容控制。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 54 页“Amazon Bedrock Guardrails”支持输入输出、词语、主题、不当内容与 PII 过滤。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 3 页“Bedrock Guardrails”支持移除/遮盖处置及与 agents、knowledge bases 的集成。
