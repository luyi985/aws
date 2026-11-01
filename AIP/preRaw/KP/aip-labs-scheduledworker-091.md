---
id: aip-labs-scheduledworker-091
title: 定时任务通过 HTTP POST 进入工作进程
status: pending
sources:
- AIP/preRaw/AIP-Materials/aws-cicd/nodejs-v2-blue/cron.yaml — lines 1–5
- AIP/preRaw/AIP-Materials/aws-cicd/nodejs-v2-blue/app.js — lines 1–39
- AIP/preRaw/AIP-Materials/aws-cicd/nodejs-v2-blue/package.json — entire package manifest
- AIP/preRaw/AIP-Materials/aws-cicd/nodejs-v2-blue/index.html — lines 75–89
dependencies: []
---

# aip-labs-scheduledworker-091: 定时任务通过 HTTP POST 进入工作进程

## Learning Objective

能够连接 cron.yaml 的任务路径与 Node.js 的请求处理分支，并指出示例分支判断的实现问题。

## Scope

- Included: 任务名、计划表达式、/scheduled、请求体和调度头字段。
- Excluded: 完整 Elastic Beanstalk 环境创建、队列重试和可靠定时执行保证。

## Source Context

nodejs-v2-blue 包含 Node.js 服务、页面、包清单与 cron.yaml；app.js 第 21 行使用赋值而非路径比较。

## Knowledge Point

定时工作请求（scheduled worker request）把计划任务变成工作进程能处理的输入。cron.yaml 声明 task1 向 /scheduled 发送任务；服务的 POST 分支读取请求体并记录调度头信息。示例 req.url = "/scheduled" 会修改路径，不能准确筛选原本请求的地址。

## Logical Path

1. 先读 cron 条目声明的任务名、URL 和频率。
2. 从 HTTP 方法定位服务的 POST 处理路径。
3. 核对 URL 判断、请求体收集与任务头日志。
4. 用非目标路径检查当前分支能否正确过滤请求。

## Key Terms

- 计划任务（`scheduled task`）：按时间规则触发的工作项。

## Example

示意示例：一个 POST /other 在本应只接受 /scheduled 的分支遇到赋值表达式，可能仍记录任务日志。它展示调度配置正确与接收端路径判断正确需要分别核对。

## Sources

- `AIP/preRaw/AIP-Materials/aws-cicd/nodejs-v2-blue/cron.yaml — lines 1–5`：任务名、URL 和计划表达式。
- `AIP/preRaw/AIP-Materials/aws-cicd/nodejs-v2-blue/app.js — lines 1–39`：请求处理、分支赋值和日志。
- `AIP/preRaw/AIP-Materials/aws-cicd/nodejs-v2-blue/package.json — entire package manifest`：示例应用的 Node.js 包声明。
- `AIP/preRaw/AIP-Materials/aws-cicd/nodejs-v2-blue/index.html — lines 75–89`：应用演示页面及其环境语境。
