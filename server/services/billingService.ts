export const starterbillingServiceItems = [
  { id: "starter-1", label: "Sample billing service record", status: "draft" },
  { id: "starter-2", label: "Another billing service record", status: "ready" },
];

export async function loadbillingServicePreview() {
  return Promise.resolve(starterbillingServiceItems);
}

export async function savebillingServicePreview() {
  return Promise.resolve({
    ok: false,
    message: "The billing service workflow is intentionally unfinished in Idempotent Billing Webhook Handler.",
  });
}
