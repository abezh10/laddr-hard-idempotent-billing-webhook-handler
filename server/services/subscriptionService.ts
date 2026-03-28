export const startersubscriptionServiceItems = [
  { id: "starter-1", label: "Sample subscription service record", status: "draft" },
  { id: "starter-2", label: "Another subscription service record", status: "ready" },
];

export async function loadsubscriptionServicePreview() {
  return Promise.resolve(startersubscriptionServiceItems);
}

export async function savesubscriptionServicePreview() {
  return Promise.resolve({
    ok: false,
    message: "The subscription service workflow is intentionally unfinished in Idempotent Billing Webhook Handler.",
  });
}
