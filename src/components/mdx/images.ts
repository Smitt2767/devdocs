import type { StaticImageData } from "next/image";

import jsRuntimeIndex from "@/../public/images/frontend/javascript-runtime-and-async/index.png";
import eventLoopMacroMicrotasks from "@/../public/images/frontend/javascript-runtime-and-async/event-loop-macro-microtasks.png";
import promiseCombinatorsErrorPropagation from "@/../public/images/frontend/javascript-runtime-and-async/promise-combinators-error-propagation.png";
import taskStarvationSchedulerPriorities from "@/../public/images/frontend/javascript-runtime-and-async/task-starvation-scheduler-priorities.png";

const images: Record<string, StaticImageData> = {
  "/images/frontend/javascript-runtime-and-async/index.png": jsRuntimeIndex,
  "/images/frontend/javascript-runtime-and-async/event-loop-macro-microtasks.png":
    eventLoopMacroMicrotasks,
  "/images/frontend/javascript-runtime-and-async/promise-combinators-error-propagation.png":
    promiseCombinatorsErrorPropagation,
  "/images/frontend/javascript-runtime-and-async/task-starvation-scheduler-priorities.png":
    taskStarvationSchedulerPriorities,
};

export function getImage(src: string): StaticImageData | undefined {
  return images[src];
}
