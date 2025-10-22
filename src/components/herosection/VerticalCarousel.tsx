"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { categories } from "@/constants";

export default function VerticalCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnLastSnap: true })
  );

  const [emblaRef] = useEmblaCarousel({ axis: "y", loop: false }, [
    autoplay.current,
  ]);

  return (
    <div className="overflow-hidden h-[84px]" ref={emblaRef}>
      <div className="flex flex-col h-[84px]">
        {categories.map(({ title }, i) => (
          <div key={i} className="flex flex-[0_0_100%]">
            <span className="font-display font-semibold text-[64px] py-[10px] px-[8px] leading-none text-white select-none">
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
