# Idempotent Billing Webhook Handler

- Category: Build
- Topic: Backend
- Difficulty: Hard

## Overview
This sample repository is set up for a hard build exercise in the backend track. The starter code is intentionally lightweight: it gives Sandpack something meaningful to render or inspect, but it still leaves the real evaluation work in place so a candidate has to implement the missing feature end to end.

## Exercise Summary
Duplicate webhook deliveries can create duplicate invoices and subscription updates. Implement authenticity checks and idempotent processing for repeated billing events.

## Starter State
The current scaffold keeps the requested folder layout intact and includes small task-adjacent starter implementations. Frontend files render simple placeholder UI, while routes, services, hooks, utilities, and data files expose minimal sample data or placeholder behavior without solving the exercise for the learner.

## Repo Files
- `package.json`
- `server/db/client.ts`
- `server/db/processedEvents.sql`
- `server/routes/billingWebhooks.ts`
- `server/services/billingService.ts`
- `server/services/invoiceService.ts`
- `server/services/subscriptionService.ts`

## Likely Change Areas
- `server/db`
- `server/routes`
- `server/services`

## Sandbox Notes
These files are intentionally small and preview-friendly. They should render a lightweight surface where that makes sense, while still leaving the real build, debug, refactor, security, or migration work undone.
