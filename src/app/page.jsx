import AboutNevenka from "@/components/home/AboutNevenka";
import FeaturesComparison from "@/components/home/FeaturesComparison";
import NonNegotiables from "@/components/home/NonNegotiables";
import FaqsSection from "@/components/home/FaqsSection";
import Hero from "@/components/home/Hero";
import WeMakeWorkWorkComponent from "@/components/home/WeMakeWorkWorkComponent";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutNevenka />
      <WeMakeWorkWorkComponent />
      <FeaturesComparison />
      <NonNegotiables />
      <FaqsSection />
    </>
  );
}
