// app/data/eventos/page.jsx
import React from "react";
import EventosHomePage from "@/components/data/eventos/EventosHomePage";
import { connectDB } from "@/lib/mongo";
import Event from "@/models/events";

export default async function DataDeEventosContainerPage() {
  await connectDB();

  const eventsFromDB = await Event.find().lean();

  const eventos = eventsFromDB.map((ev) => ({
    // 👇 todos los ObjectId a string
    id: ev._id.toString(),
    titulo: ev.titulo,
    // uso el id en la URL porque tu ruta es /data/eventos/[id]
    link: `/data/eventos/${ev._id.toString()}`,
    fecha: ev.fecha,
    // si en EventosHomePage no usás data, podrías borrar esta línea
    // pero si la querés pasar, convertimos los ObjectId del array
    data: Array.isArray(ev.data) ? ev.data.map((qId) => qId.toString()) : [],
  }));

  // 👇 Ahora sí son plain objects serializables
  return <EventosHomePage eventos={eventos} />;
}
