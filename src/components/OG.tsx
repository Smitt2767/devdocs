import React from "react";

export function OgLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {/* Hexagon SVG Icon */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="2"
            y1="2"
            x2="22"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#5b4cff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d="M12 2L21.66 7.5V16.5L12 22L2.34 16.5V7.5L12 2Z"
          fill="url(#logo-gradient)"
          stroke="#5b4cff"
          strokeWidth="1.5"
        />
      </svg>

      {/* devdocs text */}
      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.6rem",
          letterSpacing: "-0.025em",
        }}
      >
        <span style={{ color: "#ffffff" }}>dev</span>
        <span
          style={{
            backgroundImage: "linear-gradient(to right, #5b4cff, #00d2ff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            display: "block",
          }}
        >
          docs
        </span>
      </span>
    </div>
  );
}

export function OgTitle({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#5b4cff" }}>{children}</span>;
}

export function OgDescription({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        color: "#ebebeb",
      }}
    >
      {children}
    </span>
  );
}
