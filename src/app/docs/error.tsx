"use client";

import Link from "next/link";
import { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DocsError({ error, reset }: Props) {
  useEffect(() => {
    // Log to your error tracking service (e.g. Sentry) here
    console.error("[docs/error]", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 font-mono">
      <p className="text-subtle text-[10px] tracking-[0.3em] uppercase mb-6">
        Error
      </p>
      <h1 className="text-3xl font-black tracking-tight text-foreground mb-4">
        Something went wrong
      </h1>
      <p className="text-muted text-sm mb-8 max-w-sm">
        This page failed to load. Try refreshing — if the problem persists,
        it&apos;s on our end.
      </p>
      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={reset}
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Try again
        </button>
        <Link
          href="/docs/frontend"
          className="text-sm text-subtle hover:text-muted transition-colors"
        >
          Browse all docs →
        </Link>
      </div>
    </div>
  );
}
