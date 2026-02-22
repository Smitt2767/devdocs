import { ImageResponse } from "next/og";
import { generate as DefaultImage } from "fumadocs-ui/og";

export const revalidate = false;

export async function GET() {
  return new ImageResponse(
    <DefaultImage
      title="devdocs"
      description="A curated reference of frontend engineering concepts. Built to understand the why, not just the how."
      site="devdocs"
      primaryColor="#5b4cff"
      primaryTextColor="#00d2ff"
    />,
    {
      width: 1200,
      height: 630,
    },
  );
}
