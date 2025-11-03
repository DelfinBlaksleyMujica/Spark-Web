"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../generals/Button";
import { public_sans } from "@/app/fonts/fonts";

export default function Hero({ data }) {
  const { scrollY } = useScroll();

  // PARALLAX EFFECT
  const y = useTransform(scrollY, [0, 100], [0, -100]);

  return (
    <div className="relative w-full h-[1700px] sm:h-[1800px] lg:h-[1700px] xl:h-[1650px] 2xl:h-[1700px] flex items-center justify-center overflow-hidden bg-[#151515]">
      {/* GRADIENTE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" />

      {/* Content Container */}
      <div className="w-full h-auto flex justify-center items-center z-10 px-4 2xl:mt-[-100px] absolute top-[50px] md:top-[150px] xl:top-[200px] 2xl:top-[300px]">
        <div className="flex flex-col gap-6 max-w-[1024px] text-center text-white pt-[10px] sm:pt-[100px] md:pt-[65px] 2xl:pt-[50px]">
          {/*Top Pill*/}
          <div className="w-full flex justify-center items-center">
            <div className="bg-[#212121] rounded-[16px] w-auto px-[24px] py-[8px] flex justify-center items-center">
              <p
                className={`${public_sans.className} text-[16px] md:text-[18px] #FFFFFF font-medium leading-[100%] tracking-tight  `}
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
          <img
            className="absolute z-0 top-[700px] sm:top-[770px] md:top-[700px] md:w-[100px] lg:top-[550px] lg:w-[auto] xl:top-[500px] 2xl:top-[300px] left-0 "
            src="/images/HomeHero/imagenIzquierdaSuperior.svg"
            alt="Experiencies in SparkClub"
          />

          <img
            className="absolute top-[650px] sm:top-[700px] md:top-[660px] md:w-[80px] lg:top-[470px] lg:w-[auto] xl:top-[420px] 2xl:top-[220px] left-[85px] z-1"
            src="/images/HomeHero/globoIzquierda.svg"
            alt="Experiencies in SparkClub"
          />
          <div className="absolute top-[350px] sm:top-[450px] md:top-[400px] lg:top-[380px]  left-0 w-full flex justify-center items-center">
            <img
              className="h-[180px] w-[220px] sm:h-[245px] sm:w-[300px] z-20"
              src="/images/HomeHero/nevenkaAsset.png"
              alt="Team Building Experiences with SparkClub"
            />
          </div>
          <div className="w-full flex justify-center items-center absolute left-0 top-[880px] sm:top-[900px]  md:top-[800px] lg:top-[700px] xl:top-[550px] 2xl:top-[550px] z-10">
            <img
              className="w-[965px] h-[626px]"
              src="/images/HomeHero/pantallaPlataforma.svg"
              alt="Imagen de plataforma de SparkClub"
            />
          </div>

          <img
            className="absolute top-[650px] sm:right-[75px] sm:top-[780px] md:top-[750px] md:w-[100px] lg:top-[507px] lg:w-[auto] xl:top-[450px] 2xl:top-[300px] right-0 z-0"
            src="/images/HomeHero/imagenDerechaSuperior.svg"
            alt="Experiencies in SparkClub"
          />

          <img
            className="absolute top-[600px] sm:top-[700px]   md:top-[690px] md:w-[80px] lg:top-[420px] lg:w-[auto] xl:top-[380px] 2xl:top-[220px] right-[57px] z-1"
            src="/images/HomeHero/globoDerecha.svg"
            alt="Experiencies in SparkClub"
          />

        </div>
      </div>

      {/* Buttons */}
      <div className="absolute inset-x-0 bottom-30 z-20 flex flex-col justify-center items-center md:flex-row gap-[18px] px-8">
        <Button
          btnText="Plan Your Event"
          btnClass="primary-btn"
          href="https://forms.gle/QwyfJa6Nr6ZWz5hY7"
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
