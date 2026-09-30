# Déjà Vu brand library

The two blue curves echo each other: a familiar face, a conversation picked up again. The current artwork lives in [the SVG master](source/logo-master.svg). [The original concept](source/approved-concept.png) records the shape before the palette changed to blue.

Open [index.html](index.html) in a browser for the visual reference.

## Files

| Need | Use |
| --- | --- |
| Logo on a light surface | [Primary SVG](logos/dejavu-primary.svg) · [PNG](logos/dejavu-primary.png) |
| Logo on a dark surface | [Reverse SVG](logos/dejavu-reverse.svg) · [PNG](logos/dejavu-reverse.png) |
| One-color reproduction | [Ink SVG](logos/dejavu-ink.svg) · [Ivory SVG](logos/dejavu-ivory.svg) |
| Ready-made background | [Ivory PNG](logos/dejavu-primary-on-ivory.png) · [Ink PNG](logos/dejavu-reverse-on-ink.png) |
| Symbol only | [Blue SVG](logos/dejavu-mark-blue.svg) · [Ink SVG](logos/dejavu-mark-ink.svg) · [Ivory SVG](logos/dejavu-mark-ivory.svg) |
| Wordmark only | [Ink SVG](logos/dejavu-wordmark-ink.svg) · [Ivory SVG](logos/dejavu-wordmark-ivory.svg) |
| App icon | [1024px PNG](icons/app-icon.png) · [Dark PNG](icons/app-icon-dark.png) |
| Browser and home screen | [SVG favicon](icons/favicon.svg) · [ICO](icons/favicon.ico) · [Apple touch icon](icons/apple-touch-icon.png) · [192px](icons/icon-192.png) · [512px](icons/icon-512.png) |
| Pitch and social sharing | [1200 × 630 PNG](social/social-card.png) · [SVG](social/social-card.svg) |
| App styling | [CSS variables](tokens.css) · [JSON tokens](tokens.json) |

Logo SVGs use paths, so they do not need an installed font. PNG lockups have transparent backgrounds unless the filename names a background. App icons are square; let the platform apply its own corner mask. The social SVG uses Arial for the tagline; use its PNG for a fixed rendering.

## Color

| Color | Hex | Role |
| --- | --- | --- |
| Blue | `#245FEA` | Symbol, links, primary action backgrounds |
| Ink | `#1C2225` | Text and dark surfaces |
| Ivory | `#FCF9F1` | Main background, text on ink or blue |
| Paper | `#FFFFFF` | Cards and inputs |
| Muted | `#626767` | Secondary text on ivory or paper |
| Line | `#E8E4DC` | Decorative dividers |
| Sky | `#A9C4FF` | Symbol and accents on ink |

Use ivory text on blue buttons. Use blue links on ivory or paper, and sky accents on ink. See the visual reference for measured text contrast pairs.

## Typography

Use **Manrope**: 400 for body text, 600 for labels, and 700 for headings. Body text starts at 16px with 1.6 line height. Keep headings short, with 1.1 line height. The logo lettering is outlined artwork; use the supplied logo files.

The variable font includes Latin Extended characters for Czech and Slovak names. It is bundled in [fonts/](fonts/) under the [SIL Open Font License](fonts/OFL.txt), with its [upstream source](https://github.com/google/fonts/tree/main/ofl/manrope).

## Logo use

- Keep at least one quarter of the symbol's height clear around the visible artwork. The SVG canvas is not a substitute for layout spacing.
- Use the full logo at 160px wide or larger. Use the symbol below that size, with a minimum of 24px for general UI use. The supplied 16px favicon is a browser-specific export.
- Preserve the proportions, the spacing, and both accents in **Déjà Vu**.
- Place the primary logo on ivory or white, and the reverse logo on ink.
- Keep the artwork flat. Avoid stretching, rotating, adding shadows, or placing it over a busy photograph.

## Voice

**Tagline:** You've met before. Now you'll remember.

**Domain:** [dejavu.blue](https://dejavu.blue).

Speak in short, human sentences. Mention the detail that helps someone reconnect: “You met at the hackathon. Ask about skateboarding.” Label sample contact cards as demo content. Describe product capabilities according to what the current build supports.

## Use in an app

```html
<link rel="stylesheet" href="/brand/tokens.css">
<link rel="icon" href="/brand/icons/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/brand/icons/favicon.ico" sizes="16x16 32x32">
<link rel="apple-touch-icon" href="/brand/icons/apple-touch-icon.png">
<img src="/brand/logos/dejavu-primary.svg" alt="Déjà Vu" width="200">
```

Copy `brand/` into the app's public directory, or adjust the URLs to its asset layout. Keep the font's license with the font file. Apply `var(--dv-font-family)` to the app's body; the token stylesheet defines variables and the font face without styling page elements.

## Rebuild exports

Node.js 20.9 or newer is required only to rebuild. Viewing and using the files needs no installation.

```sh
cd brand
npm ci
npm run build
```

Edit `source/logo-master.svg` for artwork and `tokens.json` for the palette and UI values. Rebuild the variants, PNGs, icons, social card, and CSS together. Keep the original concept image unchanged as a reference.
