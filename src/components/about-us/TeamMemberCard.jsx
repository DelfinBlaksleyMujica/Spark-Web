import { public_sans } from "@/app/fonts/fonts";
import Link from "next/link";
import React from "react";

// Colores de badge por persona (mapeados por id, según orden del deck de referencia)
const BADGE_COLORS = {
  1: "bg-[#86EFAC]", // Gastón - verde
  2: "bg-[#7DD3FC]", // Delfín - celeste/cyan
  3: "bg-[#FDE047]", // Inés - amarillo
};

export default function TeamMemberCard({
  id,
  image,
  nombre,
  apellido,
  rol,
  linkedinLink,
  topExperiences,
  bullets,
  experiences,
}) {
  const badgeColor = BADGE_COLORS[id] ?? "bg-[#FDE047]";

  return (
    <div
      className={`${public_sans.className} bg-[#121212] rounded-[10px] overflow-hidden w-full h-full flex flex-col`}
    >
      {/* FOTO */}
      <div className="relative w-full h-[320px] sm:h-[360px]">
        <img
          src={image}
          alt={`${nombre} ${apellido}`}
          className="w-full h-full object-cover"
        />

        {/* Badge flotante top-right */}
        <div
          className={`absolute top-[16px] right-[16px] ${badgeColor} rounded-full px-[14px] py-[6px] flex items-center gap-[6px]`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
            className="text-black flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M7.75 0.5L1.5 8.25H6.25L6.25 13.5L12.5 5.75H7.75L7.75 0.5Z" />
          </svg>
          <span className="text-[13px] font-medium text-black leading-none">
            {topExperiences.join(", ")}
          </span>
        </div>

        {/* Logos superpuestos bottom-left */}
        <div className="absolute bottom-[16px] left-[16px] flex items-center gap-[8px]">
          {experiences.map((exp, index) => (
            <img
              key={index}
              src={exp.logo}
              alt={exp.title || ""}
              className="w-[32px] h-[32px] object-contain"
            />
          ))}
        </div>
      </div>

      {/* CUERPO */}
      <div className="flex flex-col flex-1 px-[24px] py-[20px]">
        {/* Nombre + rol + LinkedIn */}
        <div className="flex justify-between items-center mb-[18px]">
          <div>
            <h4 className="text-white font-semibold text-[22px] leading-[110%] tracking-tight">
              {nombre} {apellido}
            </h4>
            <p className="text-white/50 text-[14px] mt-[4px]">{rol}</p>
          </div>
          <Link
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center flex-shrink-0"
          >
            <img
              src="/images/Icons/LinkedinLogo.svg"
              alt="LinkedIn Profile"
              className="w-[18px] h-[18px]"
            />
          </Link>
        </div>

        {/* Bullets */}
        <ul className="flex flex-col gap-[10px] mt-auto">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className="flex items-start gap-[8px] text-white/80 text-[14px] leading-[136%]"
            >
              <span className="mt-[7px] w-[4px] h-[4px] rounded-full bg-white/50 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
