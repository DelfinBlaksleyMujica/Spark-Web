import TestimonialsContainer from "@/components/generals/TestimonialsContainer";
import Hero from "@/components/providers/Hero";
import KickOffComponent from "@/components/providers/KickOffComponent";

import React from "react";

export default function ProviderPageContainer() {
  return (
    <div>
      <Hero />
      <KickOffComponent />
      <TestimonialsContainer />
    </div>
  );
}
