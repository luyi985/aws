# aip-security-appsecurity-065: Secrets Manager、Cognito 与 WAF 的应用安全角色

## Concepts

### 1. 应用安全的不同边界

一个生产级 GenAI / Agent 应用需要区分：
- Authentication：请求来自谁？
- User Authorization：用户允许执行什么？
- Resource Authorization：工作负载对 AWS 资源有什么权限？
- Business Validation：操作是否符合业务规则？
- Secrets Management：应用凭证如何安全存储、获取和轮换？
- Web Protection：如何过滤恶意 HTTP 请求？
- HITL：高风险操作是否需要人工确认？

这些能力是分层组合关系，不是单一工具的职责。

### 2. AWS Secrets Manager

Secrets Manager 管理应用运行时秘密值，如第三方 API Key、数据库密码和凭证。

硬编码 API Key 属于不安全做法：

```typescript
const tavilyApiKey = "my-secret-key";
```

推荐流程：

```text
Backend
  ↓ IAM Role 授权
Secrets Manager
  ↓ Retrieve Tavily API Key
Call Tavily
```

Secrets Manager 支持安全存储、权限控制、版本管理，以及适当配置下的凭证轮换。

**IAM Role 决定是否允许访问 Secret；Secrets Manager 保存 Secret 内容。**

对于支持 IAM 认证的 Bedrock 等 AWS 服务，优先使用 IAM Role 临时凭证，不需要创建长期 AWS Access Key。

### 3. Amazon Cognito

Cognito 面向应用终端用户身份管理。User Pool 可以提供用户注册、登录、MFA、Token 签发。

```text
Alice → Cognito User Pool → Authenticate → JWT
     → React → Backend → Validate Token
```

**Authentication ≠ Authorization**。认证成功不代表 Alice 能读取 Bob 的私人文件。

```typescript
if (document.ownerId !== currentUser.id) {
  throw new ForbiddenError();
}
```

Cognito Identity Pool 还可以为符合条件的应用身份提供临时 AWS 凭证，但不能替代业务授权。

### 4. IAM 与终端用户权限

IAM 控制 AWS Principal / Workload 的 AWS 操作权限，例如 Backend IAM Role 的 `s3:GetObject`。

```text
Application authorization
→ Alice 是否有权读取这个文档？

AWS authorization
→ Backend 是否有权调用 S3 API？
```

Backend 的 S3 权限不意味着任意已登录用户都获得该权限。Agent Tool Call 之前应检查用户权限、目标资源和业务规则。

### 5. AWS WAF

AWS WAF 是 Web Application Firewall，对受支持入口处的 HTTP/HTTPS 请求进行规则检查，例如 IP 规则、Web 攻击模式、rate-based rules 和 managed rule groups。

```text
Malicious HTTP Traffic
    ↓
AWS WAF
    ↓ Block / Allow / Count
Protected Application
```

WAF 需要关联到支持的入口资源，并非所有请求自动经过 WAF。WAF 不能代替 Cognito、IAM、业务授权，也不能完整解决 Prompt Injection。

### 6. Secrets Manager 与 KMS

**Secrets Manager 管应用秘密值，KMS 管加密密钥。**

| AWS 服务 | 核心职责 |
|---|---|
| Secrets Manager | 保存与管理 API Key、密码等秘密值 |
| AWS KMS | 管理加密密钥与相关加解密操作 |
| IAM | 控制对 Secrets、KMS 等资源及操作的访问权限 |

Secrets Manager 可以使用 KMS 保护静态秘密值。

Envelope Encryption 常使用 Data Key 加密实际数据，再用 KMS Key 保护 Data Key：

```text
Plaintext Data → Data Key → Encrypted Data
Data Key → KMS Key → Encrypted Data Key
```

KMS 一般无需直接加密整个大文件。KMS 和 Secrets Manager 可协同使用，但不能互相替代。

## Concept Relationships

### Agent Security Model

```text
Client Request
    ↓
WAF
    ↓
Authentication (Cognito)
    ↓
User Permission Check
    ↓
Resource Permission Check
    ↓
Business Logic Check
    ↓
HITL (when required)
    ↓
Tool Execution
    ├── IAM Role → AWS Resources
    └── Secrets Manager → External API Credentials
```

这是概念图，真实架构中各项校验与凭证获取不必严格串行。

**能否执行？** Authentication + Authorization + Business Rules + HITL。

**如何安全执行？** Secrets Management + Encryption + Input/Output Protection + Web Protection。

与其他 KP 的连接：
- KP 063 Prompt Injection：模型提出的操作不能越过代码层授权。
- KP 064 PII：模型不需要的敏感数据不应传入。
- KP 065 Application Security：管理用户身份、HTTP 入口、AWS 资源权限及凭证。

## Example

Alice 用 React + Node.js Agent 请求总结私人文档：
1. WAF 检查 HTTP 请求是否违反规则。
2. Backend 验证 Cognito Token。
3. Backend 检查 Alice 对目标文档的业务访问权限。
4. Backend 通过 IAM Role 访问允许读取的 S3 对象。
5. 如需第三方 API，Backend 按权限从 Secrets Manager 获取凭证。
6. Agent 使用必要数据调用模型，工具执行前仍检查业务规则。

反例：Alice 已登录，Backend IAM Role 能读取整个 S3 Bucket，但 Alice 请求 Bob 的私人文件。仍应拒绝，因为工作负载权限不能替代终端用户的业务授权。

## Understanding

用户在场景题中选择 **B**：即使 Cognito 已认证 Alice 且 Backend 有 S3 权限，仍须检查 Alice 是否有权读取 Bob 的文件。

用户主动将本节联系到原先的 Agent 安全模型：

```text
Resource Permission Check
User Permission Check
Business Logic Check
```

并提出新增 Key Management。通过讨论澄清：
- Secrets Management 不是又一道业务权限检查，而是安全管理操作所需凭证。
- Secrets Manager 管理秘密值；KMS 管理加密密钥与相关加解密操作；IAM 控制访问权限。
- 用户随后确认理解 KMS 与 Secrets Manager 的区别。

## References

以下为原始 KP 继承的来源；本次未重新读取底层资料，不能视为已独立核验。

- [AWS Certified Generative AI Developer 课程资料](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — AIP-C01 course slides / detailed coverage
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — AIP-C01 Study Guide (Detailed)
- [AWS Secrets Manager Best Practices](https://docs.aws.amazon.com/secretsmanager/latest/userguide/best-practices.html)
- [Amazon Cognito Security](https://docs.aws.amazon.com/cognito/latest/developerguide/security.html)
- [AWS WAF Documentation](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html)
