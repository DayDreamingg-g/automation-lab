# ⚙️ Automation Lab

A collection of practical automation projects built with **n8n**.

This repository documents my hands-on learning process: working with webhooks, APIs, data processing, storage, HTTP responses, error handling, monitoring, and reusable workflow architecture.

Each project focuses on a specific automation concept and gradually builds toward more complex automation systems.

---

## 💬 Learn Together

I also maintain a public Discord workspace where I document my learning process, share detailed notes for each project, explain problems I encountered, and keep additional material that does not fit into the repository.

The server is mainly in Russian and is intended for people who want to learn automation, n8n, APIs, backend concepts, debugging, monitoring, and related topics together with me.

Inside the server you can find:

- detailed learning notes for every Automation Lab project
- architecture explanations
- troubleshooting notes
- API and webhook examples
- experiments
- useful links
- project discussions
- questions and answers

**Discord:** [Daydreaming Workspace](https://discord.com/invite/Mxy9y8uMFJ)

---

## 🧭 Quick Navigation

| # | Project | Focus |
|---|---|---|
| 01 | [Webhook Receiver](#01--webhook-receiver) | Webhooks, validation, normalization, storage |
| 02 | [API Data Fetcher](#02--api-data-fetcher) | External APIs, HTTP requests, data transformation |
| 03 | [Weather API Service](#03--weather-api-service) | API service, validation, routing, HTTP responses |
| 04 | [Central Error Handler](#04--central-error-handler) | Error handling, classification, logging, monitoring |

---

# 01 — Webhook Receiver

`Webhook · Validation · Normalization · Data Table · HTTP Responses`

A webhook-based automation that receives incoming JSON data, validates it, normalizes the payload, stores valid messages and returns an appropriate HTTP response.

## Architecture

```text
Client
  ↓
Webhook
  ↓
Validation
  ├── Invalid
  │     ↓
  │  400 Bad Request
  │
  └── Valid
        ↓
   Normalize Data
        ↓
   Save to Storage
        ↓
   201 Created
