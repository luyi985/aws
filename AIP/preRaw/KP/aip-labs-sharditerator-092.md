---
id: aip-labs-sharditerator-092
title: Kinesis 从写入记录到分片迭代读取
status: pending
sources:
- AIP/preRaw/AIP-Materials/kinesis/kinesis-data-streams.sh — lines 6–23
dependencies:
- aip-integration-eventdriven-057
---

# aip-labs-sharditerator-092: Kinesis 从写入记录到分片迭代读取

## Learning Objective

能够解释示例中的 partition key、shard ID 与 shard iterator 分别在哪个步骤使用。

## Scope

- Included: put-record、describe-stream、TRIM_HORIZON 迭代器和 get-records。
- Excluded: 创建数据流、分片扩缩容、持续消费循环和生产吞吐验证。

## Source Context

kinesis-data-streams.sh 给出生产者和消费者片段，get-records 的迭代器仍是占位符。

## Knowledge Point

分片迭代器（shard iterator）是读取某个分片位置的句柄。示例先用 partition key 写入记录，再查询分片信息、取得 TRIM_HORIZON 位置的迭代器，最后使用它读取。分区键用于写入路由，不能直接代替消费所需的分片 ID 或迭代器。

## Logical Path

1. 先识别生产者写入的流名、分区键和数据。
2. 再从流描述定位消费的分片。
3. 用 get-shard-iterator 指定读取起点。
4. 把返回句柄交给 get-records，并识别脚本中的占位符。

## Key Terms

- 分区键（`partition key`）：生产者为记录提供的分片路由输入。
- 分片迭代器（`shard iterator`）：指向分片中读取位置的句柄。

## Example

源码示例：user1 出现在 put-record，shardId-000000000000 出现在迭代器请求，而 get-records --shard-iterator <> 仍需替换。这个对照说明三个值承担不同职责。

## Sources

- `AIP/preRaw/AIP-Materials/kinesis/kinesis-data-streams.sh — lines 6–23`：写入与获取迭代器、读取记录的分步片段。
