import { Logo } from "@/components/Logo";
import { gitConfig } from "@/lib/layout.shared";
import Link from "next/link";

const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-white/6 bg-background/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <Link href="/" className="cursor-pointer">
            <Logo />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-foreground transition-colors tracking-wide"
            >
              GitHub
            </Link>
            <Link
              href="/podcasts"
              className="text-xs text-muted hover:text-foreground transition-colors tracking-wide"
            >
              podcasts
            </Link>
            <Link
              href="/docs/frontend"
              className="text-xs text-muted hover:text-foreground transition-colors tracking-wide"
            >
              browse →
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-border mt-20 pt-8 pb-8 flex items-center justify-between mx-auto max-w-3xl px-4 md:px-6">
        <span className="text-subtle text-[10px] tracking-[0.2em] uppercase">
          Always learning
        </span>
        <span className="text-subtle text-[10px] font-mono" aria-hidden="true">
          {new Date().getFullYear()}
        </span>
      </footer>
    </main>
  );
}
