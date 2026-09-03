import MetricasEventoComponent from "@/components/data/eventos/MetricasEventoComponent";
import React from "react";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function SpecificDataEventPage({ params }) {
  console.log("PARAMS", params.id);
  const eventId = params.id;
  return (
    <div className="flex justify-center items-center">
      <MetricasEventoComponent eventId={eventId} />
    </div>
  );
}
