# aip-governance-clarify-053: SageMaker Clarify 偏差检测

## Concepts

### SageMaker Clarify

SageMaker Clarify 是 AWS 中用于帮助分析 bias 和 explainability 的治理工具。

它的核心作用不是直接判断“公平 / 不公平”，而是：

```text
dataset / model predictions
↓
group comparison
↓
bias metrics
↓
report / signals
```

Clarify 更像：

```text
bias detector
+
evidence provider
```

而不是：

```text
fairness judge
```

### Pre-training Bias

Pre-training bias 指：

> 在模型训练之前，先检查 training dataset 本身是否已经存在群体差异或代表性问题。

Clarify 可以分析：

```text
不同群体样本数量
label distribution
positive / negative label proportion
class imbalance
```

例如：

```text
Group A:
1000 samples
600 positive labels

Group B:
1000 samples
300 positive labels
```

这里模型还没训练，就已经可以看到不同群体的 label 分布存在明显差异。这属于训练数据层面的 bias signal。

因此：

```text
Training Dataset
↓
Clarify pre-training bias analysis
↓
发现数据本身可能存在偏差
```

Clarify 自己不负责训练模型。这里的 pre-training 指的是在“你的 ML model”训练之前进行分析。

### Post-training Bias

模型训练完成以后，可以再检查模型对不同群体的预测结果是否存在系统性差异。

例如：

```text
Group A
→ false rejection rate 5%

Group B
→ false rejection rate 18%
```

Clarify 可以比较：

```text
prediction results
+
actual labels
+
group attributes
```

然后计算不同 group 的指标差异。

核心区别：

```text
Pre-training bias
→ 看 training data 有没有偏

Post-training bias
→ 看 trained model 的结果有没有偏
```

### Group Slice

Bias detection 需要先定义群体。

例如：

```text
Group A
Group B
```

群体可以按业务或治理关注的属性进行切分。Clarify 然后针对每个 group 计算指标，例如：

- approval rate
- false rejection rate
- false positive rate
- accuracy
- label proportion

再比较群体之间的差异。

因此：

```text
group definition
↓
slice dataset / predictions
↓
calculate metrics
↓
compare groups
```

### Clarify Output

Clarify 的输出不是一句：

```text
This model is fair.
```

而是一组 bias analysis results，例如：

```text
Group A positive-label rate: 62%
Group B positive-label rate: 41%

Difference in Proportions of Labels:
0.21
```

或者：

```text
Group A false negative rate: 6%
Group B false negative rate: 19%
```

所以 Clarify 输出的核心是：

```text
group statistics
+
bias metrics
+
group differences
+
analysis reports
```

这些结果可以用于 investigation、monitoring、governance review 和 mitigation decisions。如果与 Model Monitor / CloudWatch 等机制组合，也可以用于持续监控和告警。

### Bias Signal Is Not a Fairness Verdict

Clarify 检测到群体差异，不代表一定不公平、一定违法，或原因一定是敏感属性。

例如：

```text
Group A approval rate 70%
Group B approval rate 45%
```

Clarify 可以告诉我们两个群体的结果差异明显，但不能仅凭这个数字确定原因。

后续还需要：

```text
Clarify metrics
↓
domain / governance review
↓
investigate cause
↓
determine whether difference is acceptable
↓
mitigation if needed
```

因此，Clarify 提供调查信号和证据，不负责最终治理结论。

## Concept Relationships

Clarify 在模型生命周期中的位置可以理解为：

```text
Training Dataset
↓
Clarify
→ pre-training bias analysis
↓
Train Model
↓
Model Predictions
↓
Clarify
→ post-training bias analysis
↓
Governance / Human Review
↓
Mitigation
```

它和 Fairness 的关系是：

```text
Fairness
→ governance objective

Clarify
→ AWS tool used to measure bias signals
```

Fairness 是更大的目标，而 Clarify 是实现这个目标时可以使用的工具之一。

### Clarify and Agent

Clarify 不是 Agent runtime 的核心组件。

Agent 更关注：

```text
planning
tool use
memory
workflow
action execution
HITL
```

Clarify 更关注：

```text
model governance
bias detection
group comparison
explainability
```

但是两者可以间接关联。例如 Agent 调用 risk scoring model，再根据 risk score 做 recommendation/action；Clarify 可以检查这个 risk model 是否对某个群体误报率异常高。

因此，Clarify 主要审计 Agent 所依赖的模型或最终决策结果，而不是 Agent 的 planning / tool-calling 机制本身。

### Fairness and Agent

Fairness 与 Agent mechanics 同样不是直接关系。

如果 Agent 只是 tool orchestration、workflow execution、information retrieval，通常 Fairness 不是核心问题。

但如果 Agent 会 approve/reject、rank users、risk score、recommend candidates、prioritize customers，则需要检查 Agent + model + business rules 的最终结果是否对某些群体产生系统性不合理差异。

因此：

```text
Fairness
→ 不只是 model training 问题
→ 更广义是 AI system outcome 的治理问题
```

## Understanding

用户首先把 Clarify 与之前学习的 Fairness 联系起来，并进一步确认 Clarify 的具体输出。

建立的理解是：

```text
Clarify
→ 不输出简单的 fair / unfair 结论
→ 输出不同群体的 bias metrics 和比较结果
```

用户随后询问自己的用户交易异常检测是否适合 Clarify。

通过该例子进一步区分：

```text
Anomaly Detection
→ 判断某个用户当前行为是否异常

Clarify
→ 判断模型对不同用户群体是否存在系统性偏差
```

因此单个用户突然出现异常交易：

```text
historical behaviour
↓
current transaction
↓
anomaly detection
```

不是 Clarify 的主要用途。

但如果一个 fraud / risk model：

```text
对 Group A 误报 5%
对 Group B 误报 20%
```

Clarify 就可以用于分析这种群体偏差。

用户随后澄清了 pre-training 的含义，并建立：

```text
Clarify 本身不需要先训练

Pre-training bias
→ 在 ML model 训练前检查数据

Post-training bias
→ 在 ML model 训练后检查预测结果
```

用户将 Clarify 理解为：

> 用来辅助模型训练和治理，检查不同群体是否受到不合理的差异对待。

这一理解进一步修正为：

```text
Clarify
→ measure bias

Human / Governance
→ judge whether difference is reasonable

Mitigation
→ correct data / model / process if necessary
```

最后用户确认 Clarify 与 Agent 的直接关系较弱，并进一步追问 Fairness 与 Agent 的关系。

最终 mental model：

```text
Clarify
→ model / data governance tool

Fairness
→ broader AI system governance objective

Agent
→ runtime orchestration / action system
```

Fairness 和 Clarify 都不是 Agent mechanics 的核心，但如果 Agent 的最终决策会影响不同用户群体，则仍然需要对整个系统结果进行 fairness evaluation。

## References

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Governance > SageMaker Clarify (Bias Detection)`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 327-328 and 433, SageMaker Clarify slides`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AIPStudyGuide.pdf — PDF pp. 7-8, ‘Bias and Explainability’ and ‘Responsible AI’`
