import HeroSection from "@/components/HeroSection";
import HomePageContent from "@/components/HomePageContent";
import EmogiNavigation from "@/registry/default/components/emogi-nav/usage";

export default function HomePage() {
  return (
    <>
      <EmogiNavigation />
      <HeroSection />
      <HomePageContent />
    </>
  );
}