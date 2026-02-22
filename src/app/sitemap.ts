import { type MetadataRoute } from "next";
import { source } from "@/lib/source";
import { env } from "@/env";

export default function sitemap(): MetadataRoute.Sitemap {
  // Return an empty sitemap on non-prod environments.
  // Paired with robots.ts disallowing all crawlers, this ensures
  // dev and local builds are never indexed.
  if (env.NEXT_PUBLIC_ENVIRONMENT !== "prod") {
    return [];
  }

  const routes: MetadataRoute.Sitemap = [
    {
      url: env.NEXT_PUBLIC_SITE_URL,
      lastModified: new Date(),
    },
  ];

  const pages = source.getPages();

  for (const page of pages) {
    routes.push({
      url: `${env.NEXT_PUBLIC_SITE_URL}${page.url}`,
      lastModified: new Date(),
    });
  }

  return routes;
}
