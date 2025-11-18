import MetricasEventoComponent from "@/components/data/eventos/MetricasEventoComponent";
import React from "react";

export default function SpecificDataEventPage({ params }) {
  console.log("PARAMS", params.id);
  const eventId = params.id;
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <MetricasEventoComponent eventId={eventId} />
    </div>
  );
}
