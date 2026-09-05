# Mode 2 Learning Plan: AIP-C01

## Scope

- Learning root: `AIP/`
- KP root: `AIP/preRaw/KP/`
- KP count: 31
- Subject: building a production-ready AWS generative-AI application for the AIP-C01 scope
- Target depth: top-down exam and architecture mental model; drill into a branch only when it is needed
- Last analysis date: 2026-09-05

## Big Picture

An AIP-C01 solution is not merely a model call. It is a production system that first gives a foundation model useful instructions and trustworthy context, then connects it to application actions and users. The system must also be safe, private, observable, cost-effective, and testable. These responsibilities form one loop: design the interaction, integrate it into a workflow, constrain its risks, then measure and improve it.

## Knowledge Tree

```text
AIP-C01 production GenAI application
├── 1. Grounded FM interaction
│   ├── Model and inference interface
│   ├── Prompt design and orchestration
│   ├── RAG and Knowledge Bases
│   └── Data preparation and vector retrieval
├── 2. Application and agent integration
│   ├── Agents, tools, workflows, memory, and human review
│   ├── Serverless/API integration and operational data
│   └── Repeatable infrastructure delivery
├── 3. Safety, privacy, and responsible operation
│   ├── Content controls and grounding
│   ├── Identity, secrets, encryption, and private connectivity
│   └── Responsible-AI decision making
├── 4. Production optimization and assurance
│   ├── Cost, latency, caching, and model routing
│   ├── Deployment, monitoring, tracing, and drift
│   └── Evaluation and quality feedback
└── 5. Exam application
    └── Scenario reasoning and question handling
```

## Node to KP Mapping

| Node | Existing KP IDs |
|---|---|
| 1. Grounded FM interaction | `aip-genai-foundations-001`, `aip-bedrock-inference-002`, `aip-prompt-design-003`, `aip-rag-pattern-004`, `aip-knowledge-base-005`, `aip-retrieval-quality-006`, `aip-model-adaptation-007`, `aip-prompt-orchestration-009`, `aip-data-preparation-010`, `aip-document-automation-011`, `aip-language-services-012`, `aip-vector-store-013` |
| 2. Application and agent integration | `aip-agent-architecture-014`, `aip-agent-workflows-015`, `aip-agent-memory-016`, `aip-human-oversight-017`, `aip-serverless-integration-023`, `aip-iac-delivery-024`, `aip-data-services-030` |
| 3. Safety, privacy, and responsible operation | `aip-guardrails-008`, `aip-responsible-ai-025`, `aip-identity-secrets-028`, `aip-private-connectivity-029` |
| 4. Production optimization and assurance | `aip-token-efficiency-018`, `aip-model-routing-019`, `aip-latency-resilience-020`, `aip-sagemaker-deployment-021`, `aip-sagemaker-responsible-022`, `aip-genai-evaluation-026`, `aip-agent-observability-027` |
| 5. Exam application | `aip-exam-strategy-031` |

Unmapped KPs: None.

## Relationship Notes

- RAG is a cross-cutting grounding mechanism: it connects data preparation and vector retrieval to prompting, safety, evaluation, latency, and cost.
- Prompt design controls model behavior; guardrails constrain unacceptable behavior. They are complementary rather than substitutes.
- Agent workflows consume model, RAG, and tool capabilities; memory and human review influence how safely they act over time.
- Monitoring and evaluation close the production loop: traces diagnose a response, while evaluation decides whether the behavior is acceptable.
- Fine-tuning and RAG are a design contrast: one changes model behavior through additional training, the other supplies current knowledge at inference time.

## Validation Findings

- KP structure: 31 readable Markdown files, unique IDs, and all declared dependency targets exist.
- Coverage caveat: current KPs give a strong conceptual outline but do not yet separately cover several official implementation skills, including MCP/Strands, streaming or asynchronous APIs, CI/CD, adversarial-input defenses, and systematic regression troubleshooting.
- Source caveat: `aip-exam-strategy-031` reflects the supplied study guide; its stated Ordering/Matching formats conflict with the current AWS official AIP-C01 guide, which should be used when that KP is eventually revised.

## Learning State

| Node | State |
|---|---|
| AIP-C01 production GenAI application | needs_decomposition |
| 1. Grounded FM interaction | not_started |
| 2. Application and agent integration | not_started |
| 3. Safety, privacy, and responsible operation | not_started |
| 4. Production optimization and assurance | not_started |
| 5. Exam application | not_started |

## Understanding Evidence

None yet. The top-level model has been introduced but not confirmed by the user.

## Current Focus

- Node: `AIP-C01 production GenAI application`
- Parent: none (subject root)
- Abstraction level: system overview
- Why: establish the responsibilities of a production GenAI system before selecting a branch for detailed learning.

## Drill-down Path

`AIP-C01 production GenAI application`

## Open Branches

- Grounded FM interaction
- Application and agent integration
- Safety, privacy, and responsible operation
- Production optimization and assurance
- Exam application

## Integration Summary

Not yet established. The provisional synthesis is that an AIP-C01 system uses FMs with prompts and grounded data, embeds them in controlled application or agent workflows, and continuously constrains, measures, and improves the resulting behavior.
