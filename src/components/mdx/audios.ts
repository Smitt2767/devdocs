const audios: Record<string, string> = {
  "/audios/frontend/index.m4a": "/audios/frontend/index.m4a",
  "/audios/frontend/javascript-runtime-and-async/index.m4a":
    "/audios/frontend/javascript-runtime-and-async/index.m4a",
  "/audios/frontend/javascript-runtime-and-async/event-loop-macro-microtasks.m4a":
    "/audios/frontend/javascript-runtime-and-async/event-loop-macro-microtasks.m4a",
};

export function getAudio(src: string): string | undefined {
  return audios[src];
}
