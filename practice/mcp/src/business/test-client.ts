import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { createMcpServer } from "./mcp-servier.js";
async function main() {
  const server = createMcpServer();
  const client = new Client({
    name: "order-test-client",
    version: "1.0.0",
  });

  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();

  try {
    await server.connect(serverTransport);

    // SDK 自动执行 MCP 初始化握手。
    await client.connect(clientTransport);
    console.log("1. MCP 初始化成功");

    // 发现工具：此时不会调用业务 Lambda。
    const tools = await client.listTools();
    console.log("2. 工具列表：");
    console.log(JSON.stringify(tools, null, 2));

    // 调用工具：server 再去调用云端业务 Lambda。
    const result = await client.callTool({
      name: "get_order",
      arguments: {
        order_id: "ORDER-001",
      },
    });

    console.log("3. 工具调用结果：");
    console.log(JSON.stringify(result, null, 2));

    if (result.isError) {
      process.exitCode = 1;
    }
  } finally {
    await client.close();
    await server.close();
  }
}

main().catch((error) => {
  console.error("测试失败：", error);
  process.exitCode = 1;
});