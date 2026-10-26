# aip-governance-evaluationmetrics-046: ROUGE、BERTScore、Faithfulness 与 Correctness

## Concepts

### 1. ROUGE — 文字重合度

ROUGE 比较生成答案（Generated Answer）与参考答案（Reference Answer）的词语、词组或序列重合程度。

- **ROUGE-1**：单词重合。
- **ROUGE-2**：连续两个词的重合。
- **ROUGE-L**：最长公共子序列。

例如：

Reference: The cat is sleeping on the sofa.

Generated: A cat is sleeping on the couch.

两句话含义接近，但 `sofa` 与 `couch` 不同，因此可能降低 ROUGE 分数。

**局限性**：对同义改写敏感；文字重合不代表事实正确。

### 2. BERTScore — 语义相似度

BERTScore 使用预训练语言模型生成的上下文化 Token Embedding，比较生成答案与参考答案的语义相似度。相较于 ROUGE，它通常能更好地识别 `sofa` 与 `couch` 等同义表达。

但 BERTScore **不是事实正确性验证器**。

- Reference: The patient does not have cancer.
- Generated: The patient has cancer.

即使含义相反，多数 Token 仍然相近，BERTScore 可能给出较高相似度。

**Semantic Similarity ≠ Logical Consistency ≠ Factual Correctness。**

### 3. Faithfulness — 依据忠实度

Faithfulness 判断生成答案中的事实陈述是否得到提供的 Context 支持。

Context: Revenue was $10 million.

Generated: Revenue was $10 million.

该答案忠实于 Context，因此 Faithfulness 可以很高，但它不会保证 Context 本身正确。

### 4. Correctness — 事实正确性

Correctness 判断答案是否符合可信事实或经过验证的参考答案。

常见评估方法：

- **Reference-based Evaluation**：与 Golden Dataset 中的参考答案比较。
- **LLM-as-a-Judge**：依据 Question、Reference、Generated Answer 和 Rubric 判断；需用人工标注样本校准。
- **Deterministic Validation**：对交易状态、金额、ID 等明确事实，查询可信系统或执行确定性校验。

LLM-as-a-Judge 仍可能判断错误，不能视为绝对正确的裁判。

## Concept Relationships

| 指标 | 核心问题 | 主要局限 |
|---|---|---|
| ROUGE | 文字有多相似？ | 不判断事实正确性 |
| BERTScore | 语义有多接近？ | 可能忽略关键逻辑差异 |
| Faithfulness | 是否得到 Context 支持？ | Context 可能错误或过期 |
| Correctness | 是否符合可信事实？ | 依赖可靠参考与评估方法 |

### Faithfulness 高，但 Correctness 低

```text
Knowledge Base
    ↓
旧财报：Revenue = $10M
    ↓
RAG 回答：Revenue = $10M
    ↓
Faithfulness：高
    ↓
最新可信财报：Revenue = $15M
    ↓
Correctness：低
```

即使 LLM 没有编造，最终答案仍可能错误。原因可位于 Data Quality、Retrieval Quality 或 Generation Quality，单个评分无法覆盖全部维度。

## Example

假设 Golden Dataset：

```json
{
  "question": "What is the latest annual revenue?",
  "reference": "$15 million",
  "generated": "$10 million"
}
```

若检索 Context 是过期财报中的 `$10 million`：

- Faithfulness 可以较高。
- Correctness 较低。
- ROUGE 和 BERTScore 只提供文字或语义相似的辅助信号。

准确数值类业务场景还可以结合可信数据源进行 Deterministic Validation。

## Understanding

用户在讨论中提出“感觉 BERTScore 不是那么可靠”，并通过否定句、数值错误案例明确了其边界：语义相似度高不保证事实正确。

用户随后询问 Correctness 如何判定，讨论了 Reference-based Evaluation、LLM-as-a-Judge 和 Deterministic Validation。

在 RAG 使用错误或过期文档的场景中，用户判断：“Faithfulness 高，Correctness 低，也就是说文档本身有错误。”后续澄清还可能是文档过期、检索版本错误或事实时间范围不同，未必是原始文档从一开始就有错。

## References

以下资料继承自原始 preRaw KP，未在本次整理时重新读取原始文件：

- [NotebookLM Mind Map](../preRaw/NotebookLM%20Mind%20Map.png) — VI. Governance, Security & QA > Evaluation (QA) > Metrics (ROUGE, BERTScore, Faithfulness, Correctness)
- [AWS Certified Generative AI Developer](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — PDF pp. 425, 427, 430；ROUGE、BERTScore、Bedrock Model Evaluations
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — PDF p. 9；Evaluation Techniques
