import Link from "next/link";

const categories = [
  { slug: "rendering", label: "Rendering" },
  { slug: "performance", label: "Performance" },
  { slug: "javascript", label: "JavaScript" },
  { slug: "frameworks", label: "Frameworks" },
  { slug: "state-management", label: "State Management" },
  { slug: "styling", label: "Styling" },
  { slug: "build-tooling", label: "Build Tooling" },
  { slug: "browser-web-apis", label: "Browser & Web APIs" },
  { slug: "accessibility", label: "Accessibility" },
  { slug: "testing", label: "Testing" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-mono overflow-hidden relative">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#5b4cff] opacity-[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#00d2ff] opacity-[0.05] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 text-xs text-[#5b4cff] border border-[#5b4cff]/30 bg-[#5b4cff]/5 rounded-full px-3 py-1 mb-8 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5b4cff] animate-pulse" />
            Personal Engineering Handbook
          </div>

          <h1
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            dev
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b4cff] to-[#00d2ff]">
              docs
            </span>
          </h1>

          <p className="text-[#888] text-lg max-w-md leading-relaxed">
            A curated reference of frontend engineering concepts. Built to
            understand the <span className="text-[#ccc]">why</span>, not just
            the <span className="text-[#ccc]">how</span>.
          </p>
        </div>

        {/* Section cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {/* Frontend Card — Active */}
          <Link href="/docs/frontend" className="group relative block">
            <div className="relative border border-[#222] bg-[#111] rounded-2xl p-8 overflow-hidden transition-all duration-300 group-hover:border-[#5b4cff]/60 group-hover:bg-[#111]/80">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#5b4cff]/10 to-transparent rounded-bl-full" />

              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#5b4cff]/10 border border-[#5b4cff]/20 flex items-center justify-center text-xl">
                  ⬡
                </div>
                <span className="text-xs text-[#5b4cff] border border-[#5b4cff]/30 rounded-full px-2 py-0.5">
                  Available
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight mb-2">
                Frontend
              </h2>
              <p className="text-[#666] text-sm mb-6 leading-relaxed">
                Rendering patterns, performance, frameworks, JavaScript
                internals, and more.
              </p>

              {/* Topics preview */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {categories.slice(0, 5).map((c) => (
                  <span
                    key={c.slug}
                    className="text-[10px] font-mono text-[#555] bg-[#1a1a1a] border border-[#222] rounded px-2 py-0.5"
                  >
                    {c.label}
                  </span>
                ))}
                <span className="text-[10px] font-mono text-[#444] bg-[#1a1a1a] border border-[#222] rounded px-2 py-0.5">
                  +{categories.length - 5} more
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-[#5b4cff] group-hover:gap-3 transition-all">
                <span>Browse docs</span>
                <span>→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer line */}
        <div className="border-t border-[#1a1a1a] pt-8 flex items-center justify-between">
          <span className="text-[#333] text-xs tracking-widest uppercase">
            Always learning
          </span>
          <span className="text-[#222] text-xs font-mono">
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </main>
  );
}
