import { z } from "zod";

const PodcastStateSchema = z.object({
  currentId: z.string().nullable().default(null),
  progress: z.record(z.string(), z.number()).default({}),
  favorites: z.array(z.string()).default([]),
});

export type PodcastState = z.infer<typeof PodcastStateSchema>;

const KEY = "frontcore_podcast";
const DEFAULT: PodcastState = { currentId: null, progress: {}, favorites: [] };

export function readPodcastState(): PodcastState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT;
    return PodcastStateSchema.parse(JSON.parse(raw));
  } catch {
    return DEFAULT;
  }
}

export function writePodcastState(state: PodcastState): void {
  localStorage.setItem(KEY, JSON.stringify(state));
}
