// models/Answer.js
import { Schema, model, models } from "mongoose";

const AnswerSchema = new Schema(
  {
    // orden dentro de la lista de respuestas de esa pregunta
    orden: {
      type: Number,
    },
    // siempre array de strings: ["Networking"] o ["Networking", "Aprender"]
    seleccion: {
      type: [String],
      required: true,
    },
    // relación inversa: a qué pregunta pertenece esta respuesta
    question: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Answer = models.Answer || model("Answer", AnswerSchema);

export default Answer;