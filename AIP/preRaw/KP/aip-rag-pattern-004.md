---
id: aip-rag-pattern-004
title: Retrieval-augmented generation
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section I: Retrieval-Augmented Generation (RAG)"
dependencies:
  - aip-prompt-design-003
---

# aip-rag-pattern-004: Retrieval-augmented generation

## Learning Objective

Explain how retrieval-augmented generation (RAG) grounds a model response in external information.

## Scope

- Included: retrieve-then-prompt flow and RAG versus fine-tuning.
- Excluded: detailed vector-store implementation.

## Source Context

RAG is the course's principal method for adding current or private knowledge to an FM.

## Knowledge Point

RAG retrieves relevant external text and places it in the model prompt. It is often preferable to fine-tuning when knowledge changes frequently, because updating the source data changes the available context without retraining the model.

## Logical Path

1. A base model lacks organization-specific or current facts.
2. A retrieval system selects relevant supporting text.
3. The application includes that text as prompt context.
4. Retrieval quality and prompt design determine how well the answer is grounded.

## Key Terms

- Retrieval-augmented generation (`RAG`): generation conditioned on retrieved external context.
- Grounding: aligning a response with supplied evidence.

## Example

Before answering a benefits question, an HR assistant retrieves the current policy passage and sends it with the question to the FM. This demonstrates an open-book rather than memorized-answer approach.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section I “Retrieval-Augmented Generation (RAG)”: RAG flow, update behavior, and fine-tuning comparison.
