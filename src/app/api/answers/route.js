// app/api/answers/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongo";
import Question from "@/models/question";
import Answer from "@/models/answer";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { questionId, seleccion } = body;

    // seleccion debe llegar como array de strings
    if (!questionId || !Array.isArray(seleccion) || seleccion.length === 0) {
      return NextResponse.json(
        {
          message:
            "questionId es obligatorio y seleccion debe ser un array de strings",
        },
        { status: 400 }
      );
    }

    const question = await Question.findById(questionId);
    if (!question) {
      return NextResponse.json(
        { message: "Pregunta no encontrada" },
        { status: 404 }
      );
    }

    const answer = await Answer.create({
      seleccion,
      question: question._id,
    });

    question.respuestas.push(answer._id);
    await question.save();

    return NextResponse.json(answer, { status: 201 });
  } catch (error) {
    console.error("POST /api/answers error:", error);
    return NextResponse.json(
      { message: "Error creando respuesta" },
      { status: 500 }
    );
  }
}
