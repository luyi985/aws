---
id: aip-guardrails-008
title: Bedrock Guardrails and sensitive-content controls
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section I: Bedrock Guardrails and Token-Level Redaction"
dependencies:
  - aip-bedrock-inference-002
---

# aip-guardrails-008: Bedrock Guardrails and sensitive-content controls

## Learning Objective

Identify when to apply guardrails and when an application needs additional input or output redaction.

## Scope

- Included: prompt/response filtering, PII handling, contextual grounding checks.
- Excluded: IAM authorization design.

## Source Context

This is the course's application-layer safety control for Bedrock workloads.

## Knowledge Point

Bedrock Guardrails can evaluate prompts and responses against configured content policies, including denied topics, word filters, and sensitive information controls. Custom pre- and post-processing can add token-level redaction where a tailored control is needed.

## Logical Path

1. Define unacceptable content and sensitive-data policies.
2. Apply guardrails to the input and/or output path.
3. Use grounding checks when a RAG response must align with context.
4. Add custom detection or redaction for requirements outside the managed policy.

## Key Terms

- Guardrail: configured safety policy applied to model interaction.
- PII: personally identifiable information.
- Token-level redaction: removal or masking of sensitive content around inference.

## Example

A healthcare assistant blocks unsafe requests and masks detected identifiers before a prompt is sent to an FM. This demonstrates layered managed and custom content protection.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section I “Bedrock Guardrails” and “Token-Level Redaction”: filtering, grounding, and custom handlers.
