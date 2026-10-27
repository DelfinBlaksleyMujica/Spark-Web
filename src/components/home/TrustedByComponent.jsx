"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { public_sans } from "@/app/fonts/fonts";

const companies = [
  { id: 1, name: "Ethereum Foundation", img: "/images/TrustedBy/Comp1.webp" },
  { id: 2, name: "Red Bull", img: "/images/TrustedBy/Comp16.svg" },
  { id: 3, name: "Kite", img: "/images/TrustedBy/Comp15.svg" },
  // scale: compensa el margen transparente que traen algunos archivos
  { id: 4, name: "Grupo Peñaflor", img: "/images/TrustedBy/GrupoPenaflor.png", scale: "scale-[2]" },
  { id: 5, name: "Avalanche", img: "/images/TrustedBy/Avalanche.webp", scale: "scale-[1.5]" },
  { id: 6, name: "Brevis", img: "/images/TrustedBy/BrevisLogo.png" },
];

// La lista se repite para llenar pantallas anchas; el marquee mueve -50%,
// así que la segunda mitad es una copia exacta de la primera.
const REPEAT = 2;
const track = Array.from({ length: REPEAT }, () => companies).flat();

function LogoList({ hidden = false }) {
  return (
    <ul
      className="flex shrink-0 items-center motion-reduce:flex-wrap motion-reduce:justify-center"
      aria-hidden={hidden || undefined}
    >
      {track.map((company, index) => (
        <li
          key={`${company.id}-${index}`}
          className={`mx-[24px] md:mx-[40px] flex h-[56px] w-[120px] md:h-[72px] md:w-[150px] items-center justify-center ${
            // Sin animación mostramos cada logo una sola vez
            index >= companies.length ? "motion-reduce:hidden" : ""
          }`}
        >
          <img
            src={company.img}
            alt={hidden ? "" : company.name}
            title={company.name}
            loading="lazy"
            draggable={false}
            className={`max-h-full max-w-full object-contain ${company.scale ?? ""} grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100`}
          />
        </li>
      ))}
    </ul>
  );
}

export default function TrustedByComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <div className="w-full bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center w-full pt-[76px] pb-[56px]"
      >
        {/* Title */}
        <h2
          className={`${public_sans.className} text-[24px] font-semibold leading-[100%] tracking-tight text-center mb-[36px] px-4 text-black`}
        >
          Empresas que confían en nosotros
        </h2>

        {/* Marquee: continuo, se pausa al pasar el mouse, bordes difuminados */}
        <div className="group relative w-full max-w-[1800px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] motion-reduce:[mask-image:none]">
          <div
            className="marquee flex w-max group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:justify-center"
            style={{ "--marquee-duration": "40s" }}
          >
            <LogoList />
            <div className="contents motion-reduce:hidden">
              <LogoList hidden />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
