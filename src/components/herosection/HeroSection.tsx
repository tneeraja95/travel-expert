import OuterCarousel from "./OuterCarousel";
import InnerCarousel from "./InnerCarousel";
import VerticalCarousel from "./VerticalCarousel";

const HeroSection = () => {
  return (
    <div className="relative my-2 mx-6 overflow-hidden mt-[70px]">
      <OuterCarousel />
      <div className="absolute bottom-[112px] left-2/5 w-3/5">
        <InnerCarousel />
      </div>
      <div className="absolute top-4/20 left-1/25 w-fit h-fit">
        <VerticalCarousel />
      </div>
    </div>
  );
};

export default HeroSection;
