// models/Question.js
import { Schema, model, models } from "mongoose";

const QuestionSchema = new Schema(
  {
    pregunta: {
      type: String, // texto de la pregunta
      required: true,
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    respuestas: [
      {
        type: Schema.Types.ObjectId,
        ref: "Answer",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Question = models.Question || model("Question", QuestionSchema);

export default Question;
