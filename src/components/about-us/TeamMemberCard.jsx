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
      className={`${public_sans.className} w-[90%] sm:w-[460px] flex flex-col justify-center items-center max-w-[600px] px-[20px]`}
    >
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
          <h5 className="text-[14px] sm:text-[16px] mb-[5px] text-black">
            {rol}
          </h5>
          <Link href={linkedinLink}>
            <img src="/images/Icons/LinkedinLogo.svg" alt="" />
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
      <div className="mb-[40px]">
        {descriptions.map((desc, index) => (
          <p
            className="mb-[20px] text-black text-left w-full font-regular text-[16px] leading-[136%] "
            key={index}
          >
            {desc}
          </p>
        ))}
      </div>
      <div className="w-full flex flex-wrap justify-center sm:justify-start items-center gap-[35px]">
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
