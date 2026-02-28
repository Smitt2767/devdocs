"use client";

import {
  AudioPlayerProvider,
  AudioPlayerButton,
  AudioPlayerProgress,
  AudioPlayerTime,
  AudioPlayerDuration,
  AudioPlayerSpeed,
  useAudioPlayer,
} from "@/components/ui/audio-player";
import { getAudio } from "./audios";

type AudioProps = {
  src: string;
  title?: string;
};

export function Audio({ src, title }: AudioProps) {
  const resolvedSrc = getAudio(src) ?? src;

  return (
    <AudioPlayerProvider>
      <AudioPlayerUI src={resolvedSrc} title={title} />
    </AudioPlayerProvider>
  );
}

function AudioPlayerUI({ src, title }: { src: string; title?: string }) {
  const player = useAudioPlayer();
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
    </div>
  );
}
