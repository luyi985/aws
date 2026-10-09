# aip-foundations-transformer-001: Transformer 预训练架构

## Concepts

### Transformer

Transformer 是一种 **Neural Network Architecture（神经网络架构）**，用于处理序列及其上下文关系。

Transformer 的关键能力之一是通过 **Self-Attention（自注意力）** 建模不同 token 之间的关系，使一个 token 的表示能够结合上下文。

例如：

- `The bank approved my loan.`
- `I sat on the river bank.`

同一个 `bank`，因为上下文不同，其表示和含义也不同。

### Transformer 与 Next-token Prediction

Transformer 本身是一种神经网络架构，**不能直接等同于 Next-token Prediction**。

生成式语言模型可以使用 Transformer，并根据已有上下文预测下一个最可能的 token：

`Context → Transformer → Next-token probabilities`

但 Transformer 也可以用于其他任务，因此：

**Transformer = Architecture**

**Next-token Prediction = 一种训练/生成任务**

### Pre-training（预训练）

Pre-training 是使用大量训练数据训练模型、不断调整 **Parameters / Weights（参数/权重）** 的过程。

可以建立这样的基本模型：

`大量数据 → Pre-training → 参数/权重形成通用模式 → Foundation Model`

因此：

- **Transformer** 描述模型如何组织和处理信息。
- **Pre-training** 描述如何通过训练把大量数据中的模式学习进模型参数。

二者不是同一个概念。

### Foundation Model

经过大规模预训练后，模型获得比较通用的能力，可以作为多个下游任务的基础，这就是 Foundation Model 的核心思想。

不需要针对每一个任务都从零开始训练模型，而可以：

`Pre-training → Foundation Model → Downstream Use / Customization`

## Understanding

学习过程中形成的核心心智模型：

**Transformer = 怎么处理信息的架构**

**Pre-training = 怎么把大量数据中的模式训练进这个架构的参数**

最初将 Transformer 理解成“感知环境并猜测下一个 token”，经过讨论后修正为：

- Transformer 本身负责上下文信息处理。
- Self-Attention 是建立上下文关系的重要机制。
- Next-token Prediction 是生成式语言模型常见的训练/生成方式，而不是 Transformer 的定义。

### 与后续训练的关系

Pre-training 得到 Foundation Model 后，还可以继续进行进一步定制，例如：

`Pre-training`
`↓`
`Foundation Model`
`↓`
`Continued Pre-training / Fine-tuning`

Continued Pre-training 或 Fine-tuning 是在已有模型基础上继续调整参数，而不是重新发明或重新定义 Transformer 架构。

## Open Questions

- None

## Exam-Level Review — 2026-10-09

Result: L4 passed in this review; delayed retention not tested.

Initial confusion: Transformer versus next-token prediction; general pre-training versus domain adaptation.

Corrected understanding: Transformer is architecture; self-attention builds contextual representations; next-token prediction is one task. General pre-training develops broad capabilities. Continued pre-training updates weights with domain data. RAG retrieves external knowledge without retraining the model.

Evidence: Q2=B, Q3=A+C, Q4=B, Q5=B, final scenario=C. The learner explained prioritizing up-to-date RAG and avoiding unnecessary training cost, with domain adaptation conditional on evaluation. Exclusion rationale for other final choices was supplied by the assistant, not the learner.

State: understanding validated; connection related; application transferred in hypothetical scenario; retention later untested.

Original sources: AIP/preRaw/NotebookLM Mind Map.png (I. Foundational AI Concepts > Foundation Models > Transformer Architecture); AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf (p.17); AIP/preRaw/AIPStudyGuide.pdf (p.1).

AWS references:
- https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/genops05-bp01.html
- https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html
- https://docs.aws.amazon.com/nova/latest/nova2-userguide/nova-cpt.html

Next: aip-foundations-modalities-002; review KP 001 later for retention.
