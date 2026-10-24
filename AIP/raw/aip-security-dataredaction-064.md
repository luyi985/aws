# aip-security-dataredaction-064: PII 检测、Token-level Redaction 与数据最小化

## Concepts

### 1. PII Detection

PII（Personally Identifiable Information）指能够直接或间接识别个人的信息，例如姓名、Email、电话号码、证件号码等。

PII Detection 的职责是识别敏感信息及其位置，并不意味着已经完成脱敏。

```text
Input:
Contact Alice at alice@example.com

Detection:
Alice             → PERSON
alice@example.com → EMAIL
```

### 2. NER 与 PII Detection

NER（Named Entity Recognition）用于识别文本中的实体，例如 PERSON、ORGANIZATION、LOCATION。

PII Detection 关注信息是否能够识别个人。两者有交集，但不是同一概念。

```text
NER
→ 识别实体

PII Detection
→ 识别涉及个人身份的敏感信息
```

实际系统可能结合机器学习模型、实体识别、正则表达式和业务规则来提高检测覆盖度。

### 3. Masking、Redaction 与 Token-level Redaction

Masking 是遮盖敏感信息，Redaction 是删除或替换敏感信息。

```text
Original:
alice@example.com

Masking:
a***@example.com

Redaction:
[EMAIL]
```

Token-level Redaction 在这里指对文本中具体敏感片段进行细粒度替换，而不是简单删除整段文本。

```text
Original:
Customer 12345 owes $500.

Redacted:
Customer [CUSTOMER_ID] owes $500.
```

这里的 token-level 不应简单理解为必须直接修改 LLM tokenizer 的 token ID。

如果需要在处理过程中保留对象之间的关系，可以使用一致的占位标识：

```text
Alice → CUSTOMER_001
Bob   → CUSTOMER_002
```

但如果仍保留标识与真实身份之间的映射，这属于 pseudonymization，不代表数据已完全匿名化。

### 4. Data Minimization

Data Minimization 的原则是：

**模型不需要的数据，就不要传给模型。**

例如，交易风险分析原始输入包含：

```json
{
  "customerEmail": "alice@example.com",
  "bankAccount": "123456789",
  "amount": 15000,
  "riskScore": 0.92,
  "reason": "Unusual spending pattern"
}
```

如果模型只需要解释风险原因，应用可以构造：

```json
{
  "amount": 15000,
  "riskScore": 0.92,
  "reason": "Unusual spending pattern"
}
```

优先在 Backend 排除不必要的字段，可以减少模型输入、日志及其他处理环节的敏感数据暴露面。

### 5. Pre-processing 与 Post-processing

敏感数据保护应同时考虑模型调用前和调用后。

```text
User / Documents / Retrieved Context
↓
Pre-processing
├─ Data minimization
├─ PII detection
└─ Redaction
↓
LLM inference
↓
Post-processing
├─ PII detection
├─ Output redaction
└─ Policy validation
↓
Response
```

Pre-processing 主要降低敏感数据进入模型的风险。Post-processing 主要降低模型输出中暴露敏感信息的风险。

两者不能互相替代：输出过滤无法撤销已经传入模型的数据，输入过滤也不能保证模型输出绝不泄露敏感信息。

### 6. AWS Mapping

| 通用能力 | AWS 实现 |
|---|---|
| 文本 PII 识别 | Amazon Comprehend `DetectPiiEntities` |
| 模型输入、输出中的敏感信息过滤 | Bedrock Guardrails |
| S3 数据中的敏感信息发现 | Amazon Macie |
| 自定义字段遮盖、替换与 tokenization | Application / Lambda |
| 限制敏感资源访问 | IAM 与应用授权 |

PII 本身是数据类型，不是 AWS 产品，也不属于 Comprehend 独有。

Amazon Comprehend 包含 PII Detection、NER、Sentiment Analysis 等文本分析能力。

Comprehend 的 PII Detection 可以返回敏感信息类别、位置与置信度，应用据此执行实际 redaction。

Bedrock Guardrails 可以针对支持的敏感信息类型配置阻止或遮盖策略，但不能替代数据最小化和访问权限控制。

Macie 主要用于 S3 中的敏感数据发现。

这些检测能力都可能出现误检或漏检，不应被视为绝对安全保证。

## Concept Relationships

完整安全思路：

```text
Minimize
→ Detect
→ Redact / Mask
→ Model
→ Detect again
→ Validate response
```

优先级：

```text
不需要的数据
→ 不传

必须传但不需要真实身份
→ Redact / pseudonymize

必须保留敏感信息
→ 限制访问、用途、日志及保留范围
```

064 与 063 Prompt Injection 的共同工程原则是：

**模型层安全功能是防护的一部分；应用层必须负责执行确定性的安全约束。**

## Understanding

用户完成了以下场景判断：

当 Agent 只需要交易金额、风险评分和原因，而不需要 Email、银行账号时，优先在 Backend 构造模型请求时直接排除敏感字段，而不是先传给 Bedrock、再依赖 Guardrails 或 System Prompt。

用户选择 **B — 在 Backend 排除不必要的字段**，理解了 Data Minimization 的优先级。

用户进一步询问 PII 是否属于 Comprehend，并厘清：

```text
PII
→ 敏感信息类别

Comprehend
→ 文本 PII Detection

Bedrock Guardrails
→ 模型输入/输出敏感信息过滤

Macie
→ S3 敏感信息发现
```

## References

以下为原始 KP 继承的来源；本次未重新打开底层资料，不代表已独立核验全部内容。

- [AWS Certified Generative AI Developer 课程资料](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — AIP-C01 course slides / detailed coverage
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — AIP-C01 Study Guide (Detailed)
- [AWS Bedrock Guardrails — Sensitive Information Filters](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitive-filters.html)
- [Amazon Comprehend — PII](https://docs.aws.amazon.com/comprehend/latest/dg/pii.html)
