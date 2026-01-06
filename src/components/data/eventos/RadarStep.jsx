"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { inter } from "@/app/fonts/fonts";

const radarCardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -10, scale: 0.96, transition: { duration: 0.25 } },
};

const radarBgVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.25 } },
};

const radarItemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28 } },
};

const renderEnergyEmoji = (opcion) => {
  if (opcion === "Bajo") return "😴";
  if (opcion === "Medio") return "🙂";
  if (opcion === "Alto") return "😁";
  return "✨";
};

export default function RadarStep({
  pregunta,
  opciones,
  questionData,
  onSelect,
  onSubmit,
  isSubmitting,
}) {
  return (
    <motion.div
      className="w-full h-full"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Título */}
      <h2 className="text-[#FCD34D] mb-[40px] text-[20px] font-bold leading-[100%] tracking-tight">
        Radar Emocional:{" "}
        <span className="text-[#FAFAFA] font-medium">{pregunta}</span>
      </h2>

      {/* FORM COMPLETO */}
      <form onSubmit={onSubmit}>
        <div className="h-[400px] flex justify-center items-center">
          <motion.div
            variants={radarCardVariants}
            className="relative w-[60%] flex justify-center items-center"
          >
            {/* LUCES / ILUMINACIONES */}
            <motion.div
              variants={radarBgVariants}
              className="absolute inset-0 -z-10"
            >
              <div className="absolute -top-10 right-0 h-48 w-48 bg-[#FACC15]/25 blur-3xl rounded-full" />
              <div className="absolute -top-10 left-0 h-48 w-48 bg-[#FACC15]/25 blur-3xl rounded-full" />
              <div className="absolute top-10 left-1/2 -translate-x-1/2 h-40 w-40 bg-[#FACC15]/30 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-20 w-72 bg-[#FACC15]/20 blur-3xl rounded-full" />
            </motion.div>

            {/* CARDS DORADAS DE FONDO */}
            <img
              className="absolute top-[-50px] left-[78px] w-[300px] h-[350px] z-10 iluminación-amarilla"
              src="/images/CuestionarioData/cardDoradaFondo-RadarEmocional.svg"
              alt="Fondo radar emocional"
            />
            <img
              className="absolute top-[-50px] left-[140px] w-[300px] h-[350px] z-20 iluminación-amarilla"
              src="/images/CuestionarioData/cardDoradaSegunda-RadarEmocional.svg"
              alt="Detalle radar emocional"
            />

            {/* CARD PRINCIPAL */}
            <div className="relative z-30 bg-[#1A1A1A] rounded-[16px] h-[355px] w-[320px] p-[24px] flex flex-col items-center overflow-hidden">
              {/* Nevenka */}
              <motion.img
                variants={radarItemVariants}
                src="/images/CuestionarioData/nevenka.png"
                alt="Nevenka"
                className="mb-[20px]"
              />

              {/* Emojis / Botones */}
              <motion.div
                variants={radarItemVariants}
                className="flex gap-[32px] mt-auto mb-[32px]"
              >
                {opciones?.map((opcion, idx) => {
                  const active = questionData.respuestas.includes(opcion);

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => onSelect(opcion)}
                      className={`
                        ${inter.className}
                        w-[52px] h-[52px] rounded-full text-[22px]
                        flex justify-center items-center
                        bg-[#27272A] border-[1px] transition-all
                        ${
                          active
                            ? "border-[#FCD34D] shadow-[0_0_20px_rgba(250,204,21,0.5)]"
                            : "border-[#3F3F46]"
                        }
                      `}
                    >
                      {renderEnergyEmoji(opcion)}
                    </button>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* BOTÓN ENVIAR */}
        <div className="w-full flex justify-end items-center mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              ${inter.className}
              bg-[#FAFAFA] px-4 py-1 rounded-[5px]
              text-[#18181B] text-[14px]
              cursor-pointer flex items-center gap-2
              disabled:opacity-70 disabled:cursor-not-allowed
            `}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#A1A1AA]" />
                <span>Enviando...</span>
              </>
            ) : (
              "Enviar"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
