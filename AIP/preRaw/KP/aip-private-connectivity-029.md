---
id: aip-private-connectivity-029
title: Private GenAI connectivity with VPC and PrivateLink
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section VIII: Security, Identity, and Compliance"
dependencies:
  - aip-identity-secrets-028
---

# aip-private-connectivity-029: Private GenAI connectivity with VPC and PrivateLink

## Learning Objective

Explain why sensitive GenAI data paths may require VPC isolation and AWS PrivateLink.

## Scope

- Included: private networking rationale and PrivateLink role.
- Excluded: subnet and route-table configuration.

## Source Context

The guide highlights private connectivity when fine-tuning or handling sensitive data.

## Knowledge Point

A VPC provides a controlled network boundary for AWS resources. AWS PrivateLink enables private connectivity to supported AWS services without exposing traffic through the public internet, which is valuable for sensitive training, retrieval, and inference paths.

## Logical Path

1. Classify the sensitivity of data and traffic.
2. Place workload components in an appropriate network boundary.
3. Use private service connectivity where supported.
4. Combine network controls with identity and encryption controls.

## Key Terms

- VPC: Amazon Virtual Private Cloud, a logically isolated AWS network.
- AWS PrivateLink: private connectivity to supported services using interface endpoints.

## Example

A regulated-data preparation job accesses Bedrock through a PrivateLink endpoint from its VPC. This demonstrates keeping the service path private while still using a managed service.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section VIII “Security, Identity, and Compliance”: VPC and PrivateLink use for sensitive fine-tuning data.
