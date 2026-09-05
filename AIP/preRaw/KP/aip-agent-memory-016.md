---
id: aip-agent-memory-016
title: Agent short-term and long-term memory
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section III: Agent Memory"
dependencies:
  - aip-agent-architecture-014
---

# aip-agent-memory-016: Agent short-term and long-term memory

## Learning Objective

Distinguish session context from durable agent memory when designing a personalized experience.

## Scope

- Included: sessions, events, memory records, and memory strategies.
- Excluded: general database schema design.

## Source Context

The course identifies memory as separate from a single model invocation.

## Knowledge Point

Short-term memory retains immediate conversation context through sessions and events. Long-term memory stores distilled insights, summaries, or user preferences so later sessions can use relevant durable information without replaying every interaction.

## Logical Path

1. An active conversation needs immediate context.
2. Session data is not automatically durable knowledge.
3. Selected insights can be extracted into durable records.
4. Retrieval of durable memory should be relevant and privacy-aware.

## Key Terms

- Short-term memory: context retained for the active interaction.
- Long-term memory: durable information used across interactions.

## Example

A travel assistant keeps the current itinerary in session context but stores a user's aisle-seat preference as long-term memory. This demonstrates the different retention purposes.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section III “Agent Memory”: sessions, events, memory records, and AgentCore Memory.
