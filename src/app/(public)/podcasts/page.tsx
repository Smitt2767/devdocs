import { getFrontendSections } from "@/lib/getFrontendSections";
import { PodcastPageClient } from "@/components/podcasts/PodcastPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcasts — FrontCore",
  description:
    "All frontend engineering episodes as a playlist. Listen, favorite, and pick up where you left off.",
};

export default async function PodcastsPage() {
  const sections = await getFrontendSections();
  return <PodcastPageClient sections={sections} />;
}
