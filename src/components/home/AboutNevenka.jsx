"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import Button from "../generals/Button";
import { inter, public_sans } from "@/app/fonts/fonts";

const VIDEO_ID = "TD80Ze-7Cys"; // Sparkclub | MVP V1

// Cada tramo de la línea se llena en orden y enciende el paso siguiente
const SEGMENT_DURATION = 0.5;

function Timeline({ steps }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const active = prefersReduced || isInView;

  return (
    <ol ref={ref}>
      {steps.map((step, i) => {
        const delay = prefersReduced ? 0 : SEGMENT_DURATION * i;
        const isLast = i === steps.length - 1;

        return (
          <li
            key={step.id}
            className="relative grid grid-cols-[32px_1fr] gap-x-[20px] pb-[36px] last:pb-0"
          >
            {/* Tramo hasta el próximo paso: base gris + relleno ámbar */}
            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="absolute left-[15px] top-[32px] bottom-0 w-[2px] bg-zinc-200"
                />
                <motion.span
                  aria-hidden="true"
                  className="absolute left-[15px] top-[32px] bottom-0 w-[2px] origin-top bg-[#FCD34D]"
                  initial={false}
                  animate={{ scaleY: active ? 1 : 0 }}
                  transition={{
                    duration: prefersReduced ? 0 : SEGMENT_DURATION,
                    delay: prefersReduced ? 0 : delay + 0.15,
                    ease: "easeInOut",
                  }}
                />
              </>
            )}
            <motion.span
              aria-hidden="true"
              className={`${inter.className} relative z-10 flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 text-[14px] font-semibold`}
              initial={false}
              animate={
                active
                  ? { backgroundColor: "#FCD34D", borderColor: "#FCD34D", color: "#18181b" }
                  : { backgroundColor: "#ffffff", borderColor: "#e4e4e7", color: "#a1a1aa" }
              }
              transition={{ duration: 0.3, delay: i === 0 ? 0 : delay + 0.15 }}
            >
              {i + 1}
            </motion.span>

            <div className="pt-[4px]">
              <p className={`${inter.className} text-[14px] font-medium text-zinc-500`}>
                {step.time}
              </p>
              <h3 className="mt-[4px] text-[20px] sm:text-[22px] font-semibold leading-[1.25] tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className={`${inter.className} mt-[6px] text-[16px] leading-[1.5] text-zinc-600`}>
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function DemoVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[12px] bg-black shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
          title="Demo de SparkClub: Nevenka crea un evento"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        // Póster liviano: el iframe de YouTube carga recién al tocar play
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Reproducir la demo de SparkClub"
          className="group absolute inset-0 h-full w-full focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-[#FCD34D]"
        >
          <Image
            src="/images/Nevenka/demo-poster.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 680px, 100vw"
            className="object-cover"
          />
          <span
            className={`${inter.className} absolute bottom-[16px] left-[16px] sm:bottom-[24px] sm:left-[24px] flex items-center gap-[10px] rounded-full bg-[#FCD34D] py-[8px] pl-[8px] pr-[18px] text-[15px] font-semibold text-black shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform duration-200 group-hover:scale-105`}
          >
            <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-black text-[#FCD34D]">
              <Play className="ml-[2px] h-[14px] w-[14px] fill-current" aria-hidden="true" />
            </span>
            Ver la demo
          </span>
        </button>
      )}
    </div>
  );
}

export default function AboutNevenka({ data }) {
  return (
    <section
      id="como-funciona"
      className={`bg-white ${public_sans.className} text-zinc-900 scroll-mt-[90px]`}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[48px] px-4 sm:px-6 py-[64px] lg:grid-cols-[5fr_7fr] lg:gap-x-[72px] lg:gap-y-[40px] lg:py-[96px]">
        {/* Izquierda: título + pasos */}
        <div>
          <h2 className="text-[32px] sm:text-[40px] font-medium leading-[1.15] tracking-[-0.02em]">
            {data.title}{" "}
            <span className="whitespace-nowrap">
              <Image
                src="/images/Logos/Nevenka_logo.png"
                alt="Nevenka"
                width={150}
                height={42}
                className="inline-block h-auto w-[130px] sm:w-[150px] object-contain align-[-0.1rem]"
              />
              ?
            </span>
          </h2>
          <p className={`${inter.className} mt-[16px] max-w-[46ch] text-[17px] leading-[1.6] text-zinc-600`}>
            {data.firstSubtitle} {data.secondSubtitle}
          </p>

          <div className="mt-[40px]">
            <Timeline steps={data.cards} />
          </div>
        </div>

        {/* Derecha: video */}
        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <DemoVideo />
        </div>

        {/* CTA: debajo de los pasos en desktop, al final en mobile */}
        <div className="flex justify-center lg:justify-start lg:col-start-1 lg:row-start-2 lg:-mt-[8px]">
          <Button
            btnText="Sumate a la lista de espera"
            btnClass="primary-btn"
            href="https://app.formbricks.com/s/cmj1mpv5u3avdad015eandi7o"
          />
        </div>
      </div>
    </section>
  );
}
