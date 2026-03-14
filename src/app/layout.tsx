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

  const podcastTracks: PodcastTrack[] = source
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
          <GlobalPodcastProvider tracks={podcastTracks}>
            {children}
          </GlobalPodcastProvider>
        </RootProvider>
      </body>
    </html>
  );
}
