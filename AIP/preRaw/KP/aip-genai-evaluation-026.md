---
id: aip-genai-evaluation-026
title: Evaluating RAG and generative AI quality
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section VII: Evaluation Techniques"
dependencies:
  - aip-rag-pattern-004
  - aip-responsible-ai-025
---

# aip-genai-evaluation-026: Evaluating RAG and generative AI quality

## Learning Objective

Build an evaluation set that measures GenAI output quality against the intended use case.

## Scope

- Included: prompt datasets, reference data, RAG quality dimensions, and human evaluation.
- Excluded: A/B experiment deployment mechanics.

## Source Context

The guide emphasizes that nondeterministic systems need explicit evaluation, not anecdotal testing.

## Knowledge Point

GenAI evaluation uses representative prompts and, where available, reference answers or contexts. RAG evaluations assess attributes such as correctness, completeness, helpfulness, coherence, and faithfulness. Human review remains important for subjective quality.

## Logical Path

1. Define the intended user outcome.
2. Assemble representative prompts and reference evidence.
3. Measure relevant quality dimensions.
4. Review failures and revise data, prompts, or controls.

## Key Terms

- Faithfulness: alignment of an answer with retrieved context.
- Reference context: known supporting information used in evaluation.

## Example

A benefits RAG system is tested on questions with approved policy passages; reviewers score whether each answer is correct and supported by those passages. This demonstrates grounded evaluation.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section VII “Evaluation Techniques”: human evaluation, evaluation jobs, RAG metrics, and reference datasets.
