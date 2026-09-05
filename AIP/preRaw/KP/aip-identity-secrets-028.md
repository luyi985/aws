---
id: aip-identity-secrets-028
title: Identity permissions encryption and secrets
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section VIII: Security, Identity, and Compliance"
dependencies:
  - aip-serverless-integration-023
---

# aip-identity-secrets-028: Identity permissions encryption and secrets

## Learning Objective

Assign IAM, KMS, and Secrets Manager responsibilities in a secure GenAI application.

## Scope

- Included: least-privilege access, encryption-key management, and credential storage/rotation.
- Excluded: user-facing authentication flow.

## Source Context

The study guide calls out these baseline AWS security controls for GenAI developers.

## Knowledge Point

IAM defines who or what may access AWS resources. KMS manages encryption keys used to protect data, and Secrets Manager stores and rotates credentials or API keys. These controls keep application access explicit and sensitive material out of code and prompts.

## Logical Path

1. Identify the workload identities and resources.
2. Grant only the required IAM permissions.
3. Encrypt sensitive data with managed keys as appropriate.
4. Retrieve credentials from a secret store rather than embedding them.

## Key Terms

- IAM: AWS Identity and Access Management.
- KMS: AWS Key Management Service.
- Secret rotation: replacing credentials on a managed schedule or event.

## Example

A Lambda role may invoke a specific Bedrock model and read one secret; the database key is managed in KMS. This demonstrates separated permissions, secrets, and encryption responsibilities.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section VIII “Security, Identity, and Compliance”: IAM, KMS, and Secrets Manager roles.
