---
id: aip-operations-promptcaching-040
title: Prompt Caching 与静态前缀
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — V. Operational Efficiency > Performance & Caching > Prompt Caching (Static Prefix Discounting)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF p. 293, ‘Intelligent Caching Systems: Prompt Caching’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 6, ‘Latency and Caching’"
dependencies:
  - aip-foundations-promptanatomy-005
  - aip-operations-tokenefficiency-037
---

# aip-operations-promptcaching-040: Prompt Caching 与静态前缀

## Learning Objective

能够说明提示缓存如何复用重复静态前缀并判断适用请求模式。

## Scope

- Included: Prompt caching、static prefix、缓存命中与成本延迟意义。
- Excluded: 实时折扣、最小词元要求、TTL 和特定模型支持。

## Source Context

导图把 Prompt Caching 与 Static Prefix Discounting 关联。

## Knowledge Point

提示缓存（prompt caching）复用多次请求中相同的静态提示前缀，减少对重复内容的处理。收益依赖前缀稳定、请求重复和缓存命中；动态用户输入通常放在静态部分之后。

## PDF Grounding

详细课件把 system instructions 与 few-shot examples 作为静态前缀，将动态内容放在末尾，并提醒 cache write 可能更贵、read 有折扣。Study Guide 确认该能力内建于 Bedrock，可降低延迟，且缓存活动应通过 CloudWatch 监控。

## Logical Path

1. 识别多次请求中完全重复且较大的前缀。
2. 将稳定规则或长背景与动态输入分离。
3. 缓存命中时复用前缀处理结果。
4. 前缀频繁变化或命中率低时，缓存收益会下降。

## Key Terms

- 提示缓存（`prompt caching`）：复用重复提示内容处理结果的机制。
- 静态前缀（`static prefix`）：多次请求开头保持相同的提示部分。

## Example

示意示例：每次合同分析都复用同一长规则，只在末尾附上不同合同；这展示适合缓存的静态—动态分离。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“V. Operational Efficiency > Performance & Caching > Prompt Caching (Static Prefix Discounting)”支持缓存模式。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 293 页支持静态前缀、few-shot/system 内容、动态后置及读写成本差异。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 6 页“Latency and Caching”支持 Bedrock 内建缓存、延迟收益与 CloudWatch 监控。
