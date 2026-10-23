# aip-integration-bedrockflows-059: Bedrock Flows 工作流编排

## Concepts

### Bedrock Flows

Bedrock Flows 用来把多个 GenAI 步骤按照预定义逻辑串联起来。

可以先理解为：

```text
Input
↓
Prompt / Model / Knowledge Base
↓
Condition
├─ Branch A
└─ Branch B
↓
Output
```

核心特征：

```text
node
→ edge
→ condition
→ branch
```

所以它本质上是：

> AWS-managed GenAI workflow orchestration

它更适合固定流程，而不是让模型自由决定下一步。

### Flow Nodes

Flow 是由多个 node 组成的。

一个 node 可以代表流程中的某个处理步骤，例如：

```text
Input
Prompt
Model
Knowledge Base
Condition
Lambda
Output
```

这些节点之间通过连接关系把数据继续往下传。

因此 Flow 可以理解为一个 GenAI-oriented graph：

```text
Input
↓
Prompt
↓
Model
↓
Condition
├─ route A
└─ route B
```

### Prompt / Model / Condition Chaining

Bedrock Flows 的一个核心用途，就是把 prompt、model 和 condition 串起来。

例如：

```text
Input
↓
Prompt
↓
Model
↓
Condition
├─ high confidence → Output
└─ low confidence  → another step
```

这里的下一步是 workflow 预先定义好的。

因此它属于：

```text
predefined orchestration
```

而不是 Agent 那种动态 planning。

### Low-code / Managed Orchestration

Bedrock Flows 可以通过图形化或声明式方式定义 workflow。

从使用体验上，可以类比：

```text
Dify Workflow
```

但 Bedrock Flows 不是完整的 Dify 平台。

更准确：

```text
Dify
→ complete low-code AI application platform

Bedrock Flows
→ AWS Bedrock 中的 low-code GenAI workflow capability
```

所以：

```text
Bedrock Flows
≈ Dify Workflow 那部分
```

而不是整个 Dify。

### Bedrock Flows vs LangGraph

Bedrock Flows 和 LangGraph 都使用 graph-style orchestration：

```text
node
→ node
→ condition
→ branch
```

因此概念层面很接近。

可以这样记：

```text
LangGraph
→ code-first graph orchestration

Bedrock Flows
→ AWS-managed / low-code GenAI graph orchestration
```

LangGraph 通常具有更高的代码灵活性，可以实现复杂 state、custom control flow 和 Agent graph。

Bedrock Flows 则更强调 AWS 托管和 Bedrock 原生集成。

所以：

> 两者抽象类似，但产品定位和实现方式不同。

### Bedrock Flows vs Bedrock Agent

这是最重要的边界之一。

Bedrock Flows：

```text
workflow predefined
↓
next step already designed
```

Bedrock Agent：

```text
model reasons
↓
decides next action/tool
```

因此：

```text
Flows
→ deterministic / predefined workflow

Agent
→ dynamic reasoning and action selection
```

例如：

```text
Prompt → Model → Condition → KB → Output
```

这种固定路线适合 Flow。

如果模型要自己判断：

```text
Should I search KB?
Should I call tool A?
Should I call tool B?
```

更适合 Agent。

### Bedrock Flows vs Step Functions

Flows 和 Step Functions 都属于 workflow orchestration。

但定位不同：

```text
Bedrock Flows
→ GenAI-focused orchestration

Step Functions
→ general AWS workflow orchestration
```

如果流程主要围绕：

```text
Prompt
Model
Knowledge Base
Condition
```

Bedrock Flows 更自然。

如果流程主要是：

```text
Lambda
ECS
SQS
DynamoDB
SNS
Retry
Timeout
Choice
```

Step Functions 更自然。

因此：

```text
Bedrock Flows
→ GenAI workflow

Step Functions
→ general-purpose AWS state machine
```

两者也可以组合。

例如：

```text
Step Functions
↓
Task
↓
Invoke Bedrock Flow
↓
Flow completes GenAI sub-workflow
↓
return result
↓
Step Functions continues business process
```

## Concept Relationships

四种常见 orchestration 可以这样区分：

```text
LangGraph
→ code-first graph orchestration

Dify Workflow
→ productized low-code AI workflow

Bedrock Flows
→ AWS-managed low-code GenAI workflow

Step Functions
→ general AWS workflow orchestration
```

再加上 Agent：

```text
Bedrock Flows
→ predefined GenAI workflow

Bedrock Agent
→ dynamic reasoning / tool choice

Step Functions
→ predefined general AWS workflow
```

考试型选择：

```text
Prompt / Model / KB / Condition 为主
→ Bedrock Flows

模型自己决定下一步做什么
→ Bedrock Agent

Lambda / ECS / SQS / DynamoDB / SNS 等业务编排
→ Step Functions
```

## Understanding

用户首先把 Bedrock Flows 与已有的 Step Functions 知识联系起来。

建立的核心理解是：

```text
Bedrock Flows
→ GenAI 专用 workflow orchestration

Step Functions
→ 通用 AWS workflow orchestration
```

用户随后发现 Bedrock Flows 的 graph / node / condition 模式很像 LangGraph。

形成的类比：

```text
LangGraph
→ code-first

Bedrock Flows
→ AWS managed / low-code
```

用户进一步把它类比为 Dify，并最终明确：

```text
Bedrock Flows
≈ Dify Workflow 那部分

而不是整个 Dify 平台
```

最终 mental model：

```text
LangGraph
→ code-first graph

Dify Workflow
→ productized low-code graph

Bedrock Flows
→ AWS-managed GenAI graph

Step Functions
→ general AWS state machine
```

以及最重要的 Flow / Agent 边界：

```text
流程提前定义好
→ Bedrock Flows

模型动态决定下一步
→ Bedrock Agent
```

## References

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf — AIP-C01 course slides / detailed coverage`

- Inherited from source KP; underlying source not re-opened in this session:
  `../preRaw/AIPStudyGuide.pdf — AIP-C01 Study Guide (Detailed)`

- Inherited from source KP; underlying source not re-opened in this session:
  `https://docs.aws.amazon.com/bedrock/latest/userguide/flows.html`

- Inherited from source KP; underlying source not re-opened in this session:
  `https://docs.aws.amazon.com/bedrock/latest/userguide/flows-how-it-works.html`
