import React from "react";

import ContactHero from "@/components/contacto/ContactHero";
import ContactForm from "@/components/contacto/ContactForm";

export const metadata = {
  title: "Contáctanos | Sparkclub, Buenos Aires Argentina",
  description:
    "Hablemos de tu próxima experiencia. Escribinos y contale a nuestro equipo qué necesita tu empresa para conectar mejor.",
};

const data = {
  hero: {
    title: "¿Listo para conectar a tu equipo con una ",
    titleSpan: "experiencia a medida?",
    subtitle:
      "Contanos qué necesitás y nuestro equipo se pone en contacto para diseñar la experiencia ideal para tu empresa.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero data={data.hero} />
      <ContactForm />
    </>
  );
}
