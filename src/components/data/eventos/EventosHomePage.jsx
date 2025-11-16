"use client";
import { inter } from "@/app/fonts/fonts";
import Link from "next/link";
import React from "react";

export default function EventosHomePage({ eventos }) {
  const [events, setEvents] = React.useState(eventos);
  React.useEffect(() => {
    setEvents(eventos);
  }, [eventos]);
  return (
    <div className="h-auto w-full py-40 px-[80px] bg-[#151515]">
      <div className="mb-[40px]">
        <h1 className={`${inter.className} text-[#F4F4F4] text-[32px]`}>
          Eventos ejecutados
        </h1>
      </div>
      <div>
        {events.map((evento) => (
          <div
            key={evento.id}
            className="border-b border-[#F4F4F4] p-4 flex justify-between items-center"
          >
            <div className={`${inter.className} text-[#F4F4F4]`}>
              <h2 className="text-2xl font-bold">{evento.titulo}</h2>
              <p>{evento.fecha}</p>
            </div>
            <div>
              <Link
                className={`${inter.className} text-black bg-[#FCD34D] rounded-[10px] py-2 px-6`}
                href={`/data/eventos/${evento.id}`}
              >
                Ver Detalle de evento
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
