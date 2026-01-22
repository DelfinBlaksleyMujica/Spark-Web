import MetricasEventoComponent from "@/components/data/eventos/MetricasEventoComponent";
import React from "react";

export default function SpecificDataEventPage({ params }) {
  console.log("PARAMS", params.id);
  const eventId = params.id;
  return (
    <div className="flex justify-center items-center">
      <MetricasEventoComponent eventId={eventId} />
    </div>
  );
}
