"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { categories } from "@/constants";

const OuterCarousel = () => {
  const autoplay = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnLastSnap: true,
  });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Fade(),
    autoplay,
  ]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      setSelected(selectedIndex);
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative  overflow-hidden ">
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {categories.map(({ title, image }, i) => (
            <div
              key={i}
              className="aspect-[2/1] w-full max-h-[800px] relative rounded-xl overflow-hidden bg-black flex-[0_0_100%]"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover opacity-30"
                priority
              />
              <div
                className="absolute  text-white top-4/10 left-1/20
              "
              >
                <div className="text-2xl mb-10">
                  Travel Experts can help to book <br /> your travel. Ask AI
                  anything and <br /> find your perfect stay.
                </div>
                <a
                  className="px-10 py-3 bg-[#CFFF04] text-black rounded-[15px] font-extrabold text-[28px] hover:opacity-80 transition cursor-pointer"
                  target="_blank"
                  href="https://www.getmarch.com/"
                >
                  Explore Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots navigation */}
      <div className="absolute left-1/2 bottom-16 -translate-x-1/2 flex gap-2">
        {categories.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              selected === i
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/80"
            } hover:cursor-pointer`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OuterCarousel;
