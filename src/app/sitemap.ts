import { type MetadataRoute } from "next";
import { source } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];

  const pages = source.getPages();

  for (const page of pages) {
    routes.push({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
    });
  }

  return routes;
}
