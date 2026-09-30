<p align="center">
  <img src="brand/logos/dejavu-primary.png" alt="Déjà Vu" width="720">
</p>

<p align="center"><strong>You've met before. Now you'll remember.</strong></p>

<p align="center"><a href="https://dejavu.blue">dejavu.blue</a></p>

Déjà Vu is a personal CRM for the people you meet at hackathons, conferences, and parties. Notion is the interface for your contacts and connections. Your agent helps set it up from Markdown guides. We're exploring Meta smart glasses to capture conversations and bring back context when you meet again.

Built at [Cursor Hackathon Prague: Forge the Stack](https://luma.com/cursor-mljb).

## The idea

You meet someone interesting. A few months later, you remember the conversation but not their name. Your phone has a contact called “Martin conference ???”.

Déjà Vu is designed to help you:

1. **Remember a first meeting.** One tap on the glasses captures the conversation. AI creates a contact card with their name, where you met, interests, and things to follow up on.
2. **Pick up the conversation.** When you meet again, see who they are and a question to reopen the conversation. New details update their card.
3. **Find the right person.** Ask for a designer, a job connection, or a skater friend. Search past conversations and draft a message to send.

## Demo story

**At the hackathon:** Katka meets Viktor. They talk about skateboarding and his hometown, Hluboká. Both save the meeting in Déjà Vu.

**Three months later:** They bump into each other. Katka's glasses remind her: Viktor, hackathon, skater from Hluboká. He now works on AI at FLO; she's a UX designer. Their cards get updated.

**A few weeks later:** Viktor needs a designer for his AI team. Déjà Vu finds Katka and drafts: “Let's grab a coffee, we'd love you on the team.”

## Team

- [Kateřina Husičková](https://www.linkedin.com/in/katerinahusickova/)
- [Vendula Rusá](https://www.linkedin.com/in/vendula-rus%C3%A1/)
- [Viktor Šohájek](https://www.linkedin.com/in/viktor-sohajek/)
- [Matúš Pavliščák](https://www.linkedin.com/in/pavliscak/)

## Brand library

[Usage guide](brand/README.md) · [Visual reference](brand/index.html) · [Logos](brand/logos) · [App icons](brand/icons) · [Social card](brand/social/social-card.png) · [Design tokens](brand/tokens.json)

Open `brand/index.html` in a browser to view the library. The fonts and assets are bundled for offline use.

## Landing page

The site lives in `site/`. Run `npm ci` and `npm run dev` to preview it locally.

`npm run build` produces `dist/` with the page and its bundled brand assets. `npm run deploy` builds and publishes it to the production Cloudflare Pages project `dejavu-blue`. Authenticate with `npx wrangler login` first.

The site uses Cloudflare Pages Direct Upload. Upload `dist/` through the dashboard or run the deploy command above. The custom domain [dejavu.blue](https://dejavu.blue) is managed in the project's Custom domains settings. Pull requests do not deploy automatically.

## Set up your own Déjà Vu

The intended setup is agent-led: give your agent this repository URL and have it follow the Markdown guides. You should not need to write code to get started.

**Setup guides are coming soon.** Katka will add them in a pull request. We'll review the instructions and try them from scratch before marking setup ready.

When the guides are ready, tell your agent:

> Read https://github.com/matuspavliscak/dejavu and help me set up my own Déjà Vu. Follow the setup guides, tell me what accounts or devices I need, and verify that it works. Report any missing instruction or failed step.

The commands in the Landing page section maintain the website. Personal Déjà Vu setup will have its own guide.

## Status

Hackathon project in progress. The landing page contains an interactive sample story. Smart glasses capture, contact search, and message sending describe the intended product; the website does not record conversations or send messages.
