---
id: saa-observability-tracing-225
title: 跨服务请求链路定位（Distributed tracing and AWS X-Ray）
status: pending
sources:
- https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html
- https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-migration.html
dependencies:
- saa-observability-metrics-152
verified_at: '2026-11-04'
---

# saa-observability-tracing-225: 跨服务请求链路定位（Distributed tracing and AWS X-Ray）

## Learning Objective

用一条请求链路区分前端、应用和数据库延迟。

## Scope

- Included: 跨服务请求链路定位的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

本项补齐官方考试任务所需的独立知识，依据下列 AWS 官方资料。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-observability-metrics-152。

## Knowledge Point

分布式追踪（distributed tracing）把同一请求的跨服务调用关联起来；X-Ray 收集并呈现这些链路，帮助定位延迟和错误。它补充指标与日志，但不保证捕获每个请求。

## Logical Path

1. 在入口与下游传播追踪上下文。
2. 用采样链路比较各调用段耗时和错误。
3. 新接入优先评估 OpenTelemetry；旧 X-Ray SDK/daemon 已进入维护阶段，这不等于 X-Ray 服务停止。

## Key Terms

- Trace：一次请求在多个服务中的关联调用记录。
- Instrumentation：为程序增加遥测采集与上下文传播。

## Example

示意例：接口总耗时很高，链路显示数据库调用占主要时间，而应用计算很短。例子说明请求级追踪能缩小瓶颈位置。

## Sources

- [AWS 官方：请求链路、下游调用与延迟定位](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html)。用于核验上述具体边界；查阅日期：2026-11-04。
- [AWS 官方：OpenTelemetry 接入建议与旧 SDK/daemon 维护状态](https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-migration.html)。用于核验上述具体边界；查阅日期：2026-11-04。
