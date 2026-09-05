---
id: aip-data-preparation-010
title: Structuring data for generative AI
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section II: Data Structuring"
dependencies:
  - aip-retrieval-quality-006
---

# aip-data-preparation-010: Structuring data for generative AI

## Learning Objective

Describe why document structure must be preserved or restored before GenAI ingestion.

## Scope

- Included: headings, tables, conversion, and preprocessing markers.
- Excluded: specific extraction service configuration.

## Source Context

This begins the course's data-management section.

## Knowledge Point

Unstructured text can lose headings, tables, and boundaries needed for useful retrieval. A preprocessing pipeline can extract or convert that structure and add delimiters so downstream chunking and model interpretation preserve meaning.

## Logical Path

1. Source files contain implicit or explicit structure.
2. Naive text extraction may discard it.
3. Extraction and transformation restore meaningful organization.
4. Structured output gives chunking and retrieval better inputs.

## Key Terms

- Preprocessing: transforming source data before model or retrieval use.
- ETL: extract, transform, load pipeline.

## Example

A PDF policy is converted to structured HTML with section markers before Knowledge Base ingestion. This demonstrates retaining boundaries that a fixed-length split might otherwise miss.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section II “Data Structuring”: structure loss, extraction tools, and divider strings.
