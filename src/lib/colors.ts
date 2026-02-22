export const colors = {
  brand: "#5b4cff",
  accent: "#00d2ff",

  background: "#121212",
  logoBg: "#0a0a0a",
  surface: "#181818",
  surfaceHover: "#1e1e1e",
  overlay: "#222222",

  border: "#1e1e1e",
  borderSubtle: "#161616",

  foreground: "#ffffff",
  muted: "#c0c0c0",
  subtle: "#888888",
} as const;

export type ColorKey = keyof typeof colors;
