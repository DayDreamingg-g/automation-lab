# ⚙️ Automation Lab

A growing collection of hands-on projects focused on **automation, APIs, backend development, and AI**.

The goal of this repository is simple: learn by building real workflows, understand how they work, document what I learn, and gradually increase the complexity.

> Build → Break → Understand → Document → Repeat.

## 🧪 Projects

### 01 — Webhook Receiver

A complete webhook processing flow built with n8n.

The workflow receives a `POST` request, validates incoming data, normalizes it, stores valid records in an n8n Data Table, and returns the appropriate HTTP response.

![Webhook Receiver Workflow](./01-webhook-receiver/preview.png)

**Flow**

```text
POST Request
     ↓
Validation
   ↙     ↘
TRUE    FALSE
 ↓        ↓
Normalize   400 Bad Request
 ↓
Data Table
 ↓
201 Created
```

**What it covers**

- HTTP POST requests
- Webhooks
- JSON request body
- Input validation
- Regex
- Data normalization with `trim()`
- TRUE / FALSE branching
- Data mapping
- n8n Data Tables
- HTTP response codes
- `201 Created`
- `400 Bad Request`
- API testing with Postman
- Cloudflare Tunnel

📁 [`01-webhook-receiver`](./01-webhook-receiver/)

---

## 🛠️ Technologies

`n8n` · `REST API` · `HTTP` · `JSON` · `Webhooks` · `Postman` · `Cloudflare Tunnel`

More technologies will be added as the projects become more complex.

Planned areas include:

`Docker` · `PostgreSQL` · `External APIs` · `Telegram` · `Discord` · `LLMs` · `RAG` · `AI Agents`

---

## 📚 Detailed Learning Notes

Each project is documented in much more detail in my public Discord knowledge base.

It contains:

- explanations of individual workflow components;
- screenshots and configuration examples;
- concepts learned while building;
- mistakes and troubleshooting;
- quick navigation for every project.

> **Language:** The Discord server and learning notes are primarily in **Russian**.

**[Join the Automation Lab Discord](https://discord.gg/Mxy9y8uMFJ)**

---

## 🎯 Goal

This repository is not intended to be a collection of copied tutorials.

Each project is built as a practical exercise to improve my understanding of:

**Automation · Backend · APIs · Data Processing · AI**

The repository will grow continuously as I explore more advanced systems and integrations.

---

### Progress

- [x] `01` — Webhook Receiver
- [ ] `02` — Coming next...
