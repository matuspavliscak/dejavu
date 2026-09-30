<p align="center">
  <img src="brand/logos/dejavu-primary.png" alt="Déjà Vu" width="720">
</p>

<p align="center"><strong>You've met before. Now you'll remember.</strong></p>

<p align="center"><a href="https://dejavu.blue">dejavu.blue</a></p>

Déjà Vu is a personal CRM for the people you meet at hackathons, conferences, and parties. We're building it to turn conversations into memories you can find again, with help from Meta smart glasses.

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

`npm run build` produces `dist/` with the page and its bundled brand assets. `npm run deploy` builds and publishes it to Cloudflare Workers at [dejavu.blue](https://dejavu.blue). Authenticate with `npx wrangler login` first.

Cloudflare Git builds can use `npm run build` as the build command and `npx wrangler deploy` as the deploy command. The `wrangler.jsonc` file configures static hosting and the custom domain. The same `dist/` folder can be uploaded through the Cloudflare dashboard.

## Status

Hackathon project in progress. The landing page contains an interactive sample story. Smart glasses capture, contact search, and message sending describe the intended product; the website does not record conversations or send messages.
