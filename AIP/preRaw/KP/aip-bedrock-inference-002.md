---
id: aip-bedrock-inference-002
title: Bedrock inference interfaces
status: pending
sources:
  - AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf, slides “The Bedrock API Endpoints” and “More on the Converse API”
dependencies:
  - aip-genai-foundations-001
---

# aip-bedrock-inference-002: Bedrock inference interfaces

## Learning Objective

Distinguish Bedrock control-plane and runtime interfaces when integrating a model.

## Scope

- Included: Bedrock endpoint families and Converse-style inference.
- Excluded: agent orchestration and prompt design.

## Source Context

The course introduces Bedrock APIs immediately after foundation models.

## Knowledge Point

Bedrock separates management APIs from runtime APIs. Runtime calls perform inference; management APIs configure models and related resources. The Converse API provides a common message-oriented interface for models that support it.

## Logical Path

1. An application needs a selected model and credentials.
2. Management endpoints configure resources.
3. Runtime endpoints submit prompts and receive inference results.
4. A unified message interface can reduce model-specific application code.

## Key Terms

- Control plane: API operations that create or configure resources.
- Runtime: API operations that execute inference.
- Converse API: Bedrock's unified conversation interface for supported models.

## Example

A deployment process configures a model-related resource, while the live chat service sends customer messages to a Bedrock runtime endpoint. This demonstrates the control-plane/runtime distinction.

## Sources

- AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf, slides “The Bedrock API Endpoints” and “More on the Converse API”: endpoint roles and request shape.
