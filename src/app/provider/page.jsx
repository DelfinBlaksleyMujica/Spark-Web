import TestimonialsContainer from "@/components/generals/TestimonialsContainer";
import Hero from "@/components/providers/Hero";
import KickOffComponent from "@/components/providers/KickOffComponent";
import FaqsProviders from "@/components/providers/FaqsProviders";


import React from "react";

const data = {
  hero: {
    title: "Experiencias certificadas. ",
    titleSpan: "Impacto real.",
    subtitle:
      "Únete a la red de partners de Sparkclub para escalar tus experiencias o servicios y conectar con marcas que valoran la interacción humana.",
  },
  kickOffWithSparkClub: {
    title: "Comienza tu recorrido",
    subtitle:
      "Tres pasos simples para certificar tu perfil, mostrar tus experiencias y conectar con marcas.",
    cards: [
      {
        id: 1,
        image: "/images/Providers/KickOffJourneyStep1.webp",
        title: "Conéctate con Nevenka",
        description:
          "Completa tu perfil fácilmente y conviértete en partner verificado.",
        color: "#D8B4FE",
      },
      {
        id: 2,
        image: "/images/Providers/KickOffJourneyStep2.webp",
        title: "Comparte tus servicios",
        description:
          "Publica tus actividades, gana visibilidad y mide la interacción.",
        color: "#FCA5A5",
      },
      {
        id: 3,
        image: "/images/Providers/KickOffJourneyStep3.webp",
        title: "Haz crecer tu impacto",
        description:
          "Conecta con marcas, amplía tu alcance y desbloquea nuevas oportunidades.",
        color: "#6EE7B7",
      },
    ],
  },
  testimonials: {
    title: "Lo que la gente está diciendo",
    testimonials: [
      {
        id: 1,
        img: "/images/Testimonios/TestimonialIconPlaceholder1.jpeg",
        testimonio:
          "Trabajar con SparkClub se siente natural. Las conexiones están ahí, la forma de trabajar es clara y todo funciona sin problemas de principio a fin. Es el tipo de socio al que no necesitas explicarle demasiado: lo entienden y lo hacen realidad.",
        firma: "Producción técnica",
      },
      {
        id: 2,
        img: "/images/Testimonios/TestimonialIconPlaceholder2.svg",
        testimonio:
          "Me gusta cómo SparkClub abre puertas. Una semana estoy organizando un evento para una startup, la siguiente estoy conociendo una nueva marca con la que nunca pensé que trabajaría. Hacen posibles esas conexiones, y para freelancers como yo, eso es oro.",
        firma: "Wellness Coach",
      },
      {
        id: 3,
        img: "/images/Testimonios/TestimonialIconPlaceholder3.svg",
        testimonio:
          "Con SparkClub, crear eventos dejó de ser un dolor de cabeza. La plataforma nos conecta al instante con proveedores de confianza, y en minutos tenemos todo listo. Es fluido, eficiente y nos permite centrarnos en ofrecer experiencias que fortalecen nuestra marca.",
        firma: "FMCG Bebidas",
      },
      {
        id: 4,
        img: "/images/Testimonios/TestimonialIconPlaceholder4.svg",
        testimonio:
          "Necesitábamos organizar una activación para DevConnect, y estábamos a 10,500 km del lugar. Honestamente, no esperaba que se resolviera tan rápido. SparkClub gestionó todo con precisión y entregó un evento que parecía que hubiéramos estado en el lugar desde el principio.",
        firma: "Industria-Blockchain",
      },
    ],
  },
  providersFaqs: {
    title: "FAQs",
    subtitle:
      "Tus preguntas respondidas: cómo hacemos que el trabajo sea más atractivo, divertido y conectado.",
    faqs: [
      {
        id: "user",
        question: "¿Qué es Sparkclub?",
        answer:
          "Sparkclub es una plataforma que reúne a las personas a través de eventos, actividades y experiencias seleccionadas diseñadas para construir equipos y comunidades más fuertes, tanto dentro como fuera del lugar de trabajo.",
      },
      {
        id: "supplier",
        question: "¿Quién puede convertirse en proveedor?",
        answer:
          "Cualquier proveedor que ofrezca servicios o experiencias para equipos — desde talleres y deportes hasta catering, espacios, tecnología o actividades de bienestar.",
      },
      {
        id: "work",
        question: "¿Cómo funciona Sparkclub para los proveedores?",
        answer:
          "Creas tu perfil, publicas tus servicios y las empresas pueden reservar directamente. Sparkclub facilita la conexión con nuevos clientes y la gestión de solicitudes.",
      },
      {
        id: "companies",
        question: "¿Qué tipo de empresas puedo alcanzar?",
        answer:
          "Startups, pymes y grandes organizaciones que buscan actividades de team building, offsites y bienestar para sus equipos.",
      },
      {
        id: "payments",
        question: "¿Cómo funcionan las reservas y los pagos?",
        answer:
          "Las empresas reservan a través de Sparkclub y recibirás el pago de forma segura una vez finalizado el evento.",
      },
      {
        id: "cancelled",
        question: "¿Qué sucede si una reserva se cancela?",
        answer:
          "Sparkclub cuenta con una política de cancelación para proteger tanto a empresas como a proveedores. Siempre serás notificado con anticipación y, según el momento de la cancelación, podrás conservar parte del pago.",
      },
      {
        id: "ratings",
        question: "¿Cómo funcionan las valoraciones y reseñas?",
        answer:
          "Después de cada evento, las empresas pueden dejar una reseña. Las valoraciones positivas aumentan tu visibilidad en la plataforma y te ayudan a conseguir más clientes.",
      },
      {
        id: "costs",
        question: "¿Tiene costo unirse como proveedor?",
        answer:
          "Unirse es gratuito. Sparkclub cobra una pequeña comisión por cada reserva para mantener la plataforma operativa.",
      },
      {
        id: "availability",
        question: "¿Puedo gestionar mi propia disponibilidad?",
        answer:
          "Sí. Tú decides cuándo y cómo ofrecer tus servicios, incluyendo fechas bloqueadas o límites de capacidad.",
      },
      {
        id: "joining",
        question: "¿Por qué debería unirme a Sparkclub?",
        answer:
          "Sparkclub te ayuda a hacer crecer tu negocio, llegar a nuevos clientes y formar parte de una comunidad que valora las experiencias reales.",
      },
    ],
  },
};

export default function ProviderPageContainer() {
  return (
    <div>
      <Hero data={data.hero} />
      {/* <ActivityTags /> */}
      <KickOffComponent data={data.kickOffWithSparkClub} />
      <TestimonialsContainer data={data.testimonials} />
      <FaqsProviders data={data.providersFaqs} />
    </div>
  );
}
