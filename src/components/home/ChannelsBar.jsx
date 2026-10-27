"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { inter } from "@/app/fonts/fonts";

// Mismos links que el Footer
const CHANNELS = [
  { name: "Instagram", href: "https://www.instagram.com/sparkclub.xyz", Icon: FaInstagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/spark-latam", Icon: FaLinkedin },
  { name: "Telegram", href: "https://t.me/+BxgSUYyP38c1M2M5", Icon: FaTelegram },
  { name: "X", href: "https://x.com/SparkclubXYZ", Icon: FaXTwitter },
  { name: "WhatsApp", href: "https://api.whatsapp.com/send?phone=541123641441", Icon: FaWhatsapp },
];

export default function ChannelsBar() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.nav
      aria-label="Nuestros canales"
      className={`${inter.className} flex items-center gap-[4px] rounded-full border border-[#2c2c2c] bg-[#212121]/80 p-[6px] backdrop-blur-md`}
      initial={prefersReduced ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
    >
      <span className="hidden sm:block pl-[14px] pr-[10px] text-[14px] font-medium text-[#a1a1aa] whitespace-nowrap">
        Seguinos
      </span>
      <span className="hidden sm:block h-[20px] w-px bg-[#3f3f46]" aria-hidden="true" />
      <ul className="flex items-center gap-[2px]">
        {CHANNELS.map(({ name, href, Icon }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              className="flex h-[40px] items-center gap-[8px] rounded-full px-[12px] text-[14px] font-medium text-white transition-colors duration-200 hover:bg-[#FFEE35] hover:text-black focus-visible:outline-2 focus-visible:outline-[#FFEE35]"
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              <span className="hidden lg:inline">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
