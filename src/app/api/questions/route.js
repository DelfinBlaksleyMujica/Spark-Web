// app/api/questions/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo";
import Event from "@/models/events";
import Question from "@/models/question";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { eventId, pregunta } = body;

    if (!eventId || !pregunta) {
      return NextResponse.json(
        { message: "eventId y pregunta son obligatorios" },
        { status: 400 }
      );
    }

    const event = await Event.findById(eventId);
    if (!event) {
      return NextResponse.json(
        { message: "Evento no encontrado" },
        { status: 404 }
      );
    }

    // Creamos la pregunta
    const question = await Question.create({
      pregunta,
      event: event._id,
      respuestas: [],
    });

    // La agregamos al array data del evento
    event.data.push(question._id);
    await event.save();

    return NextResponse.json(question, { status: 201 });
  } catch (error) {
    console.error("POST /api/questions error:", error);
    return NextResponse.json(
      { message: "Error creando pregunta" },
      { status: 500 }
    );
  }
}
