# AWS SAA-C03 – IAM Complete Study Guide

> **Purpose**: This document is a **Solutions Architect Associate (SAA-C03)–focused IAM study guide**.
> It is **not** an encyclopedia. Everything here maps directly to **exam scenarios and architecture decisions**.

---

## 1. What IAM Is (Exam Definition)

> **IAM controls *who* can do *what* on *which AWS resources*, under *what conditions*.**

Official doc:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)

---

## 2. Core IAM Components (Must Master)

### 2.1 IAM User

* Represents a **real person**
* Can sign in to AWS Console
* Can have **password + access keys**
* ❌ Not for applications or AWS services

Docs:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html)

---

### 2.2 IAM Group

* Permission container for users
* Groups can contain **users only** (no nesting)
* Best practice: **permissions → groups → users**

Docs:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html)

---

### 2.3 IAM Role ⭐⭐⭐⭐⭐ (Most Important)

> **If an AWS service needs permissions → use IAM Role**

Key points:

* No long-term credentials
* Uses **temporary credentials (STS)**
* Used by:

  * EC2
  * Lambda
  * ECS / EKS
  * Cross-account access

Docs:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)

**Exam rule**:

* EC2 accessing S3 → **IAM Role**
* Lambda accessing DynamoDB → **IAM Role**
* ❌ Never access keys in code

---

### 2.4 IAM Policies (JSON)

Docs:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html)

#### Policy Structure (Exam-Critical)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}
```

Elements:

* **Effect**: Allow / Deny
* **Action**: What can be done
* **Resource**: On which resource
* **Condition**: When (IP, MFA, time, VPC, etc.)

---

## 3. Policy Types (Exam Differentiator)

### 3.1 Identity-based Policies

* Attached to **User / Group / Role**
* Most common

Docs:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html)

---

### 3.2 Resource-based Policies

* Attached to the resource itself
* Common examples:

  * S3 Bucket Policy
  * SQS / SNS Policy
  * Lambda Policy

Used heavily for **cross-account access**.

---

## 4. Policy Evaluation Logic (Must Memorize)

> **Explicit Deny → Allow → Implicit Deny**

Docs:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html)

Exam trap:

* Even if `Allow` exists, **Explicit Deny always wins**

---

## 5. Root Account & MFA (Guaranteed Exam Questions)

### Root Account

* Used only for:

  * Account setup
  * Billing
* ❌ No daily operations
* ✅ **MFA mandatory**

Docs:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html)

---

### Multi-Factor Authentication (MFA)

* Root: mandatory
* IAM users: strongly recommended
* Protects against credential compromise

Docs:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html)

---

## 6. Access Keys (Exam Traps)

* Used for CLI / SDK
* ❌ Do NOT:

  * Embed in code
  * Use for EC2 / Lambda

Docs:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)

Correct alternative:

* **IAM Role + temporary credentials**

---

## 7. AWS STS & Temporary Credentials (High Frequency)

### STS (Security Token Service)

> **Temporary credentials with automatic rotation**

Used for:

* AssumeRole
* Cross-account access
* Short-term elevated permissions

Docs:
[https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html](https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html)

---

## 8. Cross-Account Access (Must Know)

Typical pattern:

1. Account A creates IAM Role
2. Trust Policy allows Account B
3. Account B calls `AssumeRole`

Docs:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html)

---

## 9. IAM Security Tools (Know Purpose Only)

### IAM Credentials Report

* Account-level audit
* Find users without MFA or old keys

Docs:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html)

---

### IAM Access Advisor

* Shows which permissions are actually used

Docs:
[https://docs.aws.amazon.com/IAM/latest/UserGuide/access_advisor.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_advisor.html)

---

## 10. SAA-C03 IAM Answer Cheat Sheet

| Scenario                | Correct Answer  |
| ----------------------- | --------------- |
| EC2 → S3                | IAM Role        |
| Lambda → DynamoDB       | IAM Role        |
| Cross-account access    | AssumeRole      |
| Temporary access        | STS             |
| Prevent privilege abuse | Least Privilege |
| Enforce security        | MFA             |
| Block access explicitly | Explicit Deny   |
| S3 cross-account        | Bucket Policy   |

---

## 11. Exam Mindset Rules (Memorize)

* **Roles over access keys**
* **Temporary over long-term credentials**
* **Explicit deny beats everything**
* **Never use root for daily work**
* **AWS-managed security > custom solutions**

---

*End of IAM Study Guide (SAA-C03)*
