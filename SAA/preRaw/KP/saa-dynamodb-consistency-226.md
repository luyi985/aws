---
id: saa-dynamodb-consistency-226
title: 按读取对象选择一致性（DynamoDB read consistency）
status: pending
sources:
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html
dependencies:
- saa-dynamodb-datamodel-116
verified_at: '2026-11-04'
---

# saa-dynamodb-consistency-226: 按读取对象选择一致性（DynamoDB read consistency）

## Learning Objective

判断表、LSI、GSI 和 Streams 是否支持强一致读取。

## Scope

- Included: 按读取对象选择一致性的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

本项补齐官方考试任务所需的独立知识，依据下列 AWS 官方资料。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-dynamodb-datamodel-116。

建议阅读（不阻塞学习）：[saa-dynamodb-indexes-227](saa-dynamodb-indexes-227.md)。

## Knowledge Point

最终一致读取可能暂时返回较旧的已提交值；强一致读取可反映读取前已成功完成的写入。表和本地二级索引支持相应强一致选项，全球二级索引及 Streams 不支持该读取模式。

## Logical Path

1. 先识别读取的是表、索引还是流。
2. 需要写后立即看到最新结果时，选择支持强一致的目标与请求配置。
3. 强一致读取不锁住后续写入；跨区域一致性另按全球表模式判断。

## Key Terms

- Strongly consistent read：反映之前已成功写入值的读取方式。
- Eventually consistent read：允许短时旧读、最终趋于更新值的读取方式。

## Example

示意例：刚写入订单后从 GSI 查询未立即出现，不能仅给 GSI 请求增加强一致参数；可以按需求读取主表。例子说明一致性受访问目标限制。

## Sources

- [AWS 官方：表、LSI、GSI 与全球表的读取一致性](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html)。用于核验上述具体边界；查阅日期：2026-11-04。
