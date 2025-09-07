import Image from "next/image";
import AboutNevenka from "@/components/home/AboutNevenka";
import FeaturesComparison from "@/components/home/FeaturesComparison";
import NonNegotiables from "@/components/home/NonNegotiables";
import FaqsSection from "@/components/home/FaqsSection";



export default function Home() {
  return <>
    <AboutNevenka />
    <FeaturesComparison />
    <NonNegotiables />
    <FaqsSection />
  </>;
}
