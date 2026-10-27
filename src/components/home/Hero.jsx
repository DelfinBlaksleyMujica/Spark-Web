"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import Button from "../generals/Button";
import ChannelsBar from "./ChannelsBar";
import { inter, public_sans } from "@/app/fonts/fonts";
import NavUserProviderToggle from "../generals/NavUserProviderToggle";

// Imágenes laterales (solo xl+), con top relativo al inicio del mockup.
const SIDE_IMAGES = [
  {
    src: "/images/HomeHero/imagenIzquierdaSuperior.svg",
    className: "left-0 top-[16px] w-[152px]",
    delay: 0.1,
    layer: "back",
  },
  {
    src: "/images/HomeHero/imagenIzquierdaInferior.svg",
    className: "left-[4%] top-[262px] w-[180px]",
    delay: 0.1,
    layer: "back",
  },
  {
    src: "/images/HomeHero/globoIzquierda.svg",
    className: "left-[7.6%] top-[-56px] w-[110px]",
    delay: 0.18,
    layer: "bubble",
  },
  {
    src: "/images/HomeHero/imagenDerechaSuperior.svg",
    className: "left-[84%] top-[-24px] w-[176px]",
    delay: 0.2,
    layer: "back",
  },
  {
    src: "/images/HomeHero/imagenDerechaInferior.svg",
    className: "right-0 top-[196px] w-[150px]",
    delay: 0.2,
    layer: "back",
  },
  {
    src: "/images/HomeHero/globoDerecha.svg",
    className: "left-[90.5%] top-[-70px] w-[92px]",
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
        <div className="flex w-full flex-col items-center gap-[20px]">
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

          {/* Demo en video */}
          <a
            href="#como-funciona"
            className={`${inter.className} group flex items-center gap-[10px] rounded-full py-[6px] pl-[6px] pr-[14px] text-[15px] font-medium text-[#d4d4d8] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-[#FCD34D]`}
          >
            <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#FCD34D] text-black transition-transform group-hover:scale-110">
              <Play className="ml-[2px] h-[14px] w-[14px] fill-current" aria-hidden="true" />
            </span>
            Ver la demo en video
          </a>
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
      <div className="relative mt-[56px] md:mt-[64px] w-full px-4 pb-0 xl:pb-[48px]">
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
          className="relative z-10 mx-auto w-full max-w-[640px] md:max-w-[1111px] [mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <div className="w-full md:w-[80%] overflow-hidden rounded-[12px] border border-[#2c2c2c] bg-[#121212] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <Image
              className="block h-auto w-full"
              src="/images/HomeHero/mockupDesktop.png"
              alt="Plataforma de SparkClub: Nevenka arma un evento a partir de tu descripción"
              width={1779}
              height={838}
              sizes="(min-width: 1111px) 889px, (min-width: 768px) 80vw, 100vw"
              priority
            />
          </div>
          {/* IPHONE MOCKUP */}
          <div className="hidden md:block absolute right-0 top-[10%] w-[23%] overflow-hidden rounded-[16px] border border-[#2c2c2c] bg-[#151515] shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
            <Image
              className="block h-auto w-full"
              src="/images/HomeHero/mockupMobile.png"
              alt="App móvil de SparkClub con experiencias recomendadas"
              width={256}
              height={376}
              sizes="256px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
