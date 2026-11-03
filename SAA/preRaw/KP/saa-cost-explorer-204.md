---
id: saa-cost-explorer-204
title: 按使用维度分析开销（AWS Cost Explorer）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=833
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=834
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=835
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=836
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=837
dependencies: []
---

# saa-cost-explorer-204: 按使用维度分析开销（AWS Cost Explorer）

## Learning Objective

在“先发现某服务费用上升”的场景中，能说明按使用维度分析开销的判断依据，并指出适用限制。

## Scope

- Included: 按使用维度分析开销的核心机制、适用条件与所引页面的边界。
- Excluded: 完整部署教程、未引用的扩展功能、实时价格与最新配额。

## Source Context

所列课件或本地笔记提供课程依据。本次按课程范围整理，未对该服务的全部现行功能逐项核验。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

## Knowledge Point

成本分析按服务、账户和时间等维度查看使用和费用，帮助识别趋势与承诺方案。

## Logical Path

1. 需求：先发现某服务费用上升。
2. 观察总额后还需追溯使用驱动因素，预测不是确定账单。
3. 结果：成本分析需要从汇总逐步定位到驱动项。

## Key Terms

- AWS Cost Explorer：成本分析按服务、账户和时间等维度查看使用和费用，帮助识别趋势与承诺方案。

## Example

示意例：先发现某服务费用上升，再拆分资源与用量查因，说明成本分析需要从汇总逐步定位到驱动项。

## Sources

- [课件 p.833：Cost Explorer](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=833)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.834：Cost Explorer – Monthly Cost by AWS Service](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=834)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.835：Cost Explorer– Hourly & Resource Level](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=835)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.836：Cost Explorer – Savings PlanAlternative to Reserved Instances](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=836)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [课件 p.837：Cost Explorer – Forecast Usage](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=837)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
