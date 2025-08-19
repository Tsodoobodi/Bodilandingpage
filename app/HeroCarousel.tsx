"use client";

import Image from "next/image";
import React from "react";

const CAROUSEL_IMAGES = [
  "/images/bg1.png",
  "/images/train.png",
  "/images/build.png",
  "/images/bg2.jpg",
  "/images/bg3.jpg",
  "/images/bg5.jpg",
  "/images/bg6.jpg",
  "/images/bg7.jpg",
  "/images/bg8.jpg",
];

export default function HeroCarousel() {
  const [carouselIdx, setCarouselIdx] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIdx((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {CAROUSEL_IMAGES.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`Background ${idx + 1}`}
          fill
          priority={idx === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            idx === carouselIdx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-10 z-20 flex gap-2 sm:gap-3">
        {CAROUSEL_IMAGES.map((_, idx) => {
          const isActive = idx === carouselIdx;
          return (
            <button
              key={idx}
              type="button"
              className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-all duration-300 ease-out
                ${
                  isActive
                    ? "w-[50px] bg-white"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={isActive}
              onClick={() => setCarouselIdx(idx)}
            />
          );
        })}
      </div>
    </div>
  );
}
