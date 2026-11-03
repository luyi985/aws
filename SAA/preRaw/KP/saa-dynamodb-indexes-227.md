---
id: saa-dynamodb-indexes-227
title: 为替代查询路径设计索引（DynamoDB secondary index）
status: pending
sources:
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LSI.html
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html
dependencies:
- saa-dynamodb-datamodel-116
verified_at: '2026-11-04'
---

# saa-dynamodb-indexes-227: 为替代查询路径设计索引（DynamoDB secondary index）

## Learning Objective

区分 GSI 与 LSI，并解释为什么索引不是任意字段的免费查询。

## Scope

- Included: 为替代查询路径设计索引的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

本项补齐官方考试任务所需的独立知识，依据下列 AWS 官方资料。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-dynamodb-datamodel-116。

## Knowledge Point

二级索引（secondary index）为表提供替代键访问路径，并投影查询需要的属性。GSI 可以采用不同分区键；LSI 与主表使用相同分区键、不同排序键，需在建表时规划。

## Logical Path

1. 从具体查询条件选择键，而不是默认扫描全表。
2. 按是否改变分区键和所需一致性区分 GSI/LSI。
3. 索引由服务维护，但增加存储和写入负担；投影应覆盖所需返回属性。

## Key Terms

- GSI：Global secondary index，具有独立替代键的全局二级索引。
- LSI：Local secondary index，保留主表分区键的本地二级索引。
- Projection：复制到索引中的属性集合。

## Example

示意例：主表按用户查订单，需要按订单状态查询时评估以状态为键的 GSI。例子说明不同查询条件需要显式的访问路径。

## Sources

- [AWS 官方：GSI/LSI 的替代访问键、投影与维护](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html)。用于核验上述具体边界；查阅日期：2026-11-04。
- [AWS 官方：本地索引的同分区键与创建约束](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LSI.html)。用于核验上述具体边界；查阅日期：2026-11-04。
- [AWS 官方：全局索引的替代访问与同步边界](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html)。用于核验上述具体边界；查阅日期：2026-11-04。
