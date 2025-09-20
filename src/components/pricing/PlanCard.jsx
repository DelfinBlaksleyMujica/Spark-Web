import { public_sans } from "@/app/fonts/fonts";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PlanCard({
  id,
  name,
  price,
  features,
  icon,
  href, // poné acá tu link de WhatsApp (p. ej. "https://wa.me/54911XXXXXX?text=Quiero%20el%20plan%20...")
  btnText,
  bgColor,
  // mobile accordion
  isMobile = false,
  expanded = false,
  onToggle,
}) {
  // Mobile: cerrada = "Leer más"; abierta = "Get it" (link a WhatsApp)
  const displayBtnText = isMobile
    ? expanded
      ? "Get it"
      : "Plan Features"
    : btnText;

  // Estilos base
  const baseBg = bgColor === "primary" ? "bg-[#FFFFFF]" : "bg-[#F2C94C]";

  // Variants para animación suave del bloque de features
  const featuresVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      clipPath: "inset(0 0 100% 0 round 8px)",
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      clipPath: "inset(0 0 0% 0 round 8px)",
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div
      className={`${baseBg} rounded-[10px] px-[25px] sm:px-[34px] py-[18px] sm:py-[26px] relative flex flex-col justify-start items-start w-[337px] h-auto sm:h-[500px]`}
    >
      {/* Header: Title + Price */}
      <div className="flex justify-between items-center w-full gap-[20px] mb-[16px]">
        <h3
          className={`${public_sans.className} font-semibold text-[26px] sm:text-[32px] text-black leading-[100%] tracking-tight`}
        >
          {name}
        </h3>
        <p
          className={`${public_sans.className} font-semibold text-[24px] text-black leading-[100%] tracking-tight`}
        >
          {price} $/mo
        </p>
      </div>

      {/* BLOQUE ANIMADO: Includes + features
          - Desktop: siempre visible.
          - Mobile: aparece entre título y botón SOLO si expanded === true. */}
      <AnimatePresence initial={false} mode="popLayout">
        {(!isMobile || expanded) && (
          <motion.div
            key="features"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={featuresVariants}
            className="w-full overflow-hidden"
          >
            <div className="flex flex-col justify-start items-start gap-[12px] w-full">
              <h4
                className={`${public_sans.className} text-black font-medium text-[20px] leading-[100%] tracking-tight`}
              >
                Includes:
              </h4>
              <ul className="pl-0 w-full">
                {features.map((feature, index) => (
                  <li
                    className={`${public_sans.className} font-medium text-[14px] text-black leading-[136%] tracking-tight flex justify-start items-center gap-[15px] mb-[10px]`}
                    key={index}
                  >
                    <img src={icon} alt="" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA:
          - Mobile: botón "Leer más" (abre). Si está abierta: link "Get it" a WhatsApp (nueva pestaña, no cierra).
          - Desktop: link abajo absoluto con texto original. */}
      {isMobile ? (
        <motion.div
          key="mobile-cta"
          layout
          className="w-full mt-[14px]"
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {!expanded ? (
            <button
              onClick={onToggle}
              aria-expanded={expanded}
              aria-controls={`features-${id}`}
              className="bg-[#333333] text-white px-[5px] py-[10px] rounded-[20px] w-full flex justify-center items-center text-[16px] leading-[100%] tracking-tight"
            >
              {displayBtnText /* "Leer más" */}
            </button>
          ) : (
            <a
              href={href}
              target="_blank"
              rel="nofollow noopener noreferrer" // "no_look" interpretado como nofollow + seguridad
              className="bg-[#333333] text-white px-[5px] py-[10px] rounded-[20px] w-full flex justify-center items-center text-[16px] leading-[100%] tracking-tight"
            >
              {displayBtnText /* "Get it" */}
            </a>
          )}
        </motion.div>
      ) : (
        <div className="w-full flex justify-center items-center absolute bottom-[15px] left-0 px-[20px]">
          <Link
            href={href}
            className="bg-[#333333] text-white px-[5px] py-[10px] rounded-[20px] w-full flex justify-center items-center text-[16px] leading-[100%] tracking-tight"
          >
            {btnText}
          </Link>
        </div>
      )}
    </div>
  );
}
