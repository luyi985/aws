---
id: aip-latency-resilience-020
title: GenAI latency caching and resiliency
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section IV: Latency and Caching; System Resiliency"
dependencies:
  - aip-token-efficiency-018
---

# aip-latency-resilience-020: GenAI latency caching and resiliency

## Learning Objective

Apply caching and failure-handling patterns to improve an application's GenAI responsiveness.

## Scope

- Included: prompt caching, time-to-first-token, retries, and circuit breakers.
- Excluded: infrastructure deployment topology.

## Source Context

These practices connect model behavior to production service reliability.

## Knowledge Point

Prompt caching can reuse a stable prompt prefix so repeated requests need less processing. Production systems should also measure latency and tolerate transient failures with bounded retries and circuit-breaking behavior.

## Logical Path

1. Identify stable versus request-specific prompt content.
2. Cache a suitable stable prefix.
3. Measure response latency, including time to first token for streaming.
4. Handle failing dependencies with controlled retries and fallback behavior.

## Key Terms

- Prompt caching: reuse of previously processed prompt context.
- Time to first token (`TTFT`): latency before the first streamed response token.
- Circuit breaker: pattern that stops repeated calls to an unhealthy dependency.

## Example

A chatbot caches its long policy instructions and opens a circuit after repeated model failures, returning a retry-later response. This demonstrates both efficiency and controlled degradation.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section IV “Latency and Caching” and “System Resiliency”: caching, TTFT, exponential backoff, and circuit breaker pattern.
