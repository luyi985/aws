---
id: saa-cost-billingdata-223
title: 费用明细与项目归集（Cost and Usage Report and cost allocation tags）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=631
- https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html
- https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html
dependencies: []
verified_at: '2026-11-04'
---

# saa-cost-billingdata-223: 费用明细与项目归集（Cost and Usage Report and cost allocation tags）

## Learning Objective

说明费用明细与已激活成本分配标签怎样帮助定位项目成本。

## Scope

- Included: 费用明细与项目归集的机制、适用条件、失败或例外边界。
- Excluded: 完整部署步骤、实时价格和未引用的产品功能。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

成本与用量报告（Cost and Usage Report，CUR）把细粒度账单行交付到 S3。资源标签需要作为成本分配标签激活后，才可用于相应费用归集；月内明细可能更新，不等同于最终发票。

## Logical Path

1. 用项目或团队键值标记适用资源并激活成本分配标签。
2. 在费用明细中按账户、服务、用量类型和标签分组。
3. 对未标记、不能分摊或尚未更新的数据保留差额，不把标签分组当成全部真实成本。

## Key Terms

- Cost allocation tag：用于成本归集、已激活的标签。
- Line item：反映特定服务用量与费用组合的账单明细行。

## Example

示意例：两个项目共用一个账户，通过已激活 Project 标签拆分可归属费用，其余列为共享成本。例子说明成本分摊需要标签覆盖和明确的分配规则。

## Sources

- [课件 p.631：AWS Organizations – Tag Policies](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=631)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：明细行、S3 交付及未结账费用的估算性质](https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html)。用于核验上述具体边界；查阅日期：2026-11-04。
- [AWS 官方：激活成本分配标签后按标签归集费用](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html)。用于核验上述具体边界；查阅日期：2026-11-04。
