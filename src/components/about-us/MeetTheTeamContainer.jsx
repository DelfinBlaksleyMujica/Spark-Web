import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const theTeam = [
  {
    id: 1,
    image: "/images/TheTeam/GastonSantourian-CEO-Sparkclub.jpg",
    nombre: "Gastón",
    apellido: "Santourian",
    rol: "CEO",
    linkedinLink: "",
    topExperiences: ["Kartings"],
    descriptions: [
      "Led brand, culture, and experience strategy for companies like Red Bull, Fitchin, 9z Team, and DalePlay. Managed teams of 50+ and executed 150+ online and on-site events across tech and entertainment.",
      "Now channeling that operational scale into Sparkclub, a platform designed to scale engagement through AI, behavioral data, and tokenized coordination.",
    ],
    experiences: [
      {
        id: 1,
        title: "Co-fundador de Mercado Libre",
        description: "",
        logo: "/images/Logos/LogoRedbull.svg",
      },
      {
        id: 2,
        title: "Co-fundador de Mercado Libre",
        description: "",
        logo: "/images/Logos/LogoFitchin.svg",
      },
      {
        id: 3,
        title: "Co-fundador de Mercado Libre",
        description: "",
        logo: "/images/Logos/LogoDalePlay.svg",
      },
      {
        id: 4,
        title: "Co-fundador de Mercado Libre",
        description: "",
        logo: "/images/Logos/LogoFadu.svg",
      },
    ],
  },
  {
    id: 2,
    image: "/images/TheTeam/FotoDelfPlaceholder.svg",
    nombre: "Delfín",
    apellido: "Blaksley Mujica",
    rol: "CTO",
    linkedinLink: "",
    topExperiences: [""],
    descriptions: [
      "Spent +4 years turning ideas into products and challenges into growth. Built a software agency from scratch, delivered 100+ projects worldwide, led teams of 20+ people, and launched an OOH startup in Buenos Aires Argentina. This journey taught me how powerful aligned teams can be. ",
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
        id: 1,
        title: "",
        description: "",
        logo: "/images/Logos/LogoPushnPull.svg",
      },
      {
        id: 1,
        title: "",
        description: "",
        logo: "/images/Logos/LogoBanndo.svg",
      },
    ],
  },
];

export default function MeetTheTeamContainer() {
  return (
    <div className="bg-[#FCD34D] w-full flex flex-col justify-center items-center h-[1500px] lg:h-screen py-[100px]">
      <h2 className="text-[48px] font-medium leading-[100%] tracking-tight text-center">
        Meet the Team
      </h2>
      <div className="flex w-full justify-center items-center gap-[50px] flex-wrap mt-[50px]">
        {theTeam.map((member, index) => {
          return (
            <div key={index}>
              <TeamMemberCard
                image={member.image}
                nombre={member.nombre}
                apellido={member.apellido}
                rol={member.rol}
                linkedinLink={member.linkedinLink}
                topExperiences={member.topExperiences}
                descriptions={member.descriptions}
                experiences={member.experiences}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
