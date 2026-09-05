---
id: aip-data-services-030
title: Operational data services in GenAI architectures
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section IX: Database and Analytics"
dependencies:
  - aip-knowledge-base-005
---

# aip-data-services-030: Operational data services in GenAI architectures

## Learning Objective

Separate a vector-retrieval store from the operational databases and analytics services around a GenAI application.

## Scope

- Included: RDS/Aurora, DynamoDB, Neptune Analytics, and QuickSight roles.
- Excluded: detailed database administration.

## Source Context

The final services section positions data services by their application role.

## Knowledge Point

A vector store supports semantic retrieval, but a GenAI application may also require operational data and analytics. RDS/Aurora support relational workloads, DynamoDB supports scalable key-value/document access, Neptune Analytics can query graph/vector relationships, and QuickSight supports business analysis and visualization.

## Logical Path

1. Identify whether the data need is retrieval, transaction, relationship analysis, or reporting.
2. Choose a service suited to that access pattern.
3. Keep operational truth separate from derived retrieval indexes where necessary.
4. Feed analytics with governed data and metrics.

## Key Terms

- Operational data: data used to run the application and transactions.
- Vector retrieval: similarity search over embeddings.

## Example

A support assistant stores customer records in DynamoDB, product-document embeddings in a vector store, and usage trends in QuickSight. This demonstrates assigning services by data-access purpose.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section IX “Database” and “Analytics”: Neptune Analytics, RDS/Aurora, DynamoDB, and QuickSight roles.
