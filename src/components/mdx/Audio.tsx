"use client";

import { Heart } from "lucide-react";
import {
  AudioPlayerButton,
  useAudioPlayer,
} from "@/components/ui/audio-player";
import { useGlobalPodcast } from "@/components/podcasts/GlobalPodcastProvider";
import type { PodcastTrack } from "@/lib/podcast-types";

type AudioProps = {
  src: string;
  title?: string;
};

export function Audio({ src, title }: AudioProps) {
  const player = useAudioPlayer<PodcastTrack>();
  const { tracks, favorites, toggleFavorite } = useGlobalPodcast();

  const track = tracks.find((t) => t.src === src);
  if (!track) return null;

  const item = { id: track.id, src: track.src, data: track };
  const isActive = player.isItemActive(track.id);
  const isFavorite = favorites.includes(track.id);
  const isLoading = isActive && player.isBuffering && player.isPlaying;

  return (
    <div className="my-6 flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3">
      <AudioPlayerButton
        item={item}
        variant="outline"
        size="icon"
        className="shrink-0 rounded-full cursor-pointer"
      />
      <span
        className={`min-w-0 flex-1 truncate text-sm font-medium transition-colors ${
          isActive ? "text-foreground" : "text-muted"
        } ${isLoading ? "animate-pulse" : ""}`}
      >
        {title ?? track.title}
      </span>
      <button
        onClick={() => toggleFavorite(track.id)}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className="shrink-0 text-subtle hover:text-foreground transition-colors cursor-pointer"
      >
        <Heart
          className={`size-4 ${isFavorite ? "fill-current text-foreground" : ""}`}
        />
      </button>
    </div>
  );
}
