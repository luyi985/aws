---
id: aip-operations-tokenefficiency-037
title: Token 效率与上下文裁剪
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Optimization > Token Efficiency (CountTokens API, Context Pruning)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 285 and 287, ‘Token Efficiency’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 6, ‘IV. Operational Efficiency and Optimization > Cost & Token Efficiency’"
dependencies:
  - aip-foundations-promptanatomy-005
---

# aip-operations-tokenefficiency-037: Token 效率与上下文裁剪

## Learning Objective

能够用 CountTokens 与上下文裁剪控制输入规模，同时保护任务所需信息。

## Scope

- Included: Token efficiency、CountTokens API、context pruning 和质量成本权衡。
- Excluded: 实时价格、模型最大上下文长度和分词器实现。

## Source Context

导图将 Token Efficiency 与 CountTokens API、Context Pruning 关联。

## Knowledge Point

词元效率（token efficiency）关注用尽量少的有效词元完成任务。CountTokens 类能力在调用前估算输入规模；上下文裁剪（context pruning）移除重复或不相关内容，以降低成本和延迟，同时避免删掉关键依据。

## PDF Grounding

详细课件说明 CountTokens 在不运行模型时免费估算输入 token，并把 chunk 数限制、metadata filtering、旧对话摘要、`maxTokens` 和明确长度指令列为优化方式。Study Guide 还要求用 CloudWatch 的 InputTokenCount/outputTokenCount 监控实际消耗，并把 provisioned throughput 作为稳定高负载选项。

## Logical Path

1. 提示、历史和检索片段共同占用上下文。
2. 调用前统计词元以识别超限或成本风险。
3. 按相关性、时效和重复度裁剪内容。
4. 过度裁剪会损害正确性，必须用任务评估验证。

## Key Terms

- 词元（`token`）：模型处理文本时使用的基本单位。
- 上下文裁剪（`context pruning`）：移除低价值上下文以控制输入规模。

## Example

示意示例：多轮客服对话只保留当前问题、有效订单信息和简短历史摘要；这展示裁剪如何减少重复而保留决策依据。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“V. Operational Efficiency > Optimization > Token Efficiency (CountTokens API, Context Pruning)”支持工具与策略范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 285、287 页支持 CountTokens、context pruning、RAG 过滤与 response limiting。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 6 页“Cost & Token Efficiency”支持 CloudWatch token 指标、响应限制及 provisioned throughput 语境。
