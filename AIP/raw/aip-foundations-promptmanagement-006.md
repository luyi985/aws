# aip-foundations-promptmanagement-006: Bedrock Prompt Management

## Concepts

### Prompt Management
Amazon Bedrock Prompt Management 用于把 prompt 从应用代码中的普通字符串，变成可复用、可管理的 prompt 资产。

### Prompt Variable
Variable 是 prompt template 中运行时填入的动态输入，例如 `{{transaction}}` 或 `{{customer_message}}`。稳定的角色、指令和输出要求属于 template；每次请求变化的数据属于 variable。

### Versioning
Version 用于保存某一时刻的 prompt 状态，使 prompt 可以被复现、测试、审计和回滚。仅替换 variable 的值不会产生新 version；prompt 本身变化时才涉及新的 prompt version。

### Prompt Variant
Variant 表示同一业务目标下的不同 prompt / model / inference configuration 方案，用于并行比较不同组合。Version 是纵向历史 `v1 → v2 → v3`；Variant 是横向方案 `A / B / C`。

## Understanding

- Prompt Management 的核心价值是把 prompt 从散落在代码里的字符串提升为受管理资源。
- `{{transaction}}` 这类运行时输入属于 variable，其他稳定内容属于 prompt template。
- Versioning 支持 reproducibility、rollback 和 controlled testing。
- 如果 prompt 和 model 同时变化，输出变差时不能只根据 prompt version history 判断根因。
- Prompt version 只治理 prompt 本身，不会自动版本化 model、Knowledge Base 或其他外部组件。
- 业务逻辑不变，只比较不同 model 和 inference configuration 时，更适合用 variant。
- 每次传入新的 variable 值不会产生新 version，因为 template 没变。

## Example

```text
You are a compliance assistant.

Analyze this transaction:
{{transaction}}

Return JSON only.
```

其中 `{{transaction}}` 是 runtime variable，其余属于稳定 template。

```ts
async function analyzeTransaction(transaction: string) {
  const response = await invokeManagedPrompt({
    promptVersion: "3",
    variables: { transaction },
  });
  return response;
}
```

如果新的 prompt v4 修改输出格式并造成兼容问题，可以切回已验证的 v3。model、Knowledge Base、tool configuration 等变化仍需独立治理。

## Open Questions

- None
