import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // OG image routes and LLM text routes are internal infrastructure —
      // no value in crawlers indexing them
      disallow: ["/og/", "/llms.mdx/", "/llms-full.txt/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
