import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { colors } from "@/lib/colors";
import { cn } from "@/lib/cn";
import { env } from "@/env";
import { source } from "@/lib/source";
import type { PodcastTrack } from "@/lib/podcast-types";
import { GlobalPodcastProvider } from "@/components/podcasts/GlobalPodcastProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getFrontendSections } from "@/lib/getFrontendSections";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrontCore",
  description: "A curated reference of frontend engineering concepts",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
};

export const viewport: Viewport = {
  themeColor: colors.brand,
};

export default async function Layout({ children }: LayoutProps<"/">) {
  const sections = await getFrontendSections();
  const sectionLabels = Object.fromEntries(sections.map((s) => [s.slug, s.label]));

  const unorderedTracks: PodcastTrack[] = source
    .getPages()
    .filter((p) => !!p.data.audio)
    .map((p) => {
      const category = p.slugs[1] ?? "general";
      const rawTitle = p.data.title;
      const title =
        rawTitle === "Overview" && sectionLabels[category]
          ? `${sectionLabels[category]} — Overview`
          : rawTitle;
      return {
        id: p.url,
        src: p.data.audio!,
        title,
        description: p.data.description ?? "",
        url: p.url,
        category,
      };
    });

  // Apply the same ordering as the podcast page: unknown categories first,
  // then sections in meta.json order, matching what PodcastList renders.
  const groupMap = unorderedTracks.reduce<Record<string, PodcastTrack[]>>(
    (acc, t) => {
      (acc[t.category] ??= []).push(t);
      return acc;
    },
    {},
  );
  const sectionSlugs = sections.map((s) => s.slug);
  const orderedSlugs = [
    ...Object.keys(groupMap).filter((slug) => !sectionSlugs.includes(slug)),
    ...sectionSlugs.filter((slug) => groupMap[slug]),
  ];
  const podcastTracks = orderedSlugs.flatMap((slug) => {
    const group = groupMap[slug] ?? [];
    const section = sections.find((s) => s.slug === slug);
    if (!section) return group;
    return [...group].sort((a, b) => {
      // Map track ID back to meta.json page slug ("index" for section overview)
      const toPageSlug = (id: string) =>
        id === `/docs/frontend/${slug}` ? "index" : (id.split("/").pop() ?? "");
      const aIdx = section.pageOrder.indexOf(toPageSlug(a.id));
      const bIdx = section.pageOrder.indexOf(toPageSlug(b.id));
      if (aIdx === -1 && bIdx === -1) return 0;
      if (aIdx === -1) return 1;
      if (bIdx === -1) return -1;
      return aIdx - bIdx;
    });
  });
  return (
    <html
      lang="en"
      className={cn(inter.className, "dark")}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider theme={{ forcedTheme: "dark" }}>
          {env.NEXT_PUBLIC_ENVIRONMENT === "prod" && (
            <>
              <Analytics />
              <SpeedInsights />
            </>
          )}
          <TooltipProvider>
            <GlobalPodcastProvider tracks={podcastTracks}>
              {children}
            </GlobalPodcastProvider>
          </TooltipProvider>
        </RootProvider>
      </body>
    </html>
  );
}
