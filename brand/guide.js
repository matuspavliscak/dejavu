const status = document.querySelector('#copy-status');
for (const swatch of document.querySelectorAll('[data-hex]')) {
  swatch.addEventListener('click', async () => {
    const hex = swatch.dataset.hex;
    try {
      await navigator.clipboard.writeText(hex);
      status.textContent = `Copied ${hex}`;
    } catch {
      status.textContent = `Copy this value: ${hex}`;
    }
  });
}

const css = getComputedStyle(document.documentElement);
const luminance = hex => {
  const [r, g, b] = hex.replace('#', '').match(/../g).map(x => parseInt(x, 16) / 255)
    .map(x => x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4);
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
};
for (const target of document.querySelectorAll('[data-contrast]')) {
  const [a, b] = target.dataset.contrast.split(',').map(name => luminance(css.getPropertyValue(`--dv-color-${name}`).trim())).sort((x, y) => y - x);
  target.textContent = `${((a + 0.05) / (b + 0.05)).toFixed(2)}:1`;
}
