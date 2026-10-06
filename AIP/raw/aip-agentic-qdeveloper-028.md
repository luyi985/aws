# aip-agentic-qdeveloper-028: Amazon Q Developer

## Concepts

### Amazon Q Developer

Amazon Q Developer 在当前 source 中定位为面向开发工作的 AI assistant。

它可以在开发环境中辅助：

```text
AWS documentation Q&A
CLI command suggestions
security scanning
IDE code generation / completion
```

核心场景是：

```text
Developer
→ IDE / development context
→ Amazon Q Developer
→ generated suggestion / code
→ human validation
```

### IDE Extension

Q Developer 可以通过 IDE extension 进入开发工作流。

当前 source 直接关联：

```text
IDE Extension
+
Code Generation
```

这意味着开发者可以在已有代码和任务上下文中，让 Q Developer 生成或补全部分代码。

重点不是“脱离项目独立生成”，而是：

> 根据当前开发上下文提供候选实现。

### Code Generation

Q Developer 可以生成：

```text
candidate code
```

但生成结果不是 automatically trusted code。

因此正常流程应该是：

```text
Q Developer generates
→ human review
→ tests
→ security / dependency checks
→ accept / modify / reject
```

### Human Review and Validation

当前 source 明确强调：

> 生成代码仍需要人工审查、测试和安全检查。

开发者需要验证：

```text
interfaces / APIs
tests
dependencies
edge cases
security impact
```

因此：

```text
AI-generated code
≠ production-ready code by default
```

Q Developer 不替代开发者对代码质量、发布和最终结果的责任。

### Project Rules

当前 Study Guide 还提到项目规则可以保存在：

```text
./amazon/rules
```

这些规则可作为项目上下文的一部分，帮助 Q Developer 更贴合项目约束。

当前 KP 不展开具体配置方式，只保留这个概念边界：

> Q Developer 可以结合项目级规则和开发上下文来辅助生成。

## Understanding

### User Mental Model

用户正确总结：

> It requires human review and tests.

这抓住了 Q Developer 的责任边界。

更完整地说：

```text
Q Developer
→ generates candidate implementation

Developer
→ reviews
→ tests
→ validates security and dependencies
→ owns final decision
```

### Q Developer vs Q Business

用户已经建立了清晰区分：

```text
Q Developer
→ developer-focused
→ IDE
→ code generation
→ CLI
→ security scan
```

而：

```text
Q Business
→ employee-focused
→ enterprise knowledge
→ permission-aware access
```

所以考试里看到：

```text
IDE + code generation + developer workflow
```

优先想到：

```text
Amazon Q Developer
```

看到：

```text
enterprise employee + internal knowledge + permissions
```

优先想到：

```text
Amazon Q Business
```

### Candidate Implementation Boundary

Q Developer 生成的代码即使“看起来正确”，也不能直接 merge。

原因是模型生成结果仍可能存在：

```text
incorrect assumptions
missing edge cases
dependency problems
security issues
interface mismatch
```

当前 source 不要求展开这些错误模式，但支持以下结论：

> generated code remains subject to developer review, testing, and security validation.

### Exam Mental Model

可以压缩成：

> Amazon Q Developer is an AI assistant for developers that works in development environments to provide code generation, completion, CLI guidance, documentation help, and security-related assistance, while leaving validation and final code ownership to the developer.

最重要的场景判断：

```text
Need AI assistance inside the developer workflow?
Need code generation or completion in an IDE?
→ Amazon Q Developer
```

同时记住：

```text
Q Developer suggestion
≠ trusted final implementation
```

必须经过：

```text
human review
+
tests
+
security checks
```

## Important Boundary

```text
Q Developer
≠ Q Business
```

```text
code generation
≠ automatic code approval
```

```text
AI assistance
≠ replacement for engineering ownership
```

## Open Questions

- None
