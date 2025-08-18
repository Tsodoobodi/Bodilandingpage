import HeroCarousel from "./HeroCarousel";
import Navbar from "./Navbar";
import Image from "next/image";

export default function HomePageHero() {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden">
      <HeroCarousel />
      <Navbar />
      <Image
        src="/images/bodit.png"
        alt="Foreground"
        width={395}
        height={50}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 mb-[160px] sm:mb-[180px] md:mb-[200px] lg:mb-[226px]"
        sizes="(max-width: 768px) 200px, 395px"
        priority
      />
    </div>
  );
}
