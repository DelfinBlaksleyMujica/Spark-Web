"use client";

import { inter, poppins } from "@/app/fonts/fonts";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export default function Button({ btnText, btnClass, href, children }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.a
      href={href}
      whileHover={prefersReduced ? {} : { scale: 1.05 }}
      whileTap={prefersReduced ? {} : { scale: 0.96 }}
      transition={
        prefersReduced
          ? undefined
          : { type: "spring", stiffness: 260, damping: 20 }
      }
      className={`inline-block w-[85%] sm:w-[65%] md:w-[35%] lg:w-auto ${btnClass} rounded-[10px] flex items-center justify-center`}
    >
      <span
        className={`${inter.className} w-full h-full flex justify-center items-center
                    text-[18px] font-medium leading-[100%] tracking-tight px-6 py-3`}
      >
        {btnText}
        {children}
      </span>
    </motion.a>
  );
}
