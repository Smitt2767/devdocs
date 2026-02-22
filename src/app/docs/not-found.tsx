import Link from "next/link";

export default function DocsNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <p className="text-subtle text-[10px] tracking-[0.3em] uppercase mb-6">
        404
      </p>
      <h1 className="text-3xl font-black tracking-tight text-foreground mb-4">
        Page not found
      </h1>
      <p className="text-muted text-sm mb-8 max-w-sm">
        This doc doesn&apos;t exist — it may have been moved, renamed, or not
        written yet.
      </p>
      <div className="flex items-center gap-6">
        <Link
          href="/docs/frontend"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Browse all docs →
        </Link>
        <Link
          href="/"
          className="text-sm text-subtle hover:text-muted transition-colors"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
