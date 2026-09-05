---
id: aip-token-efficiency-018
title: Token efficiency and context management
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section IV: Cost & Token Efficiency"
dependencies:
  - aip-rag-pattern-004
---

# aip-token-efficiency-018: Token efficiency and context management

## Learning Objective

Reduce an application's token use without removing context essential to the task.

## Scope

- Included: token counting, context pruning, response limits, and monitoring.
- Excluded: model-routing strategy.

## Source Context

The operations section frames tokens as both a cost and latency concern.

## Knowledge Point

Input and output tokens affect inference cost and latency. Count tokens before invocation, retain only relevant retrieved context, summarize stale conversation history, and constrain response length when the use case permits it.

## Logical Path

1. Measure prompt and response token consumption.
2. Identify irrelevant retrieved or historical context.
3. Prune, filter, or summarize it.
4. Monitor the resulting cost and response quality.

## Key Terms

- Context pruning: removing context that is not needed for a request.
- CountTokens API: Bedrock API for estimating prompt tokens.

## Example

A support bot limits retrieval to the three relevant policy chunks and summarizes a long prior chat before asking a new question. This demonstrates reducing context while preserving task evidence.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section IV “Cost & Token Efficiency”: CountTokens, pruning, response controls, and CloudWatch metrics.
