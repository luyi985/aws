type GetOrderInput = {
  order_id: string;
};

type GetOrderResult =
  | {
      ok: true;
      order: {
        order_id: string;
        status: string;
        amount: number;
        currency: string;
      };
    }
  | {
      ok: false;
      error: {
        code: "INVALID_INPUT" | "NOT_FOUND";
        message: string;
      };
    };

export const handler = async (
  event: GetOrderInput,
): Promise<GetOrderResult> => {
  if (
    typeof event?.order_id !== "string" ||
    event.order_id.trim() === ""
  ) {
    return {
      ok: false,
      error: {
        code: "INVALID_INPUT",
        message: "order_id must be a non-empty string",
      },
    };
  }

  if (event.order_id !== "ORDER-001") {
    return {
      ok: false,
      error: {
        code: "NOT_FOUND",
        message: "Order not found",
      },
    };
  }

  return {
    ok: true,
    order: {
      order_id: "ORDER-001",
      status: "pending",
      amount: 99,
      currency: "AUD",
    },
  };
};