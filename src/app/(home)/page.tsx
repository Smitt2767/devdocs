import { Logo } from "@/components/Logo";
import { getFrontendSections } from "@/lib/getFrontendSections";
import { gitConfig } from "@/lib/layout.shared";
import { Metadata } from "next";
import Link from "next/link";

const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "FrontCore - Frontend Engineering Handbook",
  description:
    "A curated reference of frontend engineering concepts. Built to understand the why, not just the how.",
  openGraph: {
    title: "FrontCore - Frontend Engineering Handbook",
    description:
      "A curated reference of frontend engineering concepts. Built to understand the why, not just the how.",
    url: baseUrl,
    siteName: "FrontCore",
    images: [
      {
        url: `${baseUrl}/og/home/image.png`,
        width: 1200,
        height: 630,
        alt: "FrontCore - Frontend Engineering Handbook",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FrontCore - Frontend Engineering Handbook",
    description:
      "A curated reference of frontend engineering concepts. Built to understand the why, not just the how.",
    images: [`${baseUrl}/og/home/image.png`],
  },
};

export default async function HomePage() {
  const sections = await getFrontendSections();
  const totalArticles = sections.reduce((sum, s) => sum + s.count, 0);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-white/6 bg-background/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <Logo />
          <div className="flex items-center gap-6">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-foreground transition-colors tracking-wide"
            >
              GitHub
            </Link>
            <Link
              href="/docs/frontend"
              className="text-xs text-muted hover:text-foreground transition-colors tracking-wide"
            >
              browse →
            </Link>
          </div>
        </div>
      </header>

      <div className="relative max-w-3xl mx-auto px-6 py-6 md:py-24">
        <section className="mb-20">
          <p className="text-[10px] text-subtle tracking-[0.3em] uppercase mb-6">
            Frontend Engineering
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-foreground">
            The why behind
            <br />
            <span className="text-subtle">the how.</span>
          </h1>
          <p className="text-muted text-sm leading-relaxed max-w-sm">
            {sections.length} categories &middot; {totalArticles} articles. Deep
            references for frontend architecture, performance, and system
            design.
          </p>
        </section>

        <section>
          <div className="grid gap-4">
            {sections.map((section) => (
              <Link
                key={section.slug}
                href={`/docs/frontend/${section.slug}`}
                className="group relative block rounded-lg border border-white/6 bg-surface/30 p-6 transition-all hover:border-white/12 hover:bg-surface/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-base font-semibold text-foreground group-hover:text-brand transition-colors">
                      {section.label}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span>{section.count} articles</span>
                    <svg
                      className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
