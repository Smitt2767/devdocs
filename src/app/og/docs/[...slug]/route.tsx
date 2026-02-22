import { getPageImage, source } from "@/lib/source";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { generate as DefaultImage } from "fumadocs-ui/og";
import { OgDescription, OgLogo, OgTitle } from "@/components/OG";
import { colors } from "@/lib/colors";

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: RouteContext<"/og/docs/[...slug]">,
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return new ImageResponse(
    <DefaultImage
      title={<OgTitle>{page.data.title}</OgTitle>}
      description={<OgDescription>{page.data.description}</OgDescription>}
      primaryColor={colors.background}
      primaryTextColor={colors.brand}
      icon={<OgLogo />}
    />,
    {
      width: 1200,
      height: 630,
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
