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
        Emotional Radar:{" "}
        <span className="text-[#FAFAFA] font-medium">{pregunta}</span>
      </h2>

      {/* FORM COMPLETO */}
      <form onSubmit={onSubmit}>
        <div className="h-[300px] flex justify-center items-center">
          <motion.div
            variants={radarCardVariants}
            className="relative w-full flex justify-center items-center"
          >
            {/* CARD PRINCIPAL */}
            <div className="relative z-30 bg-[transparent] rounded-[16px] h-auto w-full p-[24px] flex flex-col items-center overflow-hidden">
              {/* Emojis / Botones */}
              <motion.div
                variants={radarItemVariants}
                className="flex gap-[32px] mt-[20px] mb-[32px]"
              >
                {opciones?.map((opcion, idx) => {
                  const active = questionData.respuestas.includes(opcion);

                  return (
                    <div
                      className="flex flex-col justify-center items-center"
                      key={idx}
                    >
                      <button
                        // key={idx}
                        type="button"
                        onClick={() => onSelect(opcion)}
                        className={`
                        ${inter.className}
                        w-[120px] h-[120px] mb-[20px] rounded-full text-[22px]
                        flex justify-center items-center
                        bg-[transparent] border-[1px] transition-all
                        ${
                          active
                            ? "border-[#FCD34D] shadow-[0_0_20px_rgba(250,204,21,0.5)]"
                            : "border-[#3F3F46]"
                        }
                      `}
                      >
                        {opcion === "Flat" ? (
                          <div className="w-full h-full flex flex-col justify-center items-center">
                            <img
                              src="/images/CuestionarioData/nevenkaFlat.png"
                              alt=""
                            />
                          </div>
                        ) : opcion === "Low" ? (
                          <>
                            <img
                              src="/images/CuestionarioData/nevenkaLow.png"
                              alt=""
                            />
                          </>
                        ) : opcion === "Idle" ? (
                          <>
                            <img
                              src="/images/CuestionarioData/nevenkaIdle.png"
                              alt=""
                            />
                          </>
                        ) : opcion === "Full" ? (
                          <>
                            <img
                              src="/images/CuestionarioData/nevenkaFull.png"
                              alt=""
                            />
                          </>
                        ) : null}
                      </button>
                      <span className={`${inter.className} text-white`}>
                        {opcion}
                      </span>
                    </div>
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
                <span>Sending...</span>
              </>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
