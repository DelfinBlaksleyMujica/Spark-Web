"use client";

import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { public_sans } from "@/app/fonts/fonts";
import { motion } from "framer-motion";

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
      { id: 1, title: "", description: "", logo: "/images/Logos/LogoRedbull.svg" },
      { id: 2, title: "", description: "", logo: "/images/Logos/LogoFitchin.svg" },
      { id: 3, title: "", description: "", logo: "/images/Logos/LogoDalePlay.svg" },
      { id: 4, title: "", description: "", logo: "/images/Logos/LogoFadu.svg" },
    ],
  },
  {
    id: 2,
    image: "/images/TheTeam/DelfinBlaksleyMujica-CTO-Sparkclub.jpg",
    nombre: "Delfín",
    apellido: "Blaksley Mujica",
    rol: "CTO",
    linkedinLink: "",
    topExperiences: ["Boards"],
    descriptions: [
      "Spent +4 years turning ideas into products and challenges into growth. Built a software agency from scratch, delivered 100+ projects worldwide, led teams of 20+ people, and launched an OOH startup in Buenos Aires Argentina. This journey taught me how powerful aligned teams can be. ",
      "Sparkclub is our way of bringing that same sense of connection and momentum to organizations everywhere",
    ],
    experiences: [
      { id: 1, title: "", description: "", logo: "/images/Logos/LogoFiuba.svg" },
      { id: 2, title: "", description: "", logo: "/images/Logos/LogoCoderHouse.svg" },
      { id: 3, title: "", description: "", logo: "/images/Logos/LogoPushnPull.svg" },
      { id: 4, title: "", description: "", logo: "/images/Logos/LogoBanndo.svg" },
    ],
  },
];

export default function MeetTheTeamContainer() {
  return (
    <div className="bg-[#FCD34D] text-black w-full flex flex-col justify-center items-center h-[1500px] lg:h-auto py-[100px]">
      <h2
        className={`${public_sans.className} text-[48px] font-medium leading-[100%] tracking-tight text-center`}
      >
        Meet the Team
      </h2>

      <div className="flex w-full justify-center items-start gap-[50px] flex-wrap mt-[50px]">
        {theTeam.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              duration: 0.8,
              delay: index * 0.2,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
