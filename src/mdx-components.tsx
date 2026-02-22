import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

/**
 * Global MDX component overrides applied to every doc page.
 *
 * fumadocs-ui/mdx already provides:
 *   - <Callout>         — info / warn / error / tip callout boxes
 *   - <Steps>           — numbered step lists
 *   - <Tabs> / <Tab>    — tabbed code/content panels
 *   - <Accordion>       — collapsible sections
 *   - Code blocks       — syntax highlighted via Shiki
 *
 * We extend it here with:
 *   - <table>           — horizontally scrollable on mobile, styled to match dark theme
 *   - <a>               — overridden per-page via createRelativeLink in docs/page.tsx
 */
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,

    // Responsive table — wraps in a scroll container so wide tables
    // don't break the layout on narrow viewports
    table: ({ children, ...props }) => (
      <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm border-collapse" {...props}>
          {children}
        </table>
      </div>
    ),

    // Table head cells
    th: ({ children, ...props }) => (
      <th
        className="px-4 py-2.5 text-left font-medium text-muted bg-surface border-b border-border"
        {...props}
      >
        {children}
      </th>
    ),

    // Table body cells
    td: ({ children, ...props }) => (
      <td
        className="px-4 py-2.5 text-foreground border-b border-border last:border-0"
        {...props}
      >
        {children}
      </td>
    ),

    // Spread any page-level overrides (e.g. createRelativeLink for <a>)
    ...components,
  };
}
