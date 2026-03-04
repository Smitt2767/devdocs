"use client";

import NextImage from "next/image";
import { useState } from "react";

const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMYOtn8DwABJAGV46v98AAAAABJRU5ErkJggg==";

type ImgProps = {
  src: string;
  alt: string;
};

export function Img({ src, alt }: ImgProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="my-6 relative aspect-video bg-surface rounded-lg overflow-hidden">
      <NextImage
        fill
        src={src}
        alt={alt}
        className={`transition-all duration-300 ease-in object-cover object-center ${
          loaded ? "blur-none" : "blur-2xl"
        }`}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        onLoad={() => setLoaded(true)}
        sizes="(max-width: 768px) 100vw, 800px"
      />
    </figure>
  );
}
