---
id: aip-observability-agenttrace-068
title: Agent Tracing、X-Ray 与工具调用可观测性
status: pending
sources:
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — AIP-C01 course slides / detailed coverage"
  - "AIP/preRaw/AIPStudyGuide.pdf — AIP-C01 Study Guide (Detailed)"
  - "AWS Official Docs — https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html"
  - "AWS Official Docs — https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html"
dependencies:
  - aip-agentic-actiongroups-022
  - aip-observability-bedrock-067
---

# aip-observability-agenttrace-068: Agent Tracing、X-Ray 与工具调用可观测性

## Learning Objective

能够跟踪 Agent 的规划、tool call、子步骤和失败点，并理解 Agent trace 与 X-Ray/应用 tracing 的互补关系。

## Scope

- Included: Agent trace、tool-call trace、step-level diagnostics、AWS X-Ray.
- Excluded: 与本 KP 无关的底层算法实现、完整服务运维手册和超出 AIP-C01 目标的高级细节。

## Source Context

详细课件 Governance and QA 明确列出 Agent Tracing 与 X-Ray。

## Knowledge Point

本 KP 用于补齐现有 001–054 知识图中的考试工程化缺口。重点是能够在 AIP-C01 场景题中识别职责边界、选择合适 AWS 能力，并说明关键权衡，而不是死记 API 字段。

## Logical Path

1. 先识别场景中的目标与约束。
2. 将问题映射到本 KP 的 AWS 服务/模式边界。
3. 根据可靠性、安全、延迟、成本或可观测性需求做选择。
4. 用指标、trace、日志或评估结果验证选择是否有效。

## Key Terms

- `Agent trace`
- `tool-call trace`
- `step-level diagnostics`
- `AWS X-Ray`

## Example

考试型示意：当题目给出生产 GenAI 应用的性能、安全或故障症状时，应先判断问题属于本 KP 哪一层，再选择对应 AWS 服务或模式，而不是直接更换基础模型。

## Sources

- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：提供对应 AWS 服务、API、运维、安全或治理主题的详细课程覆盖。
- `AIP/preRaw/AIPStudyGuide.pdf`：提供对应 AIP-C01 快速复习框架与场景定位。
