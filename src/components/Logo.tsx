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
        <rect width="32" height="32" fill="#0a0a0a" rx="6" />

        <path
          d="M16 6L23.8564 10.5V19.5L16 24L8.14359 19.5V10.5L16 6Z"
          fill="url(#gradient)"
          stroke="#5b4cff"
          strokeWidth="1.5"
        />

        <defs>
          <linearGradient
            id="gradient"
            x1="8"
            y1="6"
            x2="23"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#5b4cff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <text
          x="16"
          y="20.5"
          fontFamily="monospace"
          fontSize="14"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
        >
          D
        </text>
      </svg>

      {/* devdocs text with gradient on "docs" */}
      <span className="font-bold text-base tracking-tight">
        <span className="text-foreground">dev</span>
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#5b4cff] to-[#00d2ff]">
          docs
        </span>
      </span>
    </div>
  );
}
