// TestimonialsContainer.jsx
"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import CardDeTestimonio from "./CardDeTestimonio";
import { public_sans } from "@/app/fonts/fonts";

// Velocidad en px/seg
const SPEED = 80;

export default function TestimonialsContainer({ data }) {
  console.log("DATA", data);

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

      const n = data.testimonials.length;

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
      for (const t of data.testimonials) out.push({ ...t, _k: `${i}-${t.id}` });
    }
    return out;
  }, [repeatCount]);

  return (
    <div className="w-full overflow-x-hidden py-[82px] flex flex-col justify-center items-center gap-6 bg-[#F3F3F3]">
      <h2
        className={`${public_sans.className} font-medium text-[40px] leading-[100%] tracking-tight text-center text-[#000000] mb-[62px]`}
      >
        {data.title}
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
          {data.testimonials.map((t) => (
            <CardDeTestimonio
              key={t.id}
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
