"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "../generals/Button";
import ChannelsBar from "./ChannelsBar";
import { inter, public_sans } from "@/app/fonts/fonts";
import NavUserProviderToggle from "../generals/NavUserProviderToggle";

// Imágenes laterales (solo xl+). Posiciones tomadas del Figma (frame de 1512px),
// con top relativo al inicio del mockup.
const SIDE_IMAGES = [
  {
    src: "/images/HomeHero/imagenIzquierdaSuperior.svg",
    className: "left-0 top-[-6px] w-[152px]",
    delay: 0.1,
    layer: "back",
  },
  {
    src: "/images/HomeHero/imagenIzquierdaInferior.svg",
    className: "left-[5.6%] top-[298px] w-[213px]",
    delay: 0.1,
    layer: "back",
  },
  {
    src: "/images/HomeHero/globoIzquierda.svg",
    className: "left-[7.6%] top-[-67px] w-[121px]",
    delay: 0.18,
    layer: "bubble",
  },
  {
    src: "/images/HomeHero/imagenDerechaSuperior.svg",
    className: "left-[82.7%] top-[-57px] w-[188px]",
    delay: 0.2,
    layer: "back",
  },
  {
    src: "/images/HomeHero/imagenDerechaInferior.svg",
    className: "right-0 top-[212px] w-[167px]",
    delay: 0.2,
    layer: "back",
  },
  {
    src: "/images/HomeHero/globoDerecha.svg",
    className: "left-[89.8%] top-[-100px] w-[98px]",
    delay: 0.28,
    layer: "bubble",
  },
];

export default function Hero({ data }) {
  const { scrollY } = useScroll();

  // Parallax values
  const backY = useTransform(scrollY, [0, 300], [0, -60]);
  const bubbleY = useTransform(scrollY, [0, 300], [0, -90]);

  return (
    <section className="relative w-full overflow-hidden bg-[#151515] pt-[110px] md:pt-[146px]">
      {/* Patrón de fondo */}
      <img
        className="pointer-events-none absolute left-1/2 top-0 h-[1102px] w-full min-w-[1512px] -translate-x-1/2 object-cover"
        src="/images/HomeHero/heroPattern.svg"
        alt=""
        aria-hidden="true"
      />

      {/* Franja blanca: el mockup "pisa" la sección siguiente */}
      <div className="absolute bottom-0 left-0 right-0 h-[24px] md:h-[40px] bg-white" />

      <div className="md:hidden relative z-20 flex justify-center mb-[32px]">
        <NavUserProviderToggle instanceId="hero" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 mx-auto flex w-full max-w-[897px] flex-col items-center gap-[32px] md:gap-[40px] px-4 text-center text-white">
        <div className="flex w-full flex-col items-center gap-[24px] md:gap-[28px]">
          {/*Top Pill*/}
          <div className="rounded-[16px] border border-[#2c2c2c] bg-[#212121] px-[24px] py-[8px]">
            <p
              className={`${inter.className} text-[14px] md:text-[16px] font-medium leading-normal`}
            >
              ✨ De semanas a minutos
            </p>
          </div>

          {/* Animated Title */}
          <motion.h1
            className={`${public_sans.className} text-[40px] leading-[44px] sm:text-[52px] sm:leading-[56px] md:text-[64px] md:leading-[68px] xl:text-[74px] xl:leading-[76px] font-medium tracking-[-0.04em]`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {data.tituloPrincipal} <br /> {data.kwTituloPrincipal}
          </motion.h1>
        </div>

        {/* Paragraph */}
        <p
          className={`${inter.className} max-w-[820px] text-[16px] leading-[26px] md:text-[20px] md:leading-[30px] font-light tracking-[-0.04em] text-[#f2f2f2]`}
        >
          {data.firstSubtitle}
          <strong className="font-semibold text-white">
            {data.strongSubtitle}
          </strong>{" "}
          {data.secondPartSubtitle}
        </p>

        {/* Buttons */}
        <div className="flex w-full flex-col items-center justify-center gap-[16px] md:flex-row">
          <Button
            btnText={
              <>
                <Sparkles className="mr-[10px] h-[18px] w-[18px]" aria-hidden="true" />
                Crear Evento con IA
              </>
            }
            btnClass="ai-btn"
            href="https://sparkclub-plataforma-brands.vercel.app/"
          >
            <img
              className="ml-[12px]"
              src="/images/Icons/black-arrow.svg"
              alt=""
              aria-hidden="true"
            />
          </Button>
          <Button
            btnText="Agendar con un asesor"
            btnClass="secondary-btn"
            href="https://zcal.co/sparkclub/discovery"
          />
        </div>

        {/* Redes (mobile) */}
        <ChannelsBar className="lg:hidden" />
      </div>

      {/* Redes (desktop): columna vertical a la derecha */}
      <ChannelsBar
        orientation="vertical"
        className="hidden lg:block absolute right-[32px] xl:right-[48px] top-[190px] z-30"
      />

      {/* Mockups + imágenes laterales */}
      <div className="relative mt-[56px] md:mt-[72px] lg:mt-[64px] w-full px-4">
        {SIDE_IMAGES.map((img) => (
          <motion.img
            key={img.src}
            className={`hidden xl:block absolute z-0 h-auto ${img.className}`}
            src={img.src}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: img.delay }}
            style={{ y: img.layer === "bubble" ? bubbleY : backY }}
          />
        ))}

        <motion.div
          className="relative z-10 mx-auto w-full max-w-[600px] md:max-w-[1111px]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <img
            className="block h-auto w-full md:w-[80%]"
            src="/images/HomeHero/Mockup_pantalla.svg"
            alt="Plataforma de SparkClub creando un evento con Nevenka"
          />
          {/* IPHONE MOCKUP */}
          <img
            className="hidden md:block absolute left-[77%] top-[7.5%] h-auto w-[23%]"
            src="/images/HomeHero/iphone_mockup.svg"
            alt="Vista móvil de SparkClub"
          />
        </motion.div>
      </div>
    </section>
  );
}
