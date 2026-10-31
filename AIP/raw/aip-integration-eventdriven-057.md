# aip-integration-eventdriven-057: 异步与事件驱动 GenAI 集成

## Concepts

### 1. 同步请求与后台任务的边界

同步设计在当前请求中等待任务结束并返回结果。长时间研究任务可能需要后台执行，先返回任务 ID，再通过查询或推送提供状态与结果。

教学响应示例：

```http
HTTP/1.1 202 Accepted
```

```json
{
  "jobId": "JOB-001",
  "status": "queued"
}
```

Accepted 表示任务被接受，不代表已经完成。应在任务被可靠接收后再返回，不能只在内存中启动 Promise，就假定任务能在进程退出后继续执行。

任务状态可以包括：

| 状态 | 含义 |
|---|---|
| queued | 等待执行 |
| running | 正在处理 |
| waiting_for_input | 等待补充信息或审批 |
| succeeded | 已完成并保存结果 |
| failed | 执行失败 |

Node.js 的 async/await 与后台任务模式不是同一概念。前者描述代码如何等待操作，后者涉及工作是否脱离当前请求，以及任务如何持久化和恢复。

### 2. SQS：排队、缓冲与削峰

SQS 可以缓冲等待处理的工作，由 Worker 按下游承受能力逐步消费。

教学流程：

提交研究任务 → SQS → Worker → 保存结果。

队列不会自动增加下游容量：

- 短时积压随后消退，可能是正常吸收突发。
- 积压持续增长，需要调查到达速率和处理能力。
- 模型 API 已限流时，增加 Worker 并发可能进一步加重压力。

应结合下游限制控制调用速率和并发，配合退避重试，而不是只根据队列长度扩容。

Lambda 消费 SQS 时，由事件源映射轮询队列并调用函数处理批次，而不是 SQS 直接把消息推入函数。

### 3. Visibility Timeout、重试与幂等

Worker 取到消息后，消息在 Visibility Timeout 内暂时不可见。成功处理后删除；未成功删除的消息可能再次被消费。

Lambda 与 SQS 的集成可能重复处理记录，因此处理逻辑需要幂等。

GenAI 任务重复执行可能产生：

- 重复模型调用和费用。
- 多份报告。
- 重复通知。
- 重复业务写操作。

需要稳定任务 ID、明确执行状态，以及针对业务动作的幂等控制。先读再写状态不能避免并发竞争，关键状态转换需要原子约束。

失败处理应区分：

| 类型 | 处理思路 |
|---|---|
| 暂时错误 | 退避重试 |
| 输入缺失或不合法 | 澄清或明确失败 |
| 持续失败 | 按策略隔离，例如进入 DLQ 后调查 |

队列提供重新处理机会，不会让错误任务自动变正确。

### 4. EventBridge：匹配事件并投递

EventBridge 的事件总线用于把事件交给相关消费者，实现系统解耦。

产品研究教学案例：

1. 研究服务保存报告。
2. 发布 ResearchCompleted 事件。
3. 通知、分析、缓存更新系统分别响应。

以下为前面讨论的 Classic Rules/Targets 模式请求示例：

```json
{
  "Entries": [
    {
      "Source": "shopping.research",
      "DetailType": "ResearchCompleted",
      "EventBusName": "shopping-events",
      "Detail": "{\"jobId\":\"JOB-001\",\"userId\":\"USER-001\",\"resultKey\":\"reports/JOB-001.json\"}"
    }
  ]
}
```

事件携带任务标识和结果位置，正文保存在数据库或对象存储中。

规则示例：

```json
{
  "source": ["shopping.research"],
  "detail-type": ["ResearchCompleted"]
}
```

一个事件可以匹配多个规则，投递给多个目标。生产者不必直接调用每一个下游服务。

可以组合：

EventBridge → 各下游 SQS → 各自 Worker。

其中 EventBridge 决定交给谁，SQS 缓冲待处理工作，Worker 执行具体操作。

简单的单消费者后台任务，可以直接使用 SQS，不必为组合服务而引入 EventBridge。

### 5. EventBridge 的版本、顺序与并发边界

本次读取的 AWS 文档区分：

| 类型 | 本次涉及的机制 |
|---|---|
| Custom Event Bus - Classic | Rules 匹配事件并投递到 Targets |
| Custom Event Bus | Subscribers、事件保留与回放，以及可配置的顺序投递 |

新版 Custom Event Bus 的 Subscriber 可以选择无序并行投递，或按 EventGroupId 分组顺序投递。具体顺序边界还取决于目标调用方式，不能等同于整个业务流程自动顺序完成。

因此，不能把所有 EventBridge 能力概括为“只是路由，没有顺序或回放能力”；也不能把新版事件分组直接等同于 Kafka Partition 分配。

EventBridge 不提供 Kafka 那种由应用配置并分配给消费者的 Partition 消费模型。实际业务处理并发由下游 Lambda、Worker 或其他执行层控制，路由吞吐与执行并发是不同层的限制。

本节中的 Rules/Targets 示例属于 Classic 模式，不能直接当作新版 Subscriber 配置示例。

### 6. Step Functions：多步骤执行编排

当流程包含步骤依赖、并行、分支、等待和失败处理时，可以考虑 Step Functions。

产品研究示例：

校验需求 → 并行调查 → 汇合结果 → 必要时等待人工 → 生成报告 → 保存结果。

Step Functions 用状态机管理工作流，由任务状态调用执行服务或集成服务，并提供执行状态与历史的可观测性。

它不负责自动理解用户的开放需求，具体工作仍由相应服务或 Worker 承担。

| 层次 | 职责 |
|---|---|
| LLM Planner | 动态提出任务和依赖 |
| 执行器／工作流引擎 | 管理执行顺序、并发、重试与恢复 |
| SQS | 缓冲等待处理的工作 |
| EventBridge | 匹配事件并投递给相关消费者 |

简单流程不必全部引入。

### 7. LLM Planner：何时需要显式计划

普通 Tool-calling Loop 已包含隐式规划：模型根据当前信息决定直接回答，还是调用工具；工具返回后再决定下一步。

“没有 Tool Call 就返回”是基础停止条件，不保证用户目标已经满足。

显式 Planner 将计划变成应用可以管理的数据，适用于任务组合随需求变化，而且需要进度、依赖、并行或重试管理的情况。

如果任务始终是查询固定字段，直接写代码即可。把固定步骤交给模型重新生成，不一定增加价值。

开放需求的教学例子：

> 通勤听播客、周末打游戏，现在的耳机戴久了不舒服，想研究怎么换。

Planner 可以先提出澄清问题，再根据佩戴形式、连接方式等新信息调整调查步骤。模型负责将模糊目标转成任务，工具能力和执行边界仍由代码定义。

### 8. 工具目录如何与计划连接

Planner 应获得：

- 用户请求。
- 当前有效需求。
- 可用工具名称、用途、输入与输出结构。

提示要求应明确：

- 只能使用注册工具。
- 不得编造工具结果或产品标识。
- 使用上游输出时声明依赖和引用。
- 独立任务可以并行，计划必须无环。
- 缺少无法由工具获取的信息时，先澄清。

教学计划示例：

```json
{
  "tasks": [
    {
      "id": "find",
      "tool": "search_products",
      "dependsOn": [],
      "args": {
        "requirements": {
          "$ref": "state.requirements"
        }
      }
    },
    {
      "id": "prices",
      "tool": "get_prices",
      "dependsOn": ["find"],
      "args": {
        "productIds": {
          "$ref": "tasks.find.output.products[*].id"
        },
        "market": "AU"
      }
    },
    {
      "id": "warranty",
      "tool": "get_warranty",
      "dependsOn": ["find"],
      "args": {
        "productIds": {
          "$ref": "tasks.find.output.products[*].id"
        },
        "market": "AU"
      }
    }
  ]
}
```

dependsOn 表示何时可以执行，输出引用表示参数从哪里取得。只声明依赖，不会自动完成数据传递。

这里的 $ref 是自定义教学格式，需要应用实现解析，不是模型或 TypeScript 自动提供的能力。

### 9. 依赖调度与计划校验

执行器应寻找依赖全部成功的待执行任务，再在并发限制内执行。

示例中：

1. 先执行 find。
2. find 成功后，prices 与 warranty 可以并行。
3. 调查完成后，再综合推荐。

执行前至少校验：

- 工具在注册表中。
- 任务 ID 唯一，依赖存在。
- 依赖图无环。
- 输出引用指向已声明依赖。
- 解析后的参数符合工具 Schema。
- 权限、任务数量与并发符合限制。

上游失败后，下游应阻塞或跳过，不能使用不存在的结果继续执行。

执行结果可用于更新剩余计划，即 Replan。重新规划时保留已完成结果，并设置步数、时间和成本上限。

进程重启后恢复这些步骤，需要持久化执行状态，或交由工作流引擎管理；仅生成 JSON 计划不提供恢复能力。

### 10. Kafka 类比及边界

用户将 EventBridge 类比为同一 Kafka Topic 中按 messageType 分派到不同 Handler。

该类比抓住了按类型匹配和分派的机制，但分派位置不同：

- Kafka Consumer 内部由应用代码选择 Handler。
- EventBridge 由托管服务匹配并投递到目标。

一个事件需要通知、分析和缓存分别处理时，Kafka 更接近三个独立 Consumer Group。不同 Group 可以订阅同一个 Topic，各自维护消费进度。

同一 Group 内，Consumer 分配 Partition、分担处理；并不是每个 Consumer 都获得同一条消息。

同一个 Topic 包含多种相关事件类型，也是合理设计。例如创建、更新、删除属于同一业务实体，使用合适的分区策略进入同一 Partition 后，可以按日志顺序读取。

需要保留的边界：

- Kafka 顺序保证在 Partition 内，不是整个 Topic。
- 拆成不同 Topic，不提供跨 Topic 的统一日志顺序。
- 应用并发执行 Handler，仍可能破坏完成顺序。
- 共用 Topic 会使类型共享部分配置，并可能出现慢处理拖累后续消息。
- 是否拆分，应看业务关联、顺序、权限、保留策略和隔离要求。

“没有 Kafka 式 Partition”不能直接推导为 EventBridge 不成熟；二者提供的抽象和控制面不同。

### 11. 异步后台任务与流式展示

异步任务可以通过轮询、SSE 或 WebSocket 更新进度，也可以在最终生成阶段流式展示文本。

两者职责不同：

- 持久化任务和结果负责生命周期与可靠性。
- 连接负责向客户端传递更新。

用户关闭页面，不应自动等同于后台任务消失；再次访问时，可以通过任务 ID 查询状态和结果。

## Concept Relationships

### 排队、路由与编排

SQS 管理待处理工作，EventBridge 选择事件接收方，Step Functions 管理多个步骤之间的执行关系。根据需求组合，而不是默认全部使用。

### 动态规划与可靠执行

Planner 提议任务及依赖，代码校验并执行。持久化和恢复由应用或工作流层提供，模型计划本身不等于可靠执行机制。

### 并发与下游容量

积压增加不意味着应该无条件扩容。当下游已限流，应先控制并发与速率，避免重试进一步放大负载。

### Kafka 与 EventBridge

Kafka 类比有助于理解事件类型与独立消费者，但 Partition、Offset、Consumer Group 与 EventBridge 的规则或订阅机制不能直接画等号。

## Understanding

用户询问 Planner 的使用场景，并指出最初固定查询价格、库存、保修的例子，不用 LLM 也能完成。

讨论认可这一判断，进一步区分固定工作流与开放目标下的动态规划。

用户继续询问提示词如何关联工具，以及任务依赖如何执行。讨论建立了工具目录、结构化计划、dependsOn、输出引用、校验和调度之间的关系。

用户将 EventBridge 类比为 Kafka 同 Topic 中按 messageType 分派 Handler。该类比体现了对匹配分派机制的理解，之后澄清了 Consumer Group 与 Topic 不是一一对应关系。

用户进一步询问多事件类型共用 Topic 的原因，以及 EventBridge 是否有 Partition 并发。讨论补充了业务实体事件顺序、消费者分担、路由与执行并发，以及 EventBridge 总线类型的区别。

用户对 EventBridge 提出“任务管道”的直观理解。讨论保留其对组件串接的帮助，同时明确不能据此判断成熟度，也不能将事件路由、工作排队和执行编排混为一体。

本次未部署后台任务系统、编写可靠调度器或运行故障恢复实验，不据此认定已具备独立实操能力。

## References

### 继承来源，未重新读取底层资料

- [AWS Certified Generative AI Developer 课程资料](../preRaw/AWSCertifiedGenerativeAIDeveloper.pdf) — AIP-C01 course slides / detailed coverage；原始 KP 未提供具体页码。
- [AIP Study Guide](../preRaw/AIPStudyGuide.pdf) — AIP-C01 Study Guide (Detailed)；原始 KP 未提供具体页码。

### 继承来源，本次直接读取

- [Creating event-driven architectures with Lambda](https://docs.aws.amazon.com/lambda/latest/dg/concepts-event-driven-architectures.html) — Push 与 Pull、事件驱动集成。
- [Using Lambda with Amazon SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html) — 轮询批次、Visibility Timeout、重复处理与幂等。

### 本次直接读取的补充来源

- [What Is Amazon EventBridge?](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html) — 事件总线、Pipes 与总线类型。
- [EventBridge event bus: default and Classic](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html) — Rules、Targets 与多目标投递。
- [EventBridge Custom Event Bus](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-custom-bus.html) — Subscribers、保留与回放。
- [Ordering and deduplicating events on a Custom Event Bus](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-custom-bus-ordering.html) — 无序／FIFO Subscriber、事件分组及目标顺序边界。
- [What is Step Functions?](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html) — 状态机、任务与执行。

### 本次通过搜索摘要读取的补充来源

- [Confluent — Single vs. Multiple Event Streams](https://developer.confluent.io/courses/event-design/single-vs-multiple-event-streams/) — 多类型事件共用流的设计权衡。
- [Confluent — Multiple event types with Protobuf](https://developer.confluent.io/confluent-tutorials/multiple-event-types-protobuf/kafka/) — 同一 Key 的相关事件与顺序。
- [Apache Kafka — Introduction](https://kafka.apache.org/0100/documentation.html) — 历史版本文档；本次仅用于 Partition 内顺序的基础语义。
- [Confluent — Multiple Event Types in the Same Kafka Topic, Revisited](https://www.confluent.io/blog/multiple-event-types-in-the-same-kafka-topic/) — 多事件类型与 Schema 组织。
- [Apache Kafka — Consumer Design](https://github.com/apache/kafka/blob/trunk/docs/design/design.md) — Consumer Group、Partition 分配和扩展。
- [Confluent — Consumer Design](https://docs.confluent.io/kafka/design/consumer-design.html) — 消费、Consumer Group 与 Offset。

### KP 血缘

- [原始 KP 定义](../preRaw/KP/aip-integration-eventdriven-057.md) — 本次直接读取。

任务状态、选购助手事件、Planner 计划及引用格式均为本次教学设计。EventBridge 版本说明对应本次读取到的文档，不将不同总线类型的能力混用。
