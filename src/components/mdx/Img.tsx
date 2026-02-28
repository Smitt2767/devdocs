"use client";

import NextImage from "next/image";
import { useState } from "react";
import { getImage } from "./images";

type ImgProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function Img({ src, alt, caption }: ImgProps) {
  const image = getImage(src);
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="my-6 overflow-hidden rounded-lg">
      <NextImage
        src={image ?? src}
        alt={alt}
        width={image ? undefined : 1200}
        height={image ? undefined : 630}
        className={`w-full rounded-lg border border-border transition-all duration-300 ease-in ${
          loaded ? "blur-none" : "blur-2xl"
        }`}
        placeholder={image ? "blur" : "empty"}
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
