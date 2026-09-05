---
id: aip-prompt-orchestration-009
title: Prompt management and Bedrock Flows
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section I: Prompt Engineering & Flows"
dependencies:
  - aip-prompt-design-003
---

# aip-prompt-orchestration-009: Prompt management and Bedrock Flows

## Learning Objective

Explain how reusable prompt versions and flow orchestration support maintainable GenAI applications.

## Scope

- Included: prompt variables, versioning, and chained flow steps.
- Excluded: autonomous agents.

## Source Context

The course presents these features as reusable application-building primitives.

## Knowledge Point

Prompt Management stores reusable, versioned prompts that can accept variables. Bedrock Flows orchestrates prompts, models, and conditional steps into a defined workflow, making a multi-step interaction easier to maintain and test.

## Logical Path

1. Repeated inline prompts create drift.
2. Stored prompts centralize a versioned template.
3. Variables adapt a template to each request.
4. A flow connects the required model and decision steps.

## Key Terms

- Prompt Management: managed storage and versioning of reusable prompts.
- Bedrock Flows: orchestration of GenAI workflow components.

## Example

A claims workflow classifies a document, conditionally extracts fields, and formats a response using versioned prompts. This demonstrates a deterministic multi-step flow rather than one unstructured request.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section I “Prompt Engineering & Flows”: prompt variables, versioning, and visual/JSON flow orchestration.
