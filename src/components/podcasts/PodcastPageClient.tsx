"use client";

import type { Section } from "@/lib/getFrontendSections";
import { PodcastList } from "./PodcastList";
import { useGlobalPodcast } from "./GlobalPodcastProvider";

export function PodcastPageClient({ sections }: { sections: Section[] }) {
  const { tracks, favorites, toggleFavorite } = useGlobalPodcast();
  const favoriteTracks = tracks.filter((t) => favorites.includes(t.id));

  return (
    <div className="pb-32">
      <div className="mx-auto max-w-3xl px-4 py-6 md:py-24 md:px-6">
        <p className="text-[10px] text-subtle tracking-[0.3em] uppercase mb-6">
          Frontend Engineering
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-foreground">
          Podcasts
        </h1>
        <p className="text-muted text-sm leading-relaxed max-w-sm mb-3">
          Audio overviews for every topic in the handbook. Play straight through
          or jump to any episode.
        </p>
        <p className="text-subtle text-xs tabular-nums mb-12">
          {tracks.length} episodes
        </p>

        {favoriteTracks.length > 0 && (
          <>
            <div className="border-t border-border mb-6" />
            <p className="text-[10px] text-subtle tracking-[0.25em] uppercase mb-4 text-center">
              Favorites
            </p>
            <PodcastList
              tracks={favoriteTracks}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </>
        )}

        <div className="border-t border-border mb-6 mt-12" />
        <p className="text-[10px] text-subtle tracking-[0.25em] uppercase mb-4 text-center">
          All Episodes
        </p>
        <PodcastList
          tracks={tracks}
          sections={sections}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          grouped
        />
      </div>
    </div>
  );
}
