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
      {
        id: 1,
        value: "Art & Culture",
        icon: "/images/CuestionarioData/intrestIcon1.svg",
      },
      {
        id: 2,
        value: "Sport Events",
        icon: "/images/CuestionarioData/intrestIcon2.svg",
      },
      {
        id: 3,
        value: "Wellness",
        icon: "/images/CuestionarioData/intrestIcon3.png",
      },
      {
        id: 4,
        value: "Music Events",
        icon: "/images/CuestionarioData/intrestIcon1.svg",
      },
      {
        id: 5,
        value: "Tourism",
        icon: "/images/CuestionarioData/intrestIcon2.svg",
      },
      {
        id: 6,
        value: "Education",
        icon: "/images/CuestionarioData/intrestIcon3.png",
      },
      {
        id: 7,
        value: "Innmersive Experiences",
        icon: "/images/CuestionarioData/intrestIcon1.svg",
      },
      {
        id: 8,
        value: "Food & Drink",
        icon: "/images/CuestionarioData/intrestIcon8.svg",
      },
      {
        id: 9,
        value: "Talks and Conventions",
        icon: "/images/CuestionarioData/intrestIcon1.svg",
      },
      {
        id: 10,
        value: "Live Shows",
        icon: "/images/CuestionarioData/intrestIcon2.svg",
      },
      {
        id: 11,
        value: "Nightlife & Party",
        icon: "/images/CuestionarioData/intrestIcon3.png",
      },
      {
        id: 12,
        value: "Workshops",
        icon: "/images/CuestionarioData/intrestIcon1.svg",
      },
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
