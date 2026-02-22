export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      {/* Hexagon SVG Icon */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        {/* Hexagon with gradient */}
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

      {/* devdocs text with gradient on "docs" */}
      <span className="font-bold text-base tracking-tight">
        <span className="text-foreground">dev</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b4cff] to-[#00d2ff]">
          docs
        </span>
      </span>
    </div>
  );
}
