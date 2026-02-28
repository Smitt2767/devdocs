import { getPageImage, source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";
import { LLMCopyButton } from "@/components/ai/page-actions";
import { findNeighbour } from "fumadocs-core/page-tree";
import { DocsNavigationProvider } from "@/components/contexts/docs-navigation";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const neighbours = findNeighbour(source.getPageTree(), page.url);

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b border-border pb-6">
        <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
      </div>
      <DocsNavigationProvider
        previous={
          neighbours.previous
            ? { name: String(neighbours.previous.name), url: neighbours.previous.url }
            : undefined
        }
        next={
          neighbours.next
            ? { name: String(neighbours.next.name), url: neighbours.next.url }
            : undefined
        }
      >
        <DocsBody>
          <MDX components={getMDXComponents()} />
        </DocsBody>
      </DocsNavigationProvider>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
