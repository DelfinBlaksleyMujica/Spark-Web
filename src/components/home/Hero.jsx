"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../generals/Button";
import { public_sans } from "@/app/fonts/fonts";

export default function Hero() {
  const { scrollY } = useScroll();

  // PARALLAX EFFECT
  const y = useTransform(scrollY, [0, 100], [0, -100]);

  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      {/* ANIMACION BACKGROUND */}
      <motion.img
        src="/images/Textures/SparkLogo_Texture.webp"
        alt="Hero Background Image"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y }}
      />

      {/* GRADIENTE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />

      {/* Content Container */}
      <div className="w-full h-auto flex justify-center items-center z-10 px-4 2xl:mt-[-100px] ">
        <div className="flex flex-col gap-6 max-w-[1024px] text-center text-white pt-[116px]">
          {/* Animated Title */}
          <motion.h1
            className={`${public_sans.className} text-white text-[2rem] md:text-[60px] font-medium leading-[100%] mb-[18px]`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Experiences that foster <br /> engagement.
          </motion.h1>

          {/* Paragraphs */}
          <div className="flex flex-col gap-3 md:gap-1 text-[16px] md:text-[18px] leading-[150%] mb-[25px] md:mb-[30px] px-[1rem] md:px-[2rem] lg:px-0">
            <p className={`${public_sans.className}`}>
              Designing team experiences shouldn´t take weeks or blow your budget.
            </p>
            <p className={`${public_sans.className}`}>
              What used to take months now takes 10 minutes.
            </p>
            <p className={`${public_sans.className}`}>
              Just tell Nevenka what you need and get a curated,
              cost-efficient event, ready to go with certified suppliers.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row gap-[18px] justify-center items-center">
            <Button
              btnText="Experiences"
              btnClass="primary-btn"
              href="/blog"
            />
            <Button
              btnText="Try Nevenka"
              btnClass="secondary-btn"
              href="https://zcal.co/sparkclub"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
