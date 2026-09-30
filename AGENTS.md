# Déjà Vu

Read `README.md`, then follow [docs/grok-bot.md](docs/grok-bot.md) for personal CRM setup. Notion is the interface and Pocket supplies the recordings.

## Helping someone set up Déjà Vu

The product is intended to be set up by an agent following Markdown guides, without the user writing code. Use [docs/grok-bot.md](docs/grok-bot.md) as the setup entry point. Do not treat the landing page's build or deployment commands as product setup instructions.

Follow the guide, identify missing prerequisites, and verify one recording creates a dated entry on the correct Notion page while preserving previous entries. Report missing instructions or failed steps. Do not invent an installation process or claim setup works without trying it.

## Repository changes

Make changes on a branch and open a pull request. Do not push directly to `main`.

For landing page changes, run `npm run build` and check the affected layout or interactions in a browser. The website is in `site/`; `brand/` contains the shared logo and design assets.
