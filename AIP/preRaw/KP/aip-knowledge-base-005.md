---
id: aip-knowledge-base-005
title: Bedrock Knowledge Bases and vector retrieval
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section I: Knowledge Bases / Vector DB's"
dependencies:
  - aip-rag-pattern-004
---

# aip-knowledge-base-005: Bedrock Knowledge Bases and vector retrieval

## Learning Objective

Describe the components needed to implement RAG with a Bedrock Knowledge Base.

## Scope

- Included: data source, embedding model, vector store, and retrieval.
- Excluded: chunking and vector compression tuning.

## Source Context

This KP operationalizes the RAG pattern using the managed Bedrock feature described in the guide.

## Knowledge Point

A Bedrock Knowledge Base connects source content to an embedding model and a vector store. During retrieval, a query is represented for semantic search, relevant chunks are returned, and the application can use them as model context.

## Logical Path

1. Source documents must be available to ingest.
2. An embedding model turns content into searchable vectors.
3. A vector store retains vectors and metadata.
4. Retrieval supplies the most relevant chunks for generation.

## Key Terms

- Embedding: a numeric representation used to compare semantic similarity.
- Vector store: storage that supports similarity search over embeddings.

## Example

Product manuals in S3 are ingested into a Knowledge Base backed by OpenSearch. A customer question retrieves manual chunks before answer generation. This demonstrates the three core components working together.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section I “Knowledge Bases / Vector DB's”: sources, embedding models, and supported vector stores.
