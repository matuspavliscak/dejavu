# Déjà Vu with Grok Bot

Recycle this setup: a Grok Bot that turns meeting recordings into a Personal CRM in Notion.

## What you need

1. **Grok Bot** (Cursor)
2. **Notion** — a Personal CRM database (Name, LinkedIn, Notes; page body used as diary)
3. **Pocket** (or similar) — recordings of conversations
4. Connectors: Notion + Pocket on the bot

## Notion CRM shape

| Property | Use |
| --- | --- |
| Name | Person's name |
| LinkedIn | Profile URL when a clear match exists |
| Notes | Keep empty |
| Page body | Diary of meetings (English) |

Diary rules:

- Dated entries: `YYYY-MM-DD` + short paragraph
- Newest entry on top, oldest at the bottom
- English only
- Actively search/look up LinkedIn for each person and fill it when a clear public match exists
- Never invent LinkedIn URLs

## Bot standing instructions (paste / adapt)

- Scan new Pocket recordings for people (skip yourself).
- Add or update rows in the Personal CRM.
- Put context in the page body as a diary entry at the top; leave Notes empty.
- Actively search/look up LinkedIn for each person and fill it when a clear public match exists; never invent URLs.
- Stay quiet when nothing is new.

## Optional automation

Weekday half-hourly check: new Pocket items → CRM update (same rules).

## Demo story (what this unlocks)

First meeting → contact card. Meet again → remember who they are. Later → search people and draft a follow-up.

See the root README for the full Déjà Vu product vision.
