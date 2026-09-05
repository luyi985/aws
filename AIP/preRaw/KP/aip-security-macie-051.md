---
id: aip-security-macie-051
title: Amazon Macie 敏感数据发现
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Security & Identity > Amazon Macie (Sensitive Data Discovery)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 499, ‘AWS Macie’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 9, ‘VIII. Security, Identity, and Compliance’"
dependencies: []
---

# aip-security-macie-051: Amazon Macie 敏感数据发现

## Learning Objective

能够说明 Macie 如何发现敏感数据，并把发现结果用于 GenAI 数据治理。

## Scope

- Included: Sensitive data discovery、S3 数据检查、finding 与治理处置。
- Excluded: 当前标识符清单、扫描费用、自动修复实现和法规结论。

## Source Context

导图把 Amazon Macie 标注为 Sensitive Data Discovery。

## Knowledge Point

Amazon Macie 用托管的数据识别能力检查 Amazon S3 中的对象并产生敏感数据发现（sensitive data finding）。在 GenAI 流程中，这些发现可帮助决定哪些数据允许摄取、需要脱敏或必须限制访问。

## PDF Grounding

详细课件把 Macie 定义为用 machine learning 与 pattern matching 发现和保护 AWS 中敏感数据的数据安全与隐私服务，并显示 S3 buckets 经分析后可通过 EventBridge 通知和集成。Study Guide 进一步把它归为 data security/DLP 服务，强调发现与保护两层职责。

## Logical Path

1. 数据湖可能混有个人或机密信息。
2. Macie 检查对象并识别敏感数据模式。
3. 发现结果进入告警、分类或修复流程。
4. 发现不是自动合规结论，也不涵盖所有数据位置和业务语境。

## Key Terms

- 敏感数据发现（`sensitive data discovery`）：识别数据中机密或个人信息的过程。
- 发现项（`finding`）：描述检测到的安全或数据风险的结构化结果。

## Example

示意示例：知识库摄取前扫描 S3 前缀，发现含身份证号的文件后转入脱敏流程；这展示发现结果如何形成准入控制。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“VI. Governance, Security & QA > Security & Identity > Amazon Macie (Sensitive Data Discovery)”支持产品用途。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 499 页支持 ML/pattern matching、S3 敏感数据发现及 EventBridge 通知。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 9 页“Security, Identity, and Compliance”支持 Macie 的 data security 与 DLP 定位。
