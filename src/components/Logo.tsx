"use client";

import { useId } from "react";

export function Logo() {
  const id = useId();

  return (
    <div className="flex items-center gap-2.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="12 12 40 48"
        fill="none"
        className="w-8 h-8"
      >
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              className="[stop-color:var(--brand)] [stop-opacity:1]"
            />
            <stop
              offset="100%"
              className="[stop-color:var(--brand-light)] [stop-opacity:1]"
            />
          </linearGradient>
        </defs>

        {/* Top face */}
        <path
          d="M32 12 L52 24 L32 36 L12 24 Z"
          fill={`url(#${id})`}
          opacity="0.9"
        />

        {/* Left face */}
        <path
          d="M12 24 L12 48 L32 60 L32 36 Z"
          fill={`url(#${id})`}
          opacity="0.6"
        />

        {/* Right face */}
        <path
          d="M32 36 L32 60 L52 48 L52 24 Z"
          fill={`url(#${id})`}
          opacity="0.75"
        />
      </svg>

      <span className="font-bold text-base select-none">
        <span className="text-foreground">Front</span>
        <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-brand-light">
          Core
        </span>
      </span>
    </div>
  );
}
