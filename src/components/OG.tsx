import React from "react";
import { colors } from "@/lib/colors";

export function OgLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
          fill="url(#og-gradient)"
          stroke={colors.brand}
          strokeWidth="1.5"
        />

        <defs>
          <linearGradient
            id="og-gradient"
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

      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.6rem",
          letterSpacing: "-0.025em",
          display: "flex",
        }}
      >
        <span style={{ color: colors.foreground }}>dev</span>
        <span
          style={{
            backgroundImage: `linear-gradient(to right, ${colors.brand}, ${colors.accent})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          docs
        </span>
      </span>
    </div>
  );
}

export function OgTitle({ children }: { children: React.ReactNode }) {
  return <span style={{ color: colors.brand }}>{children}</span>;
}

export function OgDescription({ children }: { children: React.ReactNode }) {
  return <span style={{ color: colors.muted }}>{children}</span>;
}
