// app/api/events/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo";
import Event from "@/models/events";

export async function GET() {
  try {
    await connectDB();
    const events = await Event.find().lean();

    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error("GET /api/events error:", error);
    return NextResponse.json(
      { message: "Error obteniendo eventos" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { titulo, link, fecha } = body;

    if (!titulo || !link || !fecha) {
      return NextResponse.json(
        { message: "titulo, link y fecha son obligatorios" },
        { status: 400 }
      );
    }

    const event = await Event.create({
      titulo,
      link,
      fecha,
      data: [], // arranca sin preguntas
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error("POST /api/events error:", error);
    return NextResponse.json(
      { message: "Error creando evento" },
      { status: 500 }
    );
  }
}
