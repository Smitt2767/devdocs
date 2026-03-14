"use client";

import {
  AudioPlayerButton,
  useAudioPlayer,
} from "@/components/ui/audio-player";
import type { PodcastTrack } from "@/lib/podcast-types";
import type { Section } from "@/lib/getFrontendSections";
import { Heart } from "lucide-react";
import Link from "next/link";

function TrackRow({
  track,
  isFavorite,
  onToggleFavorite,
}: {
  track: PodcastTrack;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}) {
  const player = useAudioPlayer<PodcastTrack>();
  const isActive = player.isItemActive(track.id);
  const isLoading = isActive && player.isBuffering && player.isPlaying;
  const item = { id: track.id, src: track.src, data: track };

  return (
    <li
      className={`group flex items-center gap-3 px-2 py-3.5 transition-all duration-200 hover:bg-surface-hover hover:pl-4 ${
        isActive ? "bg-surface pl-4" : ""
      }`}
    >
      <AudioPlayerButton
        item={item}
        variant="outline"
        size="icon"
        className="shrink-0 rounded-full size-8 cursor-pointer"
      />
      <Link
        href={track.url}
        className={`flex-1 min-w-0 text-sm truncate transition-colors cursor-pointer ${
          isActive
            ? "text-foreground font-medium"
            : "text-muted group-hover:text-foreground"
        } ${isLoading ? "animate-pulse" : ""}`}
      >
        {track.title}
      </Link>
      <button
        onClick={() => onToggleFavorite(track.id)}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className="shrink-0 text-subtle hover:text-foreground transition-colors cursor-pointer"
      >
        <Heart
          className={`size-3.5 ${isFavorite ? "fill-current text-foreground" : ""}`}
        />
      </button>
    </li>
  );
}

export function PodcastList({
  tracks,
  sections,
  favorites,
  onToggleFavorite,
  grouped,
}: {
  tracks: PodcastTrack[];
  sections?: Section[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  grouped?: boolean;
}) {
  if (!grouped) {
    return (
      <ul className="divide-y divide-border">
        {tracks.map((t) => (
          <TrackRow
            key={t.id}
            track={t}
            isFavorite={favorites.includes(t.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </ul>
    );
  }

  // Build a map of category slug → tracks
  const groupMap = tracks.reduce<Record<string, PodcastTrack[]>>((acc, t) => {
    (acc[t.category] ??= []).push(t);
    return acc;
  }, {});

  // Unknown categories (e.g. "general") go first, then sections in home-page order
  const orderedSlugs = sections
    ? [
        ...Object.keys(groupMap).filter(
          (slug) => !sections.find((s) => s.slug === slug),
        ),
        ...sections.map((s) => s.slug).filter((slug) => groupMap[slug]),
      ]
    : Object.keys(groupMap);

  return (
    <>
      {orderedSlugs.map((slug) => {
        const items = groupMap[slug];
        if (!items?.length) return null;
        const section = sections?.find((s) => s.slug === slug);
        const label = section?.label ?? slug.replace(/-/g, " ");

        return (
          <div key={slug} className="mb-8">
            <Link
              href={`/docs/frontend/${slug}`}
              className="group flex items-center justify-between px-2 py-2 mb-1 hover:bg-surface-hover hover:pl-4 transition-all duration-200 cursor-pointer"
            >
              <p className="text-[10px] text-subtle tracking-[0.25em] uppercase group-hover:text-muted transition-colors">
                {label}
              </p>
              <span className="text-subtle text-xs tabular-nums group-hover:text-muted transition-colors">
                {items.length}
              </span>
            </Link>
            <ul className="divide-y divide-border">
              {items.map((t) => (
                <TrackRow
                  key={t.id}
                  track={t}
                  isFavorite={favorites.includes(t.id)}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
