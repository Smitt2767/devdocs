"use client";
import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/cn";
import { useCopyButton } from "fumadocs-ui/utils/use-copy-button";
import { buttonVariants } from "fumadocs-ui/components/ui/button";

const cache = new Map<string, string>();

export function LLMCopyButton({
  markdownUrl,
}: {
  /**
   * A URL to fetch the raw Markdown/MDX content of the page.
   * The button copies that content to the clipboard when clicked.
   */
  markdownUrl: string;
}) {
  const [isLoading, setLoading] = useState(false);
  const [checked, onClick] = useCopyButton(async () => {
    const cached = cache.get(markdownUrl);
    if (cached) return navigator.clipboard.writeText(cached);

    setLoading(true);

    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/plain": fetch(markdownUrl).then(async (res) => {
            const content = await res.text();
            cache.set(markdownUrl, content);
            return content;
          }),
        }),
      ]);
    } finally {
      setLoading(false);
    }
  });

  return (
    <button
      // type="button" prevents accidental form submission if this button
      // is ever rendered inside a <form> ancestor (omitting type defaults to "submit")
      type="button"
      disabled={isLoading}
      className={cn(
        buttonVariants({
          color: "secondary",
          size: "sm",
          className: "gap-2 [&_svg]:size-3.5 [&_svg]:text-fd-muted-foreground",
        }),
      )}
      onClick={onClick}
    >
      {checked ? <Check /> : <Copy />}
      Copy Markdown
    </button>
  );
}
