---
id: aip-sagemaker-deployment-021
title: SageMaker AI deployment and monitoring
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section V: Model Deployment and Model Monitoring"
dependencies:
  - aip-genai-foundations-001
---

# aip-sagemaker-deployment-021: SageMaker AI deployment and monitoring

## Learning Objective

Distinguish real-time and batch deployment and explain how model monitoring detects operational change.

## Scope

- Included: endpoints, batch transform, drift, and CloudWatch alerting.
- Excluded: model training pipelines.

## Source Context

The SageMaker section covers model lifecycle needs beyond managed FM invocation.

## Knowledge Point

SageMaker AI can deploy a model to a persistent endpoint for real-time inference or run offline predictions through Batch Transform. Model Monitor observes deployed behavior and data quality for drift or anomalies and can notify through CloudWatch.

## Logical Path

1. Choose synchronous or offline inference based on the workload.
2. Deploy the trained model in the appropriate mode.
3. Define data and quality expectations.
4. Monitor deviations and investigate alerts.

## Key Terms

- Persistent endpoint: continuously available endpoint for real-time inference.
- Batch Transform: offline inference over a data set.
- Data drift: change in incoming data characteristics over time.

## Example

Fraud scoring uses a real-time endpoint, while monthly backfill scoring uses Batch Transform; Model Monitor alerts when an important input becomes mostly missing. This demonstrates deployment-mode choice and drift detection.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section V “Model Deployment” and “Model Monitoring”: endpoint, batch, drift, and CloudWatch details.
