---
id: aip-responsible-ai-025
title: Responsible AI dimensions
status: pending
sources:
  - "AIP/preRaw/AIPStudyGuide.pdf, Section VII: Responsible AI"
dependencies:
  - aip-guardrails-008
  - aip-human-oversight-017
---

# aip-responsible-ai-025: Responsible AI dimensions

## Learning Objective

Use responsible-AI dimensions to frame design and release decisions for a GenAI feature.

## Scope

- Included: fairness, explainability, privacy, safety, controllability, veracity, governance, transparency.
- Excluded: detailed metric implementation.

## Source Context

The governance section provides a broad evaluation frame beyond functional correctness.

## Knowledge Point

Responsible AI evaluates whether an AI system is fair, explainable, private, secure, safe, controllable, truthful, governed, and transparent. These dimensions guide the controls, human review, and evaluation evidence needed for a release.

## Logical Path

1. A feature may work technically while causing unacceptable harm.
2. Responsible-AI dimensions identify distinct risk categories.
3. Each category needs relevant controls and evidence.
4. Release decisions weigh the residual risks against the intended benefit.

## Key Terms

- Veracity: degree to which outputs are accurate and appropriately grounded.
- Controllability: ability to constrain and govern system behavior.

## Example

Before releasing a recruitment assistant, a team tests response grounding, reviews privacy handling, adds an appeal path, and documents system limits. This demonstrates a multi-dimension responsible-AI review.

## Sources

- AIP/preRaw/AIPStudyGuide.pdf, Section VII “Responsible AI”: dimensions and related AWS tools.
