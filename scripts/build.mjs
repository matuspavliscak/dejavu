import { cp, mkdir, rm } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const output = new URL("dist/", root);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(new URL("site/", root), output, { recursive: true });

for (const path of [
  "logos/dejavu-primary.svg",
  "logos/dejavu-reverse.svg",
  "logos/dejavu-mark-blue.svg",
  "icons/favicon.svg",
  "icons/favicon.ico",
  "icons/apple-touch-icon.png",
  "social/social-card.png",
  "fonts/manrope-variable.ttf",
  "fonts/OFL.txt",
]) {
  const destination = new URL(`assets/${path}`, output);
  await mkdir(new URL("./", destination), { recursive: true });
  await cp(new URL(`brand/${path}`, root), destination);
}
console.log("Built landing page in dist/");
