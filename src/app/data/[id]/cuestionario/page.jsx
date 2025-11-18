// app/data/eventos/[id]/cuestionario/page.jsx
import React from "react";
import CuestionarioEventoComponent from "@/components/data/eventos/CuestionarioEventoComponent";
import { connectDB } from "@/lib/mongo";
import Event from "@/models/events";
import Question from "@/models/question"; // 👈 IMPORTANTE

const QUESTION_CONFIG = [
  {
    pregunta: "Your favs to spend your social time",
    opciones: [
      "Art & Culture",
      "Sport Events",
      "Wellness",
      "Music Events",
      "Tourism",
      "Education",
      "Innmersive Experiences",
      "Food & Drink",
      "Talks and Conventions",
      "Live Shows",
      "Nightlife & Party",
      "Workshops",
    ],
  },
  {
    pregunta: "Why are you here",
    opciones: [
      "Funding",
      "Collaborations/Partnerships (BD)",
      "Investment opportunities",
      "Seeking Talent",
    ],
  },
  {
    pregunta: "What's your energy level today",
    opciones: ["Flat", "Low", "Idle", "Full"],
  },
  {
    pregunta: "Did you meet new people?",
    opciones: ["Yes", "No"],
  },
  {
    pregunta: "Did you acomplish your objectives today",
    opciones: ["Yes", "No"],
  },
  {
    pregunta: "What's your energy level after the event",
    opciones: ["Flat", "Low", "Idle", "Full"],
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
    <div className="h-auto hidden sm:flex flex-col justify-center items-center px-[15px] 2xl:px-[80px] py-[50px] bg-[#151515]">
      <CuestionarioEventoComponent
        eventoTitle={event.titulo}
        cuestionarioData={cuestionarioData}
        eventId={id}
      />
    </div>
  );
}
