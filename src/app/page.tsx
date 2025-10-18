import Wishlist from "@/components/Wishlist";
import HeroSection from "@/components/herosection/HeroSection";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div>
          <h2 className="font-display align-center justify-center flex font-semibold text-5xl mt-16 gap2.5 text-center leading-15">
            Your perfect stay, handpicked <br />
            by experts.
          </h2>
          <p className="font-sans text-center text-lg mt-11 mb-15 leading-6 ">
            No more endless searching. Get matched with our expert-approved
            hotels that fit <br /> your style and family needs.
          </p>
        </div>
        <Wishlist />
        <HeroSection />
      </main>
    </div>
  );
}
