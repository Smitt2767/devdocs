"use client";

import NextImage from "next/image";
import { useState } from "react";

const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMYOtn8DwABJAGV46v98AAAAABJRU5ErkJggg==";

type ImgProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function Img({ src, alt, caption }: ImgProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="my-6 overflow-hidden rounded-lg">
      <NextImage
        src={src}
        alt={alt}
        width={1200}
        height={630}
        className={`w-full rounded-lg border border-border transition-all duration-300 ease-in ${
          loaded ? "blur-none" : "blur-2xl"
        }`}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        onLoad={() => setLoaded(true)}
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
