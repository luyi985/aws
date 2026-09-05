---
title: AWS Networking Complete Knowledge Graph - SAA-C03
aliases:
  - AWS Networking Complete
  - AWS SAA Networking Master
tags:
  - aws
  - networking
  - saa-c03
  - vpc
  - cloud
  - architecture
created: 2026-05-20
status: active
---

# AWS Networking Complete Knowledge Graph - SAA-C03

> 核心：
>
> AWS Networking =  
> IP 地址空间 + 路由方向 + 安全过滤 + 流量分发 + 私网/公网连接 + 高可用 + Hybrid Cloud

---

# 0. AWS Networking 真正本质

AWS Networking 真正只在解决三件事：

```text
1. Packet 怎么到
2. Packet 能不能进
3. Packet 发给谁
```

AWS 所有 Networking 组件：

其实都在解决这三件事。

---

# 1. AWS Networking Full Map

```text
                        User
                          |
                    Route53 DNS
                          |
             +----------------------+
             |                      |
       CloudFront              Global Accelerator
             |                      |
             +----------+-----------+
                        |
                       WAF
                        |
                  Internet
                        |
                 Internet Gateway
                        |
==================================================
                    AWS VPC
==================================================

     PUBLIC SUBNET A               PUBLIC SUBNET B
    +----------------+            +----------------+
    | ALB / NLB      |            | ALB / NLB      |
    | NAT Gateway A  |            | NAT Gateway B  |
    +----------------+            +----------------+

             |                              |
             +----------- TG ---------------+
                          |
                   healthy targets
                          |

     PRIVATE APP SUBNET A        PRIVATE APP SUBNET B
    +---------------------+     +---------------------+
    | ECS / EC2 / EKS     |     | ECS / EC2 / EKS     |
    | APP-SG              |     | APP-SG              |
    +---------------------+     +---------------------+

             |                              |
             +-------------+----------------+
                           |

                  PRIVATE DB SUBNET
                 +----------------+
                 | RDS / Redis    |
                 | DB-SG          |
                 +----------------+

                           |
          +----------------+----------------+
          |                                 |
     VPC Endpoint                     NAT Gateway
   (S3 / DynamoDB)                   (Internet)
          |                                 |
          v                                 v
       AWS Service                     External API


==================================================
Hybrid / Multi-VPC Layer
==================================================

      Office / DataCenter
               |
        VPN / Direct Connect
               |
         Transit Gateway
          /     |      \
         /      |       \
      VPC-A   VPC-B   VPC-C
```

---

# 2. 网络基础

## 一次请求需要什么？

```text
1. DNS
2. IP
3. Route
4. Port
5. Firewall
```

---

## IP

负责：

```text
找到机器
```

例如：

```text
10.0.11.25
```

---

## Port

负责：

```text
找到服务
```

例如：

```text
443 HTTPS
5432 PostgreSQL
6379 Redis
```

---

## Route

负责：

```text
Packet 去哪
```

---

## Firewall

负责：

```text
让不让进
```

---

# 3. VPC - Virtual Private Cloud

## 定义

AWS 私有网络容器。

例如：

```text
10.0.0.0/16
```

---

## 为什么存在？

因为 AWS 是共享云：

```text
必须网络隔离
```

---

## 输入 / 输出

| 输入 | 输出 |
|---|---|
| CIDR | 私有网络 |

---

## 在流程中的位置

```text
Internet
   ↓
IGW
   ↓
VPC
```

---

## 优点

```text
1. 网络隔离
2. 云内私有网络
3. 灵活拓扑
4. 安全
```

---

## 缺点

```text
1. 网络规划复杂
2. CIDR overlap 风险
```

---

## 成本考虑

```text
VPC 本身免费
```

---

## 为什么选它？

因为：

```text
AWS 必须给每个租户独立网络
```

---

# 4. CIDR

## 定义

IP 地址范围。

例如：

```text
10.0.0.0/16
```

---

## 优点

```text
1. 灵活网络规划
2. 可分 subnet
```

---

## 缺点

```text
规划错误后期很难改
```

---

## 为什么选它？

因为：

```text
AWS 需要知道你的 IP 空间
```

---

# 5. Subnet

## 定义

VPC 内部 IP 分区。

---

## 为什么存在？

为了：

```text
隔离不同安全等级资源
```

---

## Public vs Private

### Public

有：

```text
0.0.0.0/0 -> IGW
```

### Private

通常：

```text
0.0.0.0/0 -> NAT Gateway
```

---

## 优点

```text
1. 安全隔离
2. Multi-AZ
3. 分层架构
```

---

## 缺点

```text
1. Route 管理复杂
2. subnet 设计容易混乱
```

---

## 成本考虑

```text
Subnet 本身免费
```

---

## 为什么选它？

因为：

```text
生产系统必须分层
```

---

# 6. Route Table

## 定义

网络导航表。

---

## 核心

```text
Destination -> Target
```

---

## 例子

```text
0.0.0.0/0 -> IGW
10.0.0.0/16 -> local
```

---

## 优点

```text
1. 灵活 routing
2. 支持 hybrid
3. 支持 multi-vpc
```

---

## 缺点

```text
1. 大规模 route 复杂
2. 容易误配置
```

---

## 为什么选它？

因为：

```text
Packet 必须知道下一跳
```

---

# 7. Internet Gateway (IGW)

## 定义

VPC 公网入口/出口。

---

## 数据流

```text
Internet
   ↕
IGW
   ↕
VPC
```

---

## 优点

```text
1. Internet access
2. 高可用
3. fully managed
```

---

## 缺点

```text
增加公网暴露面
```

---

## 成本考虑

```text
IGW 本身免费
```

---

## 为什么选它？

因为：

```text
VPC 默认不通公网
```

---

# 8. NAT Gateway

## 定义

Private subnet 出公网代理。

---

## 数据流

```text
Private EC2
   ↓
NAT Gateway
   ↓
IGW
   ↓
Internet
```

---

## 优点

```text
1. Private subnet 安全出公网
2. 无需 public IP
3. fully managed
```

---

## 缺点

```text
1. 贵
2. AZ-scoped
3. 大流量成本高
```

---

## 成本考虑

```text
按小时 + 流量收费
```

---

## 为什么选它？

因为：

```text
生产 App 不应直接暴露公网
```

---

## NAT HA（SAA 高频）

错误：

```text
Private-B -> NAT-A
```

AZ-A 挂：

```text
AZ-B 也无法出公网
```

正确：

```text
Private-A -> NAT-A
Private-B -> NAT-B
```

---

# 9. Security Group (SG)

## 定义

Instance / ENI 级防火墙。

---

## Stateful

```text
请求允许
返回自动允许
```

---

## 例子

```text
APP-SG:
allow 3000 from ALB-SG
```

---

## 优点

```text
1. Stateful
2. 简单
3. SG 引用 SG
4. 云原生
```

---

## 缺点

```text
1. 不支持 deny
2. 更适合 instance-level
```

---

## 为什么选它？

因为：

```text
AWS 云环境 IP 经常变化
```

---

# 10. NACL

## 定义

Subnet 边界防火墙。

---

## Stateless

```text
inbound/outbound
都必须显式允许
```

---

## SG vs NACL

| SG | NACL |
|---|---|
| Stateful | Stateless |
| Instance | Subnet |
| Allow only | Allow + Deny |

---

## 优点

```text
1. 支持 deny
2. subnet 边界保护
```

---

## 缺点

```text
1. Stateless
2. 配置复杂
```

---

## 为什么选它？

因为：

```text
需要 subnet 级额外安全层
```

---

# 11. ALB - Application Load Balancer

## 定义

L7 HTTP/HTTPS Load Balancer。

---

## 数据流

```text
User
 ↓
ALB
 ↓
Target Group
 ↓
App
```

---

## 支持

```text
Path routing
Host routing
WAF
OIDC
Cookie
```

---

## 优点

```text
1. 智能 HTTP routing
2. WAF
3. 微服务友好
4. WebSocket
```

---

## 缺点

```text
1. 无 static IP
2. TCP 能力弱
```

---

## 成本考虑

```text
按小时 + LCU 收费
```

---

## 为什么选它？

因为：

```text
现代 Web/API 需要 L7 routing
```

---

# 12. NLB - Network Load Balancer

## 定义

L4 TCP/UDP Load Balancer。

---

## 适合

```text
MQTT
Kafka
Gaming
Realtime
```

---

## 优点

```text
1. 超高性能
2. TCP/UDP
3. Static IP
4. 保留 Client IP
```

---

## 缺点

```text
1. 无 path routing
2. 无 WAF
```

---

## 成本考虑

```text
按小时 + 流量收费
```

---

## 为什么选它？

因为：

```text
Realtime/TCP 更关注网络性能
```

---

# 13. Target Group (TG)

## 定义

Healthy backend 列表。

---

## 核心

```text
Health Check
```

---

## 数据流

```text
ALB
 ↓
TG
 ↓
Healthy App
```

---

## 优点

```text
1. 自动健康检查
2. 流量隔离
3. 与 ASG 集成
```

---

## 缺点

```text
Health check 配错容易全挂
```

---

## 为什么选它？

因为：

```text
LB 必须知道谁 healthy
```

---

# 14. Auto Scaling Group (ASG)

## 定义

自动管理 EC2 生命周期。

---

## 核心

```text
min
desired
max
```

---

## 数据流

```text
ASG
 ↓
Create EC2
 ↓
Register TG
 ↓
ALB 发流量
```

---

## 优点

```text
1. 自动扩缩容
2. Self-healing
3. Multi-AZ
```

---

## 缺点

```text
1. Scaling 不是 instant
2. 冷启动
```

---

## 为什么选它？

因为：

```text
生产系统负载动态变化
```

---

# 15. VPC Endpoint

## 定义

Private subnet 私网访问 AWS 服务。

---

# Gateway Endpoint

## 支持

```text
S3
DynamoDB
```

---

## 工作方式

```text
Route Table
```

---

## 优点

```text
1. 免费
2. 高吞吐
3. 不占 ENI
```

---

## 缺点

```text
仅支持 S3 / DynamoDB
```

---

## 为什么选它？

因为：

```text
S3/DynamoDB 流量巨大
```

---

# Interface Endpoint（PrivateLink）

## 工作方式

```text
ENI
```

---

## 优点

```text
1. 支持大多数 AWS 服务
2. Private DNS
3. 可挂 SG
```

---

## 缺点

```text
1. 收费
2. 占 ENI
3. 占 Private IP
```

---

## 成本考虑

```text
按小时 + 流量收费
```

---

## 为什么选它？

因为：

```text
其它 AWS 服务无法使用 Gateway Endpoint
```

---

# 16. VPC Peering

## 定义

两个 VPC 私网互通。

---

## 限制

```text
No Transitive Routing
```

---

## 优点

```text
1. 简单
2. 成本低
```

---

## 缺点

```text
1. Mesh peering 爆炸
2. 大规模管理困难
```

---

## 为什么选它？

因为：

```text
少量 VPC 最简单
```

---

# 17. Transit Gateway (TGW)

## 定义

Centralized Routing Hub。

---

## 数据流

```text
VPC-A
   \
VPC-B -- TGW -- VPN -- Office
   /
VPC-C
```

---

## 优点

```text
1. 大规模 VPC 管理
2. centralized routing
3. hybrid cloud
```

---

## 缺点

```text
1. 更贵
2. 更复杂
```

---

## 为什么选它？

因为：

```text
企业 AWS 通常几十上百个 VPC
```

---

# 18. VPN

## 定义

公网 IPSec tunnel。

---

## 优点

```text
1. 便宜
2. 快速
3. IPSec 加密
```

---

## 缺点

```text
1. 公网
2. 延迟波动
```

---

## 为什么选它？

因为：

```text
适合快速 Hybrid 接入
```

---

# 19. Direct Connect (DX)

## 定义

AWS 专线。

---

## 优点

```text
1. 稳定
2. 高带宽
3. 低延迟
```

---

## 缺点

```text
1. 贵
2. 部署慢
```

---

## 为什么选它？

因为：

```text
金融 / 企业核心系统
需要稳定网络
```

---

## 企业最佳实践

```text
DX = Primary
VPN = Backup
```

因为：

```text
DX 也会挂
```

---

# 20. Route53

## 定义

AWS DNS 服务。

---

## Routing Policy

```text
Simple
Weighted
Latency
Failover
Geo
```

---

## 优点

```text
1. 全球 DNS
2. health check
3. routing policy 丰富
```

---

## 缺点

```text
DNS propagation delay
```

---

## 为什么选它？

因为：

```text
AWS 资源需要 DNS
```

---

# 21. CloudFront

## 定义

AWS CDN。

---

## 核心

```text
Caching
```

---

## 数据流

```text
User
 ↓
Edge Location
 ↓
Origin
```

---

## 优点

```text
1. 静态资源加速
2. CDN cache
3. 降低 origin 压力
```

---

## 缺点

```text
不适合 TCP/UDP
```

---

## 为什么选它？

因为：

```text
静态内容最适合 CDN
```

---

# 22. Global Accelerator (GA)

## 定义

AWS 全球网络加速。

---

## 核心

```text
AWS Backbone Routing
```

---

## 数据流

```text
User
 ↓
Nearest Edge
 ↓
AWS Backbone
 ↓
ALB/NLB
```

---

## 优点

```text
1. 全球低延迟
2. TCP/UDP
3. Anycast IP
4. 秒级 failover
```

---

## 缺点

```text
1. 不做缓存
2. 更贵
```

---

## 为什么选它？

因为：

```text
Gaming / MQTT / realtime
更需要网络路径优化
```

---

# 23. Trade-off Thinking（SAA 真正核心）

SAA 真正考：

```text
为什么选它
为什么不用另一个
它的边界是什么
它的缺陷是什么
它的成本是什么
```

不是 definition。

---

# 24. 最终总口诀

```text
Route Table 决定能不能到
Security Group 决定让不让进
Target Group 决定谁健康
ALB/NLB 决定发给谁
ASG 决定机器有多少
```

---

# 25. 最终架构思维

## Routing Layer

决定：

```text
packet 去哪
```

组件：

```text
Route Table
TGW
VPN
DX
Peering
```

---

## Connectivity Layer

决定：

```text
怎么连接
```

组件：

```text
IGW
NAT
VPCE
CloudFront
GA
```

---

## Security & Distribution Layer

决定：

```text
让不让进
发给谁
```

组件：

```text
SG
NACL
ALB
TG
ASG
```
