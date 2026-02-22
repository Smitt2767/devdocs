import type { MetadataRoute } from "next";
import { env } from "@/env";

export default function robots(): MetadataRoute.Robots {
  // Block all crawlers on every environment except production.
  // This prevents dev/local builds from being indexed if ever exposed publicly.
  if (env.NEXT_PUBLIC_ENVIRONMENT !== "prod") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/og/", "/llms.mdx/", "/llms-full.txt/"],
    },
    sitemap: `${env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
