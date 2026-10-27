"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Mismos links que el Footer
const CHANNELS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/spark-latam", Icon: FaLinkedinIn },
  { name: "X", href: "https://x.com/SparkclubXYZ", Icon: FaXTwitter },
  { name: "WhatsApp", href: "https://api.whatsapp.com/send?phone=541123641441", Icon: FaWhatsapp },
  { name: "Instagram", href: "https://www.instagram.com/sparkclub.xyz", Icon: FaInstagram },
];

// vertical: columna fija al costado del hero (desktop) · horizontal: fila de íconos (mobile)
export default function ChannelsBar({ orientation = "horizontal", className = "" }) {
  const prefersReduced = useReducedMotion();
  const isVertical = orientation === "vertical";

  return (
    <motion.nav
      aria-label="Nuestras redes"
      className={className}
      initial={prefersReduced ? false : { opacity: 0, x: isVertical ? 16 : 0, y: isVertical ? 0 : 12 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
    >
      <ul className={`flex items-center ${isVertical ? "flex-col gap-[22px]" : "gap-[12px]"}`}>
        {CHANNELS.map(({ name, href, Icon }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full text-white transition duration-200 hover:scale-110 hover:text-[#FCD34D] focus-visible:outline-2 focus-visible:outline-[#FCD34D]"
            >
              <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
