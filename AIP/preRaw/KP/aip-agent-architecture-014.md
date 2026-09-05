---
id: aip-agent-architecture-014
title: Bedrock Agents tools and action groups
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section III: Bedrock Agents"
dependencies:
  - aip-prompt-orchestration-009
  - aip-guardrails-008
---

# aip-agent-architecture-014: Bedrock Agents tools and action groups

## Learning Objective

Explain how an agent uses planning and action groups to act beyond text generation.

## Scope

- Included: planning, tools, action groups, and OpenAPI contracts.
- Excluded: multi-agent coordination and memory persistence.

## Source Context

This is the first agentic-AI capability in the course's third section.

## Knowledge Point

An agent combines an FM with planning and tools. An action group defines tools the agent can call, typically with an OpenAPI contract that states allowed operations, inputs, and outputs. The contract helps make tool use dependable.

## Logical Path

1. A user request may require an external action or fact.
2. Planning decomposes the request into steps.
3. An action group constrains available tools.
4. The agent invokes a defined action and incorporates its result.

## Key Terms

- Action group: a defined set of tools available to an agent.
- OpenAPI: a machine-readable API contract describing operations and data shapes.

## Example

An order-status agent uses an action group whose OpenAPI schema defines `getOrder(orderId)`. It calls that API instead of inventing order data, demonstrating controlled tool use.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section III “Bedrock Agents”: planning module, action groups, and OpenAPI schema use.
