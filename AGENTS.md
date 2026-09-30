# Déjà Vu

Read `README.md` first. Notion is the personal CRM interface; this repository hosts the landing page and the planned agent setup guides.

## Helping someone set up Déjà Vu

The product is intended to be set up by an agent following Markdown guides, without the user writing code. The setup guides are not available yet. Do not treat the landing page's build or deployment commands as product setup instructions.

When guides are added, follow them, identify prerequisites, and verify the documented outcome. Report missing instructions or failed steps. Do not invent an installation process or claim setup works without trying it.

## Repository changes

Make changes on a branch and open a pull request. Do not push directly to `main`.

For landing page changes, run `npm run build` and check the affected layout or interactions in a browser. The website is in `site/`; `brand/` contains the shared logo and design assets.
