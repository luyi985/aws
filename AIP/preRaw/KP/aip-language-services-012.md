---
id: aip-language-services-012
title: Transcribe and Comprehend in GenAI pipelines
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section II: Amazon Transcribe and Amazon Comprehend"
dependencies:
  - aip-data-preparation-010
---

# aip-language-services-012: Transcribe and Comprehend in GenAI pipelines

## Learning Objective

Choose Amazon Transcribe or Amazon Comprehend for a language-data preparation need.

## Scope

- Included: speech-to-text, PII redaction, classification, and entity recognition.
- Excluded: model inference and agent design.

## Source Context

These services prepare spoken and textual content before it reaches an FM.

## Knowledge Point

Amazon Transcribe converts speech to text and can apply vocabulary, language, and PII-related features. Amazon Comprehend analyzes text for classifications, topics, and named entities. They can be composed to make language data safer and more useful for GenAI.

## Logical Path

1. Audio must become text before text-centric processing.
2. Domain vocabulary can improve transcription accuracy.
3. Text analysis identifies categories or entities.
4. The processed result can be redacted, routed, indexed, or prompted.

## Key Terms

- Automatic speech recognition (`ASR`): conversion of speech to text.
- Named entity recognition (`NER`): detection of entities such as people or organizations.

## Example

A contact-center pipeline transcribes calls, detects policy numbers with custom entity recognition, then redacts them before indexing summaries. This demonstrates service composition for safe ingestion.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section II “Amazon Transcribe” and “Amazon Comprehend”: transcription, PII, classification, and NER.
