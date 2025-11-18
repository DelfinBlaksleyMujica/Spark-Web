// app/api/seed-multi/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo";
import Event from "@/models/events";
import Question from "@/models/question";

// Las 5 preguntas del cuestionario
const QUESTION_TEXTS = [
  "Your favs to spend your social time??",
  "Why are you here?",
  "What's your energy level today?",
  "Did you meet new people?",
  "Did you acomplish your objectives today?",
  "What's your energy level after the event?"
];

// Definimos 5 eventos demo
const EVENTS_SEED = [
  {
    titulo: "Brevis Zkonnect",
    link: "/data/eventos/sparkclub-kickoff",
    fecha: "18-11-2025",
  },
  {
    titulo: "EF Founders Night",
    link: "/data/eventos/after-office-networking",
    fecha: "18-11-2025",
  },
  {
    titulo: "Kite After Party",
    link: "/data/eventos/taller-liderazgo-creativo",
    fecha: "20-11-2025",
  },
  {
    titulo: "Brevis After Party",
    link: "/data/eventos/hackathon-sparkclub",
    fecha: "21-11-2025",
  },
];

export async function GET() {
  try {
    await connectDB();

    const results = [];

    for (const evDef of EVENTS_SEED) {
      // 1) Buscar o crear el evento por link
      let event = await Event.findOne({ link: evDef.link });

      if (!event) {
        event = await Event.create({
          titulo: evDef.titulo,
          link: evDef.link,
          fecha: evDef.fecha,
          data: [],
        });
      }

      // 2) Buscar preguntas existentes de ese evento
      const existingQuestions = await Question.find({ event: event._id }).lean();
      const existingTexts = new Set(existingQuestions.map((q) => q.pregunta));

      const newQuestions = [];

      // 3) Crear solo las preguntas que falten
      for (const text of QUESTION_TEXTS) {
        if (existingTexts.has(text)) continue;

        const q = await Question.create({
          pregunta: text,
          event: event._id,
          respuestas: [],
        });

        event.data.push(q._id);
        newQuestions.push(q);
      }

      // Guardar si se agregaron nuevas preguntas
      if (newQuestions.length > 0) {
        await event.save();
      }

      results.push({
        eventId: event._id.toString(),
        titulo: event.titulo,
        link: event.link,
        fecha: event.fecha,
      });
    }

    return NextResponse.json(
      {
        message: "Eventos y preguntas seed creados/actualizados correctamente",
        events: results,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/seed-multi error:", error);
    return NextResponse.json(
      { message: "Error creando seed múltiple", error: error.message },
      { status: 500 }
    );
  }
}
