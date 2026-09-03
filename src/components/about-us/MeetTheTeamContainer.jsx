"use client";

import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { public_sans } from "@/app/fonts/fonts";
import { motion } from "framer-motion";

export default function MeetTheTeamContainer({ data }) {
  return (
    <div className="bg-[#FCD34D] text-black w-full flex flex-col justify-center items-center h-auto py-[80px] sm:py-[100px] px-4 sm:px-6 md:px-[72px] lg:px-[118px]">
      <h2
        className={`${public_sans.className} text-[48px] font-medium leading-[100%] tracking-tight text-center text-black`}
      >
        {data.title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] w-full max-w-[1200px] mt-[90px] items-stretch">
        {data.sparkClubTeam.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              duration: 0.8,
              delay: member.id * 0.1,
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <TeamMemberCard
              id={member.id}
              image={member.image}
              nombre={member.nombre}
              apellido={member.apellido}
              rol={member.rol}
              linkedinLink={member.linkedinLink}
              topExperiences={member.topExperiences}
              bullets={member.bullets}
              experiences={member.experiences}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
