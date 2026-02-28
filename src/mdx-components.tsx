import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Img } from "@/components/mdx/Img";
import { Audio } from "@/components/mdx/Audio";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,

    table: ({ children, ...props }) => (
      <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),

    th: ({ children, ...props }) => (
      <th
        className="px-4 py-2.5 text-left font-medium text-muted bg-surface border-b border-border"
        {...props}
      >
        {children}
      </th>
    ),

    td: ({ children, ...props }) => (
      <td
        className="px-4 py-2.5 text-foreground border-b border-border last:border-0"
        {...props}
      >
        {children}
      </td>
    ),

    Img,
    Audio,

    ...components,
  };
}
