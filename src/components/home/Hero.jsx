"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../generals/Button";
import { public_sans } from "@/app/fonts/fonts";
import NavUserProviderToggle from "../generals/NavUserProviderToggle";

export default function Hero({ data }) {
  const { scrollY } = useScroll();

  const [open, setOpen] = useState(false);


  const toggleMenu = () => setOpen((v) => !v);

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      opacity: 0,
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
    },
  };


  // Parallax values 
  const leftBackY = useTransform(scrollY, [0, 40], [0, -80]);  // far left bg
  const leftBubbleY = useTransform(scrollY, [0, 40], [0, -80]);  // left speech bubble
  const centerCardY = useTransform(scrollY, [0, 40], [0, -20]);  // nevenka card
  const screenY = useTransform(scrollY, [0, 80], [0, -10]);  // platform screen
  const rightBackY = useTransform(scrollY, [0, 40], [0, -80]);  // far right bg
  const rightBubbleY = useTransform(scrollY, [0, 40], [0, -80]);  // right speech bubble

  return (
    <div className="relative w-full h-screen  md:h-[1750px] lg:h-[1700px] xl:h-[1600px] flex items-center justify-center overflow-hidden bg-[#151515]">


      {/* Pill Users/Providers in mobile version */}
      <div className="md:hidden absolute top-[120px] left-0 right-0 flex justify-center">
        <motion.div onClick={toggleMenu} variants={mobileLinkVars}>
          <NavUserProviderToggle />
        </motion.div>
      </div>

      {/* GRADIENTE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" />


      {/* Content Container */}
      <div className="w-full h-auto flex justify-center items-center z-10 px-4 2xl:mt-[-100px] absolute top-[100px] md:top-[150px] xl:top-[200px] 2xl:top-[300px]">
        <div className="flex flex-col gap-6 max-w-[1024px] text-center text-white pt-[100px] sm:pt-[100px] md:pt-[65px] 2xl:pt-[50px]">
          {/*Top Pill*/}
          <div className="w-full flex justify-center items-center">
            <div className="bg-[#212121] rounded-[16px] w-auto px-[24px] py-[8px] flex justify-center items-center">
              <p
                className={`${public_sans.className} text-[16px] md:text-[18px] #FFFFFF font-medium leading-[100%] tracking-tight `}
              >
                ✨ From weeks to minutes
              </p>
            </div>
          </div>
          {/* Animated Title */}
          <motion.h1
            className={`${public_sans.className} text-white text-[2rem] sm:text-[3rem] md:text-[60px] font-medium leading-[100%] mb-[18px]`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {data.tituloPrincipal} <br /> {data.kwTituloPrincipal}
          </motion.h1>

          {/* Paragraphs */}
          <div className="flex justify-center items-center flex-col gap-3 md:gap-1 text-[16px] sm:text-[20px] md:text-[18px] leading-[150%] mb-[25px] md:mb-[30px] px-0 md:px-[2rem] lg:px-0">
            <p
              className={`${public_sans.className} tracking-tight w-[95%] sm:w-[80%]`}
            >
              {data.firstSubtitle} <strong>{data.strongSubtitle}</strong>{" "}
              {data.secondPartSubtitle}
            </p>
          </div>
          {/*Floating Images*/}
          {/* LEFT BACK IMAGE */}
          <motion.img
            className="absolute z-0 top-[550px] sm:top-[550px] md:top-[530px] md:w-[170px] lg:top-[550px] lg:w-[auto] xl:top-[500px] 2xl:top-[300px] left-0"
            src="/images/HomeHero/imagenIzquierdaSuperior.svg"
            alt="Experiencies in SparkClub"
            // entry animation
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            // parallax
            style={{ y: leftBackY }}
          />

          {/* LEFT BUBBLE */}
          <motion.img
            className="absolute top-[490px] sm:top-[530px] md:top-[510px] md:w-[80px] lg:top-[470px] lg:w-[auto] xl:top-[420px] 2xl:top-[220px] left-[85px] z-1"
            src="/images/HomeHero/globoIzquierda.svg"
            alt="Experiencies in SparkClub"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
            style={{ y: leftBubbleY }}
          />

          {/* CENTER NEVENKA CARD */}
          <motion.div
            className="z-1000 absolute top-[800px] sm:top-[800px] md:top-[700px] lg:top-[380px] left-0 w-full flex justify-center items-center"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
            style={{ y: centerCardY }}
          >
            <img
              className="h-[160px] w-[200px] md:h-[245px] md:w-[300px] z-20"
              src="/images/HomeHero/nevenkaAsset.png"
              alt="Team Building Experiences with SparkClub"
            />
          </motion.div>

          {/* PLATFORM SCREEN */}
          <motion.div
            className="hidden md:w-full md:flex md:justify-center md:items-center md:absolute md:left-0 md:top-[800px] lg:top-[700px] xl:top-[550px] 2xl:top-[550px] sm:z-10 px-8"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.35 }}
            style={{ y: screenY }}
          >
            <img
              className="w-[965px] h-[626px]"
              src="/images/HomeHero/Mockup_Hero_Sparkclub.svg"
              alt="Imagen de plataforma de SparkClub"
            />
          </motion.div>

          {/* RIGHT BACK IMAGE */}
          <motion.img
            className="absolute top-[560px] sm:right-[75px] sm:top-[560px] md:top-[530px] md:w-[190px] lg:top-[507px] lg:w-[auto] xl:top-[450px] 2xl:top-[300px] right-0 z-0"
            src="/images/HomeHero/imagenDerechaSuperior.svg"
            alt="Experiencies in SparkClub"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            style={{ y: rightBackY }}
          />

          {/* RIGHT BUBBLE */}
          <motion.img
            className="absolute top-[500px] sm:top-[520px] md:top-[490px] md:w-[80px] lg:top-[460px] lg:w-[auto] xl:top-[380px] 2xl:top-[220px] right-[57px] z-1"
            src="/images/HomeHero/globoDerecha.svg"
            alt="Experiencies in SparkClub"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.28 }}
            style={{ y: rightBubbleY }}
          />

        </div>
      </div>

      {/* Buttons */}
      <div className="absolute inset-x-0 bottom-30 z-20 flex flex-col justify-center items-center md:flex-row gap-[18px] px-4 lg:px-0">
        <Button
          btnText="Plan Your Event"
          btnClass="primary-btn"
          href="https://app.formbricks.com/s/cmhp7c1hu6w0jad01xarsqg9u"
        />
        <Button
          btnText="Try Nevenka (alpha)"
          btnClass="tertiary-btn"
          href="https://zcal.co/sparkclub"
        >
          <img
            className="ml-[15px]"
            src="/images/Icons/black-arrow.svg"
            alt="Arrow Icon"
          />
        </Button>
      </div>

    </div>


  );
}
