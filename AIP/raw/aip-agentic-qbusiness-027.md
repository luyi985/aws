# aip-agentic-qbusiness-027: Amazon Q Business

## Concepts

### Amazon Q Business

Amazon Q Business 在当前 source 中定位为：

> 面向企业员工的 AI assistant（employee assistant）。

它可以基于企业内部知识源进行：

- 问答
- 摘要
- 内容生成
- 日常工作支持

核心不是“普通聊天机器人”，而是：

```text
Employee
→ Amazon Q Business
→ Enterprise Knowledge
→ Permission-Aware Answer
```

### Enterprise Content

Q Business 可以通过 data connectors 连接企业数据源。

因此回答可以建立在：

```text
company documents
internal knowledge
enterprise systems
```

之上。

核心目标是：

> 让员工基于组织内部知识完成工作，而不是只依赖公开互联网信息。

### IAM Identity Center

当前 source 将 Q Business 和 IAM Identity Center 关联起来。

IAM Identity Center 可参与：

```text
user identity
+
access context
```

也就是帮助 Q Business 知道：

> 当前是谁在问问题，以及这个用户有哪些访问权限。

### Permission-Aware Retrieval

Q Business 不应该只根据 relevance 找“最相关”的文档。

因为：

```text
most relevant
≠ allowed to access
```

正确逻辑是：

```text
User Query
→ User Identity / Access Context
→ Retrieve Relevant Enterprise Content
→ Respect User Permission
→ Generate Answer
```

所以：

```text
relevance decides:
what is relevant

permission decides:
what is allowed
```

例如：

```text
Finance employee
→ can access finance procedures

General employee
→ may only access general policy
```

即使 HR 文档对问题非常 relevant，如果当前用户没有权限，也不应该被用来生成回答。

### Permission-Aware Retrieval Is Not Permission Repair

Q Business 会尊重已有的访问权限，但不会自动修复源系统错误的权限配置。

例如：

```text
HR document
→ accidentally open to all employees
```

那么问题出在：

```text
source permission / access control configuration
```

而不是 relevance 本身。

因此要记住：

> Q Business respects permissions; it does not repair bad permissions.

### Additional Source-Supported Capabilities

当前 source 还提到：

- admin controls 可以限制某些词、主题或外部知识
- native/custom plugins 可以与第三方应用交互

但这个 KP 的重点不是插件清单或配置方式，而是：

```text
Employee Assistant
+
Enterprise Knowledge
+
Identity
+
Permission-Aware Access
```

## Understanding

### User Mental Model

用户形成的核心理解是：

> Right information can only be accessed by people with the right permission.

这准确对应 permission-aware retrieval。

### Relevance vs Permission

用户理解到，仅靠 RAG relevance 不够。

因为：

```text
RAG relevance
→ finds relevant content
```

但 Q Business 还必须判断：

```text
Is this user allowed to see this content?
```

因此企业 AI assistant 的检索范围必须同时受：

```text
relevance
+
permission
```

约束。

### Wrong Source Permission Scenario

如果 HR 文档在源系统里被错误地开放给所有员工：

```text
Source permission = wrong
```

那么 Q Business 可能基于这个错误权限范围返回内容。

这说明：

```text
permission-aware retrieval
≠ permission management
```

Q Business 使用已有身份与访问上下文，不自动修复源系统权限。

### Exam Mental Model

可以压缩成：

> Amazon Q Business is an enterprise employee assistant that uses company knowledge while respecting user identity and content-access permissions.

最重要的判断：

```text
Need an enterprise AI assistant
that answers from company knowledge
and respects user permissions?
→ Amazon Q Business
```

## Important Boundary

```text
Q Business
≠ public general chatbot
```

```text
relevant content
≠ automatically authorized content
```

```text
permission-aware retrieval
≠ fixing bad source permissions
```

## Open Questions

- None
