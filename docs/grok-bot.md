# Déjà Vu with Grok Bot

Use the hackathon's Grok Bot setup to turn Pocket recordings into a personal CRM in Notion. Give your agent this guide and work through one recording together.

## What you need

1. **Grok Bot** (Cursor)
2. **Notion**: a Personal CRM database (Name, LinkedIn, Notes; page body used as diary)
3. **Pocket** (or similar): recordings of conversations
4. Connectors: Notion + Pocket on the bot

## First run with your agent

1. **Choose the destination.** Give your agent the link to your Notion CRM database and tell it your own name, so it can skip you when creating contacts. If you need a database, ask the agent to create one using the properties below.
2. **Check access.** Ask the agent to verify that it can read a Pocket transcript and read and update the selected Notion database. Complete any required sign-in yourself. If a connector is missing, the agent should name it and stop before claiming setup is complete.
3. **Choose one recording.** Give the agent its link or title. Ask it to use the conversation date for the diary entry and clarify any uncertain person or date before writing.
4. **Apply the standing instructions below.** Have the agent search existing contacts before creating a row, then add the meeting notes to the correct person's page.
5. **Open the result in Notion.** Check the person's name, meeting date, and summary against the transcript. The new entry should be at the top and earlier entries should remain intact. Run the same recording again and check that it creates no duplicate contact or diary entry.

Finish this check before enabling recurring updates. This guide describes the hackathon workflow; setup with a fresh account has not yet been independently verified.

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
- Search public LinkedIn profiles using the person's name and context from the recording. Fill the URL only when the match is clear; leave it empty when uncertain. Never invent a URL or overwrite a known profile with an uncertain match.

## Bot standing instructions (paste / adapt)

- Scan new Pocket recordings for people (skip yourself).
- Search existing contacts, then add or update the matching row. Ask when identity is ambiguous.
- Put context in the page body as a diary entry at the top; leave Notes empty.
- Preserve previous entries and avoid adding the same recording twice. Include its source link or ID with the entry when available.
- Follow the LinkedIn lookup rule above.
- Stay quiet when nothing is new.

## Optional automation

After the first recording check succeeds, you can ask your agent to check for new Pocket recordings every half hour on weekdays. Confirm your time zone and the agent's scheduling support first. Apply the same diary and duplicate-check rules on each run.

## Demo story (what this unlocks)

First meeting → contact card. Meet again → remember who they are. Later → search people and draft a follow-up.

See the [root README](../README.md) for the full Déjà Vu product vision.
