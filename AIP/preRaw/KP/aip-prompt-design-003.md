---
id: aip-prompt-design-003
title: Prompt structure and few-shot prompting
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section I: Prompt Engineering & Flows"
dependencies:
  - aip-bedrock-inference-002
---

# aip-prompt-design-003: Prompt structure and few-shot prompting

## Learning Objective

Design a prompt whose instructions, context, input, and requested output are unambiguous.

## Scope

- Included: prompt components, few-shot examples, and output instructions.
- Excluded: retrieval augmentation and prompt workflow orchestration.

## Source Context

Prompt engineering is a core Bedrock application skill in Section I.

## Knowledge Point

A useful prompt separates instructions, context, input data, and an output indicator. Few-shot prompting supplies representative input/output examples to make the intended behavior and format clearer.

## Logical Path

1. The model needs a task instruction.
2. Context constrains how the task should be interpreted.
3. Input is the instance to process.
4. Output requirements or examples make the response testable.

## Key Terms

- Few-shot prompting: supplying examples of desired behavior in a prompt.
- Structured output: an explicitly constrained response format, such as JSON.

## Example

For ticket routing, provide an instruction, the ticket text, and two labeled examples, then request JSON with `category` and `priority`. This demonstrates how examples and output instructions reduce ambiguity.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section I “Prompt Engineering & Flows”: prompt components, few-shot prompting, and structured JSON output.
