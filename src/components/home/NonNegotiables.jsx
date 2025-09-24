"use client";

import Image from "next/image";
import { Public_Sans } from "next/font/google";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const publicSans = Public_Sans({ subsets: ["latin"] });

const nonNegotiables = [];

export default function NonNegotiables({ data }) {
  // Parallax
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yFast = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={sectionRef}
      className={`${publicSans.className} relative bg-black overflow-hidden`}
    >
      {/* BACKGROUND SHAPES */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* BACKGROUND */}
        <motion.img
          src="/images/Textures/Circle_BG.png"
          alt=""
          className="absolute w-[300px] h-[300px] left-[10px] bottom-[10px]   lg:left-[4px] lg:bottom-[10px] z-0"
          style={{ y: yFast }}
        />
        <motion.img
          src="/images/Textures/SquareBlack_BG.svg"
          alt=""
          className="absolute w-[250px] h-[250px] opacity-0 lg:opacity-100 rotate-45 z-0 lg:left-[-100px] lg:top-[0px]"
          style={{ y: yFast }}
        />
        <motion.img
          src="/images/Textures/SquareBlack_BG.svg"
          alt=""
          className="absolute w-[350px] h-[350px] rotate-45 right-[-100px] z-0 lg:right-[70px] lg:bottom-[10px]"
          style={{ y: yFast }}
        />
        <motion.img
          src="/images/Textures/Circle_BG.png"
          alt=""
          className="absolute w-[200px] h-[200px]  z-0 opacity-0 lg:opacity-100 lg:right-[-10px] lg:top-[80px]"
          style={{ y: yFast }}
        />
      </div>

      {/* HEADER */}
      <div className="relative z-10 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          {/* Title animated */}
          <header className="col-start-2 col-span-10 text-center py-6">
            <motion.h2
              className="text-[36px] text-white sm:text-[40px] font-semibold "
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 16,
                duration: 0.6,
              }}
            >
              {data.title}
            </motion.h2>
          </header>

          {/* CARDS */}
          <div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-8 py-12">
            {data.nonNegotiables.map((item, i) => (
              <motion.article
                key={item.id}
                className={`relative ${item.color} rounded-[10px] px-4 pt-20 pb-12 text-center flex flex-col`}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  duration: 0.9,
                  delay: i * 0.08,
                }}
              >
                {/* Illustration */}
                <div className="absolute -top-20 left-0 right-0 flex justify-center py-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-55 h-55 object-contain"
                    priority={item.id === 1}
                  />
                </div>

                <h3 className="text-[30px] lg:text-[25px] xl:text-[32] font-black text-black mb-2 pt-24 leading-[1.2]">
                  {item.title}
                </h3>
                <p className="text-[16px] sm:text-[22px] text-black leading-[1.3]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
