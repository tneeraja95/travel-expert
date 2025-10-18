"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/images/inner1.jpg",
  "/images/inner2.jpg",
  "/images/inner3.jpg",
  "/images/inner4.jpg",
  "/images/inner5.jpg",
  "/images/inner6.jpg",
  "/images/inner7.jpg",
];

export default function InnerCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnLastSnap: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start" },
    [autoplay.current]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onUpdate = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      const slides = emblaApi.slideNodes() ?? [];
      if (!slides.length) return;

      slides.forEach((slide, i) => {
        slide.classList.toggle("is-selected", i === selectedIndex);
      });
      emblaApi.scrollTo(selectedIndex, false);
      if (selectedIndex >= 3) {
        autoplay.current?.stop();
      }
    };
    emblaApi.on("select", onUpdate);
    emblaApi.on("reInit", () => {
      onUpdate();
    });

    onUpdate();

    return () => {
      emblaApi.off("select", onUpdate);
      emblaApi.off("reInit", onUpdate);
    };
  }, [emblaApi]);

  return (
    <div className="relative h-[450px] overflow-hidden hidden xl:block">
      <div className="" ref={emblaRef}>
        <div className="flex gap-4 items-end h-[450px]">
          {images.map((src, i) => (
            <div
              key={src}
              className="embla__slide relative h-[346px] w-[292px] px-2 flex-[0_0_auto] rounded-4xl overflow-hidden"
            >
              <div className="card">
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="object-cover"
                  fill
                  sizes="(max-width: 400px) 100vw, 292px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
