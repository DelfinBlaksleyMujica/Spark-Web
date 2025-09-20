import { public_sans } from "@/app/fonts/fonts";
import Link from "next/link";
import React from "react";

export default function TeamMemberCard({
  image,
  nombre,
  apellido,
  rol,
  linkedinLink,
  topExperiences,
  descriptions,
  experiences,
}) {
  return (
    <div
      className={`${public_sans.className} w-[90%] sm:w-[460px] max-w-[600px] px-[20px]
                  flex flex-col h-full`}
    >
      {/* Header:  */}
      <div className="w-full flex justify-center items-center gap-[10px] mb-[25px] overflow-hidden">
        <img
          className="w-[50%] rounded-[50%]"
          src={image}
          alt={`${nombre} ${apellido}`}
        />
        <div className="w-[50%]">
          <h4 className="font-semibold mb-[5px] text-[20px] sm:text-[26px] leading-[100%] tracking-tight text-black">
            {nombre} <br /> {apellido}
          </h4>
          <h5 className="text-[14px] sm:text-[16px] mb-[5px] text-black">{rol}</h5>
          <Link href={linkedinLink} rel="noopener noreferrer" target="_blank">
            <img src="/images/Icons/LinkedinLogo.svg" alt="LinkedIn Profile" />
          </Link>
          <ul className="text-[16px] leading-[136%] list-none mt-[10px]">
            <li className="text-black">
              <strong>Top experience:</strong>
            </li>
            {topExperiences.map((experience, index) => (
              <li key={index} className="text-black">
                {experience}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Descriptions  */}
      <div className="mb-[40px] lg:min-h-[220px]">
        {descriptions.map((desc, index) => (
          <p
            className="mb-[20px] text-black text-left w-full font-regular text-[16px] leading-[136%]"
            key={index}
          >
            {desc}
          </p>
        ))}
      </div>

      {/* Logos  */}
      <div className="w-full flex flex-wrap justify-center sm:justify-start items-center gap-[35px] mt-auto">
        {experiences.map((exp, index) => (
          <img
            className="w-[70px]"
            key={index}
            src={exp.logo}
            alt={exp.title}
          />
        ))}
      </div>
    </div>
  );
}
