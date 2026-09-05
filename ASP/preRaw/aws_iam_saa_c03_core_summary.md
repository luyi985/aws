# AWS IAM SAA-C03 核心知识总结

> 用途：这份 Markdown 适合导入 NotebookLM / Obsidian，用来学习 AWS SAA-C03 中 IAM 相关知识。  
> 学习重点不是死背名词，而是理解：**一个请求如何被 AWS 判断 Allow 或 Deny。**

---

## 1. IAM 总心法

IAM 的核心问题只有一个：

```text
Who can perform which action on which AWS resource under what conditions?
```

中文就是：

```text
谁
能不能
对哪个 AWS 资源
执行什么操作
在什么条件下
```

主请求流程：

```text
Requester
  -> Authentication
  -> Credentials
  -> Authorization
  -> Policy Evaluation
  -> Allow / Deny
  -> CloudTrail Audit
```

解释：

| 阶段 | 含义 |
|---|---|
| Requester | 谁发起请求，可以是人、服务、应用、外部系统 |
| Authentication | 证明你是谁 |
| Credentials | 使用密码、Access Key 或 Temporary Credentials |
| Authorization | 判断你有没有权限 |
| Policy Evaluation | 综合 IAM policy、SCP、Boundary、Resource Policy 等 |
| Allow / Deny | 最终允许或拒绝 |
| CloudTrail Audit | 记录谁在什么时候做了什么 |

---

## 2. IAM 总地图

```text
AWS Organization
  |
  |-- SCP
  |
AWS Account
  |
  |-- IAM
      |
      |-- Identity
      |     |-- User
      |     |-- Group
      |     |-- Role
      |           |-- Trust Policy
      |           |-- Permissions Policy
      |
      |-- Credentials
      |     |-- Password
      |     |-- Access Key
      |     |-- Temporary Credentials
      |           |-- STS
      |
      |-- Policy
      |     |-- Identity-based Policy
      |     |-- Resource-based Policy
      |     |-- Permission Boundary
      |     |-- Session Policy
      |
      |-- Federation
      |     |-- IAM Identity Center
      |     |-- SAML
      |     |-- OIDC
      |
      |-- Audit / Analysis
            |-- CloudTrail
            |-- IAM Access Analyzer
            |-- Credential Report
            |-- Access Advisor
```

考试角度，这张图就是 IAM 的主干。  
真正拿分靠把这些节点放进请求流程里。

---

## 3. IAM Foundations

### 3.1 IAM User

IAM User 是长期身份。

```text
IAM User = long-term identity
```

可以有：

- Console password
- Access Key / Secret Access Key
- MFA device
- Attached policies
- Group membership

适合：

- 少量 legacy 场景
- 特殊脚本或系统
- break-glass emergency user

不推荐：

- 给所有员工创建 IAM User
- 共享 IAM User
- 把 Access Key 放进代码、EC2、GitHub、User Data

考试判断：

```text
Store access key on EC2 / hardcode credentials / share IAM user
=> 基本是错的
```

---

### 3.2 IAM Group

IAM Group 是 User 的权限管理集合。

```text
Group = manage permissions for IAM users
```

关系：

```text
User -> belongs to Group
Group -> attached Policy
User -> inherits permissions
```

注意：

- Group 只能包含 User
- Group 不能包含 Group
- Group 不能被 Assume
- Group 不是 Principal
- Group 不能作为 Resource Policy 的 Principal

---

### 3.3 IAM Role

IAM Role 是最重要的 IAM 概念。

```text
Role = assumable identity + temporary credentials
```

适合：

- AWS service 访问 AWS service
- 跨账号访问
- Federation / SSO
- CI/CD 临时部署
- 外部身份访问 AWS
- 临时提权

考试口诀：

```text
服务访问服务 -> IAM Role
跨账号访问 -> IAM Role
避免长期凭证 -> IAM Role / STS
```

---

### 3.4 IAM Policy

Policy 是 JSON 权限声明。

核心字段：

| 字段 | 含义 |
|---|---|
| Effect | Allow 或 Deny |
| Action | 做什么操作，例如 s3:GetObject |
| Resource | 作用在哪些资源 ARN |
| Condition | 在什么条件下生效 |
| Principal | 谁，常见于 Resource Policy / Trust Policy |

示例：

```json
{
  "Effect": "Allow",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::my-bucket/*"
}
```

---

## 4. IAM User vs IAM Role

### 4.1 IAM User 工作流

```text
IAM User
  -> Password / Access Key
  -> AWS API
  -> Policy Evaluation
  -> Allow / Deny
```

问题：

- Access Key 是长期凭证
- 泄露风险高
- 需要轮换
- 容易被 hardcode
- 权限容易越积越多

---

### 4.2 IAM Role 工作流

```text
Principal
  -> sts:AssumeRole
  -> STS issues temporary credentials
  -> AWS API
  -> Policy Evaluation
  -> Allow / Deny
```

优点：

- 临时凭证
- 自动过期
- 不需要共享 Access Key
- 适合服务间访问
- 适合跨账号访问
- 适合 Federation
- 审计更清楚

一句话：

```text
IAM User = long-term identity
IAM Role = temporary assumable identity
```

---

## 5. Role 的两个核心 Policy

### 5.1 Trust Policy

Trust Policy 决定：

```text
谁可以 Assume 这个 Role？
```

例子：

- EC2 service 可以 assume role
- Lambda service 可以 assume execution role
- Account A 可以 assume Account B 的 role
- GitHub OIDC provider 可以 assume deployment role

---

### 5.2 Permissions Policy

Permissions Policy 决定：

```text
Assume 之后可以做什么？
```

例子：

- s3:GetObject
- dynamodb:PutItem
- secretsmanager:GetSecretValue
- kms:Decrypt

记忆方式：

```text
Trust Policy = 谁能穿这件制服
Permissions Policy = 穿上制服后能干什么
```

---

## 6. STS 与 Temporary Credentials

STS = Security Token Service。

它负责发临时凭证。

临时凭证包含：

- Access Key ID
- Secret Access Key
- Session Token
- Expiration

常见 STS API：

| API | 用途 |
|---|---|
| AssumeRole | 最常见，Role assumption |
| AssumeRoleWithSAML | SAML Federation |
| AssumeRoleWithWebIdentity | OIDC / Web identity / CI-CD |
| GetSessionToken | 临时 session token |

### AssumeRole 工作流

```text
Caller
  -> sts:AssumeRole
  -> STS checks role trust policy
  -> STS checks caller permission
  -> STS returns temporary credentials
  -> Caller uses temporary credentials
  -> Credentials expire
```

考试关键词：

```text
temporary credentials
assume role
cross-account
federation
avoid access keys
```

看到这些，优先想到 STS / Role。

---

## 7. Service -> Service Access Workflow

这是 SAA 高频。

通用模式：

```text
AWS Service
  -> IAM Role
  -> STS Temporary Credentials
  -> Target AWS Service
  -> Policy Evaluation
  -> CloudTrail
```

---

### 7.1 EC2 -> S3

正确流程：

```text
EC2 Instance
  -> Instance Profile
  -> IAM Role
  -> Temporary Credentials from Metadata Service
  -> S3 API
  -> IAM Policy / Bucket Policy / KMS Policy / Endpoint Policy
```

考试答案通常是：

```text
Attach an IAM Role to the EC2 instance.
```

不要选：

- Store Access Key on EC2
- Put credentials in User Data
- Hardcode credentials in application
- Store AWS keys in AMI

---

### 7.2 Lambda -> DynamoDB / CloudWatch Logs

流程：

```text
Lambda Function
  -> Execution Role
  -> Temporary Credentials
  -> DynamoDB / CloudWatch Logs / S3 / SQS
```

Lambda execution role 决定 Lambda 能访问什么。

常见权限：

- logs:CreateLogGroup
- logs:CreateLogStream
- logs:PutLogEvents
- dynamodb:PutItem
- s3:GetObject
- sqs:SendMessage

考试判断：

```text
Lambda 访问 AWS 服务
=> 修改 Lambda execution role permissions
```

---

### 7.3 ECS -> Secrets Manager / S3 / DynamoDB

ECS 要区分两个 Role。

#### ECS Task Role

给应用容器用。

```text
App inside container
  -> Task Role
  -> AWS Service
```

例子：

- Node.js app 读取 Secrets Manager
- App 写 DynamoDB
- App 访问 S3

#### ECS Task Execution Role

给 ECS/Fargate 平台用。

```text
ECS/Fargate Platform
  -> Execution Role
  -> Pull image from ECR
  -> Write logs to CloudWatch
  -> Fetch startup secrets
```

记忆：

```text
Task Role = 应用运行时权限
Execution Role = 平台启动任务权限
```

---

## 8. Human Access Workflow

现代人类访问 AWS 的推荐模式：

```text
Human User
  -> Corporate Identity Provider
  -> IAM Identity Center
  -> Permission Set
  -> AWS Account Role
  -> Temporary Credentials
  -> Console / CLI
```

IAM Identity Center 解决：

- 多账号访问
- 集中身份管理
- 接企业身份源
- 减少 IAM Users
- 使用临时凭证
- 权限通过 Permission Set 管理

考试关键词：

```text
multiple AWS accounts
centralized access
corporate directory
SSO
temporary credentials
existing identity provider
```

答案通常是：

```text
IAM Identity Center / Federation
```

不是给每个人建 IAM User。

---

## 9. Cross-account Access Workflow

跨账号访问是 SAA 高频。

通用流程：

```text
Principal in Account A
  -> sts:AssumeRole
  -> Role in Account B
  -> Temporary Credentials
  -> Resource in Account B
```

必须满足三件事：

```text
1. Account B 的 Role Trust Policy 信任 Account A
2. Account B 的 Role Permissions Policy 允许访问目标资源
3. Account A 的 Principal 允许 sts:AssumeRole
```

如果目标资源还有 Resource Policy，例如 S3 Bucket Policy、KMS Key Policy，也要一起允许。

### External ID

External ID 用于防 confused deputy problem。

典型场景：

```text
第三方 SaaS 供应商需要访问你的 AWS Account
```

正确设计：

```text
Create Role
Require ExternalId in Trust Policy
Third party assumes role with External ID
```

---

## 10. Policy Evaluation

这是 IAM 的灵魂。

必须记住：

```text
Default Deny
Explicit Allow 才允许
Explicit Deny 永远优先
```

简化判断流程：

```text
1. 有没有 explicit Deny？
   有 -> Deny

2. 有没有 Allow？
   没有 -> Deny

3. SCP / Boundary / Session Policy 是否限制？
   限制 -> Deny

4. Resource Policy / KMS / Endpoint Policy 是否允许？
   不允许 -> Deny

5. Condition 是否满足？
   不满足 -> Deny

6. 全部通过 -> Allow
```

完整参与项：

- Identity-based Policy
- Resource-based Policy
- Permissions Boundary
- SCP
- Session Policy
- KMS Key Policy
- VPC Endpoint Policy
- Condition

考试常见坑：

```text
IAM policy 明明 Allow 了，为什么还是 AccessDenied？
```

常见原因：

- SCP Deny
- Permission Boundary 限制
- Session Policy 限制
- Resource Policy 不允许
- KMS Key Policy 不允许
- VPC Endpoint Policy 不允许
- Condition 不满足
- Explicit Deny

---

## 11. Identity-based Policy vs Resource-based Policy

### 11.1 Identity-based Policy

挂在身份上：

- User
- Group
- Role

意思是：

```text
这个身份能做什么
```

例子：

```text
这个 Role 可以 s3:GetObject
这个 User 可以 ec2:DescribeInstances
这个 Group 可以 cloudwatch:GetMetricData
```

---

### 11.2 Resource-based Policy

挂在资源上。

常见资源：

- S3 Bucket
- KMS Key
- SQS Queue
- SNS Topic
- Lambda Function
- Secrets Manager Secret
- ECR Repository

意思是：

```text
谁可以访问这个资源
```

例子：

```text
这个 bucket 允许 Account A 的 role 读取
这个 Lambda 允许 API Gateway 调用
这个 SQS queue 允许 SNS topic 发消息
这个 KMS key 允许某个 role decrypt
```

---

## 12. Resource-based Policy 重点服务

### 12.1 S3 Bucket Policy

S3 经常同时涉及：

- IAM Policy
- Bucket Policy
- Block Public Access
- ACL，旧机制，不推荐
- KMS Key Policy
- VPC Endpoint Policy

S3 是最容易出组合题的服务之一。

---

### 12.2 KMS Key Policy

KMS 是 IAM 里最容易坑人的服务之一。

访问 KMS 加密数据通常需要：

```text
原服务权限
+ KMS action 权限
+ KMS Key Policy 允许
```

例子：读取 SSE-KMS 加密的 S3 Object。

需要：

```text
s3:GetObject
kms:Decrypt
KMS Key Policy allows principal
```

如果跨账号，还要同时看：

- Account A Role IAM Policy
- Account B Bucket Policy
- Account B KMS Key Policy

---

### 12.3 Lambda Resource Policy

Lambda resource-based policy 控制谁能 invoke Lambda。

例子：

- API Gateway invokes Lambda
- S3 event invokes Lambda
- EventBridge invokes Lambda
- Another account invokes Lambda

注意区分：

```text
Lambda execution role = Lambda 出去访问 AWS
Lambda resource policy = 谁能进来调用 Lambda
```

---

### 12.4 SQS / SNS Policy

典型场景：

```text
SNS Topic sends message to SQS Queue
```

通常需要：

```text
SQS Queue Policy allows SNS Topic to send messages
```

---

## 13. SCP / Permission Boundary / Session Policy

这一层是权限边界。

核心心法：

```text
它们通常不授予权限，只限制最大权限。
```

---

### 13.1 SCP

SCP 属于 AWS Organizations。

作用：

```text
限制 OU / Account 的最大权限
```

常见用途：

- 禁止关闭 CloudTrail
- 禁止删除 GuardDuty
- 禁止使用非指定 Region
- 禁止创建 public S3 bucket
- 禁止成员账号使用某些服务

公式：

```text
最终权限 = IAM Allow ∩ SCP Allow
```

如果 SCP Deny：

```text
IAM Allow 也没用
```

考试关键词：

```text
organization-wide
all accounts
OU
guardrail
prevent member accounts
```

答案通常是 SCP。

---

### 13.2 Permission Boundary

Permission Boundary 限制某个 IAM User 或 Role 的最大权限。

公式：

```text
最终权限 = Identity Policy ∩ Permission Boundary
```

典型场景：

```text
允许开发者创建 Role
但不允许他们创建超过边界的 Admin Role
```

考试关键词：

```text
delegate IAM administration
allow developers to create roles
limit maximum permissions
```

答案通常是 Permission Boundary。

---

### 13.3 Session Policy

Session Policy 在 AssumeRole 时进一步缩小权限。

例子：

```text
Role 原本能 A + B + C
Session Policy 只允许 A
最终只能 A
```

它不能扩大权限，只能缩小权限。

---

## 14. MFA / Root / Access Keys

### 14.1 Root User

Root user 是 AWS Account 最高权限身份，不是 IAM User。

最佳实践：

- 开启 MFA
- 不创建 Root Access Key
- 不日常使用 Root
- 只用于特殊账户级任务

考试中：

```text
Use root user for daily administration
=> 错
```

---

### 14.2 MFA

MFA 用于强化认证。

重点：

- Root 必须 MFA
- Admin 用户必须 MFA
- 敏感操作可以要求 MFA Condition

常见 condition：

- aws:MultiFactorAuthPresent
- aws:MultiFactorAuthAge

---

### 14.3 Access Keys

Access Key 用于 CLI / SDK / API。

组成：

- Access Key ID
- Secret Access Key

风险：

- 长期有效
- 容易泄露
- 容易 hardcode
- 容易被提交到 GitHub

最佳实践：

```text
能用 Role / STS / IAM Identity Center 就不要用长期 Access Key
```

必须使用时：

- 最小权限
- 定期轮换
- 不共享
- 审计
- 删除不用的 key

---

## 15. Least Privilege / Audit / Analyzer

### 15.1 Least Privilege

最小权限原则：

```text
只给完成任务所需的最小权限
```

坏例子：

```json
{
  "Action": "*",
  "Resource": "*"
}
```

好例子：

```json
{
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::my-bucket/reports/*"
}
```

更好：

- 限制 Action
- 限制 Resource
- 加 Condition
- 定期 review unused permissions
- 用 CloudTrail + Access Analyzer 优化

---

### 15.2 IAM Access Analyzer

用途：

- 发现 public access
- 发现 external account access
- 验证 IAM policy
- 生成 least privilege policy

考试关键词：

```text
external access
public access
outside organization
validate policy
least privilege
unused permissions
```

答案：IAM Access Analyzer。

---

### 15.3 CloudTrail

IAM 控制权限，CloudTrail 记录行为。

CloudTrail 记录：

- 谁调用 API
- 什么时候调用
- 从哪里调用
- 调用哪个 action
- 目标 resource
- 成功还是失败

排错 AccessDenied 时，CloudTrail 是关键证据。

---

### 15.4 Credential Report

Credential Report 是 account-level 报告。

用途：

- 查看 IAM users
- 查看 password / access key 状态
- 查看 MFA 是否开启
- 查看 key 是否长期未轮换

---

### 15.5 Access Advisor

Access Advisor 显示某个 identity 的服务权限最后访问时间。

用途：

```text
根据 last accessed information 缩小权限
```

---

## 16. ABAC / Tags

ABAC = Attribute-Based Access Control。

AWS 中通常用 tag 实现。

### RBAC vs ABAC

```text
RBAC = Role-Based Access Control
ABAC = Attribute-Based Access Control
```

RBAC 例子：

- DeveloperRole
- AdminRole
- ReadOnlyRole

ABAC 例子：

```text
PrincipalTag Project=A
只能访问 ResourceTag Project=A 的资源
```

相关 Condition：

- aws:PrincipalTag
- aws:ResourceTag
- aws:RequestTag
- aws:TagKeys

适合场景：

- 项目很多
- 团队很多
- 资源动态增长
- 不想为每个项目创建大量 role/policy

---

## 17. 常见 SAA 服务组合工作流

### 17.1 EC2 -> S3

```text
EC2
  -> Instance Profile
  -> IAM Role
  -> Temporary Credentials
  -> S3 API
  -> IAM Policy / Bucket Policy / KMS / Endpoint Policy
```

检查点：

- EC2 Role 是否有 S3 权限
- S3 Bucket Policy 是否允许
- Object 是否 KMS 加密
- KMS Key Policy 是否允许
- 是否通过 VPC Endpoint
- Endpoint Policy 是否允许

---

### 17.2 Lambda -> DynamoDB

```text
Lambda
  -> Execution Role
  -> Temporary Credentials
  -> DynamoDB
```

检查点：

- Lambda execution role 是否有 DynamoDB action
- Resource ARN 是否是正确 table
- 是否缺 CloudWatch Logs 权限

---

### 17.3 ECS -> Secrets Manager

应用运行时读 Secret：

```text
App Container
  -> ECS Task Role
  -> Secrets Manager
```

容器启动前注入 Secret：

```text
ECS/Fargate Platform
  -> Task Execution Role
  -> Secrets Manager
```

区别：

```text
应用运行时读 secret -> Task Role
平台启动时拉 secret -> Execution Role
```

---

### 17.4 S3 + KMS

```text
Principal
  -> s3:GetObject
  -> S3 object encrypted with KMS
  -> kms:Decrypt
  -> KMS Key Policy check
  -> Return object
```

缺一不可：

- S3 permission
- KMS permission
- KMS Key Policy

---

### 17.5 S3 + VPC Endpoint

```text
EC2 in private subnet
  -> S3 VPC Endpoint
  -> Endpoint Policy
  -> S3 Bucket Policy
  -> IAM Policy
  -> S3
```

如果 IAM Allow，但 Endpoint Policy 不允许，还是 Deny。

---

### 17.6 CI/CD OIDC Federation

现代 CI/CD 不应该长期存 AWS Access Key。

正确流程：

```text
GitHub Actions / CI Provider
  -> OIDC Token
  -> IAM OIDC Provider
  -> Role Trust Policy
  -> STS AssumeRoleWithWebIdentity
  -> Temporary Credentials
  -> Deploy to AWS
```

优点：

- 没有长期 Access Key
- 凭证短期有效
- 可以限制 repo / branch / environment
- 审计更清楚

---

## 18. AccessDenied 排错工作流

遇到 AccessDenied，按这个顺序查：

```text
1. Who is the caller?
2. What action is denied?
3. Which resource ARN is denied?
4. Identity Policy 是否 Allow？
5. 有没有 Explicit Deny？
6. SCP 是否限制？
7. Permission Boundary 是否限制？
8. Session Policy 是否限制？
9. Resource Policy 是否允许？
10. KMS Key Policy 是否允许？
11. VPC Endpoint Policy 是否允许？
12. Condition 是否满足？
13. Account / Region / ARN 是否写错？
14. CloudTrail event 怎么记录？
```

最常见原因：

- Action 缺失
- Resource ARN 写错
- KMS decrypt 缺失
- KMS Key Policy 不允许
- SCP Deny
- Permission Boundary 限制
- Bucket Policy Explicit Deny
- VPC Endpoint Policy 不允许
- MFA Condition 不满足
- AssumeRole Trust Policy 不允许

---

## 19. Related SAA Topic: Security Group Stateful

这个不是 IAM，但 SAA 高频。

### Security Group

```text
ENI / instance level
Stateful
Allow rules only
Inbound default deny
Outbound default allow
```

Stateful 意思：

```text
入站请求允许后，返回流量自动允许
出站请求允许后，返回流量自动允许
```

### NACL

```text
Subnet level
Stateless
Allow and Deny rules
Inbound and outbound separately evaluated
Rule number priority
```

考试口诀：

```text
Security Group = stateful
NACL = stateless
```

---

## 20. 最高价值 SAA 判断规则

```text
1. AWS service accesses AWS service -> IAM Role
2. Human access to multiple AWS accounts -> IAM Identity Center
3. Cross-account access -> STS AssumeRole
4. Avoid long-term access keys wherever possible
5. Organization-level restriction -> SCP
6. Limit maximum permissions of a user/role -> Permission Boundary
7. Public/external access analysis -> IAM Access Analyzer
8. Allow exists but still denied -> check explicit deny, SCP, boundary, session policy, resource policy, KMS policy, VPC endpoint policy, condition
9. S3 + KMS -> need both S3 permission and KMS permission
10. Security Group = stateful, NACL = stateless
```

---

## 21. 建议重点练习的 7 条请求流

不要再无限扩概念，重点练这些：

```text
1. Human -> IAM Identity Center -> Role -> AWS Account
2. EC2 -> Instance Profile -> Role -> S3
3. Lambda -> Execution Role -> DynamoDB / CloudWatch Logs
4. ECS -> Task Role vs Execution Role
5. Account A -> AssumeRole -> Account B
6. S3 + KMS / Bucket Policy / VPC Endpoint Policy
7. AccessDenied -> 查 SCP / Boundary / Session / Resource Policy / KMS / Condition
```

---

## 22. 官方链接索引

### IAM Foundations

- What is IAM?  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html
- IAM identities  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html
- IAM users  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html
- IAM groups  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html
- IAM roles  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
- IAM policies  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html
- IAM best practices  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

### Role / STS

- Temporary credentials  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html
- AWS STS  
  https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html
- AssumeRole  
  https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html

### Service Roles

- IAM roles for AWS services  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html#id_roles_service
- EC2 IAM roles  
  https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html
- EC2 instance profiles  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html
- Lambda execution role  
  https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html
- ECS task role  
  https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html
- ECS task execution role  
  https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html

### Human Access / Federation

- IAM Identity Center  
  https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html
- Permission sets  
  https://docs.aws.amazon.com/singlesignon/latest/userguide/permissionsetsconcept.html
- AWS CLI with IAM Identity Center  
  https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html
- Federation  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers.html
- SAML federation  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml.html
- OIDC federation  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html

### Cross-account

- Cross-account roles tutorial  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html
- Switch role  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-console.html
- External ID  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html

### Policy

- IAM JSON policy elements  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html
- Policy evaluation logic  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html
- Identity vs resource policies  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html
- IAM Condition element  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html
- IAM policy variables  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_variables.html
- Service authorization reference  
  https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html

### Resource Policies

- S3 bucket policies  
  https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html
- S3 Block Public Access  
  https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html
- KMS key policies  
  https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html
- SQS access policies  
  https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html
- SNS access policies  
  https://docs.aws.amazon.com/sns/latest/dg/sns-access-policy-use-cases.html
- Lambda resource policies  
  https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html
- Secrets Manager resource policies  
  https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-policies.html
- ECR repository policies  
  https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html

### Guardrails

- Permissions boundaries  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html
- SCP  
  https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html
- SCP evaluation  
  https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_evaluation.html
- Session policies  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session

### Audit / Analyzer

- IAM Access Analyzer  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html
- Policy validation  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-policy-validation.html
- Policy generation  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-policy-generation.html
- CloudTrail  
  https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html
- CloudTrail IAM integration  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html

### ABAC / Tags

- ABAC in AWS  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html
- Tagging IAM resources  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html
- Tag-based access control  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html

### Troubleshooting

- Troubleshoot AccessDenied  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_access-denied.html
- IAM troubleshooting  
  https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot.html
- View CloudTrail events  
  https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events.html

### Security Group / NACL

- Security groups  
  https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html
- EC2 security groups  
  https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html
- Security group connection tracking  
  https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html
- Network ACLs  
  https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html
