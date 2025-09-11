import React from "react";

import MeetTheTeamContainer from "@/components/about us/MeetTheTeamContainer";
import AboutUsHero from "@/components/about-us/AboutUsHero";
import AboutUsCards from "@/components/about-us/AboutUsCards";

export default function AboutUsPageContainer() {
  return (
    <>
      <AboutUsHero />
      <AboutUsCards />
      <MeetTheTeamContainer />
    </>
  );
}
