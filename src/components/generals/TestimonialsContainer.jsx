// TestimonialsContainer.jsx
"use client";

import React, {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import CardDeTestimonio from "./CardDeTestimonio";
import { public_sans } from "@/app/fonts/fonts";

// Velocidad en px/seg
const SPEED = 80;

export default function TestimonialsContainer({ data }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);

  // setW: ancho de UN set (N cards + N-1 gaps)
  // periodW: setW + 1 gap => distancia exacta donde el patrón [card+gap] vuelve a empezar
  const [setW, setSetW] = useState(0);
  const [periodW, setPeriodW] = useState(0);
  const [repeatCount, setRepeatCount] = useState(3);

  // Clonamos el set las veces necesarias
  const items = useMemo(() => {
    const out = [];
    const base = Array.isArray(data?.testimonials) ? data.testimonials : [];
    for (let i = 0; i < repeatCount; i++) {
      for (const t of base) out.push({ ...t, _k: `${i}-${t.id}` });
    }
    return out;
  }, [data?.testimonials, repeatCount]);

  // Medición (incluye gap real de CSS)
  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      const base = data?.testimonials ?? [];
      if (!track || !viewport || base.length === 0) return;

      const first = track.children[0];
      if (!first) return;

      const rect = first.getBoundingClientRect();
      const cardW = rect?.width ?? first?.offsetWidth ?? 0;

      const styles = getComputedStyle(track);
      const gap =
        parseFloat(styles.gap || styles.columnGap || styles.rowGap || "0") || 0;

      const n = base.length;
      const _setW = n * cardW + (n - 1) * gap;
      const _periodW = _setW + gap; // 🔑 incluir el gap entre el último y el primero del siguiente set

      setSetW(_setW);
      setPeriodW(_periodW);

      const vw = viewport.offsetWidth;
      // duplicar lo suficiente para cubrir el viewport con holgura
      const needed = Math.ceil(vw / Math.max(_setW, 1)) + 2;
      setRepeatCount(Math.max(3, needed));

      x.set(0); // evitar saltos al redimensionar
    };

    measure();
    window.addEventListener("resize", measure);

    // Re-medir si cambia el tamaño real de la primera card (imágenes, fuentes, etc.)
    let ro;
    if (trackRef.current) {
      ro = new ResizeObserver(measure);
      const firstChild = trackRef.current.children?.[0];
      if (firstChild) ro.observe(firstChild);
    }

    return () => {
      window.removeEventListener("resize", measure);
      if (ro) ro.disconnect();
    };
  }, [x, data?.testimonials]);

  // Animación infinita sin “corte”: envolver por periodW (set + 1 gap)
  useAnimationFrame((_, delta) => {
    if (paused || periodW === 0) return;
    const dt = delta / 1000;
    let next = x.get() - SPEED * dt;
    if (next <= -periodW) next += periodW; // 👈 wrap suave, alineado con el patrón
    x.set(next);
  });

  // Early return si no hay data
  if (!data?.testimonials || data.testimonials.length === 0) {
    return null;
  }

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
          style={{
            x,
            willChange: "transform",
            transform: "translate3d(0,0,0)",
          }}
          className="flex flex-nowrap items-stretch gap-[35px]"
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
