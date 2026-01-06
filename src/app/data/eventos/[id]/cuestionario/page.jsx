// app/data/eventos/[id]/cuestionario/page.jsx
import React from "react";
import CuestionarioEventoComponent from "@/components/data/eventos/CuestionarioEventoComponent";
import { connectDB } from "@/lib/mongo";
import Event from "@/models/events";
import Question from "@/models/question"; // 👈 IMPORTANTE

const QUESTION_CONFIG = [
  {
    pregunta: "¿Cuáles son tus intereses principales?",
    opciones: ["Hacer deporte", "El Arte", "Deportes extremos", "Otro"],
  },
  {
    pregunta: "¿Cuál es tu objetivo del evento?",
    opciones: ["Networking", "Aprender", "Divertirme", "Otro"],
  },
  {
    pregunta: "¿Cuál es tu nivel de energía para el evento?",
    opciones: ["Bajo", "Medio", "Alto"],
  },
  {
    pregunta: "¿Estas conociendo gente nueva?",
    opciones: ["Si", "No"],
  },
  {
    pregunta: "¿Cumpliste con tu objetivo del evento?",
    opciones: ["Si", "No"],
  },
  {
    pregunta: "¿Cuál es tu nivel de energía post evento?",
    opciones: ["Bajo", "Medio", "Alto"],
  },
];

export default async function CuestionarioEventoPage({ params }) {
  const { id } = params;

  await connectDB();

  const event = await Event.findById(id)
    .populate({ path: "data", model: Question }) // 👈 usar el modelo
    .lean();

  if (!event) {
    return (
      <div className="h-auto flex flex-col justify-center items-center px-[80px] py-[50px] bg-[#151515]">
        <p className="text-white">Evento no encontrado</p>
      </div>
    );
  }

  const cuestionarioData = event.data.map((q, index) => ({
    id: q._id.toString(),
    pregunta: q.pregunta,
    opciones: QUESTION_CONFIG[index]?.opciones ?? [],
  }));

  return (
    <div className="h-auto flex flex-col justify-center items-center px-[80px] py-[50px] bg-[#151515]">
      <CuestionarioEventoComponent
        eventoTitle={event.titulo}
        cuestionarioData={cuestionarioData}
        eventId={id}
      />
    </div>
  );
}
