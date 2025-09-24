// TestimonialsContainer.jsx
"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import CardDeTestimonio from "./CardDeTestimonio";
import { public_sans } from "@/app/fonts/fonts";

const testimonios = [
  {
    id: 1,
    img: "/images/Testimonios/TestimonialIconPlaceholder1.jpeg",
    testimonio:
      "Working with SparkClub feels natural. The connections are there, the way of working is clear, and everything runs smooth from start to finish. It´s the kind of partner you don´t need to over-explain things to - they get it and make it happen.",
    firma: "Technical production",
  },
  {
    id: 2,
    img: "/images/Testimonios/TestimonialIconPlaceholder2.svg",
    testimonio:
      "I like how SparkClub opens doors. One week I´m setting up an event for a startup, the next I´m meeting a new brand I never thought I´d work with. They make thos connections possible, and for frelancers like me, that´s gold.",
    firma: "Wellness Coach",
  },
  {
    id: 3,
    img: "/images/Testimonios/TestimonialIconPlaceholder3.svg",
    testimonio:
      "With SparkClub, creating events stopped being a headache. The platform connects us instantly with trusted suppliers, and in minutes we have everything set up. It´s seamless, efficient, and lets us focus on delivering experiences that strenghten our brand.",
    firma: "FMCG Beverages",
  },
  {
    id: 4,
    img: "/images/Testimonios/TestimonialIconPlaceholder4.svg",
    testimonio:
      "We needed to organize an activation for DevConnect, and we were 10,500 km away from the venue. Honestly, I didn´t expect it to come together so fast. SparkClub managed everything with precision and delivered an event that felt like we´d been on the ground al along.",
    firma: "Industry-Blockchain",
  },
];

// Velocidad en px/seg
const SPEED = 80;

export default function TestimonialsContainer() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);

  // setW: ancho de UN set (N cards + N-1 gaps)
  // periodW: **setW + 1 gap** => distancia exacta donde el patrón [card+gap] vuelve a empezar
  const [setW, setSetW] = useState(0);
  const [periodW, setPeriodW] = useState(0);
  const [repeatCount, setRepeatCount] = useState(3);

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;

      const first = track.children[0];
      // medir ancho real de la card (más fiable con zoom/escala que offsetWidth)
      const rect = first?.getBoundingClientRect();
      const cardW = rect?.width ?? first?.offsetWidth ?? 0;

      const styles = getComputedStyle(track);
      const gap =
        parseFloat(styles.gap || styles.columnGap || styles.rowGap || "0") || 0;

      const n = testimonios.length;

      const _setW = n * cardW + (n - 1) * gap;
      const _periodW = _setW + gap; // 🔑 incluir el gap entre el último y el primero del siguiente set

      setSetW(_setW);
      setPeriodW(_periodW);

      const vw = viewport.offsetWidth;
      // duplicar lo suficiente para cubrir el viewport con holgura
      const needed = Math.ceil(vw / _setW) + 2;
      setRepeatCount(Math.max(3, needed));

      x.set(0); // evitar saltos al redimensionar
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [x]);

  // animación infinita sin “corte”: envolver por periodW (set + 1 gap)
  useAnimationFrame((_, delta) => {
    if (paused || periodW === 0) return;
    const dt = delta / 1000;
    let next = x.get() - SPEED * dt;
    if (next <= -periodW) next += periodW; // 👈 wrap suave
    x.set(next);
  });

  // clonado del set
  const items = useMemo(() => {
    const out = [];
    for (let i = 0; i < repeatCount; i++) {
      for (const t of testimonios) out.push({ ...t, _k: `${i}-${t.id}` });
    }
    return out;
  }, [repeatCount]);

  return (
    <div className="w-full overflow-x-hidden py-[82px] flex flex-col justify-center items-center gap-6 bg-[#F3F3F3]">
      <h2
        className={`${public_sans.className} font-medium text-[40px] leading-[100%] tracking-tight text-center text-[#000000] mb-[62px]`}
      >
        What people are saying
      </h2>

      <div
        ref={viewportRef}
        className="relative w-full max-w-[1440px] overflow-hidden"
        style={{ height: 336 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          ref={trackRef}
          style={{ x, willChange: "transform" }}
          className="flex gap-[35px]"
        >
          {items.map((t) => (
            <CardDeTestimonio
              key={t._k}
              imagen={t.img}
              testimonio={t.testimonio}
              firma={t.firma}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
