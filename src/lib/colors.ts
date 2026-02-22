/**
 * Design token constants — raw hex values.
 *
 * These are the single source of truth for every color in the app.
 *
 * Use these when Tailwind utility classes or CSS variables are NOT available:
 *   - Next.js ImageResponse / OG image routes (Satori renders to PNG, no CSS)
 *   - SVG fill / stroke / stopColor attributes
 *   - JSON config files that accept color strings (e.g. web manifest — keep in sync manually)
 *
 * In every other context, prefer the Tailwind token classes defined via
 * @theme in global.css (bg-background, text-muted, border-border, etc.)
 */

export const colors = {
  // --- Brand ---
  brand: "#5b4cff", // indigo/purple — primary brand, stroke, OG title
  accent: "#00d2ff", // cyan — gradient end, secondary brand

  // --- Surfaces ---
  background: "#121212", // page background
  logoBg: "#0a0a0a", // SVG logo rect — slightly darker than background
  surface: "#181818", // slightly raised surface (cards)
  surfaceHover: "#1e1e1e", // card / row hover state
  overlay: "#222222", // modals, dropdowns, tooltips

  // --- Borders ---
  border: "#1e1e1e", // default border / divider
  borderSubtle: "#161616", // very faint rule, barely visible

  // --- Text ---
  foreground: "#ffffff", // primary text
  muted: "#c0c0c0", // secondary / readable dimmed text
  subtle: "#888888", // tertiary / decorative text
} as const;

export type ColorKey = keyof typeof colors;
