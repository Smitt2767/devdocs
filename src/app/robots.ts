import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/og/", "/llms.mdx/", "/llms-full.txt/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
