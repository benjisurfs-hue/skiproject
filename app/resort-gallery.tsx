"use client";

import Image from "next/image";
import { useRef } from "react";
import type { ResortMedia } from "../data/resort";

export default function ResortGallery({
  name,
  media,
}: {
  name: string;
  media: ResortMedia[];
}) {
  const gallery = useRef<HTMLDivElement>(null);

  return (
    <div
      className="photo-gallery"
      ref={gallery}
      role="region"
      aria-label={`${name} photos. Use left and right arrow keys to browse.`}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          const element = gallery.current;
          element?.scrollBy({
            left:
              (event.key === "ArrowRight" ? 1 : -1) *
              (element.clientWidth - 25),
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          });
        }
      }}
    >
      {media.map((photo, index) => (
        <div className="photo" key={photo.src}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 767px) 90vw, 380px"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
