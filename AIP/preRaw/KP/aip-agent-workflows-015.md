---
id: aip-agent-workflows-015
title: Sequential and parallel agent workflows
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section III: Agent Workflows"
dependencies:
  - aip-agent-architecture-014
---

# aip-agent-workflows-015: Sequential and parallel agent workflows

## Learning Objective

Choose a sequential or parallel workflow shape for a multi-step agent task.

## Scope

- Included: orchestrator, workers, synthesizer, sequence, and parallelization.
- Excluded: individual tool API implementation.

## Source Context

The guide presents workflow structure as a way to handle complex agentic tasks.

## Knowledge Point

Complex work can be divided among specialized workers. In a sequential workflow, one result feeds the next step. In a parallel workflow, independent checks or alternatives run concurrently and a synthesizer combines the results.

## Logical Path

1. Identify which subproblems depend on prior output.
2. Use sequence when dependency order matters.
3. Use parallel execution for independent work.
4. Combine results through a defined synthesis step.

## Key Terms

- Orchestrator: component that delegates and coordinates work.
- Synthesizer: component that combines worker outputs.

## Example

An analyst agent runs legal, security, and pricing checks in parallel, then synthesizes the findings. This demonstrates parallelization because the checks do not depend on each other.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section III “Agent Workflows”: orchestrator/worker/synthesizer and sequential versus parallel patterns.
