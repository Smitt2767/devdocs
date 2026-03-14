"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  AudioPlayerProvider,
  useAudioPlayer,
} from "@/components/ui/audio-player";
import type { PodcastTrack } from "@/lib/podcast-types";
import { readPodcastState, writePodcastState } from "@/lib/podcast-storage";
import { StickyPlayer } from "./StickyPlayer";

interface GlobalPodcastContextValue {
  tracks: PodcastTrack[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const GlobalPodcastContext = createContext<GlobalPodcastContextValue | null>(
  null,
);

export function useGlobalPodcast(): GlobalPodcastContextValue {
  const ctx = useContext(GlobalPodcastContext);
  if (!ctx)
    throw new Error(
      "useGlobalPodcast must be used within GlobalPodcastProvider",
    );
  return ctx;
}

// Adds bottom padding to body when player is active so content isn't obscured
function BodyPadding() {
  const player = useAudioPlayer();
  useEffect(() => {
    document.body.style.paddingBottom = player.activeItem ? "7rem" : "";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [player.activeItem]);
  return null;
}

// Handles all audio effects — must be inside AudioPlayerProvider
function PodcastEffects({ tracks }: { tracks: PodcastTrack[] }) {
  const player = useAudioPlayer<PodcastTrack>();

  // Restore last-played track + seek position on mount
  useEffect(() => {
    const state = readPodcastState();
    if (!state.currentId) return;
    const track = tracks.find((t) => t.id === state.currentId);
    if (!track) return;
    player.setActiveItem({ id: track.id, src: track.src, data: track });
    const savedTime = state.progress[state.currentId];
    if (savedTime) {
      const audio = player.ref.current;
      const onMeta = () => {
        if (audio) audio.currentTime = savedTime;
        audio?.removeEventListener("loadedmetadata", onMeta);
      };
      audio?.addEventListener("loadedmetadata", onMeta);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist currentId when active track changes
  useEffect(() => {
    const state = readPodcastState();
    writePodcastState({
      ...state,
      currentId: (player.activeItem?.id as string) ?? null,
    });
  }, [player.activeItem?.id]);

  // Persist progress every 10 seconds while playing
  useEffect(() => {
    const id = setInterval(() => {
      const audio = player.ref.current;
      const trackId = player.activeItem?.id as string | undefined;
      if (!audio || !trackId || audio.paused) return;
      const state = readPodcastState();
      writePodcastState({
        ...state,
        progress: { ...state.progress, [trackId]: audio.currentTime },
      });
    }, 10_000);
    return () => clearInterval(id);
  }, [player.activeItem?.id, player.ref]);

  // Auto-play next track on ended
  useEffect(() => {
    const audio = player.ref.current;
    if (!audio) return;
    const handleEnded = () => {
      const idx = tracks.findIndex((t) => t.id === player.activeItem?.id);
      if (idx >= 0 && idx < tracks.length - 1) {
        const next = tracks[idx + 1];
        player.play({ id: next.id, src: next.src, data: next });
      }
    };
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [player, tracks]);

  return null;
}

function GlobalPodcastInner({
  tracks,
  children,
}: {
  tracks: PodcastTrack[];
  children: ReactNode;
}) {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Restore favorites on mount
  useEffect(() => {
    setFavorites(readPodcastState().favorites);
  }, []);

  const toggleFavorite = (id: string) => {
    const next = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id];
    setFavorites(next);
    const state = readPodcastState();
    writePodcastState({ ...state, favorites: next });
  };

  return (
    <GlobalPodcastContext.Provider value={{ tracks, favorites, toggleFavorite }}>
      <PodcastEffects tracks={tracks} />
      <BodyPadding />
      {children}
      <StickyPlayer />
    </GlobalPodcastContext.Provider>
  );
}

export function GlobalPodcastProvider({
  tracks,
  children,
}: {
  tracks: PodcastTrack[];
  children: ReactNode;
}) {
  return (
    <AudioPlayerProvider<PodcastTrack>>
      <GlobalPodcastInner tracks={tracks}>{children}</GlobalPodcastInner>
    </AudioPlayerProvider>
  );
}
