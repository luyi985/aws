---
id: aip-labs-toolcontract-076
title: 自定义 Strands 工具的声明与执行契约
status: pending
sources:
- AIP/preRaw/AIP-Materials/AgentsLab/strandsagent.py — lines 5–38, @tool declaration,
  function contract and Agent.tools registration
dependencies:
- aip-labs-strandsinvocation-075
---

# aip-labs-toolcontract-076: 自定义 Strands 工具的声明与执行契约

## Learning Objective

能够说明 @tool 函数的参数、用途描述、返回值与 Agent.tools 注册如何形成可调用工具契约，并检查声明与实现是否一致。

## Scope

- Included: @tool、类型标注、docstring、参数与返回值约定、实现边界及工具注册。
- Excluded: 将关键词计数、字符串匹配算法或样本文本含义作为独立学习主题；SDK 内部 schema 生成实现。

## Source Context

count_keyword 是展示自定义工具声明的载体。保留函数签名、描述、实现和注册位置作为证据；不再把子串计数与整词计数的差异列为本 KP 的学习目标。

## Knowledge Point

工具契约（tool contract）连接代理可见的用途和参数描述，以及实际函数的输入、执行与返回。源码用 @tool 标记函数，以类型标注和 docstring 描述输入输出，再把函数放入 Agent 的 tools 集合。开发者需要检查用途描述是否与实际行为相符；具体业务计算仅用于验证这项一致性。

## Logical Path

1. 先识别工具向调用者承诺的用途、参数和结果。
2. 对应到函数签名、docstring 和返回分支。
3. 确认工具被加入 Agent.tools，而非仅定义在文件中。
4. 用一个边界输入检查描述与实现的一致性，并把结论限制在工具契约范围内。

## Key Terms

- 工具契约（`tool contract`）：关于工具用途、参数、返回值及边界行为的约定。
- 类型标注（`type annotation`）：代码中对参数或返回值类型的声明。
- 文档字符串（`docstring`）：函数内描述用途、参数和结果的文字。

## Example

源码示例：count_keyword 声明两个字符串参数和整数返回值，docstring 描述其用途，随后被注册到 tools。检查空参数分支或匹配行为，是为了核对声明与实现是否一致；更换成其他业务函数时也应做同样的契约检查。

## Sources

- `AIP/preRaw/AIP-Materials/AgentsLab/strandsagent.py — lines 5–38, @tool declaration, function contract and Agent.tools registration`：支持本 KP 的配置、调用或接口机制；其中演示业务取值仅作例子。
