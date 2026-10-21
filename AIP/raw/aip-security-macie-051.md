# aip-security-macie-051: Amazon Macie 敏感数据发现

日期：2026-10-21
学习模式：Mode 1
范围：S3 敏感数据发现、识别机制、finding 与治理处置。

## Concepts

### 1. PII 是数据类别

PII（Personally Identifiable Information）是个人身份信息，
例如护照号码、联系方式等。

PII 不是某个检测工具的名字。
不同工具可以在不同位置检测 PII。

### 2. Macie 与 Bedrock Guardrails

| 工具 | 检查对象 | 主要用途 |
|---|---|---|
| Amazon Macie | S3 中的数据 | 发现敏感数据，产生 finding |
| Bedrock Guardrails 的敏感信息过滤器 | 用户输入、模型输出 | 检测 PII，并按配置阻止或遮蔽 |

两者有检测能力的重叠，但工作位置和完整任务不同。

Macie 不局限于模型数据，也不是扫描所有 AWS 服务的通用工具。
其敏感数据发现面向 S3，可检测受支持的 PII、金融信息、凭据等。

### 3. Macie 基于什么识别敏感信息？

Macie 使用包括机器学习、模式匹配在内的技术。
检测能力通过数据标识符（data identifiers）提供。

#### Managed data identifiers

AWS 提供的内置检测标准，针对特定敏感数据类型，
例如受支持国家或地区的护照号码、信用卡号码和凭据。

部分检测要求匹配值附近出现关键词，
或利用列名、字段名提供上下文。

不能把所有内置检测器都简单等同于同一条正则。

#### Custom data identifiers

用户为自己的业务数据定义检测标准：

- 正则表达式：描述要匹配的格式。
- 可选关键词：为匹配提供上下文。
- 距离规则：限定关键词与匹配内容的距离。
- 忽略词：排除特定匹配结果。

示意例子：

    Customer ID: CUST-12345678

可以定义：
- 格式：CUST- 后跟 8 位数字。
- 关键词：Customer ID。
- 距离：关键词需要靠近编号。

这适合发现企业专属的员工编号、客户账号等信息。
不应把检测机制理解成单纯让生成式大模型阅读后自由判断。

### 4. Finding 与处置

Finding 是记录检测结果的结构化发现项。

发现敏感信息不等于自动删除、脱敏或隔离。
这些动作需要后续治理规则、工作流或人工处理。

未检测到敏感信息，也不等于数据绝对安全或已满足合规要求。

## Concept Relationships

### RAG 示例：先发现，再决定是否摄取

S3 中的客户文档准备进入 RAG 知识库：

1. 配置 Macie 检查相关 S3 数据。
2. Macie 检测到受支持的敏感信息。
3. 生成 finding。
4. 治理流程根据结果决定告警、脱敏、隔离或阻止摄取。
5. 通过准入检查的数据才允许进入后续知识库流程。

“阻止摄取”需要治理流程实际执行；
启用 Macie 本身不等于自动建立了摄取阻断机制。

### 与 Guardrails 的互补

- Macie：发现 S3 源数据中的敏感信息。
- Guardrails：检查配置覆盖的用户输入和模型输出。

源数据治理与对话过滤可以同时使用。
其中一层的存在，不代表另一层的职责已经完成。

## Understanding

### 本次讨论形成的区分

用户最初把 PII 与模型输出检测联系起来。
讨论后，区分了：
- PII 是检测对象。
- Guardrails 和 Macie 是不同位置上的检测工具。

用户将 Macie 概括为“通用检测敏感信息”。
本次进一步限定：它不局限于模型场景，但其敏感数据发现面向 S3。

### 识别机制的补充

用户追问 Macie 根据什么找到 PII。
本次补充了：
- AWS 内置数据标识符。
- 自定义正则及关键词等规则。
- finding 与后续处置的区别。

### 学习证据边界

用户对解释表示理解，但本次未进行独立场景验证、
实际配置或长期记忆测试，不据此声称已具备独立操作能力。

## Review Focus

- PII 是数据类别，不是产品。
- Macie 检查 S3；Guardrails 检查配置覆盖的输入和输出。
- 内置标识符由 AWS 提供，自定义标识符补充业务规则。
- Finding 是发现结果，处置需要后续流程。
- 未发现不等于绝对安全。

## References

- [原始 KP 定义](../preRaw/KP/aip-security-macie-051.md)：
  本次直接读取，保留既有 KP 身份与范围。
- [NotebookLM Mind Map](../preRaw/NotebookLM%20Mind%20Map.png)：
  继承引用，节点“VI. Governance, Security & QA > Security & Identity >
  Amazon Macie (Sensitive Data Discovery)”；本次未重新检查原图。
- [AWSCertifiedGenerativeAIDeveloper.pdf](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf)：
  继承引用，PDF 第 499 页，“AWS Macie”；本次未重新检查 PDF。
- [AIPStudyGuide.pdf](../preRaw/AIPStudyGuide.pdf)：
  继承引用，PDF 第 9 页，“VIII. Security, Identity, and Compliance”；
  本次未重新检查 PDF。
- [AWS：Macie 用户指南](https://docs.aws.amazon.com/pdfs/macie/latest/user/macie-user-guide.pdf)：
  本次检索使用，支持 S3 敏感数据发现的定位。
- [AWS：Guardrails 敏感信息过滤器](https://docs.aws.amazon.com/us_en/bedrock/latest/userguide/guardrails-sensitive-filters.html)：
  本次检索使用，支持输入与输出 PII 检测的区别。
- [AWS：Managed data identifiers](https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html)：
  本次检索使用，支持内置检测机制。
- [AWS：关键词要求](https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers-keywords.html)：
  本次检索使用，支持关键词与上下文的作用。
- [AWS：Custom data identifiers](https://docs.aws.amazon.com/macie/latest/user/custom-data-identifiers.html)：
  本次检索使用，支持自定义匹配规则。
- 本次学习对话：用户理解、追问和纠正的记录。
