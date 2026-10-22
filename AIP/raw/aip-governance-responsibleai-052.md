# aip-governance-responsibleai-052: Responsible AI 的公平、可解释与安全支柱

## Concepts

### Fairness

Fairness 关注：

> 不同群体是否被系统系统性地、不合理地区别对待。

重点不只是看总体准确率，而要看不同群体的结果分布和错误分布。

例如招聘 AI：

```text
男性误拒率：5%
女性误拒率：18%
```

即使总体准确率看起来不错，也可能存在 fairness 风险。

工程上常见实现路径：

```text
grouped evaluation
→ compare metrics across groups
→ detect bias / disparity
→ investigate causes
→ mitigate
→ monitor continuously
```

常见指标包括：

- acceptance rate
- false rejection rate
- false acceptance rate
- accuracy by group

Fairness 的核心不是要求所有群体结果完全一样，而是识别并降低不合理、系统性的群体差异。

### Explainability

Explainability 关注：

> 人能不能理解系统为什么给出这个结果，以及这个结果有哪些依据和限制。

一种常见实现是要求模型输出：

```text
recommendation
+
evidence
+
matched criteria
+
confidence
+
limitations
```

例如招聘辅助系统不只输出：

```text
推荐候选人 A
```

而是同时给出：

```text
依据：
- 5 年 Node.js 经验
- AWS production experience
- 满足主要岗位要求

限制：
- 未确认大型团队管理经验

Confidence:
- medium
```

工程上可以结合：

```text
Prompt
→ 要求解释

RAG / citations
→ 提供证据来源

Structured output
→ 固定 explanation / evidence 字段

Logging / trace
→ 保留输入、检索结果、模型版本和输出

Human review UI
→ 展示依据和限制
```

Explainability 不等于暴露模型完整内部 reasoning。

更重要的是：

> 给人工足够的信息去判断结果是否可信、是否应该采用。

### Safety

Safety 关注：

> 模型或 Agent 出错时，会不会造成真实伤害，以及系统有没有控制和兜底机制。

例如金融 Agent：

```text
LLM
→ recommendation
```

风险通常低于：

```text
LLM
→ automatically execute $500,000 transaction
```

因此 Safety 更多通过系统级控制实现：

```text
input validation
→ guardrails

output validation
→ content / PII / policy checks

action validation
→ schema check
→ business rules

authorization
→ permission checks
→ least privilege

high-risk operation
→ HITL

failure handling
→ timeout
→ retry
→ circuit breaker
→ fallback
```

Safety 不能只靠 prompt。

高风险操作需要使用 hard constraints、权限和业务规则，把模型限制在允许的行为范围内。

## Concept Relationships

三个支柱解决不同问题：

```text
Fairness
→ 对不同群体公平吗？

Explainability
→ 人能理解为什么吗？

Safety
→ 模型错了会不会造成伤害？
```

它们不能互相替代。

一个系统可能：

```text
Explainable ✅
Fairness ❌
```

例如系统能清楚解释拒绝理由，但某个群体的误拒率长期明显更高。

也可能：

```text
Explainability ✅
Safety ❌
```

例如模型能很好解释交易建议，但系统允许它直接执行高额交易，没有权限限制或人工确认。

因此 Responsible AI 需要同时考虑：

```text
measure impact
+
make decisions reviewable
+
control harmful outcomes
```

从工程实现角度，可以形成一个实用 mental model：

```text
Fairness
→ measure + evaluate + mitigate

Explainability
→ expose evidence + rationale + limitations

Safety
→ constrain + validate + authorize + fallback
```

## Understanding

用户最初将 Explainability 理解为：

> 模型在给结果的时候要加上依据，便于人工审核。

这个理解被进一步完善为：

```text
Model output
+
evidence / source / confidence / limitation
↓
Human review
```

用户随后询问 Fairness 与 Safety 的具体实现，并形成以下工程化理解：

```text
Fairness
→ 通过测试和分组 evaluation 来判定
→ 发现 bias 后再进行纠偏

Safety
→ 通过硬编码、系统控制和 AWS / application services 实现
```

进一步修正后：

```text
Fairness
→ 主要靠 evaluation / testing / monitoring 发现和量化问题
→ 再通过数据、threshold、feature、training 等手段 mitigation

Safety
→ 主要靠 hard constraints 和 system controls 阻止伤害
→ permissions / business rules / HITL / Guardrails / validation / fallback
```

用户最后把三个支柱整理为：

```text
Fairness
→ 测试、分组评估、bias detection

Explainability
→ prompt + evidence + structured output + trace

Safety
→ hard constraints + system control + services
```

这构成了本 KP 的核心工程 mental model。

## References

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Governance > Responsible AI Pillars (Fairness, Explainability, Safety)`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 432-433, ‘Responsible AI: Core Dimensions’ and ‘AWS Tools for Responsible AI’`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AIPStudyGuide.pdf — PDF p. 8, ‘VII. Governance and QA > Responsible AI’`
