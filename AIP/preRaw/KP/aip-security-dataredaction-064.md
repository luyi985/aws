---
id: aip-security-dataredaction-064
title: PII 检测、Token-level Redaction 与数据最小化
status: pending
sources:
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — AIP-C01 course slides / detailed coverage"
  - "AIP/preRaw/AIPStudyGuide.pdf — AIP-C01 Study Guide (Detailed)"
  - "AWS Official Docs — https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html"
  - "AWS Official Docs — https://docs.aws.amazon.com/comprehend/latest/dg/pii.html"
dependencies:
  - aip-data-comprehend-033
  - aip-security-macie-051
---

# aip-security-dataredaction-064: PII 检测、Token-level Redaction 与数据最小化

## Learning Objective

能够在模型调用前后识别并脱敏敏感信息，区分 Guardrails PII masking、Comprehend NER/模式匹配与自定义 token redaction。

## Scope

- Included: PII masking/removal、NER、pre/post processing、data minimization.
- Excluded: 与本 KP 无关的底层算法实现、完整服务运维手册和超出 AIP-C01 目标的高级细节。

## Source Context

Study Guide 单独列出 Token-Level Redaction，并说明可用 Comprehend NER 与 pattern matching。

## Knowledge Point

本 KP 用于补齐现有 001–054 知识图中的考试工程化缺口。重点是能够在 AIP-C01 场景题中识别职责边界、选择合适 AWS 能力，并说明关键权衡，而不是死记 API 字段。

## Logical Path

1. 先识别场景中的目标与约束。
2. 将问题映射到本 KP 的 AWS 服务/模式边界。
3. 根据可靠性、安全、延迟、成本或可观测性需求做选择。
4. 用指标、trace、日志或评估结果验证选择是否有效。

## Key Terms

- `PII masking/removal`
- `NER`
- `pre/post processing`
- `data minimization`

## Example

考试型示意：当题目给出生产 GenAI 应用的性能、安全或故障症状时，应先判断问题属于本 KP 哪一层，再选择对应 AWS 服务或模式，而不是直接更换基础模型。

## Sources

- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：提供对应 AWS 服务、API、运维、安全或治理主题的详细课程覆盖。
- `AIP/preRaw/AIPStudyGuide.pdf`：提供对应 AIP-C01 快速复习框架与场景定位。
