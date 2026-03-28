export const starterinvoiceServiceItems = [
  { id: "starter-1", label: "Sample invoice service record", status: "draft" },
  { id: "starter-2", label: "Another invoice service record", status: "ready" },
];

export async function loadinvoiceServicePreview() {
  return Promise.resolve(starterinvoiceServiceItems);
}

export async function saveinvoiceServicePreview() {
  return Promise.resolve({
    ok: false,
    message: "The invoice service workflow is intentionally unfinished in Idempotent Billing Webhook Handler.",
  });
}
