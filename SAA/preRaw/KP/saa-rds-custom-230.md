---
id: saa-rds-custom-230
title: 数据库托管与操作系统定制（Amazon RDS Custom）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=169
- https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-custom.html
dependencies:
- saa-rds-manageddb-039
verified_at: '2026-11-04'
---

# saa-rds-custom-230: 数据库托管与操作系统定制（Amazon RDS Custom）

## Learning Objective

在普通 RDS、RDS Custom 和 EC2 自管之间按定制责任选择。

## Scope

- Included: 数据库托管与操作系统定制的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-rds-manageddb-039。

## Knowledge Point

RDS Custom 为受支持的数据库提供底层操作系统及数据库定制能力，同时保留部分托管自动化。普通 RDS 更少开放底层管理，EC2 自管则把更多数据库运维交给客户。

## Logical Path

1. 确认应用确实要求普通 RDS 不提供的底层权限。
2. 检查所需引擎与定制是否在受支持范围。
3. 获得更大控制权也增加维护责任，不能把 Custom 理解为任意修改都不影响托管能力。

## Key Terms

- Customization：对数据库环境或底层操作系统进行定制。

## Example

示意例：遗留应用要求安装特定 OS 软件包，先核对 RDS Custom 支持范围，而不是直接假设普通 RDS 能提供 SSH。例子说明控制权影响服务选择。

## Sources

- [课件 p.169：RDS Custom](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=169)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：普通 RDS、RDS Custom 与 EC2 自管的责任边界](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-custom.html)。用于核验上述具体边界；查阅日期：2026-11-04。
