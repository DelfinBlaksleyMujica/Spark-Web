import Image from "next/image";
import AboutNevenka from "@/components/home/AboutNevenka";
import FeaturesComparison from "@/components/home/FeaturesComparison";
import NonNegotiables from "@/components/home/NonNegotiables";

export default function Home() {
  return <>
    <AboutNevenka />
    <FeaturesComparison />
    <NonNegotiables />
  </>;
}
