"use client";

import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { public_sans } from "@/app/fonts/fonts";
import { motion } from "framer-motion";

export default function MeetTheTeamContainer({ data }) {
  return (
    <div className="bg-[#FCD34D] text-black w-full flex flex-col justify-center items-center h-[1500px] lg:h-auto py-[100px]">
      <h2
        className={`${public_sans.className} text-[48px] font-medium leading-[100%] tracking-tight text-center text-black`}
      >
        {data.title}
      </h2>

      <div className="flex w-full justify-center items-stretch gap-[90px] flex-wrap mt-[90px]">
        {data.sparkClubTeam.map((member, index) => (
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
