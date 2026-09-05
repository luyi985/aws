---
id: aip-iac-delivery-024
title: Infrastructure as code and delivery for GenAI systems
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section VI: AWS CDK"
  - AIP/preRaw/AIP-Materials/cdk/lib/cdk-app-stack.js
dependencies:
  - aip-serverless-integration-023
---

# aip-iac-delivery-024: Infrastructure as code and delivery for GenAI systems

## Learning Objective

Explain why a GenAI application's AWS resources should be defined and deployed as versioned infrastructure.

## Scope

- Included: AWS CDK, CloudFormation synthesis, and repeatable deployment.
- Excluded: an individual CI/CD service configuration.

## Source Context

The course material includes CDK source files alongside the service explanation.

## Knowledge Point

Infrastructure as code (IaC) represents cloud resources in version-controlled source. AWS CDK lets developers use familiar languages and synthesizes the definition into CloudFormation, enabling repeatable creation of the application infrastructure and related code assets.

## Logical Path

1. A GenAI app depends on multiple cloud resources and permissions.
2. Manual setup is difficult to review and reproduce.
3. IaC declares the intended infrastructure.
4. A deployment process applies that declared state consistently.

## Key Terms

- Infrastructure as code (`IaC`): managing infrastructure through source-controlled definitions.
- AWS CDK: framework that synthesizes cloud infrastructure definitions to CloudFormation.

## Example

A CDK stack defines a Lambda function, its permissions, and an API endpoint for a GenAI service. This demonstrates deploying the integration as a reviewable unit.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section VI “AWS CDK”: language-based IaC and CloudFormation synthesis.
- AIP/preRaw/AIP-Materials/cdk/lib/cdk-app-stack.js: supplied CDK stack example.
