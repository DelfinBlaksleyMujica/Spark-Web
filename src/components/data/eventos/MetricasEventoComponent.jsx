"use client";
import React from "react";
import Link from "next/link";
export default function MetricasEventoComponent({ eventId }) {
  const [eventoId, setEventoId] = React.useState(null);
  React.useEffect(() => {
    setEventoId(eventId);
  }, [eventId]);
  return (
    <div>
      <div>Métricas</div>
      <div className="h-[100vh] flex justify-center items-center">
        <Link href={`/data/eventos/${eventoId}/cuestionario`}>
          Ir al cuestionario del evento
        </Link>
      </div>
    </div>
  );
}
