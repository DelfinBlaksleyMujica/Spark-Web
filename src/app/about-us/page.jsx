import React from "react";

import MeetTheTeamContainer from "@/components/about-us/MeetTheTeamContainer";
import AboutUsHero from "@/components/about-us/AboutUsHero";
import AboutUsCards from "@/components/about-us/AboutUsCards";
import WhyUs from "@/components/about-us/WhyUs";

const data = {
  hero: {
    title: "Our mission is to strengthen work relationships through",
    titleSpan: "shared experiences.",
    subtitle:
      "At Spark, we redefine connections. We believe a single experience can flip your perception of someone 180º. That’s why we’re on a mission to make every moment unforgettable. We’ve handpicked, tested, and perfected the trendiest local experiences to help you build game-changing relationships—with your all-star team and top-tier clients.",
  },
  aboutUsCards: {
    firstTitle: "Here’s the challenge:",
    firstDescription:
      "Fast-growing companies struggle to keep top talent engaged, while employees feel disconnected. At the same time, businesses often miss the mark when trying to appreciate their customers — relying on generic gestures that don’t leave a lasting impression.",
    secondTitle: "So, we did something about it.",
    secondDescription:
      "As a team of experience-obsessed, adventure-seeking, culture-loving pros, we created SparkClub to turn business relationships into real connections. Because every interaction is a chance to build trust, create quality moments, and make lasting memories.",
    secondDescriptionSpan: "Let’s make it count.",
  },
  meetTheTeam: {
    title: "Meet the Team",
    sparkClubTeam: [
      {
        id: 1,
        image: "/images/TheTeam/GastonSantourian-CEO-Sparkclub.jpg",
        nombre: "Gastón",
        apellido: "Santourian",
        rol: "CEO",
        linkedinLink: "https://www.linkedin.com/in/gastisan/",
        topExperiences: ["Kartings"],
        descriptions: [
          "Led brand, culture, and experience strategy for companies like Red Bull, Fitchin, 9z Team, and DalePlay. Managed teams of 50+ and executed 150+ online and on-site events across tech and entertainment.",
          "Now channeling that operational scale into Sparkclub, a platform designed to scale engagement through AI, behavioral data, and tokenized coordination.",
        ],
        experiences: [
          {
            id: 1,
            title: "",
            description: "",
            logo: "/images/Logos/LogoRedbull.svg",
          },
          {
            id: 2,
            title: "",
            description: "",
            logo: "/images/Logos/LogoFitchin.svg",
          },
          {
            id: 3,
            title: "",
            description: "",
            logo: "/images/Logos/LogoDalePlay.svg",
          },
          {
            id: 4,
            title: "",
            description: "",
            logo: "/images/Logos/LogoFadu.svg",
          },
        ],
      },
      {
        id: 2,
        image: "/images/TheTeam/DelfinBlaksleyMujica-CTO-Sparkclub.jpg",
        nombre: "Delfín",
        apellido: "Blaksley Mujica",
        rol: "CTO",
        linkedinLink:
          "https://www.linkedin.com/in/delfin-blaksley-mujica-73415b276/",
        topExperiences: ["Boards"],
        descriptions: [
          "Spent +8 years turning ideas into products and challenges into growth. Built a software agency from scratch, delivered 100+ projects worldwide, led teams of 20+ people, and launched an OOH startup in Buenos Aires Argentina. This journey taught me how powerful aligned teams can be. ",
          "Sparkclub is our way of bringing that same sense of connection and momentum to organizations everywhere",
        ],
        experiences: [
          {
            id: 1,
            title: "",
            description: "",
            logo: "/images/Logos/LogoFiuba.svg",
          },
          {
            id: 2,
            title: "",
            description: "",
            logo: "/images/Logos/LogoCoderHouse.svg",
          },
          {
            id: 3,
            title: "",
            description: "",
            logo: "/images/Logos/LogoPushnPull.svg",
          },
          {
            id: 4,
            title: "",
            description: "",
            logo: "/images/Logos/LogoBanndo.svg",
          },
        ],
      },
    ],
  },
  whyUs: {
    title: "Why work with us?",
    items: [
      {
        id: "vision",
        icon: "/images/Icons/Illus1.svg",
        title: "VISION",
        text: "Dedicated to enhancing workplace engagement through innovative team building events and loyalty features.",
      },
      {
        id: "mission",
        icon: "/images/Icons/Illus2.svg",
        title: "MISSION",
        text: "Our mission is to significantly reduce turnover and elevate performance by fostering strong connections among employees.",
      },
      {
        id: "process",
        icon: "/images/Icons/Illus3.svg",
        title: "PROCESS",
        text: "Enhance collaboration and boost morale with our tailored team-building events. Experience increased productivity and reduced turnover as your team connects and grows together.",
      },
    ],
  },
};

export default function AboutUsPageContainer() {
  return (
    <>
      <AboutUsHero data={data.hero} />
      <AboutUsCards data={data.aboutUsCards} />
      <MeetTheTeamContainer data={data.meetTheTeam} />
      <WhyUs data={data.whyUs} />
    </>
  );
}
