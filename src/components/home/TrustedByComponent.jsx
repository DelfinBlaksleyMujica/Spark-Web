"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { public_sans } from "@/app/fonts/fonts";
import TrustedByMobileSwiper from "./TrustedByMobileSwiper";

const companies = [
  { id: 1, img: "/images/TrustedBy/Company1.svg" },
  { id: 2, img: "/images/TrustedBy/Company2.svg" },
  { id: 3, img: "/images/TrustedBy/Company3.svg" },
  { id: 4, img: "/images/TrustedBy/Company4.svg" },
  { id: 5, img: "/images/TrustedBy/Company5.svg" },
  { id: 6, img: "/images/TrustedBy/Company6.svg" },
];

export default function TrustedByComponent() {
  const ref = useRef(null);
  const controls = useAnimation();

  const isInView = useInView(ref, {
    amount: 0.75,
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col justify-center items-center w-full py-[40px]">
        <h2
          className={`${public_sans.className} text-[24px] font-semibold leading-[100%] tracking-tight text-center mb-[12px] pt-[36px] text-black`}
        >
          Trusted by
        </h2>

        {/* MOBILE */}
        <div className="sm:hidden overflow-hidden w-full">
          <TrustedByMobileSwiper companies={companies} />
        </div>

        {/* Bigger devices */}
        <motion.div
          ref={ref}
          className="hidden sm:flex gap-[75px] w-full justify-center items-center"
          initial={{ opacity: 0, y: -80 }}
          animate={controls}
        >
          {companies.map((company) => (
            <div key={company.id}>
              <img src={company.img} alt="Empresa asociada a Sparkclub" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
