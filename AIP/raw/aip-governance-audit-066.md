# aip-governance-audit-066: CloudTrail、审计日志与数据保留

## Concepts

### 1. Auditability（可审计性）

Auditability 是指系统能够提供可信证据，说明操作由谁发起、何时发生、经过哪些控制，以及最终结果。

对于 Agent，审计需要覆盖：用户请求与身份、权限检查、Agent 决策及必要依据、HITL 审批、Tool Execution、最终执行结果。

```text
Monitoring → 系统运行得怎么样？
Auditing → 谁做了什么？能否提供证据？
```

### 2. AWS CloudTrail

CloudTrail 记录 AWS 账户和资源相关的 API 活动及部分非 API 服务事件，典型信息包括调用身份、API 操作、时间、来源、资源及错误信息。

```text
AWS CLI / Lambda / AWS Service
            ↓
          AWS API
            ↓
         CloudTrail
```

CloudTrail 事件不依赖应用主动调用 `console.log()`。

**Management Events**：主要审计资源管理操作，例如 `CreateBucket`、`DeleteBucket`、`PutRolePolicy`、`RunInstances`。Event History 默认提供最近 90 天的 Management Events 查询。

**Data Events**：记录 S3 `GetObject`、`PutObject`、`DeleteObject` 等数据层操作。通常需主动配置相应事件选择器，可能额外收费。默认有 Event History 不等于默认记录所有 S3 Object 操作。启用记录不能补回之前未捕获的历史事件。

### 3. CloudWatch

CloudWatch 是 AWS 监控和可观测性服务：
- CloudWatch Metrics：资源指标和自定义指标
- CloudWatch Logs：接收、保存、查询日志
- CloudWatch Alarms：指标/日志条件告警

```text
AWS Infrastructure → CloudWatch Metrics → EC2 CPUUtilization
CloudWatch Agent → CloudWatch Metrics → EC2 Memory Usage
Lambda Platform → CloudWatch Metrics → Invocations / Duration / Errors
Application → CloudWatch Logs → Custom JSON Logs
```

EC2 CPU 等指标来自 AWS 基础设施。监控操作系统内部内存通常需要 CloudWatch Agent。CloudWatch Logs 还可以接收 CloudTrail 等其他来源的事件，所以不只接收应用日志。

### 4. CloudTrail vs CloudWatch

```text
CloudTrail → AWS 账户活动及 API 审计事件来源
CloudWatch Metrics → 性能、资源占用与运行指标
CloudWatch Logs → 日志接收、存储与查询
```

用户通过 AWS CLI 调用 S3 `DeleteObject` 时，请求不经过 Backend，应用不会自动生成该次操作的日志；配置 S3 Data Events 后，CloudTrail 可捕获相关 API 事件。如果 CloudTrail 事件被投递到 CloudWatch Logs，也可以在那里查询。两者不是互相替代，而是事件来源与日志平台互补。

### 5. Application Audit Log

CloudTrail 不会自动记录 Agent 内部的业务判断全过程，例如用户请求、业务规则、人工审批或交易批准理由。应用应主动生成必要的审计事件：

```json
{
  "traceId": "abc-123",
  "userId": "alice",
  "action": "approveTransaction",
  "transactionId": "TX123",
  "riskScore": 0.82,
  "businessRule": "high_value_requires_approval",
  "approvedBy": "manager-01",
  "executionStatus": "success"
}
```

业务审计事件可以保存到 CloudWatch Logs、数据库或受保护的 S3。CloudTrail Lake 也可以通过自定义审计事件集成接收业务事件，但不同于任意修改标准 AWS API 审计事件字段。

正式审计记录应考虑完整性、权限控制和保留期限；普通调试日志不自动等于可信合规证据。

### 6. Correlation ID / Trace ID

```text
React Request (traceId ABC)
   ↓
Node.js Backend (ABC)
   ↓
Agent Decision (ABC)
   ↓
Lambda Tool (ABC)
   ↓
Business API (ABC)
```

Trace ID 串联应用各组件记录。CloudTrail 有独立 Event ID / Request ID 等字段，可结合时间、请求标识和调用身份关联；它不会自动捕获任意自定义业务 Trace ID。

### 7. Bedrock Model Invocation Logging

CloudWatch 默认不会自动捕捉所有 LLM Prompt 和 Response。按需开启 Amazon Bedrock Model Invocation Logging，可以将受支持模型调用的输入、输出或元数据发送至 CloudWatch Logs 或 S3。记录范围取决于 API、配置和服务支持情况。

完整 Prompt/Response 可能包含 PII、商业机密和 RAG 文档，因此应遵循 Data Minimization，并配置脱敏、访问权限和保留期限。

### 8. Data Retention

Retention Policy 决定审计记录保存期限、访问者与到期处理。过短会丢失调查证据；过长增加成本和敏感信息风险。

```text
Audit Event → S3 → Encryption → Restricted Access
             → Retention / Lifecycle → Expiry / Approved Deletion
```

需要防篡改时可评估 S3 Object Lock 等机制。具体保留期限依据业务制度、合同及适用法规，不能假设所有日志应永久保存。

### 9. SageMaker Lineage

SageMaker Lineage 追踪 ML 资产及处理活动的来源关系：

```text
Dataset → Processing Job → Training Job → Model Artifact → Deployment
```

它帮助追查训练数据、训练任务以及模型与部署的关系，但不等于运行时 AWS API 审计，也不自动保存全部训练细节或自动回滚。

```text
SageMaker Lineage → 模型从哪里来？
CloudTrail → 谁操作了 AWS 资源？
CloudWatch → 系统运行得怎么样？
```

## Concept Relationships

### Agent Security 与 Auditability

```text
User Request
  ↓
Authentication
  ↓
User Permission Check
  ↓
Resource Permission Check
  ↓
Business Logic Check
  ↓
HITL（必要时）
  ↓
Tool Execution
```

关键节点需要分别生成可关联的审计事件，而不是只在完成后写一条结果。权限与业务规则决定操作是否允许；审计证据帮助事后验证控制是否真正执行。

三种不同证据：
- CloudTrail：AWS API 操作证据
- Application Audit Log：业务授权、决策和执行证据
- SageMaker Lineage：模型生命周期来源证据

CloudWatch 可以承载应用日志、指标及其他来源事件，但并不自动保证所有日志完整、可信或防篡改。

## Example

假设风控 Agent 批准一笔 $100,000 的交易。

1. 谁发起？通过 Cognito 身份与业务审计记录确认。
2. 为什么建议批准？查应用决策事件及保留的必要依据。
3. 是否满足规则？查 User/Resource Permission、Business Rule、HITL 审计记录。
4. 调用了哪个 AWS API？查 CloudTrail 相应事件。
5. 运行时有无错误？查 CloudWatch Logs 和 Metrics。
6. 六个月后还能追查？依赖 Retention、证据完整性与访问控制。

需要关联多种证据才能形成完整调查链。

## Understanding

本次讨论中，用户逐步厘清：
- CloudTrail 主要审计 AWS API 活动，而不是 EC2 CPU、Lambda Duration 等性能指标。
- CloudWatch 不只接收应用日志，也接收 AWS 基础设施及托管服务的 Metrics。
- 使用 AWS CLI 直接删除 S3 Object 会绕过应用日志；配置对应 CloudTrail Data Events 后仍可记录操作。
- 默认 Management Events 与主动配置的 S3 Data Events 不同。
- CloudWatch 可记录自定义业务字段，但标准 CloudTrail AWS API 事件不能随意添加应用字段。
- CloudWatch 不会自动记录 LLM Prompt；需要应用主动写入或启用受支持的 Bedrock Model Invocation Logging。
- SageMaker Lineage 追踪模型来源，CloudTrail 追踪 AWS 操作。

核心理解：CloudTrail 是 AWS 操作审计事件来源；CloudWatch 是监控和日志平台；Application Audit Log 负责业务证据。

## References

以下为原始 KP 继承的来源，未在本次整理时重新读取底层资料：
- [AWS Certified Generative AI Developer 课程资料](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — AIP-C01 course slides / detailed coverage
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — AIP-C01 Study Guide (Detailed)
- [AWS Bedrock — Logging Using CloudTrail](https://docs.aws.amazon.com/bedrock/latest/userguide/logging-using-cloudtrail.html)

其他 CloudWatch、Data Events 和 Bedrock Invocation Logging 的解释来自本次学习讨论，不将未核验资料冒充直接阅读的来源。
