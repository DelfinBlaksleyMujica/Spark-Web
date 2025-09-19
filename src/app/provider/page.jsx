import TestimonialsContainer from "@/components/generals/TestimonialsContainer";
import Hero from "@/components/providers/Hero";
import KickOffComponent from "@/components/providers/KickOffComponent";
import ActivityTags from "@/components/providers/ActivityTags";
import FaqsProviders from "@/components/providers/FaqsProviders";

import React from "react";

const titleKickoff = "Kick off your journey";

const cardsData = [
  {
    id: 1,
    image: "/images/Providers/KickOffJourneyStep1.webp",
    title: "Sync with Nevenka",
    description: "Easily complete your profile and become a verified partner.",
    color: "#D8B4FE",
  },
  {
    id: 2,
    image: "/images/Providers/KickOffJourneyStep2.webp",
    title: "Share your experiences",
    description: "Share your activities, get discovered, and track engagement.",
    color: "#FCA5A5",
  },
  {
    id: 3,
    image: "/images/Providers/KickOffJourneyStep3.webp",
    title: "Grow your impact.",
    description:
      "Connect with brands, scale your reach, and unlock new opportunities.",
    color: "#6EE7B7",
  },
];

export default function ProviderPageContainer() {
  return (
    <div>
      <Hero />
      {/* <ActivityTags /> */}
      <KickOffComponent cardsData={cardsData} titleKickoff={titleKickoff} />
      <TestimonialsContainer />
      <FaqsProviders />
    </div>
  );
}
