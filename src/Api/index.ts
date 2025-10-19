import type { WebhookResponse } from "../Utils/types/common";
import type { Segment } from "../Utils/types/segment";

export const sendWebhook: (data: Segment) => Promise<WebhookResponse> = async (
  data: Segment
) => {
  try {
    const id = import.meta.env.VITE_SECRET_ID;
    const webhookUrl = `https://webhook.site/${id}`;

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return {
      body: res.body,
      bodyUsed: res.bodyUsed,
      headers: res.headers,
      ok: res.ok,
      redirected: res.redirected,
      status: res.status,
      statusText: res.statusText,
      type: res.type,
      url: res.url,
    };
  } catch (err) {
    return {
      body: undefined,
      bodyUsed: false,
      headers: new Headers(),
      ok: false,
      redirected: false,
      status: 500,
      statusText: err instanceof Error ? err.message : "Unknown error occurred",
      type: "error" as const,
      url: "",
    };
    console.error(err);
  }
};
