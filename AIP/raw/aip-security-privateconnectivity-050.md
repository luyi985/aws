# aip-security-privateconnectivity-050: VPC 与 PrivateLink 私有连接

日期：2026-10-21
学习模式：Mode 1
范围：VPC 内的应用如何访问 AWS 服务，以及网络、权限与加密的分工。

## Concepts

### 1. VPC 与 Subnet

VPC 是 AWS 中隔离的虚拟网络环境。
Subnet（子网）是 VPC 内的一段网络，应用和网络接口可以部署在子网中。

VPC 不等于 Kubernetes 集群。一个 VPC 可以包含集群，也可以包含其他应用和资源。

应用处于私有子网，不代表它完全不能访问外部服务。
是否可访问，取决于端点、路由、安全规则等配置。

### 2. AWS PrivateLink

PrivateLink 让应用通过私有连接访问受支持的服务。

它不是集群内部互通，也不是把双方整个网络打通。
在本节场景中，它提供通向特定服务的私有访问路径。

例如：应用运行在自己的 VPC，Bedrock 仍运行在 VPC 之外，
应用通过私有端点访问 Bedrock。

### 3. Interface endpoint

Interface endpoint 是 VPC 中用于访问 PrivateLink 服务的接口端点。

创建时会在选定子网中建立具有私有 IP 的网络接口。
它不要求与应用处于同一个子网。

- PrivateLink：提供私有连接的技术。
- Interface endpoint：应用所在 VPC 中创建的入口。

它们不是需要串联配置的两个独立端点。

启用 Private DNS 且 VPC DNS 配置正确时，应用使用的服务域名
可以解析到端点的私有 IP，SDK 仍然使用服务域名调用。

### 4. Gateway endpoint

Gateway endpoint 用于访问 Amazon S3 和 DynamoDB。

它通过路由表引导流量，不需要 NAT Gateway 或 Internet Gateway，
也不使用 PrivateLink。

S3、DynamoDB 可以使用 Gateway endpoint，
不代表它们只能通过这种方式访问。

### 5. API Gateway 与 Gateway endpoint

两者名称相近，但用途不同：

| 名称 | 本节需要区分的作用 |
|---|---|
| API Gateway | 发布和管理应用 API，例如前端调用后端 |
| Gateway endpoint | 为 VPC 内应用提供访问 S3、DynamoDB 的网络路径 |

本节“应用私有访问 S3”的场景使用 Gateway endpoint。

### 6. Security Group

安全组控制相关网络接口的入站和出站流量。

- Inbound：允许谁连接我。
- Outbound：允许我连接谁。

应用连接接口端点时，需要考虑：
应用侧出站规则、端点侧入站规则，以及其他适用网络控制。

例如：应用访问端点的 HTTPS 服务，需要允许相应的 TCP 443 流量。

安全组有状态：已允许连接对应的返回流量自动放行，
不必专门为该响应添加反方向规则。

安全组是附着在网络接口上的规则，不是独立的中转服务器。

## Concept Relationships

### 1. 连接方式不只有 PrivateLink

| 方式 | 典型使用场景 |
|---|---|
| 公共端点 + NAT | 私有子网应用访问公共服务端点或第三方 API |
| Interface endpoint + PrivateLink | 私有访问受支持的服务，例如 Bedrock |
| Gateway endpoint | VPC 内应用访问 S3、DynamoDB |

同一个 VPC 可以同时使用这些方式，访问不同目标时走不同路径。

对于同一 VPC 内的应用和数据库等资源，
可以使用已有私有网络通信，不必额外使用 PrivateLink。

### 2. 网络、权限与加密分别解决什么？

| 机制 | 回答的问题 |
|---|---|
| Endpoint / PrivateLink | 请求走哪条路径？ |
| 安全组等网络控制 | 连接能否建立？ |
| IAM 等授权机制 | 是否允许执行这个操作？ |
| TLS | 传输内容是否受到加密与完整性保护？ |
| KMS / 静态加密 | 存储数据的密钥如何管理和使用？ |

网络连通不代表具备调用权限。
使用私有路径，也不替代 TLS 和 IAM。

### 3. 示例：从 S3 取文档，再调用 Bedrock

条件：
- Node.js 应用运行在私有子网。
- 没有 NAT Gateway。
- 两段调用都要求私有访问。

方案：

| 操作 | 网络路径 |
|---|---|
| 从 S3 取文档 | Gateway endpoint |
| 调用 Bedrock | Interface endpoint + PrivateLink |

调用 Bedrock 的概念流程：

1. SDK 准备请求，使用应用角色凭证签名。
2. Private DNS 在配置正确时将服务域名解析到端点私有 IP。
3. 应用连接端点，适用网络规则需要允许连接。
4. HTTPS/TLS 保护传输。
5. 请求经 PrivateLink 到达 Bedrock。
6. 服务检查 IAM 等适用权限，通过后执行操作。
7. 结果通过已有连接返回。

以上为职责拆解，不把各步骤视为所有实现中的严格执行时序。

## Understanding

### 用户已表达的理解

- VPC 是私有网络环境。
- 安全组有 inbound、outbound，分别控制入站和出站流量。
- PrivateLink 可以理解为通向指定服务的私有通路。

### 本次纠正

- PrivateLink 不是 Kubernetes 集群内部链接。
- VPC 内应用访问 AWS 服务，不是只能使用 PrivateLink。
- S3 场景使用 Gateway endpoint，不是 API Gateway。
- Bedrock 的 Interface endpoint 本身就是私有端点，
  不需要再配一个独立的“private endpoint”。

### 当前学习证据与边界

场景回答中，用户将 S3 端点名称说成 API Gateway，
并将 Bedrock 描述为“private endpoint + interface endpoint”。
经解释后，用户表示暂时记下，但容易忘记。

因此：
- 已讨论概念及其关系。
- 端点名称和对应关系仍需要提示。
- 尚未证明能够独立、稳定地回忆并选择端点。
- 本次没有实际 AWS 配置或长期记忆测试。

## Review Focus

先记两组对应关系：

- S3 / DynamoDB → Gateway endpoint。
- Bedrock 私有访问 → Interface endpoint → PrivateLink。

API Gateway 单独记：用于发布、管理应用 API。

后续复习重点：
在没有提示的情况下，为“S3 取文档 + Bedrock 推理”选择端点，
并解释为什么网络连通不等于具备调用权限。

## References

- [原始 KP 定义](../preRaw/KP/aip-security-privateconnectivity-050.md)：
  本次直接读取，保留既有 KP 身份与学习范围。
- [NotebookLM Mind Map](../preRaw/NotebookLM%20Mind%20Map.png)：
  继承引用，节点“VI. Governance, Security & QA > Security & Identity >
  VPC & PrivateLink (Secure Model Communication)”；
  本次未重新检查原图。
- [AWSCertifiedGenerativeAIDeveloper.pdf](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf)：
  继承引用，PDF 第 522 页，“AWS PrivateLink (VPC Endpoint Services)”；
  本次未重新检查 PDF。
- [AIPStudyGuide.pdf](../preRaw/AIPStudyGuide.pdf)：
  继承引用，PDF 第 2、9 页，fine-tuning security 与
  “Security, Identity, and Compliance”；本次未重新检查 PDF。
- [AWS：通过 PrivateLink 访问 AWS 服务](https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-aws-services.html)：
  本次检索使用，补充公共端点与接口端点路径。
- [AWS：Gateway endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html)：
  本次检索使用，补充 S3、DynamoDB 的 Gateway endpoint。
- [AWS：PrivateLink concepts](https://docs.aws.amazon.com/vpc/latest/privatelink/concepts.html)：
  本次检索使用，补充端点概念。
- 本次学习对话：用户理解、回答、纠正及记忆困难的记录。
