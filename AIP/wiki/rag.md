---
title: RAG 检索、排序与证据
derived_from:
  - aip-foundations-semanticsearch-007
  - aip-foundations-vectordimensionality-008
  - aip-foundations-vectortypes-009
  - aip-bedrock-knowledgebases-014
  - aip-bedrock-chunking-015
  - aip-bedrock-vectordatabases-016
  - aip-bedrock-reranking-017
  - aip-bedrock-groundingcheck-019
  - aip-testing-ragtroubleshooting-071
last_synced: 2026-11-01
status: current
---

# RAG 检索、排序与证据

## 证据如何到达回答
原文解析、切块、Embedding 和索引建立可检索知识。查询进入检索器，得到候选后再排序和筛选，最后把证据与问题组装进模型请求。Knowledge Bases 管理其中多项工作。

Dense 表示适合语义匹配，Sparse 保留显式词项信号，Hybrid 结合两者。维度越大通常存储和计算成本越高，是否提高质量要实测。向量存储还需要元数据过滤、权限范围和索引新鲜度。

## 切块与排序共同决定证据质量
固定切块简单，但可能把结论和适用条件分离；Overlap 缓解边界损失，也增加重复和成本。层次切块可用较小 child 检索，再提供 parent 背景；语义切块关注内容边界。

Reranker 对已召回候选重新判断相关性，不能补回不存在的候选。专用排序模型不一定允许修改 Prompt。最终 Top-K 还可能筛掉正确证据。

## 分阶段评估
Recall@K 是返回的相关证据占全部已标注相关证据的比例；Precision@K 是返回结果中相关证据的比例。4 个相关块，返回 5 个且命中 3 个，分别为 75% 和 60%。

Grounding 检查回答是否受 Context 支持，不证明 Context 本身真实或最新。忠实复述过期政策，仍可能事实错误。排障应保留文档版本、Chunk ID、各阶段候选与模型实际输入，见 [故障定位](troubleshooting.md)。

## Raw 来源

- [aip-foundations-semanticsearch-007](../raw/aip-foundations-semanticsearch-007.md)
- [aip-foundations-vectordimensionality-008](../raw/aip-foundations-vectordimensionality-008.md)
- [aip-foundations-vectortypes-009](../raw/aip-foundations-vectortypes-009.md)
- [aip-bedrock-knowledgebases-014](../raw/aip-bedrock-knowledgebases-014.md)
- [aip-bedrock-chunking-015](../raw/aip-bedrock-chunking-015.md)
- [aip-bedrock-vectordatabases-016](../raw/aip-bedrock-vectordatabases-016.md)
- [aip-bedrock-reranking-017](../raw/aip-bedrock-reranking-017.md)
- [aip-bedrock-groundingcheck-019](../raw/aip-bedrock-groundingcheck-019.md)
- [aip-testing-ragtroubleshooting-071](../raw/aip-testing-ragtroubleshooting-071.md)
