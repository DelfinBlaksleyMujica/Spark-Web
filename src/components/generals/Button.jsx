"use client";

import { poppins } from "@/app/fonts/fonts";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export default function Button({ btnText, btnClass, href }) {
  const prefersReduced = useReducedMotion();

  return (
    <Link href={href} className="inline-block">
      <motion.div
        whileHover={prefersReduced ? {} : { scale: 1.05 }}
        whileTap={prefersReduced ? {} : { scale: 0.96 }}
        transition={
          prefersReduced
            ? undefined
            : { type: "spring", stiffness: 260, damping: 20 }
        }
        className={`${btnClass} rounded-[10px] flex items-center justify-center`}
      >
        <span
          className={`${poppins.className} w-full h-full flex justify-center items-center
                      text-[18px] font-medium leading-[100%] tracking-tight px-6 py-3`}
        >
          {btnText}
        </span>
      </motion.div>
    </Link>
  );
}
