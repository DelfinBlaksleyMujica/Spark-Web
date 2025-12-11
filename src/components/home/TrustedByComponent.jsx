"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { public_sans } from "@/app/fonts/fonts";
import TrustedByMobileSwiper from "./TrustedByMobileSwiper";

const companies = [
  { id: 1, img: "/images/TrustedBy/Comp1.webp" },
  { id: 2, img: "/images/TrustedBy/Comp16.svg" },
  { id: 3, img: "/images/TrustedBy/Comp15.svg" },
  { id: 4, img: "/images/TrustedBy/Avalanche.webp" },
  { id: 5, img: "/images/TrustedBy/Logo_Monster_Energy.webp" },
  { id: 6, img: "/images/TrustedBy/GrupoPenaflor.png" },
  { id: 7, img: "/images/TrustedBy/BrevisLogo.png" },
];

const VISIBLE_LOGOS = 4;
const ROTATE_EVERY_MS = 2500; // speed of rotation

export default function TrustedByComponent() {
  const ref = useRef(null);
  const controls = useAnimation();
  const [startIndex, setStartIndex] = useState(0);

  const isInView = useInView(ref, {
    amount: 0.75,
    once: true,
  });

  // section entrance animation
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  // desktop rotation logic: advance 1 logo every ROTATE_EVERY_MS
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % companies.length);
    }, ROTATE_EVERY_MS);

    return () => clearInterval(interval);
  }, [isInView]);

  // pick the 4 visible logos in a circular way
  const visibleCompanies = Array.from(
    { length: Math.min(VISIBLE_LOGOS, companies.length) },
    (_, i) => companies[(startIndex + i) % companies.length]
  );

  return (
    <div className="w-full bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="flex flex-col justify-center items-center w-full py-[40px] px-4 sm:px-6 lg:px-4"
      >
        {/* Title */}
        <h2
          className={`${public_sans.className} text-[24px] font-semibold leading-[100%] tracking-tight text-center mb-[10px] pt-[36px] text-black`}
        >
          Trusted by
        </h2>

        {/* DESKTOP: always show 4 logos, update 1 at a time */}
        <div className="hidden lg:flex flex-col justify-center items-center w-full max-w-[1800px] mx-auto py-[30px] overflow-hidden">

          <motion.div
            key={startIndex}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex justify-center items-center gap-[100px]"
          >
            {visibleCompanies.map((company) => (
              <div
                key={company.id}
                className="w-[90px] h-[90px] flex justify-center items-center"
              >
                <motion.img
                  src={company.img}
                  alt="Empresa asociada a Sparkclub"
                  className="max-w-full max-h-full object-contain"
                  whileHover={{ scale: 1.6 }}
                  whileTap={{ scale: 0.995 }}
                />
              </div>
            ))}
          </motion.div>

          {/* Pagination dots */}
          <div className="flex gap-2 mt-10">
            {companies.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === startIndex ? "bg-black scale-110" : "bg-gray-300"
                  }`}
              ></div>
            ))}
          </div>

        </div>

      </motion.div>

      {/* MOBILE SWIPER */}
      <div className="overflow-hidden w-full lg:hidden">
        <TrustedByMobileSwiper companies={companies} />
      </div>
    </div>
  );
}
