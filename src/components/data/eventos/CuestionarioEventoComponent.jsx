// components/data/eventos/CuestionarioEventoComponent.jsx
"use client";

import React from "react";
import Link from "next/link";
import { inter, poppins } from "@/app/fonts/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import RadarStep2 from "./RadarStep2";

const stepCardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export default function CuestionarioEventoComponent({
  cuestionarioData,
  eventId,
  eventoTitle,
}) {
  const [step, setStep] = React.useState(1);
  const [cuestionario, setCuestionario] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [eventData, setEventData] = React.useState(null);

  const [question1Data, setQuestion1Data] = React.useState({
    pregunta: "",
    respuestas: [],
  });
  const [question2Data, setQuestion2Data] = React.useState({
    pregunta: "",
    respuestas: [],
  });
  const [question3Data, setQuestion3Data] = React.useState({
    pregunta: "",
    respuestas: [],
  });
  const [question4Data, setQuestion4Data] = React.useState({
    pregunta: "",
    respuestas: [],
  });
  const [question5Data, setQuestion5Data] = React.useState({
    pregunta: "",
    respuestas: [],
  });
  const [question6Data, setQuestion6Data] = React.useState({
    pregunta: "",
    respuestas: [],
  });

  React.useEffect(() => {
    setStep(1);
    setCuestionario(cuestionarioData);

    setQuestion1Data({
      pregunta: cuestionarioData[0]?.id || "",
      respuestas: [],
    });
    setQuestion2Data({
      pregunta: cuestionarioData[1]?.id || "",
      respuestas: [],
    });
    setQuestion3Data({
      pregunta: cuestionarioData[2]?.id || "",
      respuestas: [],
    });
    setQuestion4Data({
      pregunta: cuestionarioData[3]?.id || "",
      respuestas: [],
    });
    setQuestion5Data({
      pregunta: cuestionarioData[4]?.id || "",
      respuestas: [],
    });
    setQuestion6Data({
      pregunta: cuestionarioData[5]?.id || "",
      respuestas: [],
    });
  }, [cuestionarioData]);

  const fetchEventWithData = async () => {
    try {
      const res = await fetch(`/api/events/${eventId}`, { cache: "no-store" });
      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        throw new Error(errorBody.message || "Error obteniendo evento");
      }
      const data = await res.json();
      setEventData(data);
      console.log("Evento actualizado:", data);
    } catch (err) {
      console.error("Error al actualizar evento:", err);
    }
  };

  const handleChangeQuestion1 = (opcion) => {
    setQuestion1Data((prev) => {
      const alreadySelected = prev.respuestas.includes(opcion);
      const nextRespuestas = alreadySelected
        ? prev.respuestas.filter((item) => item !== opcion)
        : [...prev.respuestas, opcion];
      return { ...prev, respuestas: nextRespuestas };
    });
  };

  const handleChangeQuestion2 = (opcion) => {
    setQuestion2Data((prev) => {
      const alreadySelected = prev.respuestas.includes(opcion);
      const nextRespuestas = alreadySelected
        ? prev.respuestas.filter((item) => item !== opcion)
        : [...prev.respuestas, opcion];
      return { ...prev, respuestas: nextRespuestas };
    });
  };

  const handleChangeQuestion3 = (opcion) => {
    setQuestion3Data((prev) => ({
      ...prev,
      respuestas: [opcion],
    }));
  };

  const handleChangeQuestion4 = (opcion) => {
    setQuestion4Data((prev) => ({
      ...prev,
      respuestas: [opcion],
    }));
  };

  const handleChangeQuestion5 = (opcion) => {
    setQuestion5Data((prev) => ({
      ...prev,
      respuestas: [opcion],
    }));
  };

  const handleChangeQuestion6 = (opcion) => {
    setQuestion6Data((prev) => ({
      ...prev,
      respuestas: [opcion],
    }));
  };

  const sendAnswer = async (questionId, seleccion) => {
    const res = await fetch("/api/answers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionId, seleccion }),
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      throw new Error(errorBody.message || "Error creando respuesta");
    }

    return res.json();
  };

  const handleSubmit = async (e, questionData, label, currentStep) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const questionId = questionData.pregunta;
      const seleccion = questionData.respuestas;

      if (!questionId) throw new Error(`No se encontró el id de ${label}`);
      if (!seleccion.length)
        throw new Error(`Seleccioná una opción en ${label}`);

      await sendAnswer(questionId, seleccion);
      await fetchEventWithData();

      if (label.includes("Pregunta 1")) {
        setQuestion1Data((prev) => ({ ...prev, respuestas: [] }));
      } else if (label.includes("Pregunta 2")) {
        setQuestion2Data((prev) => ({ ...prev, respuestas: [] }));
      } else if (label.includes("Pregunta 3")) {
        setQuestion3Data((prev) => ({ ...prev, respuestas: [] }));
      } else if (label.includes("Pregunta 4")) {
        setQuestion4Data((prev) => ({ ...prev, respuestas: [] }));
      } else if (label.includes("Pregunta 5")) {
        setQuestion5Data((prev) => ({ ...prev, respuestas: [] }));
      } else if (label.includes("Pregunta 6")) {
        setQuestion6Data((prev) => ({ ...prev, respuestas: [] }));
      }

      const nextStep =
        typeof currentStep === "number" && currentStep < 6
          ? currentStep + 1
          : 1;

      setStep("solicitud-exitosa");

      setTimeout(() => {
        setStep(nextStep);
      }, 3000);
    } catch (err) {
      console.error(`Error envío ${label}:`, err);
      setError(err.message || "Error al enviar respuestas");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isOptionActive = (questionData, opcion) =>
    questionData.respuestas.includes(opcion);

  const renderSubmitLabel = () =>
    isSubmitting ? (
      <span className="flex items-center gap-2">
        <Loader2 className="w-4 h-4 animate-spin text-[#A1A1AA]" />
        <span>Sending...</span>
      </span>
    ) : (
      "Send"
    );

  return (
    <div className="w-full flex flex-col justify-center items-center py-[120px]">
      {/* Header */}
      <motion.div
        className="w-full flex gap-[10px] justify-start items-center h-[50px] mb-[30px]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
      >
        <Link
          className={`${inter.className} bg-[#27272A] text-[#FAFAFA] p-3  rounded-[5px] text-[14px] border-[#3F3F46] border-[1px] cursor-pointer`}
          href={`/data/${eventId}`}
        >
          <img src="/images/Icons/flechaVolver.svg" alt="" />
        </Link>
        <h1 className={`${poppins.className} text-[#FAFAFA] text-[24px]`}>
          {eventoTitle}
        </h1>
      </motion.div>

      {/* Tabs de steps */}
      <motion.div
        className="w-full flex justify-center items-center gap-[20px] h-[50px] mb-[45px] overflow-x-scroll lg:overflow-x-hidden"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      >
        {[
          { id: 1, label: "Intrests" },
          { id: 2, label: "Event objectives" },
          { id: 3, label: "Energy level" },
          { id: 4, label: "Social thermometer" },
          { id: 5, label: "Objectives status" },
          { id: 6, label: "Energy level after event" },
        ].map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`${
              inter.className
            } bg-[#27272A] text-[#FAFAFA] py-2 px-6 rounded-[20px] text-[12px] border-[1px] ${
              step === tab.id ? "border-[#FCD34D]" : "border-[#3F3F46]"
            } cursor-pointer`}
            onClick={() => typeof step !== "string" && setStep(tab.id)}
          >
            {tab.label}
          </motion.button>
        ))}
      </motion.div>

      {error && (
        <motion.p
          className="text-red-400 mb-4 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}

      {/* Contenido del step */}
      <div className="w-[90%] lg:w-[70%] min-h-[400px] bg-[#27272A] px-[24px] py-[48px] rounded-[10px]">
        <AnimatePresence mode="wait">
          {/* Paso 1 */}
          {step === 1 && (
            <motion.div
              key="step-1"
              variants={stepCardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              <motion.h2
                variants={itemVariants}
                className={`${inter.className} text-[#FCD34D] mb-[40px] w-full text-left font-bold text-[20px] leading-[100%] tracking-tight`}
              >
                Passion Points:{" "}
                <span className="text-[#FAFAFA] font-medium">
                  {cuestionario[0]?.pregunta ??
                    "¿Cuáles son tus intereses principales?"}
                </span>
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="mb-[20px] px-[24px]"
              >
                <form
                  onSubmit={(e) =>
                    handleSubmit(e, question1Data, "Pregunta 1", 1)
                  }
                  className="flex gap-[2%] flex-wrap w-full justify-center items-center"
                >
                  {cuestionario[0]?.opciones?.map((opcion, index) => {
                    const active = isOptionActive(question1Data, opcion);
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex mb-[20px]"
                      >
                        <button
                          type="button"
                          onClick={() => handleChangeQuestion1(opcion)}
                          className={`${
                            inter.className
                          } bg-[#27272A] flex gap-[10px] justify-center items-center text-[#FAFAFA] py-2 px-6 rounded-[20px] text-[14px] border-[1px] cursor-pointer ${
                            active ? "border-[#FCD34D]" : "border-[#3F3F46]"
                          }`}
                        >
                          {/* <img src={opcion.icon} alt="" /> */}
                          {opcion.value}
                        </button>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    variants={itemVariants}
                    className="w-full flex justify-end items-center"
                  >
                    <button
                      type="submit"
                      className="bg-[#FAFAFA] px-4 py-1 rounded-[5px] text-[#18181B] text-[14px] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                      disabled={isSubmitting}
                    >
                      {renderSubmitLabel()}
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          )}

          {/* Paso 2 */}
          {step === 2 && (
            <motion.div
              key="step-2"
              variants={stepCardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              <motion.h2
                variants={itemVariants}
                className={`${inter.className} text-[#FCD34D] mb-[40px] w-full text-left font-bold text-[20px] leading-[100%] tracking-tight`}
              >
                Your Intentions:{" "}
                <span className="text-[#FAFAFA] font-medium">
                  {cuestionario[1]?.pregunta ??
                    "¿Cuál es tu objetivo del evento?"}
                </span>
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="mb-[20px] px-[24px]"
              >
                <form
                  onSubmit={(e) =>
                    handleSubmit(e, question2Data, "Pregunta 2", 2)
                  }
                  className="flex flex-col flex-wrap gap-[2%] justify-center items-start"
                >
                  {cuestionario[1]?.opciones?.map((opcion, index) => {
                    const active = isOptionActive(question2Data, opcion);
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex gap-[10px] mb-[20px]"
                      >
                        <button
                          type="button"
                          onClick={() => handleChangeQuestion2(opcion)}
                          className={`${
                            inter.className
                          } bg-[#27272A] text-[#FAFAFA] py-2 px-6 rounded-[20px] text-[14px] border-[1px] cursor-pointer ${
                            active ? "border-[#FCD34D]" : "border-[#3F3F46]"
                          }`}
                        >
                          {opcion}
                        </button>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    variants={itemVariants}
                    className="w-full flex justify-end items-center"
                  >
                    <button
                      type="submit"
                      className="bg-[#FAFAFA] px-4 py-1 rounded-[5px] text-[#18181B] text-[14px] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                      disabled={isSubmitting}
                    >
                      {renderSubmitLabel()}
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          )}

          {/* Paso 3 - Radar Emocional (Energía para el evento) */}
          {step === 3 && (
            <RadarStep2
              pregunta={
                cuestionario[2]?.pregunta ??
                "¿Cuál es tu nivel de energía para el evento?"
              }
              opciones={cuestionario[2]?.opciones}
              questionData={question3Data}
              onSelect={handleChangeQuestion3}
              onSubmit={(e) => handleSubmit(e, question3Data, "Pregunta 3", 3)}
              isSubmitting={isSubmitting}
            />
          )}

          {/* Paso 4 */}
          {step === 4 && (
            <motion.div
              key="step-4"
              variants={stepCardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              <motion.h2
                variants={itemVariants}
                className={`${inter.className} text-[#FCD34D] mb-[40px] w-full text-left font-bold text-[20px] leading-[100%] tracking-tight`}
              >
                Social:{" "}
                <span className="text-[#FAFAFA] font-medium">
                  {cuestionario[3]?.pregunta ??
                    "¿Cumpliste con tu objetivo del evento?"}
                </span>
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="mb-[20px] px-[24px]"
              >
                <form
                  onSubmit={(e) =>
                    handleSubmit(e, question4Data, "Pregunta 4", 4)
                  }
                >
                  {cuestionario[3]?.opciones?.map((opcion, index) => {
                    const active = isOptionActive(question4Data, opcion);
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex gap-[10px] mb-[20px]"
                      >
                        <button
                          type="button"
                          onClick={() => handleChangeQuestion4(opcion)}
                          className={`${
                            inter.className
                          } w-full bg-[#27272A] text-[#FAFAFA] py-2 px-6 rounded-[5px] text-[14px] border-[1px] cursor-pointer ${
                            active ? "border-[#FCD34D]" : "border-[#3F3F46]"
                          }`}
                        >
                          {opcion}
                        </button>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    variants={itemVariants}
                    className="w-full flex justify-end items-center"
                  >
                    <button
                      type="submit"
                      className="bg-[#FAFAFA] px-4 py-1 rounded-[5px] text-[#18181B] text-[14px] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                      disabled={isSubmitting}
                    >
                      {renderSubmitLabel()}
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          )}

          {/* Paso 5 */}
          {step === 5 && (
            <motion.div
              key="step-5"
              variants={stepCardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              <motion.h2
                variants={itemVariants}
                className={`${inter.className} text-[#FCD34D] mb-[40px] w-full text-left font-bold text-[20px] leading-[100%] tracking-tight`}
              >
                Intentions status:{" "}
                <span className="text-[#FAFAFA] font-medium">
                  {cuestionario[4]?.pregunta ??
                    "¿Cuál es tu nivel de energía post evento?"}
                </span>
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="mb-[20px] px-[24px]"
              >
                <form
                  onSubmit={(e) =>
                    handleSubmit(e, question5Data, "Pregunta 5", 5)
                  }
                >
                  {cuestionario[4]?.opciones?.map((opcion, index) => {
                    const active = isOptionActive(question5Data, opcion);
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex gap-[10px] mb-[20px]"
                      >
                        <button
                          type="button"
                          onClick={() => handleChangeQuestion5(opcion)}
                          className={`${
                            inter.className
                          } w-full bg-[#27272A] text-[#FAFAFA] py-2 px-6 rounded-[5px] text-[14px] border-[1px] cursor-pointer ${
                            active ? "border-[#FCD34D]" : "border-[#3F3F46]"
                          }`}
                        >
                          {opcion}
                        </button>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    variants={itemVariants}
                    className="w-full flex justify-end items-center"
                  >
                    <button
                      type="submit"
                      className="bg-[#FAFAFA] px-4 py-1 rounded-[5px] text-[#18181B] text-[14px] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                      disabled={isSubmitting}
                    >
                      {renderSubmitLabel()}
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          )}

          {/* Paso 6 - Radar Emocional (Energía post evento, misma UI que step 3) */}
          {step === 6 && (
            <RadarStep2
              pregunta={
                cuestionario[5]?.pregunta ??
                "¿Cuál es tu nivel de energía post evento?"
              }
              opciones={cuestionario[5]?.opciones}
              questionData={question6Data}
              onSelect={handleChangeQuestion6}
              onSubmit={(e) => handleSubmit(e, question6Data, "Pregunta 6", 6)}
              isSubmitting={isSubmitting}
            />
          )}

          {/* Step de solicitud exitosa */}
          {step === "solicitud-exitosa" && (
            <motion.div
              key="step-success"
              variants={stepCardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full flex flex-col items-center justify-center text-center"
            >
              <motion.h2
                variants={itemVariants}
                className={`${inter.className} text-[#FCD34D] mb-[16px] text-[22px] font-bold`}
              >
                Successfull Answer
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className={`${inter.className} text-[#FAFAFA] mb-[36px] text-[15px] max-w-[420px]`}
              >
                ¡Thanks for participating! We will be working on your answers to
                create the best experience for you.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="w-[220px] h-[140px] flex items-center justify-center"
              >
                <img
                  src="/images/CuestionarioData/succesfulAnwserIcon.png"
                  alt=""
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navegación inferior */}
      <motion.div
        className="flex gap-[20px] justify-center items-center mt-[20px]"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
      >
        <button
          className={`${inter.className} text-[#FAFAFA] text-[14px] cursor-pointer`}
          onClick={() =>
            typeof step === "number" && setStep((prev) => Math.max(1, prev - 1))
          }
        >
          Anterior
        </button>
        <div className="flex gap-[10px] justify-center items-center">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <button
              key={s}
              className={`${inter.className} ${
                step === s ? "border-[#FCD34D]" : "border-[#27272A]"
              } text-[#FAFAFA] py-2 px-3 bg-[#27272A] rounded-[5px] text-[14px] border-[#3F3F46] border-[1px] cursor-pointer`}
              onClick={() => typeof step !== "string" && setStep(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <button
          className={`${inter.className} text-[#FAFAFA] text-[14px] cursor-pointer`}
          onClick={() =>
            typeof step === "number" && setStep((prev) => Math.min(6, prev + 1))
          }
        >
          Siguiente
        </button>
      </motion.div>

      {/* debug opcional */}
      {/* {eventData && (
        <pre className="mt-4 text-xs text-green-300 bg-black/30 p-2 rounded max-h-40 overflow-auto w-full">
          {JSON.stringify(eventData, null, 2)}
        </pre>
      )} */}
    </div>
  );
}
