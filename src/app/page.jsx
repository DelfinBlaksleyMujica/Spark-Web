import AboutNevenka from "@/components/home/AboutNevenka";
import FeaturesComparison from "@/components/home/FeaturesComparison";
import NonNegotiables from "@/components/home/NonNegotiables";
import FaqsSection from "@/components/home/FaqsSection";
import Hero from "@/components/home/Hero";
import WeMakeWorkWorkComponent from "@/components/home/WeMakeWorkWorkComponent";
import TestimonialsContainer from "@/components/generals/TestimonialsContainer";
import TrustedByComponent from "@/components/home/TrustedByComponent";

const data = {
  hero: {
    tituloPrincipal: "Eventos y Experiencias",
    kwTituloPrincipal: "que conectan personas",
    firstSubtitle: "Deja de pasar semanas planificando y gastando una fortuna en eventos de equipo. ",
    strongSubtitle: "Cuéntale a Nevenka lo que necesitas ",
    secondPartSubtitle:
      "y obtén experiencias perfectamente diseñadas, ajustadas a tu presupuesto, con proveedores certificados, listas en sólo 10 minutos.",
  },
  aboutNevenka: {
    title: "Pero espera, ¿quién es",
    firstSubtitle: "Nevenka es la compañera de equipo que todo líder quisiera tener.",
    secondSubtitle:
      " Ella escucha, entiende a tu equipo y convierte ideas dispersas en experiencias significativas que realmente unen a las personas.",
    cards: [
      {
        id: "input",
        img: "/images/Cards/MockUp-01.webp",
        imageAlt: "Ingresa tus ideas para el evento.",
        title: "Ingresa tus ideas para el evento.",
        description: "Fechas, invitados, vibra, formato, servicios.",
      },
      {
        id: "proposal",
        img: "/images/Cards/MockUp-02.webp",
        imageAlt: "Obtén una propuesta en 20 segundos",
        title: "Obtén una propuesta en 20 segundos",
        description: "Nevenka prepara la propuesta del evento según tus necesidades.",
      },
      {
        id: "pm",
        img: "/images/Cards/MockUp-03.webp",
        imageAlt: "Tu PM se hace cargo",
        title: "Tu PM se hace cargo",
        description: "Experiencias, proveedores y atención a los detalles.",
      },
    ],
  },
  weMakeWorkWork: [
    {
      title: "Convierte los eventos, ",
      titleSpan: "en resultados",
    },
  ],
  // whyChooseSparkClub: {
  //   title: "Por qué",
  //   titleSpan: "SparkClub?",
  //   tableTitle: "Características",
  //   firstColumnTitle: "SparkClub",
  //   secondColumnTitle: "Otros",
  //   rows: [
  //     { feature: "Can you track events?", spark: true, other: false },
  //     {
  //       feature: "Is the organizer investing hours for every event?",
  //       spark: "10 mins = $5 salary",
  //       other: "+8hs = +$500 salary",
  //     },
  //     {
  //       feature: "Are the events impactful?",
  //       spark: true,
  //       other: "Not certified",
  //     },
  //     {
  //       feature: "Can you scale events through your organization?",
  //       spark: true,
  //       other: "Limited",
  //     },
  //     {
  //       feature:
  //         "Do you have a host guiding you though the organizing process?",
  //       spark: true,
  //       other: false,
  //     },
  //     {
  //       feature: "Can you track organizational behaviour?",
  //       spark: "w/ specific dynamics",
  //       other: false,
  //     },
  //     { feature: "Can you track specific EX KPIs?", spark: true, other: false },
  //     { feature: "High-end UX", spark: true, other: false },
  //   ],
  // },
  ourNonNegotiables: {
    title: "Nuestros no-negociables",
    nonNegotiables: [
      {
        id: 1,
        title: "INNOVACIÓN",
        description: "Aprovechando la IA para fomentar el bienestar de los empleados.",
        color: "bg-[#FCA5A5]",
        img: "/images/3DIllus/Rocket.svg",
      },
      {
        id: 2,
        title: "CENTRADO EN EL INVITADO",
        description: "Para reducir la rotación y las tasas de abandono.",
        color: "bg-[#D8B4FE]",
        img: "/images/3DIllus/Backpack.svg",
      },
      {
        id: 3,
        title: "BASADO EN DATOS",
        description: "Para mejorar el rendimiento y la satisfacción de la fuerza laboral.",
        color: "bg-[#FAE5A8]",
        img: "/images/3DIllus/Plant.svg",
      },
      {
        id: 4,
        title: "EFICIENCIA",
        description: "Planes a largo plazo S.M.A.R.T para reforzar la cultura de la marca.",
        color: "bg-[#67E8F9]",
        img: "/images/3DIllus/Lamp.svg",
      },
    ],
  },
  testimonials: {
    title: "Testimonios",
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
  faqs: {
    title: "FAQs",
    subtitle:
      "Tus preguntas respondidas: cómo hacemos que el trabajo sea más atractivo, divertido y conectado.",
    FAQS: [
      {
        id: "user",
        question: "¿Qué es Sparkclub?",
        answer:
          "Sparkclub es una plataforma que reúne a las personas a través de eventos, actividades y experiencias seleccionadas diseñadas para construir equipos y comunidades más fuertes, tanto dentro como fuera del lugar de trabajo.",
      },
      {
        id: "organizer",
        question: "¿Para quién es Sparkclub?",
        answer: [
          [
            "- ",
            { bold: "Empleados" },
            " — descubre y únete a actividades que se ajusten a tus intereses.",
          ],
          [
            "- ",
            { bold: "Gerentes y equipos de RRHH" },
            " — planifica experiencias de team-building fácilmente y mide su impacto.",
          ],
          [
            "- ",
            { bold: "Marcas y proveedores" },
            " — conecta con empresas y comunidades a través de eventos significativos.",
          ],
        ],
      },
      {
        id: "analytics",
        question: "¿Cómo funciona Sparkclub?",
        answer:
          "Creas tu perfil, compartes tus intereses y Sparkclub recomienda eventos, actividades y experiencias que se ajusten al ambiente de tu equipo. Desde encuentros después del trabajo hasta retiros más grandes o actividades de bienestar, todo está diseñado para fortalecer las conexiones.",
      },
      {
        id: "billing",
        question: "¿Qué tipo de experiencias puedo esperar?",
        answer: [
          [
            "- 🏔 Eventos internos de equipo: retiros, talleres, deportes, actividades culturales.",
          ],
          [
            "- 🌍 Eventos comunitarios externos: networking, festivales, sesiones de aprendizaje y colaboraciones con otras empresas.",
          ],
          [
            "- ✨ Beneficios de bienestar y estilo de vida: desde clases de yoga hasta noches de cocina.",
          ],
        ],
      },
      {
        id: "companies",
        question: "¿Por qué deberían las empresas usar Sparkclub?",
        answer:
          "Porque los equipos comprometidos rinden mejor. Sparkclub ahorra tiempo a los gerentes al automatizar la planificación de eventos y ayuda a las empresas a crear una cultura de pertenencia, motivación y conexión.",
      },
      {
        id: "communities",
        question: "¿Cómo ayuda Sparkclub a las comunidades a crecer?",
        answer:
          "Cada evento, grande o pequeño, se convierte en una forma de conectar. Los empleados se relacionan entre sí, las empresas se conectan con los proveedores y las marcas se acercan a las comunidades a través de experiencias reales.",
      },
      {
        id: "active",
        question: "¿Está Sparkclub ya activo?",
        answer:
          "Sí. Ya hemos organizado múltiples eventos y actividades, con equipos y proveedores participando. Nuestra comunidad está creciendo cada semana.",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero data={data.hero} />
      <TrustedByComponent />
      <AboutNevenka data={data.aboutNevenka} />
      <WeMakeWorkWorkComponent data={data.weMakeWorkWork} />
      {/* <FeaturesComparison data={data.whyChooseSparkClub} /> */}
      <NonNegotiables data={data.ourNonNegotiables} />
      <TestimonialsContainer data={data.testimonials} />
      <FaqsSection data={data.faqs} />
    </>
  );
}
