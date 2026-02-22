import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { colors } from "@/lib/colors";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "devdocs",
  description: "A curated reference of frontend engineering concepts",
  // themeColor matches site.webmanifest theme_color (colors.brand)
  // Controls the browser address bar / tab strip color on mobile
  themeColor: colors.brand,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <Analytics />
          <SpeedInsights />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
