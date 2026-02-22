import Link from "next/link";

const sections = [
  {
    slug: "rendering-and-browser-pipeline",
    label: "Rendering & Browser Pipeline",
    count: 15,
  },
  {
    slug: "component-and-ui-architecture",
    label: "Component & UI Architecture",
    count: 7,
  },
  {
    slug: "state-management-and-data-patterns",
    label: "State Management & Data Patterns",
    count: 9,
  },
  {
    slug: "javascript-runtime-and-async",
    label: "JavaScript Runtime & Async",
    count: 5,
  },
  {
    slug: "bundling-and-code-delivery",
    label: "Bundling & Code Delivery",
    count: 7,
  },
  { slug: "caching-and-storage", label: "Caching & Storage", count: 7 },
  {
    slug: "networking-and-protocols",
    label: "Networking & Protocols",
    count: 6,
  },
  { slug: "security", label: "Security", count: 6 },
  { slug: "css-and-layout", label: "CSS & Layout", count: 6 },
  {
    slug: "browser-observation-apis",
    label: "Browser Observation APIs",
    count: 4,
  },
  {
    slug: "performance-and-core-web-vitals",
    label: "Performance & Core Web Vitals",
    count: 7,
  },
  {
    slug: "memory-and-garbage-collection",
    label: "Memory & Garbage Collection",
    count: 3,
  },
  { slug: "concurrency-and-workers", label: "Concurrency & Workers", count: 1 },
  { slug: "accessibility", label: "Accessibility", count: 6 },
  { slug: "devx-and-delivery", label: "DevX & Delivery", count: 5 },
  {
    slug: "architecture-and-decision-making",
    label: "Architecture & Decision Making",
    count: 5,
  },
];

const totalArticles = sections.reduce((sum, s) => sum + s.count, 0);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white font-mono">
      <div className="relative max-w-3xl mx-auto px-6 py-6 md:py-28">
        {/* Nav */}
        <nav className="flex items-center justify-between mb-24">
          {/* #e0e0e0 on #080808 = ~14:1 contrast ✓ */}
          <span className="text-xs text-[#e0e0e0] tracking-[0.2em] uppercase">
            DEVDOCS
          </span>
          {/* #a0a0a0 on #080808 = ~7.5:1 contrast ✓ */}
          <Link
            href="/docs/frontend"
            className="text-xs text-[#a0a0a0] hover:text-[#e0e0e0] transition-colors tracking-wide"
          >
            browse →
          </Link>
        </nav>

        {/* Hero */}
        <section className="mb-20">
          {/* #888 on #080808 = ~5.7:1 ✓ AA */}
          <p className="text-[10px] text-[#888] tracking-[0.3em] uppercase mb-6">
            Frontend Engineering
          </p>
          {/* #e8e8e8 on #080808 = ~15:1 ✓ */}
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-[#e8e8e8]">
            The why behind
            <br />
            {/* #666 on #080808 = ~3.6:1 — large text (≥18pt bold) passes AA at 3:1 ✓ */}
            <span className="text-[#666]">the how.</span>
          </h1>
          {/* #aaa on #080808 = ~8.5:1 ✓ */}
          <p className="text-[#aaa] text-sm leading-relaxed max-w-sm">
            {sections.length} categories &middot; {totalArticles} articles. A
            personal reference built to understand browser internals, rendering
            pipelines, and system-level thinking — not just copy patterns.
          </p>
        </section>

        {/* Divider */}
        <div className="border-t border-[#1e1e1e] mb-12" />

        {/* Section label */}
        {/* #777 on #080808 = ~4.6:1 ✓ AA */}
        <p className="text-[10px] text-[#777] tracking-[0.25em] uppercase mb-6">
          Frontend
        </p>

        {/* Section list */}
        <ul className="space-y-0 divide-y divide-[#161616]">
          {sections.map((section, i) => (
            <li key={section.slug}>
              <Link
                href={`/docs/frontend/${section.slug}`}
                className="group flex items-center justify-between py-3.5 hover:pl-2 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  {/*
                    Row numbers are purely decorative (screen readers skip
                    sequential numbering when aria-hidden). Kept dim intentionally.
                  */}
                  <span
                    className="text-[#444] text-[10px] w-5 tabular-nums select-none"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* #999 on #080808 = ~6.5:1 ✓ AA | hover → #f0f0f0 = ~19:1 ✓ */}
                  <span className="text-[#999] text-sm group-hover:text-[#f0f0f0] transition-colors duration-150">
                    {section.label}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* #777 on #080808 = ~4.6:1 ✓ AA */}
                  <span className="text-[#777] text-[10px] tabular-nums group-hover:text-[#aaa] transition-colors">
                    {section.count}
                  </span>
                  {/* Arrow — decorative, paired with visible label text */}
                  <span
                    className="text-[#555] text-xs group-hover:text-[#888] transition-colors"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <footer className="border-t border-[#1e1e1e] mt-20 pt-8 flex items-center justify-between">
          {/* #777 on #080808 = ~4.6:1 ✓ AA */}
          <span className="text-[#777] text-[10px] tracking-[0.2em] uppercase">
            Always learning
          </span>
          <span
            className="text-[#555] text-[10px] font-mono"
            aria-hidden="true"
          >
            {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </main>
  );
}
