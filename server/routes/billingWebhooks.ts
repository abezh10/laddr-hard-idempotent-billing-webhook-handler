export const billingWebhooksRoute = {
  path: "/billingWebhooks",
  method: "GET",
};

export function handleBillingWebhooks() {
  return {
    ok: true,
    route: "billingWebhooks",
    message: "Starter route for Idempotent Billing Webhook Handler",
  };
}
