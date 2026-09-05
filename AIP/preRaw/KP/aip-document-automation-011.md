---
id: aip-document-automation-011
title: Bedrock Data Automation for multimodal extraction
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section II: Bedrock Data Automation (BDA)"
dependencies:
  - aip-data-preparation-010
---

# aip-document-automation-011: Bedrock Data Automation for multimodal extraction

## Learning Objective

Explain how Bedrock Data Automation (BDA) prepares multimodal data for downstream AI workflows.

## Scope

- Included: Blueprints, supported inputs, and output choices.
- Excluded: RAG retrieval design.

## Source Context

The guide identifies BDA as a structured-extraction option for data preparation.

## Knowledge Point

Bedrock Data Automation extracts structured information from documents, images, video, and audio. A Blueprint specifies requested fields, and BDA can produce structured formats that are suitable for automation or knowledge-base preparation.

## Logical Path

1. Multimodal files contain useful data that is not directly searchable as text.
2. A Blueprint defines the extraction target.
3. BDA processes the input modality.
4. Structured output feeds a business or GenAI workflow.

## Key Terms

- Bedrock Data Automation (`BDA`): managed multimodal data extraction capability.
- Blueprint: a specification of fields to extract.

## Example

An invoice Blueprint extracts vendor, date, and total from uploaded scans and emits JSON for a review workflow. This demonstrates converting a document image into structured application data.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section II “Bedrock Data Automation (BDA)”: multimodal inputs, Blueprints, and output formats.
