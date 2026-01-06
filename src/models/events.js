// models/Event.js
import { Schema, model, models } from "mongoose";

const EventSchema = new Schema(
  {
    // si querés podés usar solo _id de Mongo y no este id numérico
    orden: {
      type: Number,
    },
    titulo: {
      type: String,
      required: true,
      unique: true,
    },
    link: {
      type: String,
      required: true,
      unique: true,
    },
    fecha: {
      type: String, // o Date si después lo querés como fecha real
      required: true,
    },
    // Referencias a preguntas (Question)
    data: [
      {
        type: Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Event = models.Event || model("Event", EventSchema);

export default Event;