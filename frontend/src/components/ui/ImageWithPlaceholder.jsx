// src/components/ui/ImageWithPlaceholder.jsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageWithPlaceholder({
  src,
  alt,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-xl" />
      )}

      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
}
