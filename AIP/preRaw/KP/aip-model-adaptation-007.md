---
id: aip-model-adaptation-007
title: Fine-tuning versus retrieval augmentation
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section I: Fine-Tuning (Custom Models)"
  - "AIP/preRaw/AIPStudyGuide.pdf, Section I: Retrieval-Augmented Generation (RAG)"
dependencies:
  - aip-rag-pattern-004
---

# aip-model-adaptation-007: Fine-tuning versus retrieval augmentation

## Learning Objective

Choose between fine-tuning and RAG for a stated application need.

## Scope

- Included: purpose, training-data shape, and tradeoff.
- Excluded: running a customization job.

## Source Context

The guide contrasts custom-model adaptation with retrieval-based knowledge injection.

## Knowledge Point

Fine-tuning adapts an existing model with additional task-specific training data. RAG supplies knowledge at inference time. Fine-tuning is suited to changing behavior or style; RAG is suited to current and proprietary factual context.

## Logical Path

1. Identify whether the gap is behavior or knowledge freshness.
2. Fine-tuning uses labeled training examples to influence behavior.
3. RAG retrieves external facts without retraining.
4. Security and cost apply to both the training data and inference design.

## Key Terms

- Fine-tuning: additional training of a base model for a specialized task.
- Training pair: labeled prompt and desired completion used in training.

## Example

A company uses RAG for weekly-changing product policies but fine-tunes a supported model for a consistent internal response style. This demonstrates the behavior-versus-knowledge decision.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section I “Fine-Tuning (Custom Models)”: adaptation data and secure use; Section I “RAG”: update tradeoff.
