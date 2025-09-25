"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { public_sans } from "@/app/fonts/fonts";
import TrustedByMobileSwiper from "./TrustedByMobileSwiper";

const companies = [
  { id: 1, img: "/images/TrustedBy/Comp1.png" },
  { id: 2, img: "/images/TrustedBy/Comp2.svg" },
  // { id: 3, img: "/images/TrustedBy/Comp3.svg" },
  { id: 4, img: "/images/TrustedBy/Comp4.svg" },
  // { id: 5, img: "/images/TrustedBy/Comp5.svg" },
  // { id: 6, img: "/images/TrustedBy/Comp6.svg" },
  { id: 7, img: "/images/TrustedBy/Comp7.png" },
  // { id: 8, img: "/images/TrustedBy/Comp8.svg" },
  // { id: 9, img: "/images/TrustedBy/Comp9.svg" },
  // { id: 10, img: "/images/TrustedBy/Comp10.svg" },
  // { id: 11, img: "/images/TrustedBy/Comp11.svg" },
  // { id: 12, img: "/images/TrustedBy/Comp12.svg" },
  // { id: 13, img: "/images/TrustedBy/Comp13.svg" },
  // { id: 14, img: "/images/TrustedBy/Comp14.svg" },
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
      <div className="flex flex-col justify-center items-center w-full py-[40px] px-4 sm:px-6 lg:px-4">
        {/* Title */}
        <h2
          className={`${public_sans.className} text-[24px] font-semibold leading-[100%] tracking-tight text-center mb-[30px] pt-[36px] text-black`}
        >
          Trusted by
        </h2>

        {/* MOBILE SWIPER */}
        <div className="overflow-hidden w-full">
          <TrustedByMobileSwiper companies={companies} />
        </div>

        {/* DESKTOP */}
        {/*--<motion.div
          ref={ref}
          className="
            hidden lg:flex 
            justify-center items-center 
            gap-[10px] lg:gap-[30px] xl:gap-[40px] 
            w-full max-w-[1800px] mx-auto py-[40px]
          "
          initial={{ opacity: 0, y: -80 }}
          animate={controls}

        >
          {companies.map((company) => (
            <div
              key={company.id}
              className="
                w-[90px] h-[90px] 
                flex justify-center items-center
              "
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
        </motion.div>--*/}
      </div>
    </div>
  );
}
