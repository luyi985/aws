---
id: aip-genai-foundations-001
title: Foundation models and Amazon Bedrock
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section I: Foundation Models (FMs)"
dependencies: []
---

# aip-genai-foundations-001: Foundation models and Amazon Bedrock

## Learning Objective

Explain what a foundation model (FM) is and why Amazon Bedrock is the AWS integration layer for it.

## Scope

- Included: pre-trained models, model modality, and Bedrock's role.
- Excluded: choosing inference parameters and adapting a model.

## Source Context

This is the starting point for the AIP-C01 course's Generative AI and Bedrock section.

## Knowledge Point

A foundation model (FM) is a large pre-trained model that can be applied to many tasks. Amazon Bedrock provides managed AWS access to supported text, image, embedding, and other FMs, so an application can invoke a model without operating its serving infrastructure.

## Logical Path

1. Pre-training creates a reusable general-purpose model.
2. Different FMs have different capabilities and modalities.
3. Bedrock exposes those capabilities through managed AWS services.
4. A model choice must fit the task, data, cost, and safety needs.

## Key Terms

- Foundation model (`FM`): a broadly pre-trained model reused for downstream tasks.
- Amazon Bedrock: AWS managed service for using foundation models.

## Example

An application uses a text FM through Bedrock to summarize support tickets. This demonstrates selecting a managed FM service instead of hosting the model itself.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section I “Foundation Models (FMs)”: model types and Bedrock-supported examples.
