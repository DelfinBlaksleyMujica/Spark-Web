// app/api/events/[id]/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo";
import Event from "@/models/events";
import Question from "@/models/question";
import Answer from "@/models/answer";

export async function GET(_req, { params }) {
  try {
    await connectDB();
    const { id } = params; // ObjectId del evento

    const event = await Event.findById(id)
      .populate({
        path: "data",
        model: Question,
        populate: {
          path: "respuestas",
          model: Answer,
        },
      })
      .lean();

    if (!event) {
      return NextResponse.json(
        { message: "Evento no encontrado" },
        { status: 404 }
      );
    }

    const response = {
      id: event._id.toString(),
      titulo: event.titulo,
      link: event.link,
      fecha: event.fecha,
      data: event.data.map((q) => ({
        // 👇 acá van las dos cosas que querés
        id: q._id.toString(),      // id de la pregunta (Mongo)
        pregunta: q.pregunta,      // texto de la pregunta
        respuestas: q.respuestas.map((r) => ({
          id: r._id.toString(),
          seleccion: r.seleccion,
        })),
      })),
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("GET /api/events/[id] error:", error);
    return NextResponse.json(
      { message: "Error obteniendo evento" },
      { status: 500 }
    );
  }
}
