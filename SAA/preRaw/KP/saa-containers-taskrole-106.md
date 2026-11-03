---
id: saa-containers-taskrole-106
title: 区分任务权限与平台权限（ECS task role）
status: pending
sources:
- preRaw/AWS Certified Solutions Architect Slides v45.pdf#page=426
- https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html
dependencies:
- saa-containers-ecs-105
- saa-iam-serviceroles-007
verified_at: '2026-11-04'
---

# saa-containers-taskrole-106: 区分任务权限与平台权限（ECS task role）

## Learning Objective

区分容器业务代码、任务启动和 EC2 宿主代理各自需要的角色。

## Scope

- Included: 任务与平台权限的使用方及隔离原则。
- Excluded: 完整 IAM 策略编写与各启动类型的部署操作。

## Source Context

所列课件或本地笔记提供课程依据。官方来源补充或校正了本文明确描述的服务边界，核验日期为 2026-11-04。逻辑路径是学习组织与推导，示例为说明机制而构造，不作为原资料中的真实案例。

硬性前置：saa-containers-ecs-105、saa-iam-serviceroles-007。

## Knowledge Point

容器任务角色（task role）授权业务代码访问资源；任务执行角色（task execution role）授权平台按适用配置拉镜像、发日志等；EC2 模式的实例角色用于宿主代理。三者的权限使用方不同。

## Logical Path

1. 先识别调用来自业务容器还是平台启动过程。
2. 业务访问分配到任务角色，镜像及日志等执行依赖按启动类型配置平台所需角色。
3. EC2 实例角色不能当作所有任务共享的宽泛业务权限。

## Key Terms

- Task role：应用容器取得 AWS 权限的角色。
- Task execution role：代理代任务执行启动及平台集成操作的角色。
- Instance profile：将角色交给 EC2 宿主机使用的机制。

## Example

示意例：读取订单的任务只获得订单资源权限，而镜像拉取由平台所需角色完成，说明业务权限应按任务隔离。

## Sources

- [课件 p.426：Amazon ECS – IAM Roles for ECS](../AWS%20Certified%20Solutions%20Architect%20Slides%20v45.pdf#page=426)。课程依据：该页所述概念、关系或场景；补充限制以所列官方来源为准。
- [AWS 官方：执行角色凭证提供给代理而非直接交给业务容器](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html)。用于核验上述具体边界；查阅日期：2026-11-04。
