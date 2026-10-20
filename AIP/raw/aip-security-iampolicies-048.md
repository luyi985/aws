# aip-security-iampolicies-048: IAM Role 与资源策略

## Concepts

### IAM Role

IAM Role 是一个可以被授权主体 assume 的 AWS identity。

```text
Principal / AWS service
→ assume role
→ temporary credentials
→ act as that role
```

Role 本身代表身份，但“谁可以使用这个 Role”和“拿到 Role 后能做什么”是两件不同的事。

### Trust Policy

Trust Policy 决定：

> 谁可以 assume 这个 Role？

例如 Lambda execution role 的 trust policy：

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

这里：

```text
Principal
→ lambda.amazonaws.com

Action
→ sts:AssumeRole
```

表示 Lambda service 被允许通过 STS assume 当前 Role。

因此不是：

```text
Lambda assumes STS
```

而是：

```text
Lambda
→ uses STS AssumeRole
→ assumes IAM Role
```

### AWS STS

STS = AWS Security Token Service。

它负责签发 temporary security credentials。

可以把关系理解为：

```text
IAM Role
→ identity + permission context

STS
→ temporary credential issuer
```

完整链路：

```text
Lambda
→ Trust Policy allows assume
→ STS AssumeRole
→ STS issues temporary credentials
→ Lambda acts as that IAM Role
```

对于 Lambda execution role，这个 assume 过程通常由 AWS service 在背后处理，应用代码不需要自己显式调用 `AssumeRole`。

### Identity-based Policy

Identity-based policy 挂在 IAM identity 上，例如：

```text
IAM User
IAM Role
```

它回答：

> 这个身份可以做什么？

例如：

```json
{
  "Effect": "Allow",
  "Action": [
    "dynamodb:GetItem",
    "dynamodb:UpdateItem"
  ],
  "Resource": "arn:aws:dynamodb:ap-southeast-2:123456789012:table/Orders"
}
```

表示这个身份被授予对指定 DynamoDB table 的这些操作权限。

### Resource-based Policy

Resource-based policy 直接挂在资源上，从资源角度控制：

> 谁可以或不可以对我做什么？

例如 S3 Bucket Policy：

```json
{
  "Effect": "Deny",
  "Principal": "*",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::company-reports/private/secret/*"
}
```

这是加在 S3 bucket 资源侧的策略。

它表示：

```text
所有 Principal
→ 对 private/secret/* 执行 s3:GetObject
→ Explicit Deny
```

因此即使某个 Role 的 identity policy 有 `Allow s3:GetObject`，访问这个路径仍然会被拒绝。

核心区别：

```text
Identity-based Policy
→ 挂在身份上
→ “我能做什么”

Resource-based Policy
→ 挂在资源上
→ “谁能对我做什么”
```

### Implicit Deny

IAM 的默认状态是：

```text
Deny
```

如果没有任何有效的 Allow：

```text
No Allow
→ implicit deny
```

也就是说：

> 没有人明确授权这个操作，就默认没有权限。

### Explicit Deny

如果某个适用策略明确写：

```text
Effect = Deny
```

则：

```text
Explicit Deny
→ overrides applicable Allow
```

简化 mental model：

```text
default
→ deny

matching Allow
→ may permit

matching Explicit Deny
→ final deny
```

因此：

```text
No Allow
→ implicit deny

Explicit Deny
→ explicit rejection
```

### Permission Boundary

Permission Boundary 是加在：

```text
IAM User
IAM Role
```

上的权限上限。

它不是直接授予权限，而是限制：

> 这个身份最多能拥有多少权限。

例如：

```text
Identity Policy:
A, B, C

Permission Boundary:
A, B

Effective:
A, B
```

可以近似理解为：

```text
Effective permissions
≈ Identity Policy
∩ Permission Boundary
```

因此：

```text
Identity Policy
→ 给权限

Permission Boundary
→ 限制这个身份最多能有多少权限
```

一个典型使用场景是允许开发人员创建 Role，但要求所有 Role 都绑定 Permission Boundary，以防权限超过组织允许的范围。

一句话：

> Permission Boundary does not grant permission; it caps permission.

### SCP

SCP（Service Control Policy）作用在 AWS Organizations 的组织结构层级，用来限制成员账户中身份可获得的最大权限范围。

简化对比：

```text
Identity Policy
→ 给身份权限

Permission Boundary
→ 限制某个 User / Role 的权限上限

SCP
→ 限制 Organization / OU / Account 范围内的权限上限
```

如果 SCP 对某操作存在适用的 explicit Deny，则其他 Allow 不能覆盖。

### Least Privilege

Least Privilege 原则要求：

```text
minimum actions
+
minimum resources
+
necessary conditions
```

而不是：

```text
Action: *
Resource: *
```

例如应用只需要读取一个 DynamoDB table：

```text
Allow dynamodb:GetItem
on Orders table
```

就不应该授予：

```text
dynamodb:*
Resource: *
```

## Concept Relationships

IAM Role 的完整授权链可以理解为：

```text
Principal / AWS service
        ↓
Trust Policy
→ can this principal assume the role?
        ↓
STS AssumeRole
        ↓
temporary credentials
        ↓
IAM Role identity
        ↓
Identity-based permissions
        ↓
access AWS resource
        ↓
Resource-based policy may also participate
        ↓
effective authorization decision
```

需要分别回答不同问题：

```text
Trust Policy
→ 谁能拿到这个 Role？

STS
→ 如何获得临时 credentials？

Identity-based Policy
→ 这个身份能做什么？

Resource-based Policy
→ 这个资源允许谁做什么？

Permission Boundary
→ 这个身份最多能做到什么？

SCP
→ 组织 / 账户范围内最多允许什么？
```

最终授权不能简单理解成：

```text
identity Allow
AND
resource Allow
```

更准确的 mental model 是：

```text
request
→ evaluate applicable policies
→ find valid Allow path
→ check restrictions / boundaries
→ any applicable Explicit Deny?
   ├─ yes → DENY
   └─ no  → potentially ALLOW
```

同时：

```text
No Allow
→ implicit deny
```

## Understanding

用户首先确认了 IAM 的默认拒绝逻辑：

> 如果没有 explicit allow 也是 deny 吗？

由此建立：

```text
No explicit Allow
→ implicit Deny

Explicit Deny
→ explicit rejection
→ wins over Allow
```

随后用户重点理解了 IAM Role、Trust Policy 和 STS 的关系，并追问：

> sts 是啥，意思是 sts 可以被 lambda assume？

经过完整 Lambda 示例后，建立了：

```text
Lambda
→ Trust Policy allows lambda.amazonaws.com
→ sts:AssumeRole
→ STS issues temporary credentials
→ Lambda acts as the IAM Role
```

并明确：

```text
不是 Lambda assume STS
而是 Lambda 通过 STS assume Role
```

用户随后确认了 resource-based policy 的位置：

> 这个 policy 是加在 resource 上的，对吗，也就是加在 S3 上面

并建立：

```text
Identity-based Policy
→ attached to IAM User / Role

Resource-based Policy
→ attached to resource such as S3 bucket
```

用户进一步询问 Permission Boundary，并理解：

```text
Permission Boundary
→ attached to IAM User / Role
→ does not directly grant permissions
→ defines maximum permission boundary
```

最终 mental model：

```text
Trust Policy
→ 谁可以 assume Role

STS
→ 发 temporary credentials

Identity-based Policy
→ 这个身份能做什么

Resource-based Policy
→ 资源允许谁做什么

Permission Boundary
→ Role / User 的权限天花板

SCP
→ Organization / Account 层面的权限上限

No Allow
→ implicit deny

Explicit Deny
→ final deny

Least Privilege
→ only grant what is necessary
```

## References

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/NotebookLM Mind Map.png — VI. Governance, Security & QA > Security & Identity > IAM Roles & Resource-based Policies`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — PDF pp. 134 and 484, ‘Amazon OpenSearch Security’ and ‘IAM Roles for Services’`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AIPStudyGuide.pdf — PDF p. 9, ‘VIII. Security, Identity, and Compliance’`
