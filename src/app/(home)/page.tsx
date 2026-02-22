import { Logo } from "@/components/Logo";
import { getFrontendSections } from "@/lib/getFrontendSections";
import { gitConfig } from "@/lib/layout.shared";
import { Metadata } from "next";
import Link from "next/link";

const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "devdocs - Frontend Engineering Handbook",
  description:
    "A curated reference of frontend engineering concepts. Built to understand the why, not just the how.",
  openGraph: {
    title: "devdocs - Frontend Engineering Handbook",
    description:
      "A curated reference of frontend engineering concepts. Built to understand the why, not just the how.",
    url: baseUrl,
    siteName: "devdocs",
    images: [
      {
        url: `${baseUrl}/og/home/image.png`,
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
    images: [`${baseUrl}/og/home/image.png`],
  },
};

export default async function HomePage() {
  const sections = await getFrontendSections();
  const totalArticles = sections.reduce((sum, s) => sum + s.count, 0);

  return (
    <main className="min-h-screen bg-[#121212] text-white font-mono">
      {/* Sticky nav with glacier (frosted glass) effect */}
      <header className="sticky top-0 z-50 w-full border-b border-white/6 bg-[#121212]/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="flex items-center gap-6">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#a0a0a0] hover:text-[#ebebeb] transition-colors tracking-wide"
            >
              GitHub
            </Link>
            <Link
              href="/docs/frontend"
              className="text-xs text-[#a0a0a0] hover:text-[#ebebeb] transition-colors tracking-wide"
            >
              browse →
            </Link>
          </div>
        </div>
      </header>

      <div className="relative max-w-3xl mx-auto px-6 py-6 md:py-24">
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
