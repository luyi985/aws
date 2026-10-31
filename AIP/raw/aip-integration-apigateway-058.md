# aip-integration-apigateway-058: API Gateway 作为 GenAI 安全前门

## Concepts

### 1. API Gateway 与应用后端的分工

API Gateway 是托管 API 入口，可以承担部分通用入口能力，例如路由、鉴权、限流，以及适用 API 类型支持的请求校验。

Express / FastAPI 是应用框架，用于处理请求、执行业务逻辑和组织 Agent 调用。

常见链路：

- 浏览器 → API Gateway → Express / FastAPI → Agent。
- 浏览器 → API Gateway → Lambda → Agent。

简单 Lambda 接口可以不使用 Express 或 FastAPI。

可以将 API Gateway 理解为：把应用中一部分通用入口 Middleware 的职责交给 AWS 托管。Agent 编排、State、业务规则与工具执行仍由后端负责。

教学对照：

```ts
app.post(
  "/research",
  authenticate,
  rateLimit,
  validateBody,
  createResearchJob
);
```

引入 Gateway 后，可以把其中适合的通用检查前移，但功能需要配置，不会自动生效。

### 2. REST API 与 HTTP API 的功能边界

API Gateway 的不同 API 类型具有不同能力，不能把所有功能混为一个通用配置。

本次讨论中：

- 请求 Model Schema 校验、Usage Plan 和 API Key 配额，主要对应 REST API。
- 原生 JWT Authorizer 示例对应 HTTP API。

实际实施时应先确认选用的 API 类型，再核对功能支持。

### 3. 身份、接口权限与资源权限

这三类检查需要区分：

| 检查 | 要回答的问题 |
|---|---|
| 身份认证 | 调用者是谁？ |
| 接口授权 | 能否调用这个接口？ |
| 资源授权 | 能否访问这条具体资源？ |

HTTP API 的 JWT Authorizer 可以验证签名、Issuer、Audience、有效期，以及配置的 Route Scope，并把验证后的 Claims 提供给后端。

但 JWT 有效、接口允许调用，不代表用户可以查看任意任务。

例如：

```http
GET /research/JOB-001
Authorization: Bearer ...
```

Lambda 仍需检查 JOB-001 的归属或访问权限。

只允许所有者访问的教学代码：

```ts
const userId = getVerifiedUserId(event);
const job = await getJob(event.pathParameters.jobId);

if (!job || job.ownerId !== userId) {
  return { statusCode: 404, body: "Task not found" };
}

return { statusCode: 200, body: JSON.stringify(job) };
```

身份应来自经过验证的凭证，任务归属来自可信数据库，不能直接相信客户端提交的 userId。

本例对不存在和无权限情况返回相同的 404，用于减少任务存在性泄露。这是教学设计，不是所有接口必须采用的唯一响应策略。

### 4. 请求结构校验与业务校验

REST API 可以根据配置的 Model Schema 校验请求 Body，提前拒绝不符合结构要求的请求，减少不必要的后端调用。

教学输入：

```json
{
  "query": "帮我研究降噪耳机",
  "budget": 300
}
```

可以检查配置中要求的字段是否存在、类型和约束是否符合 Schema。

URI、Query 和 Header 的基础必填参数检查，主要检查存在且非空，不等于完整类型与格式校验。Body 校验也依赖正确的模型和 Content Type 配置。

业务校验仍由后端负责，例如：

- 用户是否还有可用研究额度。
- 指定知识库是否允许当前用户访问。
- 后续工具操作是否被授权。
- 自然语言需求是否含糊或冲突。

结构合法，不代表业务允许，也不代表内容安全。

### 5. Throttling、Burst 与 Quota

| 控制项 | 含义 |
|---|---|
| Rate | 持续请求速率目标 |
| Burst | 短时间突发请求容量 |
| Quota | 指定时间区间内的请求量目标 |

API Gateway 使用 Token Bucket 进行请求限流。这里的 Token 是请求额度，不是 LLM Token。

当请求超过相应限制时，客户端可能收到 429 Too Many Requests，应采用适当的限速与重试策略。

AWS 将这些限制描述为 best-effort 目标，不能视为绝对硬上限。

### 6. HTTP 请求限流不等于模型成本限制

一次研究请求可能触发多次模型调用、多个工具调用和重试。

因此：

- 每秒限制 10 个 HTTP 请求，不等于每秒只有 10 次模型调用。
- 请求数配额不能直接代表输入输出 Token 用量。
- Usage Plan 不能承担严格的余额或成本上限保证。

应用还需要按任务控制：

- 模型调用并发与速率。
- Agent 最大步数。
- 重试次数。
- 输入输出规模。
- 用户额度的可靠判断与扣减。

如果业务要求“余额不足就不得继续执行”，必须在后端实现相应业务控制，不能只依赖 Gateway 配额。

### 7. API Key 与用户身份不同

REST API 的 Usage Plan 可以通过 API Key 识别客户端、统计用量并应用限流与配额。

API Key 不应单独作为身份认证或授权机制。应根据所选 API 类型，使用合适的 IAM、Authorizer 或身份服务集成。

需要区分：

- API Key：使用计划中的客户端标识。
- 身份认证：确认调用者身份。
- 业务授权：确认调用者可以操作哪些资源。

### 8. 产品选购助手的完整请求路径

教学流程：

1. Gateway 检查接口身份并控制入口流量。
2. 后端检查需求、具体资源权限和可用额度。
3. 创建并可靠提交后台任务。
4. 返回 202 与 jobId。
5. Worker 在权限和并发限制内调用模型与工具。
6. 用户查询结果时，再检查任务归属。

Gateway 管理入口，不负责替代后台任务生命周期、Agent 规则或资源级授权。

## Concept Relationships

### Gateway 与后端是分层检查

通用入口检查可以前移，具体资源和业务规则仍由后端执行。两层配合，不能因为第一层通过而跳过第二层。

### 请求结构与业务语义

Schema 校验关注数据结构；业务校验关注当前身份、资源、状态和规则。JSON 合法不代表操作合法。

### 请求额度与 GenAI 执行额度

Gateway 观察 HTTP 请求，而 Agent 一次请求可能展开多次调用。因此，模型并发、Token 用量和成本控制需要在应用执行层进一步管理。

### 与 KP 057 的联系

Gateway 接受请求，后端创建任务，队列和 Worker 承接长时间工作。后台执行与接口访问分别管理，但共享经过验证的身份和任务关联信息。

## Understanding

用户将本节类比为 LLM 项目中的 Express / FastAPI 部分，并澄清自己指的是 HTTP 入口职责。

讨论认可该类比，同时区分托管入口与应用框架：Gateway 接管部分通用入口能力，后端保留 Agent 和业务逻辑。

在“JWT 有效，但用户把 jobId 改成其他用户任务”的场景中，用户回答：

> 在 Lambda Function 中，要检查该用户是否拥有该任务 ID。

该回答正确定位了资源归属检查的位置。

讨论进一步明确：

- 使用验证后的身份信息。
- 查询可信数据库中的任务归属。
- 不相信客户端自报身份。
- 接口访问通过，不代表获得任意资源的访问权。

本次未配置 API Gateway、部署 Authorizer 或执行真实越权与限流测试，不据此认定已具备独立实操能力。

## References

### 继承来源，未重新读取底层资料

- [AWS Certified Generative AI Developer 课程资料](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — AIP-C01 course slides / detailed coverage；原始 KP 未提供具体页码。
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — AIP-C01 Study Guide (Detailed)；原始 KP 未提供具体页码。

### 继承来源，本次直接读取

- [Request validation for REST APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html) — 参数与 Body 校验及配置边界。
- [Throttle requests to REST APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) — Token Bucket、Rate、Burst、429 与 best-effort 限制。

### 本次直接读取的补充来源

- [Usage plans and API keys for REST APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html) — API Key、请求量配额与认证、成本控制边界。
- [Control access to HTTP APIs with JWT authorizers](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-jwt-authorizer.html) — JWT 验证、Scope 与后端 Claims。

### KP 血缘

- [原始 KP 定义](../preRaw/KP/aip-integration-apigateway-058.md) — 本次直接读取。

Express Middleware、任务归属检查代码和选购助手流程均为本次教学示例。
