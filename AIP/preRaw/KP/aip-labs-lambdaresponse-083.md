---
id: aip-labs-lambdaresponse-083
title: API Gateway Lambda 代理响应的序列化边界
status: pending
sources:
- AIP/preRaw/AIP-Materials/api-gateway/lambda-code.py — lines 3–12, lambda_handler
dependencies:
- aip-integration-apigateway-058
---

# aip-labs-lambdaresponse-083: API Gateway Lambda 代理响应的序列化边界

## Learning Objective

能够区分 HTTP 响应封装与 body 内的 JSON 数据，并推导示例 body 的实际类型。

## Scope

- Included: statusCode、headers、body 和 json.dumps 的作用。
- Excluded: API Gateway 路由创建、鉴权、限流与真实模型推理。

## Source Context

api-gateway/lambda-code.py 返回一个固定字符串，适合专门检查代理响应封装；它没有调用 Bedrock。

## Knowledge Point

代理响应（proxy response）由外层 HTTP 元数据和内层响应正文组成。示例返回 statusCode=200 和 application/json，并使用 json.dumps 把 Python 字符串变成 JSON 文本。JSON 字符串与 JSON 对象不同；外层字典不会自动让 body 变成一个业务对象。

## Logical Path

1. 先看 handler 中原始 body 的 Python 类型。
2. 再看 json.dumps 后 body 的序列化形式。
3. 区分外层 statusCode、headers 与内层正文数据。
4. 依据源码判断已实现的是响应形状，还是完整的 API 集成。

## Key Terms

- 序列化（`serialization`）：把内存中的值转换为传输文本。
- 响应正文（`response body`）：HTTP 响应携带的业务数据。

## Example

源码示例：body 初值为 Hello from Lambda!；json.dumps 后是带 JSON 引号的字符串文本。客户端解析一次 JSON 得到字符串，而不是 {"message": ...} 对象，这展示正文类型由实际序列化输入决定。

## Sources

- `AIP/preRaw/AIP-Materials/api-gateway/lambda-code.py — lines 3–12, lambda_handler`：正文初值、JSON 序列化及代理响应字段。
