import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";
import { z } from "zod";

export function createMcpServer() {
  const server = new McpServer({
    name: "order-mcp-server",
    version: "1.0.0",
  });

  const lambda = new LambdaClient({
    region: "ap-southeast-2",
  });

  server.registerTool(
    "get_order",
    {
      description: "查询订单详情。目前仅支持模拟订单 ORDER-001。",
      inputSchema: {
        order_id: z.string().trim().min(1, "订单号不能为空"),
      },
    },
    async ({ order_id }) => {
      try {
        const response = await lambda.send(
          new InvokeCommand({
            FunctionName: "mcp-get-order",
            InvocationType: "RequestResponse",
            Payload: Buffer.from(JSON.stringify({ order_id })),
          }),
        );

        if (response.FunctionError) {
          throw new Error(
            `Business Lambda failed: ${response.FunctionError}`,
          );
        }

        if (!response.Payload?.length) {
          throw new Error("Business Lambda returned an empty payload");
        }

        const result: unknown = JSON.parse(
          Buffer.from(response.Payload).toString("utf-8"),
        );

        // 检查业务 Lambda 是否返回了约定的结果结构。
        if (
          typeof result !== "object" ||
          result === null ||
          !("ok" in result) ||
          typeof result.ok !== "boolean"
        ) {
          throw new Error("Unexpected business Lambda response");
        }

        return {
          isError: !result.ok,
          content: [
            {
              type: "text" as const,
              text: JSON.stringify(result),
            },
          ],
        };
      } catch (error) {
        // 使用 stderr，后续接 stdio 传输时不会污染协议输出。
        console.error("get_order failed:", error);

        return {
          isError: true,
          content: [
            {
              type: "text" as const,
              text: "订单查询失败，请检查 MCP server 的错误日志。",
            },
          ],
        };
      }
    },
  );

  return server;
}