"use client";

import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { images } from "@/constants";

export default function InnerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelected = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      const slides = emblaApi.slideNodes();
      slides.forEach((slide, i) => {
        slide.classList.toggle("is-selected", i === selectedIndex);
      });
    };

    const startAutoplay = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);

      autoplayRef.current = setInterval(() => {
        const index = emblaApi.selectedScrollSnap();

        if (index >= 3 || !emblaApi.canScrollNext()) {
          stopAutoplay();
          return;
        }

        emblaApi.scrollNext();
      }, 3000);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    emblaApi.on("select", updateSelected);

    startAutoplay();

    return () => {
      stopAutoplay();
      emblaApi.off("select", updateSelected);
    };
  }, [emblaApi]);

  return (
    <div className="relative h-[450px] overflow-hidden hidden xl:block">
      <div ref={emblaRef} className="embla__viewport">
        <div className="embla__container flex justify-start items-end gap-4 h-[450px]">
          {images.map((src, i) => (
            <div
              key={src}
              className={`embla__slide relative rounded-4xl overflow-hidden flex-[0_0_auto] transition-all duration-500 ${
                i === 0 ? "is-selected no-transition" : ""
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                className="object-cover"
                fill
                sizes="(max-width: 400px) 100vw, 292px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
