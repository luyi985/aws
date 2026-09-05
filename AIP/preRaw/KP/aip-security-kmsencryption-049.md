---
id: aip-security-kmsencryption-049
title: KMS 与静态、传输中加密边界
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Security & Identity > KMS (Encryption at Rest/Transit)"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 492-497, encryption and AWS KMS slides"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 9, ‘VIII. Security, Identity, and Compliance’"
dependencies: []
---

# aip-security-kmsencryption-049: KMS 与静态、传输中加密边界

## Learning Objective

能够说明 KMS 在密钥管理与静态加密中的作用，并与传输中加密区分。

## Scope

- Included: AWS KMS、encryption at rest、encryption in transit、密钥权限与 TLS 边界。
- Excluded: 密码学算法推导、密钥策略完整语法和证书生命周期操作。

## Source Context

导图节点写作“KMS (Encryption at Rest/Transit)”。本 KP 保留该范围，同时明确 KMS 管理密钥，而传输保护通常由 TLS 等协议实施。

## Knowledge Point

AWS Key Management Service（AWS KMS）管理加密密钥及其使用权限，常用于服务的静态加密（encryption at rest）。传输中加密（encryption in transit）通常由 TLS 保护网络连接；两者需组合设计，不能把 KMS 等同于传输协议。

## PDF Grounding

详细课件明确区分 in-flight encryption（TLS/SSL，在发送前加密）与 server-side encryption at rest，并说明 KMS 管理 symmetric/asymmetric keys 以及 AWS-owned、AWS-managed、customer-managed key 类型。Study Guide 只概括 KMS 管理 encryption keys，因此详细课件支持了本 KP 对导图措辞的边界纠正。

## Logical Path

1. 静态数据需要密钥加密并控制解密权限。
2. KMS 集中管理密钥、授权与审计使用。
3. 网络传输通过 TLS 等机制保护链路。
4. 加密不替代访问控制，密钥策略和主体权限仍需最小化。

## Key Terms

- 静态加密（`encryption at rest`）：保护存储介质中数据的加密。
- 传输中加密（`encryption in transit`）：保护网络传输数据的加密。

## Example

示意示例：知识库对象用 KMS key 加密存储，应用通过 HTTPS/TLS 调用服务；这展示静态密钥管理与传输保护的分工。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“VI. Governance, Security & QA > Security & Identity > KMS (Encryption at Rest/Transit)”支持加密主题；本 KP 对 KMS 与传输协议的职责作边界澄清。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 492–497 页区分 TLS 传输加密、静态加密和 KMS 密钥类型。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 9 页“Security, Identity, and Compliance”支持 KMS 的密钥管理职责。
