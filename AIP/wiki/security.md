---
title: 安全、隐私与规则边界
derived_from:
  - aip-bedrock-contentfiltering-018
  - aip-bedrock-reasoningpolicies-020
  - aip-security-iampolicies-048
  - aip-security-kmsencryption-049
  - aip-security-privateconnectivity-050
  - aip-security-macie-051
  - aip-security-promptinjection-063
  - aip-security-dataredaction-064
  - aip-security-appsecurity-065
last_synced: 2026-11-01
status: current
---

# 安全、隐私与规则边界

## 三层判断
Schema 判断参数是否合法，授权判断调用者能否访问对象，业务规则判断动作是否允许。模型生成合法工具调用、用户已登录或网络私有，都不能替代资源级授权。

IAM trust policy 控制谁能 assume role，权限策略控制能做什么；显式拒绝与权限边界需纳入判断。Secrets Manager 管理凭证，Cognito 参与用户身份，WAF 过滤适用的 Web 请求；它们职责不同。

## 内容与隐私
Guardrails 可检查模型输入输出的主题、词项与敏感信息。Automated Reasoning Policies 检验回答与结构化规则的一致性。Prompt injection 可能来自用户，也可能藏在检索文档中；应把外部内容当作数据，并在执行端施加权限和业务限制。

Macie 面向 S3 敏感数据发现；Comprehend 可识别文本 PII；脱敏要在发现后实际遮蔽或替换。检测不是自动治理完成，日志和缓存同样需要数据最小化。

## 网络与加密
TLS 保护传输；SSE-KMS 保护存储，两者覆盖不同阶段。Interface endpoint 使用 PrivateLink 提供私有服务访问；Gateway endpoint 在本学习范围用于 S3/DynamoDB 路由。API Gateway 是应用 API 入口，不能与 Gateway endpoint 混淆。

相关：[审计与监控](observability.md)。

## Raw 来源

- [aip-bedrock-contentfiltering-018](../raw/aip-bedrock-contentfiltering-018.md)
- [aip-bedrock-reasoningpolicies-020](../raw/aip-bedrock-reasoningpolicies-020.md)
- [aip-security-iampolicies-048](../raw/aip-security-iampolicies-048.md)
- [aip-security-kmsencryption-049](../raw/aip-security-kmsencryption-049.md)
- [aip-security-privateconnectivity-050](../raw/aip-security-privateconnectivity-050.md)
- [aip-security-macie-051](../raw/aip-security-macie-051.md)
- [aip-security-promptinjection-063](../raw/aip-security-promptinjection-063.md)
- [aip-security-dataredaction-064](../raw/aip-security-dataredaction-064.md)
- [aip-security-appsecurity-065](../raw/aip-security-appsecurity-065.md)
