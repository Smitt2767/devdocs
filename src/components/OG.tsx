import React from "react";
import { colors } from "@/lib/colors";

export function OgLogo() {
  return (
    <div
      style={{
        display: "flex",
        fontWeight: "bold",
        fontSize: "2.4rem",
        letterSpacing: "-0.025em",
      }}
    >
      <div style={{ color: colors.foreground }}>dev</div>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, ${colors.brand}, ${colors.accent})`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        docs
      </div>
    </div>
  );
}

export function OgTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ color: colors.brand, fontSize: "4.4rem" }}>{children}</div>
  );
}

export function OgDescription({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ color: colors.muted, fontSize: "2.4rem" }}>{children}</div>
  );
}
