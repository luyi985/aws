---
id: aip-security-iampolicies-048
title: IAM Role 与资源策略
status: pending
sources:
  - "AIP/preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Security & Identity > IAM Roles & Resource-based Policies"
  - "AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 134 and 484, ‘Amazon OpenSearch Security’ and ‘IAM Roles for Services’"
  - "AIP/preRaw/AIPStudyGuide.pdf — PDF p. 9, ‘VIII. Security, Identity, and Compliance’"
dependencies: []
---

# aip-security-iampolicies-048: IAM Role 与资源策略

## Learning Objective

能够区分 IAM Role 的身份权限与资源型策略的资源访问控制视角。

## Scope

- Included: IAM roles、identity-based permissions、resource-based policies、least privilege。
- Excluded: 完整 IAM 策略语法、跨账户全部情形和具体服务支持矩阵。

## Source Context

导图在 Security & Identity 下并列 IAM Roles 与 Resource-based Policies。

## Knowledge Point

IAM 角色（IAM role）是可被主体代入的 AWS 身份，其身份策略说明角色可做什么；资源型策略（resource-based policy）附在资源上，说明哪些主体可对它做什么。有效权限由多层策略共同决定。

## PDF Grounding

详细课件用 service IAM role 说明 AWS 服务如何代表工作负载取得权限，并在 OpenSearch 安全中并列 resource-based、identity-based 与 IP-based policies。Study Guide 将 IAM 概括为管理 roles 与 permissions，强化了身份、权限和资源侧策略需共同审视。

## Logical Path

1. 工作负载通过角色获得临时身份权限。
2. 身份策略授予对目标资源的候选操作。
3. 资源策略可从资源侧允许或限制主体。
4. 最终授权还受显式拒绝、边界和组织策略影响，应坚持最小权限。

## Key Terms

- IAM 角色（`IAM role`）：可被授权主体代入的 AWS 身份。
- 资源型策略（`resource-based policy`）：直接附加到资源的访问策略。

## Example

示意示例：应用角色允许读取指定 S3 bucket，而 bucket policy 只接受该角色；这展示身份侧与资源侧控制共同约束访问。

## Sources

- `AIP/preRaw/NotebookLM Mind Map.png`：节点“VI. Governance, Security & QA > Security & Identity > IAM Roles & Resource-based Policies”支持策略类型范围。
- `AIP/preRaw/AWSCertifiedGenerativeAIDeveloper.pdf`：PDF 第 134、484 页支持资源型/身份型策略类别及服务角色用途。
- `AIP/preRaw/AIPStudyGuide.pdf`：PDF 第 9 页“Security, Identity, and Compliance”支持 IAM 管理角色与权限的基础职责。
