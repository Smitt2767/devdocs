"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  AudioPlayerProvider,
  AudioPlayerButton,
  AudioPlayerProgress,
  AudioPlayerTime,
  AudioPlayerDuration,
  AudioPlayerSpeed,
  useAudioPlayer,
} from "@/components/ui/audio-player";
import { useDocsNavigation } from "@/components/contexts/docs-navigation";
type AudioProps = {
  src: string;
  title?: string;
};

export function Audio({ src, title }: AudioProps) {

  return (
    <AudioPlayerProvider>
      <AudioPlayerUI src={src} title={title} />
    </AudioPlayerProvider>
  );
}

function AudioPlayerUI({ src, title }: { src: string; title?: string }) {
  const player = useAudioPlayer();
  const { previous, next } = useDocsNavigation();
  const item = { id: src, src };

  return (
    <div className="my-6 flex flex-col gap-3 rounded-lg border border-border bg-surface p-4">
      {/* Row 1: Play/Pause + Title + Speed + Time */}
      <div className="flex items-center gap-3">
        <AudioPlayerButton
          item={item}
          variant="outline"
          size="icon"
          className="shrink-0 rounded-full"
        />

        <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
          {title ?? "Audio"}
        </span>

        <AudioPlayerSpeed variant="ghost" size="icon" className="shrink-0" />

        <span className="shrink-0 font-mono text-xs tabular-nums text-subtle">
          <AudioPlayerTime /> / <AudioPlayerDuration />
        </span>
      </div>

      {/* Row 2: Progress bar */}
      <AudioPlayerProgress
        onPointerDown={() => {
          if (!player.activeItem) {
            player.play(item);
            player.pause();
          }
        }}
      />

      {/* Row 3: Previous / Next navigation */}
      {(previous || next) && (
        <div className="flex items-center justify-between pt-1">
          {previous ? (
            <Link
              href={previous.url}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="size-3.5" />
              <span className="truncate max-w-[150px]">{previous.name}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={next.url}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="truncate max-w-[150px]">{next.name}</span>
              <ChevronRight className="size-3.5" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      )}
    </div>
  );
}
