# Idempotent Billing Webhook Handler

- Category: Build / Backend
- Difficulty: Hard

## Contains
- `server/routes/billingWebhooks.ts`
- `server/services/billingService.ts`
- `server/services/invoiceService.ts`
- `server/services/subscriptionService.ts`
- `server/db/client.ts`
- `server/db/processedEvents.sql`
- `package.json`

## Prompt
Duplicate webhook deliveries can create duplicate invoices and subscription updates. Implement authenticity checks and idempotent processing for repeated billing events.

## Likely Change Dirs
- `server/routes`
- `server/services`
- `server/db`
