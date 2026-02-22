import { colors } from "@/lib/colors";

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" fill={colors.logoBg} rx="6" />

        <path
          d="M16 6L23.8564 10.5V19.5L16 24L8.14359 19.5V10.5L16 6Z"
          fill="url(#logo-gradient)"
          stroke={colors.brand}
          strokeWidth="1.5"
        />

        <defs>
          {/*
            SVG linearGradient stopColor cannot reliably consume CSS custom
            properties across all browsers, so we pull from colors.ts directly.
            colors.brand === var(--brand), colors.accent === var(--accent).
          */}
          <linearGradient
            id="logo-gradient"
            x1="8"
            y1="6"
            x2="23"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={colors.brand} stopOpacity="0.3" />
            <stop offset="100%" stopColor={colors.accent} stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <text
          x="16"
          y="20.5"
          fontFamily="monospace"
          fontSize="14"
          fontWeight="bold"
          fill={colors.foreground}
          textAnchor="middle"
        >
          D
        </text>
      </svg>

      {/* Tailwind token classes: text-foreground, from-brand, to-accent */}
      <span className="font-bold text-base tracking-tight">
        <span className="text-foreground">dev</span>
        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-accent">
          docs
        </span>
      </span>
    </div>
  );
}
