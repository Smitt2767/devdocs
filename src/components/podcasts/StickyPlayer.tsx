"use client";

import {
  AudioPlayerButton,
  AudioPlayerProgress,
  AudioPlayerTime,
  AudioPlayerDuration,
  AudioPlayerSpeed,
  useAudioPlayer,
} from "@/components/ui/audio-player";
import { SkipBack, SkipForward, Heart, X } from "lucide-react";
import Link from "next/link";
import type { PodcastTrack } from "@/lib/podcast-types";
import { useGlobalPodcast } from "./GlobalPodcastProvider";

export function StickyPlayer() {
  const player = useAudioPlayer<PodcastTrack>();
  const { tracks, favorites, toggleFavorite } = useGlobalPodcast();
  const active = player.activeItem;

  if (!active) return null;

  const track = active.data as PodcastTrack;
  const idx = tracks.findIndex((t) => t.id === active.id);
  const prev = idx > 0 ? tracks[idx - 1] : null;
  const next = idx < tracks.length - 1 ? tracks[idx + 1] : null;
  const isFavorite = favorites.includes(active.id as string);
  const isLoading = player.isBuffering && player.isPlaying;

  const skip = (seconds: number) => {
    const audio = player.ref.current;
    if (!audio) return;
    audio.currentTime = Math.max(
      0,
      Math.min(audio.currentTime + seconds, audio.duration || 0),
    );
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/80 backdrop-blur-3xl">
      <div className="mx-auto max-w-3xl px-4 py-3 md:px-6 flex flex-col gap-2">
        {/* Row 1: Title + meta controls */}
        <div className="flex items-center gap-3">
          <Link
            href={track.url}
            className={`flex-1 min-w-0 text-sm font-medium text-foreground truncate hover:text-muted transition-colors cursor-pointer ${isLoading ? "animate-pulse" : ""}`}
          >
            {track.title}
          </Link>
          <button
            onClick={() => toggleFavorite(active.id as string)}
            aria-label={isFavorite ? "Remove favorite" : "Add favorite"}
            className="shrink-0 text-subtle hover:text-foreground transition-colors cursor-pointer"
          >
            <Heart
              className={`size-4 ${isFavorite ? "fill-current text-foreground" : ""}`}
            />
          </button>
          <AudioPlayerSpeed
            variant="ghost"
            size="icon"
            className="shrink-0 cursor-pointer"
          />
          <span className="shrink-0 font-mono text-xs text-subtle tabular-nums">
            <AudioPlayerTime /> / <AudioPlayerDuration />
          </span>
          <button
            onClick={() => {
              player.pause();
              player.setActiveItem(null);
            }}
            aria-label="Close player"
            className="shrink-0 text-subtle hover:text-foreground transition-colors cursor-pointer w-7 h-7 flex items-center justify-center"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Row 2: Playback controls + progress */}
        <div className="flex items-center gap-2">
          <button
            disabled={!prev || isLoading}
            onClick={() =>
              prev && player.play({ id: prev.id, src: prev.src, data: prev })
            }
            aria-label="Previous track"
            className="shrink-0 text-subtle hover:text-foreground transition-colors disabled:opacity-30 cursor-pointer"
          >
            <SkipBack className="size-4" />
          </button>
          <button
            disabled={isLoading}
            onClick={() => skip(-15)}
            aria-label="Rewind 15 seconds"
            className="shrink-0 text-subtle hover:text-foreground transition-colors disabled:opacity-30 text-[10px] font-mono tabular-nums w-8 h-7 flex items-center justify-center cursor-pointer"
          >
            -15
          </button>
          <AudioPlayerButton
            variant="outline"
            size="icon"
            className="shrink-0 rounded-full cursor-pointer"
          />
          <button
            disabled={isLoading}
            onClick={() => skip(15)}
            aria-label="Forward 15 seconds"
            className="shrink-0 text-subtle hover:text-foreground transition-colors disabled:opacity-30 text-[10px] font-mono tabular-nums w-8 h-7 flex items-center justify-center cursor-pointer"
          >
            +15
          </button>
          <button
            disabled={!next || isLoading}
            onClick={() =>
              next && player.play({ id: next.id, src: next.src, data: next })
            }
            aria-label="Next track"
            className="shrink-0 text-subtle hover:text-foreground transition-colors disabled:opacity-30 cursor-pointer"
          >
            <SkipForward className="size-4" />
          </button>
          <AudioPlayerProgress className="flex-1 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
