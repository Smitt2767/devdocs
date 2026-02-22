import { Logo } from "@/components/Logo";
import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "devdocs - Frontend Engineering Handbook",
  description:
    "A curated reference of frontend engineering concepts. Built to understand the why, not just the how.",
  openGraph: {
    title: "devdocs - Frontend Engineering Handbook",
    description:
      "A curated reference of frontend engineering concepts. Built to understand the why, not just the how.",
    url: "https://yoursite.com", // Replace with your actual domain
    siteName: "devdocs",
    images: [
      {
        url: "/og/home/image.png",
        width: 1200,
        height: 630,
        alt: "devdocs - Frontend Engineering Handbook",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "devdocs - Frontend Engineering Handbook",
    description:
      "A curated reference of frontend engineering concepts. Built to understand the why, not just the how.",
    images: ["/og/home/image.png"],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white font-mono">
      <div className="relative max-w-3xl mx-auto px-6 py-6 md:py-28">
        {/* Nav */}
        <nav className="flex items-center justify-between mb-24">
          <Logo />
          <Link
            href="/docs/frontend"
            className="text-xs text-[#a0a0a0] hover:text-[#ebebeb] transition-colors tracking-wide"
          >
            browse →
          </Link>
        </nav>

        {/* Hero */}
        <section className="mb-20">
          <p className="text-[10px] text-[#888] tracking-[0.3em] uppercase mb-6">
            Frontend Engineering
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-[#e8e8e8]">
            The why behind
            <br />
            <span className="text-[#666]">the how.</span>
          </h1>
          <p className="text-[#aaa] text-sm leading-relaxed max-w-sm">
            {sections.length} categories &middot; {totalArticles} articles. A
            personal reference built to understand browser internals, rendering
            pipelines, and system-level thinking — not just copy patterns.
          </p>
        </section>

        <div className="border-t border-[#1e1e1e] mb-12" />

        <p className="text-[10px] text-[#777] tracking-[0.25em] uppercase mb-6">
          Frontend
        </p>

        <ul className="space-y-0 divide-y divide-[#161616]">
          {sections.map((section, i) => (
            <li key={section.slug}>
              <Link
                href={`/docs/frontend/${section.slug}`}
                className="group flex items-center justify-between py-3.5 hover:pl-2 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-[#444] text-[10px] w-5 tabular-nums select-none"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#999] text-sm group-hover:text-[#f0f0f0] transition-colors duration-150">
                    {section.label}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[#777] text-[10px] tabular-nums group-hover:text-[#aaa] transition-colors">
                    {section.count}
                  </span>
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
