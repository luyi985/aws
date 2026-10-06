# aip-agentic-qapps-029: Amazon Q Apps 无代码应用生成

## Concepts

### Amazon Q Apps

Amazon Q Apps 在当前 source 中定位为：

> 使用自然语言创建无代码 GenAI 应用（no-code application generation）。

它适合把一个重复性的业务任务，组织成一个可重复运行的小型应用。

基本链路：

```text
Business Task
→ describe in natural language
→ Q Apps
→ organize inputs / prompts / steps
→ reusable application
```

### No-code Application Generation

Q Apps 的重点不是要求用户写代码，而是：

```text
natural language
+
configuration
+
business workflow
```

因此它特别适合 non-developer 用户快速创建 productivity application。

例如：

```text
Input:
meeting notes

Process:
extract action items
identify owners

Output:
structured task list
```

如果每次都重新聊天：

```text
chat
→ one-off result
```

而 Q Apps 更偏向：

```text
define task once
→ package as reusable app
→ run repeatedly
```

### Reusable Business Application

Q Apps 的价值不只是生成一次结果，而是把任务固化成一个可重复使用的应用。

例如：

```text
Meeting Notes App

Input:
meeting transcript

Output:
- action items
- owner
- due items
```

团队成员可以重复运行，而不需要每次重新设计 prompt。

### Internal Data and Actions

当前 source 支持：

- Q Apps 可以使用公司内部数据
- 可以通过 plugins 与第三方应用交互
- 例如可通过 Jira plugin 执行动作

所以它不仅可以：

```text
read / transform information
```

也可以在适当配置下：

```text
trigger business actions
```

### Sharing

Study Guide 还强调：

> 非开发者可以创建并共享定制的 productivity applications。

因此 Q Apps 不是只给个人临时使用，也可以在团队范围内共享。

不过共享仍然要考虑：

```text
data permission
sharing scope
result validation
```

### No-code Does Not Mean No Governance

即使没有写代码，仍然需要考虑：

```text
who can access the data
who can use the app
whether the generated result is correct
```

因此：

```text
no-code
≠ no validation
≠ no permission control
```

## Understanding

### User Mental Model

用户理解到 Q Apps 最适合：

> 把一个重复业务任务，从“一次聊天”变成“可重复使用的小应用”。

这是 029 的核心 mental model。

可以压缩成：

```text
one-off chat
→ answer once

Q App
→ reusable business workflow/app
```

### Q Apps vs Q Developer

用户正确判断：

```text
business user
+ natural language
+ no-code
+ reusable workflow
→ Amazon Q Apps
```

而：

```text
IDE
+ code generation
+ CLI
+ developer workflow
→ Amazon Q Developer
```

因此：

```text
Q Apps
→ business-facing no-code app generation

Q Developer
→ developer-facing coding assistant
```

### Q Apps vs Q Business

可以进一步区分：

```text
Q Business
→ enterprise employee assistant
→ enterprise knowledge
→ permission-aware answers
```

而：

```text
Q Apps
→ convert business task into reusable no-code application
```

所以：

```text
Need to ask company knowledge?
→ Q Business

Need to package a repeatable business task as an app?
→ Q Apps
```

### Relationship with Skill

用户将 Q Apps 与 skill 做类比。

模型知识类比：

```text
Skill
→ reusable capability / instruction pattern

Q App
→ reusable business-facing application
```

例如：

```text
Skill:
extract action items from meeting notes
```

偏向：

> AI 如何完成这项能力。

而 Q App：

```text
[Meeting Notes Input]
→ [Extract Action Items]
→ [Assign Owner]
→ [Structured Output]
```

偏向：

> 业务用户如何反复使用这项能力。

注意：

> “Skill” 是帮助理解的模型知识类比，不是当前 029 source 明确使用的术语。

### Exam Mental Model

可以压缩成：

> Amazon Q Apps lets users create reusable no-code GenAI business applications from natural-language task descriptions.

最重要的场景判断：

```text
Need non-developers
to create and share
a repeatable GenAI productivity app
without writing code?
→ Amazon Q Apps
```

## Important Boundary

```text
Q Apps
≠ Q Business
```

```text
Q Apps
≠ Q Developer
```

```text
no-code
≠ no governance
```

```text
reusable application
≠ one-off chat response
```

## Open Questions

- None
