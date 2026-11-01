---
title: 安全、隐私与规则边界
derived_from:
  - aip-bedrock-contentfiltering-018
  - aip-bedrock-reasoningpolicies-020
  - aip-agentic-actiongroups-022
  - aip-security-iampolicies-048
  - aip-security-kmsencryption-049
  - aip-security-privateconnectivity-050
  - aip-security-macie-051
  - aip-integration-apigateway-058
  - aip-security-promptinjection-063
  - aip-security-dataredaction-064
  - aip-security-appsecurity-065
  - aip-bedrock-groundingcheck-019
last_synced: 2026-11-01
status: current
---

# 安全、隐私与规则边界

[返回导航](README.md) · [考试覆盖与缺口](exam-coverage.md)

## 身份、资源与业务的分层授权

|控制|回答的问题|不能替代|
|---|---|---|
|身份验证/Cognito/Authorizer|调用者是谁|该用户对具体对象的权限|
|IAM Role 与权限策略|工作负载能访问哪些 AWS 资源|最终用户的业务授权|
|Schema 校验|字段和类型是否符合契约|对象存在、归属与业务允许|
|业务校验|当前对象、状态、额度是否允许操作|底层 AWS 权限|
|HITL|指定人是否批准具体动作|审批者自身权限与执行校验|

Lambda 可以读取 Orders 表，不代表任意登录用户能读取其中所有订单。可信身份来自验证后的凭证，对象归属来自数据库，而不是客户端自报 userId。

Secrets Manager 管理凭证获取和轮换；WAF 过滤适用的 Web 请求；它们不会自动理解“当前用户能否取消这个订单”。

Raw KPs: `aip-agentic-actiongroups-022`, `aip-security-iampolicies-048`, `aip-integration-apigateway-058`, `aip-security-appsecurity-065`

## IAM 如何判断一次请求

Trust Policy 控制谁可以 assume role；STS 签发临时凭证；Identity Policy 描述身份能做什么；Resource Policy 从资源侧描述谁能做什么。Lambda execution role 的 assume 通常由服务处理。

默认没有有效 Allow 为隐式拒绝；适用的显式 Deny 覆盖 Allow。Permission Boundary 和 SCP 是权限上限，不单独授予权限。

不能简单用“身份 Allow AND 资源 Allow”套所有场景。应确定调用身份、action、resource、condition，评估适用策略、授权路径和限制。跨账户与不同主体类型还需要具体核对。

**案例：** Role 允许 s3:GetObject，但 Bucket Policy 对 secret/* 显式拒绝。增加另一个 Allow 不会消除拒绝。应先确认访问本来是否被授权，再修复对应策略，而非放开所有资源。

Raw KPs: `aip-security-iampolicies-048`

## 私有连接和加密保护不同环节

|需求|机制|关键判断|
|---|---|---|
|通过私有接口访问支持服务|Interface endpoint / PrivateLink|子网、DNS、安全组及端点配置|
|本学习范围内私有访问 S3/DynamoDB|Gateway endpoint|通过路由表引导，不等同于 API Gateway|
|保护网络传输|HTTPS/TLS|证书验证身份，流量密钥保护通信|
|保护 S3 静态对象与密钥|SSE-KMS|数据密钥保护对象，KMS key 保护数据密钥|

私有网络不授予 IAM 权限；静态加密不替代传输加密。SSE-KMS 的简化过程：S3 获取明文和加密后的数据密钥，用明文密钥加密对象，保存密文对象及加密数据密钥，清除临时明文密钥。读取时，在适用 S3/KMS 权限下由 KMS 解开数据密钥，S3 解开对象，TLS 保护传回链路。

这段机制未展开 S3 Bucket Key 等优化，不能据此断言每次调用的成本与次数。

Raw KPs: `aip-security-kmsencryption-049`, `aip-security-privateconnectivity-050`

## 内容安全、注入与隐私处理

直接注入来自用户输入；间接注入可以藏在检索网页或 PDF。过滤器只能提供部分防护，执行端必须保持最小权限和业务校验，不能让文档指令获得系统授权。

|能力|检查对象|作用边界|
|---|---|---|
|Guardrails 内容/主题/词项过滤|输入与输出|按配置阻止或过滤内容|
|Grounding|回答与证据|不证明证据本身真实|
|Automated Reasoning Policies|回答与已建模规则|漏建或错误规则会影响验证|
|Macie|S3 内容|发现敏感数据并产生 finding|
|Comprehend PII|文本敏感实体|识别位置和类型，后续仍需处理|

优先删除模型不需要的字段，再对必要信息检测和遮蔽；输出还需检查。输出过滤无法撤销已经发送给模型的敏感信息。

一致占位符能保留关系，如 CUSTOMER_001；若仍保存映射，应理解为假名化，不宣称已经完全匿名。Token-level redaction 在这些笔记中指细粒度敏感文本片段处理，不要求直接修改 tokenizer ID。

Raw KPs: `aip-bedrock-contentfiltering-018`, `aip-bedrock-reasoningpolicies-020`, `aip-security-macie-051`, `aip-security-promptinjection-063`, `aip-security-dataredaction-064`, `aip-bedrock-groundingcheck-019`

## 场景验证与易错项

测试不只问“正常用户能否成功”，还应包含其他用户的任务 ID、被禁止的动作、检索文档里的恶意指令、日志中的敏感字段，以及检测器误报和漏报。

若回答安全但工具已越权执行，系统仍失败；若 Macie 已发现敏感数据却仍被无条件摄取，治理链仍未闭合。通过模型评分不能抵消权限校验失败。

本页总结既有学习知识；复杂 IAM 跨账户策略和完整网络配置仍需结合具体资源验证。

Raw KPs: `aip-security-macie-051`, `aip-security-promptinjection-063`, `aip-security-dataredaction-064`, `aip-security-appsecurity-065`

## 原始笔记与来源边界

本页综合已批准的 raw；例子、数字和数据结构为教学用途。未将来源链接的存在当作所有产品能力的重新核验。具体原始文档、页码与当时查阅状态保留在各 raw 中。

- [aip-bedrock-contentfiltering-018](../raw/aip-bedrock-contentfiltering-018.md)
- [aip-bedrock-reasoningpolicies-020](../raw/aip-bedrock-reasoningpolicies-020.md)
- [aip-agentic-actiongroups-022](../raw/aip-agentic-actiongroups-022.md)
- [aip-security-iampolicies-048](../raw/aip-security-iampolicies-048.md)
- [aip-security-kmsencryption-049](../raw/aip-security-kmsencryption-049.md)
- [aip-security-privateconnectivity-050](../raw/aip-security-privateconnectivity-050.md)
- [aip-security-macie-051](../raw/aip-security-macie-051.md)
- [aip-integration-apigateway-058](../raw/aip-integration-apigateway-058.md)
- [aip-security-promptinjection-063](../raw/aip-security-promptinjection-063.md)
- [aip-security-dataredaction-064](../raw/aip-security-dataredaction-064.md)
- [aip-security-appsecurity-065](../raw/aip-security-appsecurity-065.md)

- [aip-bedrock-groundingcheck-019](../raw/aip-bedrock-groundingcheck-019.md)
