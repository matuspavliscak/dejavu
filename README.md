## Landing page

The site lives in `site/`. Run `npm ci` and `npm run dev` to preview it locally.

`npm run build` produces `dist/` with the page and its bundled brand assets. `npm run deploy` builds and publishes it to the production Cloudflare Pages project `dejavu-blue`. Authenticate with `npx wrangler login` first.

The site uses Cloudflare Pages Direct Upload. Upload `dist/` through the dashboard or run the deploy command above. The custom domain [dejavu.blue](https://dejavu.blue) is managed in the project's Custom domains settings. Pull requests do not deploy automatically.

## Set up your own Déjà Vu

Setup guides are coming to this repository. The landing page links here so visitors can find them when they are added.

## Grok Bot setup

[How to recycle this with Grok Bot](docs/GROK_BOT.md)

## Status

Hackathon project in progress. The landing page contains an interactive sample story. Smart glasses capture, contact search, and message sending describe the intended product; the website does not record conversations or send messages.
