---
id: aip-foundations-promptmanagement-006
title: Bedrock Prompt Management
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — I. Foundational AI Concepts > Prompt Engineering > Bedrock Prompt Management (Versioning, Variables)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 58, ‘Prompt Management with Amazon Bedrock’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 3, ‘Prompt Engineering & Flows’"
dependencies:
  - aip-foundations-promptanatomy-005
---

# aip-foundations-promptmanagement-006: Bedrock Prompt Management

## Learning Objective

能够说明提示版本与变量如何让 Bedrock 提示资产可复用、可追踪。

## Scope

- Included: Amazon Bedrock Prompt Management、版本（versioning）和变量（variables）。
- Excluded: 具体控制台步骤、最新配额和跨账户部署实现。

## Source Context

导图把 Versioning 与 Variables 指定为 Bedrock Prompt Management 的核心关注点。

## Knowledge Point

提示管理（prompt management）把提示从应用代码中的临时字符串变成受管理资产。变量允许模板在运行时接收不同输入，版本则固定某次可部署内容，便于测试、回滚和审计。

## PDF Grounding

详细课件说明托管提示可跨应用共享、版本化，并用双花括号定义变量；它还提到 prompt variants 可适配不同模型或推理配置，并能关联工具与缓存。Study Guide 则确认 Prompt Management 用于存储、版本化包含变量的可复用提示。

## Logical Path

1. 将稳定指令与变化输入分开。
2. 用变量为变化部分定义明确入口。
3. 用版本保存经过测试的模板状态。
4. 版本只记录提示变化，模型或知识库变化仍需单独治理。

## Key Terms

- 提示变量（`prompt variable`）：运行时填入提示模板的命名占位符。
- 版本控制（`versioning`）：保存可识别、可复现提示状态的机制。

## Example

示意示例：摘要模板使用 `{{document}}` 变量，生产环境固定到已验收版本；新措辞先创建新版本测试。这展示变量复用与版本隔离。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“I. Foundational AI Concepts > Prompt Engineering > Bedrock Prompt Management (Versioning, Variables)”支持产品主题及两个子概念。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 58 页支持提示共享、版本、变量、variants 及工具和缓存关联。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 3 页“Prompt Engineering & Flows”支持可复用提示的存储、版本化与变量。
