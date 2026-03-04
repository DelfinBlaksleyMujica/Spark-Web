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
  const leftBackY = useTransform(scrollY, [0, 40], [0, -60]);  // far left bg
  const leftBubbleY = useTransform(scrollY, [0, 40], [0, -60]);  // left speech bubble
  const centerCardY = useTransform(scrollY, [0, 40], [0, -20]);  // nevenka card
  const screenY = useTransform(scrollY, [0, 80], [0, -10]);  // platform screen
  const rightBackY = useTransform(scrollY, [0, 40], [0, -60]);  // far right bg
  const rightBubbleY = useTransform(scrollY, [0, 40], [0, -60]);  // right speech bubble

  return (
    <div className="relative w-full h-[890px] sm:h-[1050px]  md:h-[1005px] lg:h-[1010px] xl:h-[1060px]  2xl:h-[1150px] flex items-center justify-center overflow-hidden bg-[#151515]">


      <div className="md:hidden absolute top-[120px] left-0 right-0 flex justify-center z-[60] pointer-events-auto">
        <motion.div variants={mobileLinkVars}>
          <NavUserProviderToggle instanceId="hero" />
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
                ✨ De semanas a minutos
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


          {/* Buttons */}
          <div className="z-20 flex flex-col justify-center items-center md:flex-row gap-[18px] px-4 lg:px-0 ">
            <Button
              btnText="Planifica tu evento"
              btnClass="primary-btn"
              href="https://app.formbricks.com/s/cmhp7c1hu6w0jad01xarsqg9u"
            />
            <Button
              btnText="Probar Nevenka (alpha)"
              btnClass="tertiary-btn"
              href="https://zcal.co/sparkclub"
            >
              <img
                className="ml-[15px]"
                src="/images/Icons/black-arrow.svg"
                alt="Icono de flecha"
              />
            </Button>
          </div>

          {/*Floating Images*/}
          {/* LEFT BACK IMAGE */}
          <motion.img
            className="hidden xl:block xl:absolute xl:z-0  xl:w-[auto] xl:top-[570px] 2xl:top-[450px] lg:left-0"
            src="/images/HomeHero/imagenIzquierdaSuperior.svg"
            alt="Experiencias en SparkClub"
            // entry animation
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            // parallax
            style={{ y: leftBackY }}
          />

          {/* LEFT bottom IMAGE */}
          <motion.img
            className="hidden lg:block lg:absolute lg:z-0 lg:top-[900px] lg:w-[auto] xl:top-[800px] 2xl:top-[800px] lg:left-40 xl:left-[100px] 2xl:left-[150px]"
            src="/images/HomeHero/imagenIzquierdaInferior.svg"
            alt="Experiencias en SparkClub"
            // entry animation
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            // parallax
            style={{ y: leftBackY }}
          />


          {/* LEFT BUBBLE */}
          <motion.img
            className="hidden xl:block xl:absolute xl:w-[100px] xl:left-[90px]   xl:top-[520px] 2xl:top-[400px] xl:z-1"
            src="/images/HomeHero/globoIzquierda.svg"
            alt="Experiencias en SparkClub"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
            style={{ y: leftBubbleY }}
          />


          {/* PLATFORM SCREEN + IPHONE (md+) */}
          <div
            className="pt-10 z-10"
          // initial={{ opacity: 0, y: 80 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1, ease: "easeOut", delay: 0.35 }}
          // style={{ y: screenY }}
          >
            <div className="relative inline-block">
              <img
                className="md:top-[580px] lg:top-[500px] xl:top-[520px] 2xl:top-[500px]  w-[500px] sm:w-[600px] md:w-[600px] lg:w-[720px] 2xl:w-[965px] h-auto"
                src="/images/HomeHero/Mockup_pantalla.svg"
                alt="Imagen de plataforma de SparkClub"
              />
              {/* IPHONE MOCKUP */}
              <img
                className="hidden md:block md:w-[130px] lg:w-[150px] 2xl:w-[260px] absolute md:top-[100px] lg:top-[120px] 2xl:top-[80px] md:-right-[40px] lg:-right-[60px] 2xl:-right-[80px] z-20"
                src="/images/HomeHero/Iphone_mockup.svg"
                alt="Vista móvil de SparkClub"
              />
            </div>
          </div>

          {/* RIGHT BACK IMAGE */}
          <motion.img
            className="hidden xl:block xl:absolute xl:z-0  xl:w-[auto] xl:top-[570px] 2xl:top-[450px] 3xl:w-[400px] xl:right-0"
            src="/images/HomeHero/imagenDerechaSuperior.svg"
            alt="Experiencias en SparkClub"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            style={{ y: rightBackY }}
          />


          {/* RIGHT bottom IMAGE */}
          <motion.img
            className="hidden xl:block xl:absolute xl:z-0 xl:w-[auto] xl:top-[800px] 2xl:top-[700px] xl:right-0"
            src="/images/HomeHero/imagenDerechaInferior.svg"
            alt="Experiencias en SparkClub"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            style={{ y: rightBackY }}
          />

          {/* RIGHT BUBBLE */}
          <motion.img
            className="hidden xl:block xl:absolute  right-[110px] xl:w-[auto] xl:top-[520px] 2xl:top-[400px] z-1"
            src="/images/HomeHero/globoDerecha.svg"
            alt="Experiencias en SparkClub"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.28 }}
            style={{ y: rightBubbleY }}
          />
        </div>
      </div>



    </div>


  );
}
