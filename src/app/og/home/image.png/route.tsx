import { ImageResponse } from "next/og";
import { generate as DefaultImage } from "fumadocs-ui/og";
import { OgDescription, OgLogo, OgTitle } from "@/components/OG";
import { colors } from "@/lib/colors";

export const revalidate = false;

export async function GET() {
  return new ImageResponse(
    <DefaultImage
      title={<OgTitle>FrontCore</OgTitle>}
      description={
        <OgDescription>
          A curated reference of frontend engineering concepts. Built to
          understand the why, not just the how.
        </OgDescription>
      }
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
