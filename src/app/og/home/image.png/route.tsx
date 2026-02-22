import { ImageResponse } from "next/og";
import { generate as DefaultImage } from "fumadocs-ui/og";
import { OgDescription, OgLogo, OgTitle } from "@/components/OG";

export const revalidate = false;

export async function GET() {
  return new ImageResponse(
    <DefaultImage
      title={<OgTitle>devdocs</OgTitle>}
      description={
        <OgDescription>
          A curated reference of frontend engineering concepts. Built to
          understand the why, not just the how.
        </OgDescription>
      }
      primaryColor="#121212"
      primaryTextColor="#5b4cff"
      icon={<OgLogo />}
    />,
    {
      width: 1200,
      height: 630,
    },
  );
}
