"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { public_sans } from "@/app/fonts/fonts";
import TrustedByMobileSwiper from "./TrustedByMobileSwiper";

const companies = [
  { id: 1, img: "/images/TrustedBy/Comp1.png" },
  { id: 2, img: "/images/TrustedBy/Comp2.svg" },
  { id: 3, img: "/images/TrustedBy/Comp3.svg" },
  { id: 4, img: "/images/TrustedBy/Comp4.svg" },
  { id: 5, img: "/images/TrustedBy/Comp5.svg" },
  { id: 6, img: "/images/TrustedBy/Comp6.svg" },
  { id: 7, img: "/images/TrustedBy/Comp7.png" },
  { id: 8, img: "/images/TrustedBy/Comp8.svg" },
  { id: 9, img: "/images/TrustedBy/Comp9.svg" },
  { id: 10, img: "/images/TrustedBy/Comp10.png" },
  { id: 11, img: "/images/TrustedBy/Comp11.svg" },
  { id: 12, img: "/images/TrustedBy/Comp12.png" },
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
      <div className="flex flex-col justify-center items-center w-full py-[40px] px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <h2
          className={`${public_sans.className} text-[24px] font-semibold leading-[100%] tracking-tight text-center mb-[30px] pt-[36px] text-black`}
        >
          Trusted by
        </h2>

        {/* MOBILE SWIPER */}
        <div className="xl:hidden overflow-hidden w-full">
          <TrustedByMobileSwiper companies={companies} />
        </div>

        {/* DESKTOP */}
        <motion.div
          ref={ref}
          className="
            hidden xl:flex 
            justify-center items-center 
            gap-[40px] lg:gap-[50px] xl:gap-[60px] 
            w-full max-w-[1200px] mx-auto
          "
          initial={{ opacity: 0, y: -80 }}
          animate={controls}
        >
          {companies.map((company) => (
            <div
              key={company.id}
              className="
                w-[50px] h-[50px] 
                sm:w-[55px] sm:h-[55px] 
                md:w-[60px] md:h-[60px] 
                lg:w-[65px] lg:h-[65px]
                flex justify-center items-center
              "
            >
              <img
                src={company.img}
                alt="Empresa asociada a Sparkclub"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
