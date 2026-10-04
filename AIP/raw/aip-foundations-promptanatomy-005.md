# aip-foundations-promptanatomy-005: 提示词的组成结构

## Concepts

### Prompt Anatomy

一个结构清晰的 Prompt 通常可以拆成四个核心部分：

- **Instruction（指令）**：告诉模型要做什么
- **Context（上下文）**：提供完成任务所需的背景、角色、规则或约束
- **Input Data（输入数据）**：本次具体要处理的内容
- **Output Indicator（输出指示）**：规定结果应该以什么形式输出

可以用下面这个结构理解：

`Instruction + Context + Input + Output Indicator`

Prompt 不等于单纯“问一个问题”，而是向模型完整说明：

`做什么 / 基于什么背景 / 处理什么 / 怎么输出`

### Instruction

Instruction 描述任务目标。

例如：

`请分析下面 Lambda 函数的错误日志，找出最可能的根因。`

它回答的是：

**模型应该做什么？**

### Context

Context 为任务提供背景信息、角色、规则或约束。

例如：

`你是一名 AWS Solutions Architect。`

或者：

`公司政策：商品签收 7 天内可无理由退款。`

Context 帮助模型理解如何解释 Input，以及应该采用什么规则或视角进行判断。

### Input Data

Input Data 是这一次实际需要模型处理的实例内容。

例如：

`日志：Task timed out after 30.00 seconds`

或者：

`客户说商品昨天收到，但不喜欢颜色。`

它回答的是：

**模型这次具体要处理什么数据？**

### Output Indicator

Output Indicator 描述期望的输出格式、结构或限制。

例如：

`请按「根因、判断依据、解决方案」三个部分回答。`

或者：

`只输出 Approve 或 Reject。`

它可以控制输出的：

- 格式
- 长度
- 字段
- 标签
- 结构
- 输出约束

### Context 与 Input 的区别

两者有时容易混淆。

可以用这个方法区分：

`Context = 帮助模型判断的背景或规则`

`Input = 当前任务具体要处理的实例`

例如退款判断任务中：

- 退款政策属于 Context
- 客户对话属于 Input

但这并不是绝对的语法分类。

同一段信息在不同 Prompt 设计中可能承担不同作用，所以重点不是机械贴标签，而是理解它在当前任务中的功能。

### 四部分并非每次都必须显式出现

一个 Prompt 不一定每次都必须完整写出四个部分。

例如：

`总结这段文字。`

这里 Instruction 很明确，但 Context 和 Output Indicator 不明确。

模型仍然可能完成任务，但输出的可控性通常较低。

因此 Prompt Anatomy 更重要的作用是作为检查框架：

`模型知道要做什么吗？`
`模型知道相关背景吗？`
`模型知道处理什么吗？`
`模型知道怎么输出吗？`

## Understanding

本次学习中已经能够正确拆分 Prompt 的四个组成部分。

示例：

`你是一名 AWS Solutions Architect。`
→ Context

`请分析下面 Lambda 函数的错误日志，找出最可能的根因。`
→ Instruction

`日志：Task timed out after 30.00 seconds`
→ Input

`请按「根因、判断依据、解决方案」三个部分回答。`
→ Output Indicator

同时形成了一个重要理解：

**Prompt Anatomy 不是要求每个 Prompt 都机械地写成四段，而是提供一个设计和检查 Prompt 的思维框架。**

尤其需要注意：

- Context 用来提供判断背景、规则或角色
- Input 是当前需要处理的具体实例
- Output Indicator 用来提升结果的可控性

## Open Questions

- None
