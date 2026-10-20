# aip-governance-evaluationtypes-045: 自动评估与人工评估

## Concepts

### Evaluation Dataset

Evaluation 首先需要一个有代表性的测试集。

```text
representative prompts / tasks
→ model outputs
→ evaluation
```

如果 evaluation dataset 与真实生产 workload 差距很大，那么评估结果可能过于乐观或没有实际意义。

例如客服摘要模型，如果测试集都是简单短对话：

```text
easy cases only
→ high score
```

但真实生产包含：

```text
long conversations
ambiguous requests
policy conflicts
edge cases
```

那么 benchmark 就不能很好代表真实表现。

因此：

> evaluation quality 很大程度上依赖 evaluation dataset 是否具有代表性。

---

### Rubric / Success Criteria

在做评估之前，还需要先定义：

> 什么叫“好答案”？

例如摘要任务可以定义：

```text
correct facts
complete key points
no hallucination
concise
readable
```

这些标准就是 rubric / success criteria。

Human evaluation 也不应该只是：

```text
reviewer A: 我觉得不错
reviewer B: 我觉得一般
```

而应该是：

```text
human reviewer
+
defined rubric
```

也就是说，无论 automatic 还是 human evaluation，都需要清晰的评价标准。

---

### Automatic Evaluation

Automatic evaluation 使用程序化指标或模型自动评分。

典型优点：

```text
scale
consistency
speed
repeatability
```

其中：

```text
scale
→ 可以一次评很多样本

consistency
→ 可以持续按照同一套规则执行
```

例如：

```text
10,000 test cases
→ automatic evaluator
→ 10,000 scores
```

这使它特别适合：

```text
large-scale testing
regression testing
benchmark comparison
CI/CD evaluation
```

---

### Types of Automatic Evaluation

Automatic evaluation 可以分成不同类型。

一类是传统 deterministic / programmatic metrics，例如：

```text
exact match
accuracy
ROUGE
BLEU
schema validation
rule-based checks
```

这类通常成本低，而且不需要额外 LLM inference。

另一类是：

```text
LLM-as-a-Judge
```

例如：

```text
candidate answer
+
reference
+
rubric
→ evaluator LLM
→ score
```

虽然 evaluator 本身也是 LLM，但因为评分过程是自动执行的，所以仍属于 automatic evaluation。

---

### Cost of Automatic Evaluation

Automatic evaluation 并不一定便宜。

如果使用 LLM-as-a-Judge，成本会随着 evaluation dataset 增大而增加。

一个简单估算：

```text
dataset size
×
tokens per evaluation case
```

例如：

```text
5,000 cases
×
2,000 evaluator input tokens
≈ 10,000,000 input tokens
```

这还没有计算：

```text
candidate model generation
judge output tokens
multi-model comparison
repeated evaluation runs
```

因此，LLM-based automatic evaluation 在大规模场景下可能非常消耗 token。

---

### Layered Evaluation Strategy

实际工程中通常不会每次都全量跑所有 expensive evaluation。

更常见的是分层：

```text
PR / commit
→ small regression set

nightly
→ medium evaluation set

major release
→ larger / full benchmark
```

或者：

```text
cheap deterministic metrics
→ first pass

LLM-as-a-Judge
→ difficult / selected cases

Human evaluation
→ important / ambiguous / high-risk samples
```

这样可以在 evaluation quality 与成本之间取得平衡。

---

### Human Evaluation

Human evaluation 由人类 reviewer 根据 rubric 评价模型输出。

它更适合判断：

```text
helpfulness
contextual relevance
creativity
tone
complex edge cases
high-risk scenarios
```

这些维度往往不是简单 metric 能可靠表达的。

Human evaluation 的主要优势可以总结为：

```text
nuance
+
judgement
```

其中：

```text
nuance
→ 对细微语境和表达差异的判断

judgement
→ 综合业务、风险和用户体验进行判断
```

例如两个答案都事实正确，但：

```text
A
→ technically correct
→ tone is poor

B
→ equally correct
→ clearer and more appropriate
```

这类差异通常更适合人来判断。

---

### Limitations of Human Evaluation

Human evaluation 的代价也很明显：

```text
slow
expensive
less scalable
subject to reviewer bias
```

而且不同 reviewer 之间可能存在：

```text
inter-rater inconsistency
```

因此 human evaluation 也需要：

```text
clear rubric
domain expertise
consistent review process
```

---

### Automatic vs Human Evaluation

两者的核心区别可以压成：

```text
Automatic Evaluation
→ scale + consistency

Human Evaluation
→ nuance + judgement
```

更直白地说：

```text
Automatic
→ 擅长批量、统一标准、持续回归

Human
→ 擅长复杂、主观、细腻判断
```

两者不是替代关系，而是互补关系。

---

### Combined Evaluation Pipeline

一个典型 production evaluation pipeline：

```text
representative evaluation dataset
        ↓
automatic evaluation
        ↓
detect regressions / compare models
        ↓
sample difficult or important cases
        ↓
human evaluation
        ↓
release decision
```

例如切换模型前：

```text
5,000 test cases
→ automatic evaluation
```

自动结果可能显示：

```text
correctness ↑
latency ↓
cost ↓
```

但人工抽样后可能发现：

```text
tone worse
more overconfident answers
edge cases handled badly
```

因此不能只看 automatic score。

---

### Important Boundary

需要避免两个错误理解：

```text
Automatic ≠ objective truth
Human ≠ always correct
```

Automatic evaluation 会受到：

```text
metric selection
dataset quality
evaluator bias
rubric design
```

影响。

Human evaluation 会受到：

```text
reviewer bias
rubric clarity
domain expertise
inter-rater inconsistency
```

影响。

因此可靠 evaluation 的目标不是寻找一个“完美 evaluator”，而是：

> 使用合适的 dataset、rubric、automatic signals 和 human judgement 组合起来。

---

## Concept Relationships

整个 evaluation 流程可以理解为：

```text
real workload
→ representative evaluation dataset
→ define rubric / success criteria
→ generate model outputs
→ evaluate
```

Automatic evaluation：

```text
model outputs
→ programmatic metric / evaluator model
→ scalable repeatable signal
```

Human evaluation：

```text
model outputs
→ human reviewer + rubric
→ nuanced contextual judgement
```

两者组合：

```text
automatic evaluation
→ scale / regression detection

human evaluation
→ nuance / edge cases / high-risk judgement
```

因此：

```text
Automatic Evaluation
≠ Human Evaluation
```

但：

```text
Automatic + Human
→ stronger release confidence
```

---

## Understanding

用户最开始对下面这组表达不理解：

```text
Automatic Evaluation
→ scale + consistency

Human Evaluation
→ nuance + judgement
```

经过解释后，用户建立了更直接的 mental model：

```text
Automatic Evaluation
→ 擅长批量、统一标准

Human Evaluation
→ 擅长复杂、主观、细腻判断
```

其中：

```text
scale
→ 可以处理大量 evaluation cases

consistency
→ 持续按相同规则评估
```

而：

```text
nuance
→ 理解细微语境差异

judgement
→ 做复杂、综合、业务相关判断
```

用户随后询问 automatic evaluation 的体量和 token 成本，并理解：

```text
deterministic metrics
→ relatively cheap

LLM-as-a-Judge
→ consumes model tokens

larger dataset
→ higher evaluation cost
```

进一步建立了分层 evaluation 的思路：

```text
cheap automatic checks
→ broad coverage

LLM-based evaluation
→ selected / complex cases

human review
→ high-value / high-risk / ambiguous cases
```

最终 mental model：

```text
Evaluation
→ representative dataset
→ clear rubric
→ automatic evaluation for scale + consistency
→ human evaluation for nuance + judgement
→ combine both for stronger release decisions
```

## References

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Evaluation (QA) > Automatic vs. Human Evaluation`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 421 and 429, ‘Human Evaluation’ and ‘Bedrock Model Evaluations’`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AIPStudyGuide.pdf — PDF p. 9, ‘VII. Governance and QA > Evaluation Techniques’`
