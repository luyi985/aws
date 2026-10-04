# aip-data-comprehend-033: Amazon Comprehend 文本分析

## Concepts

### Amazon Comprehend

Amazon Comprehend 是用于自然语言文本分析的 AWS NLP 服务。

当前 KP 重点关注三类能力：

- Named Entity Recognition
- PII detection / redaction
- Classification

### Named Entity Recognition

NER（Named Entity Recognition）用于识别文本中的实体及其类型。

例如：

```text
"Sarah works for Contoso in Sydney."
```

可以识别：

```text
Sarah → Person
Contoso → Organization
Sydney → Location
```

核心问题是：

> 文本里面有什么实体？

### Custom Entity Recognition

Custom Entity Recognition 用于识别业务自己定义的实体类型。

例如：

```text
"KSP processed PolicyNumber PN-12345."
```

业务可能希望识别：

```text
KSP → InternalSystem
PN-12345 → PolicyNumber
```

它和 NER 属于同一类问题：

```text
NER
→ 通用实体识别

Custom Entity Recognition
→ 业务自定义实体识别
```

### Classification

Classification 用于判断整段文本属于什么类别。

例如：

```text
"My credit card was charged twice."
```

可能分类为：

```text
billing_issue
```

核心问题是：

> 这整段文本是什么类型？

### Custom Classification

Custom Classification 使用业务自己定义的类别来进行文本分类。

例如类别：

```text
payment
account
technical
compliance
```

输入：

```text
"Customer cannot deposit money."
```

输出：

```text
payment
```

关系可以记成：

```text
Classification
→ 文本分类任务

Custom Classification
→ 使用自定义业务类别做分类
```

### Entity Recognition vs Classification

最重要的区别：

```text
Entity Recognition
= 文本里面有什么对象

Classification
= 整段文本属于什么类别
```

再加上 General / Custom 维度：

```text
                        General                 Custom
----------------------------------------------------------------
Entity                  NER                     Custom Entity Recognition
Whole Text              Classification          Custom Classification
```

### PII Detection / Redaction

PII 全名：

Personally Identifiable Information

PII detection / redaction 用于识别并遮盖敏感个人信息，例如：

- name
- email
- phone number
- address
- ID number

典型流程：

```text
Input Text
→ Comprehend PII Detection / Redaction
→ Masked Text
→ Bedrock
```

可以把它作为数据进入 Bedrock 前的一层 data protection / preprocessing。

### Comprehend Capability Model

可以把当前 KP 压缩成：

```text
Amazon Comprehend
├─ Entity Recognition
│  ├─ NER
│  └─ Custom Entity Recognition
│
├─ Classification
│  └─ Custom Classification
│
└─ PII Detection / Redaction
```

对应三个问题：

```text
1. 文本里有什么？
   → NER / Custom Entity Recognition

2. 这段文本是什么类型？
   → Classification / Custom Classification

3. 有没有敏感个人信息？
   → PII Detection / Redaction
```

## Understanding

在客服工单场景：

```text
"Sarah from Contoso says her credit card was charged twice.
Please contact her at sarah@example.com."
```

可以分别处理为：

```text
NER
→ Sarah
→ Contoso

PII Redaction
→ sarah@example.com

Classification
→ billing issue
```

如果业务需要识别公司自己的实体类型，例如：

```text
PolicyNumber
InternalSystem
MarketId
```

则更适合 Custom Entity Recognition。

如果业务需要把整条文本分类到自定义类别，例如：

```text
claim
billing
complaint
```

则使用 Custom Classification。

如果文本进入 Bedrock 前需要隐藏 email、phone number 等个人敏感信息，则优先考虑 PII Detection / Redaction。

考试判断时，可以直接看题目里的“动作”：

```text
找敏感个人信息
→ PII

找自定义业务对象
→ Custom Entity Recognition

给整段文本分到自定义业务类别
→ Custom Classification
```

Amazon Comprehend 的定位是 NLP analysis service。

它可以作为 Bedrock 前的数据处理层，但不应和生成式模型服务混淆。

## Validation Evidence

场景：

- 隐去 email 和 phone number
- 找出自定义实体 PolicyNumber
- 把整条消息分类为 claim / billing / complaint

正确映射：

```text
PII Detection / Redaction
Custom Entity Recognition
Custom Classification
```

当前理解达到本 KP 的 exam-ready working depth。

## Open Questions

- None
