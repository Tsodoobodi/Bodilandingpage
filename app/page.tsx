import ProjectShowcase from "./components/construction/page";
import FeaturedNews from "./components/News/page";
import SubsidiaryCarousel from "./components/subsidiary/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <SubsidiaryCarousel />
      <FeaturedNews />
      <ProjectShowcase />
    </div>
  );
}
