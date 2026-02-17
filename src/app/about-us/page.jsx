import React from "react";

import MeetTheTeamContainer from "@/components/about-us/MeetTheTeamContainer";
import AboutUsHero from "@/components/about-us/AboutUsHero";
import AboutUsCards from "@/components/about-us/AboutUsCards";
import WhyUs from "@/components/about-us/WhyUs";

const data = {
  hero: {
    title: "Nuestra misión es fortalecer las relaciones laborales a través de ",
    titleSpan: "experiencias compartidas.",
    subtitle:
      "En Spark, redefinimos las conexiones. Creemos que una sola experiencia puede cambiar tu percepción de alguien 180º. Por eso, estamos en una misión para hacer que cada momento sea inolvidable. Hemos seleccionado, probado y perfeccionado las experiencias locales más modernas para ayudarte a construir relaciones que marquen la diferencia, con tu equipo estelar y tus clientes de primer nivel.",
  },
  aboutUsCards: {
    firstTitle: "Aquí está el desafío:",
    firstDescription:
      "Las empresas de rápido crecimiento luchan por mantener a su mejor talento involucrado, mientras que los empleados se sienten desconectados. Al mismo tiempo, muchas compañías fallan al intentar reconocer a sus clientes, recurriendo a gestos genéricos que no dejan una impresión duradera.",
    secondTitle: "Así que decidimos hacer algo al respecto.",
    secondDescription:
      "Como un equipo apasionado por las experiencias, la aventura y la cultura, creamos SparkClub para transformar las relaciones de negocio en conexiones reales. Porque cada interacción es una oportunidad para construir confianza, crear momentos de calidad y generar recuerdos que perduran.",
    secondDescriptionSpan: "Hagamos que cuente.",
  },
  meetTheTeam: {
    title: "Conoce al equipo",
    sparkClubTeam: [
      {
        id: 1,
        image: "/images/TheTeam/GastonSantourian-CEO-Sparkclub.jpg",
        nombre: "Gastón",
        apellido: "Santourian",
        rol: "CEO",
        linkedinLink: "https://www.linkedin.com/in/gastisan/",
        topExperiences: ["Kartings"],
        descriptions: [
          "Lideré la estrategia de marca, cultura y experiencias para empresas como Red Bull, Fitchin, 9z Team y DalePlay. Gestioné equipos de más de 50 personas y ejecuté más de 150 eventos online y presenciales en los sectores de tecnología y entretenimiento.",
          "Hoy canalizo esa escala operativa en Sparkclub, una plataforma diseñada para escalar la involucración a través de IA, datos de comportamiento y coordinación tokenizada.",
        ],
        experiences: [
          {
            id: 1,
            title: "",
            description: "",
            logo: "/images/Logos/LogoRedbull.svg",
          },
          {
            id: 2,
            title: "",
            description: "",
            logo: "/images/Logos/LogoFitchin.svg",
          },
          {
            id: 3,
            title: "",
            description: "",
            logo: "/images/Logos/LogoDalePlay.svg",
          },
          {
            id: 4,
            title: "",
            description: "",
            logo: "/images/Logos/LogoFadu.svg",
          },
        ],
      },
      {
        id: 2,
        image: "/images/TheTeam/DelfinBlaksleyMujica-CTO-Sparkclub.jpg",
        nombre: "Delfín",
        apellido: "Blaksley Mujica",
        rol: "CTO",
        linkedinLink:
          "https://www.linkedin.com/in/delfin-blaksley-mujica-73415b276/",
        topExperiences: ["Boards"],
        descriptions: [
          "Más de 8 años convirtiendo ideas en productos y desafíos en crecimiento. Fundé una agencia de software desde cero, entregué más de 100 proyectos a nivel global, lideré equipos de más de 20 personas y lancé una startup de OOH en Buenos Aires, Argentina. Este recorrido me enseñó lo poderosos que pueden ser los equipos alineados.",
          "Sparkclub es nuestra forma de llevar ese mismo sentido de conexión y momentum a organizaciones en todo el mundo.",
        ],
        experiences: [
          {
            id: 1,
            title: "",
            description: "",
            logo: "/images/Logos/LogoFiuba.svg",
          },
          {
            id: 2,
            title: "",
            description: "",
            logo: "/images/Logos/LogoCoderHouse.svg",
          },
          {
            id: 3,
            title: "",
            description: "",
            logo: "/images/Logos/LogoPushnPull.svg",
          },
          {
            id: 4,
            title: "",
            description: "",
            logo: "/images/Logos/LogoBanndo.svg",
          },
        ],
      },
    ],
  },
  whyUs: {
    title: "¿Por qué trabajar con nosotros?",
    items: [
      {
        id: "vision",
        icon: "/images/Icons/Illus1.svg",
        title: "VISIÓN",
        text: "Potenciar la involucración en el entorno laboral a través de experiencias innovadoras de team building y herramientas que fortalecen la lealtad.",
      },
      {
        id: "mission",
        icon: "/images/Icons/Illus2.svg",
        title: "MISIÓN",
        text: "Reducir significativamente la rotación y elevar el rendimiento creando conexiones sólidas entre las personas dentro de las organizaciones.",
      },
      {
        id: "process",
        icon: "/images/Icons/Illus3.svg",
        title: "PROCESO",
        text: "Impulsa la colaboración y eleva la motivación con experiencias diseñadas a medida. Logra mayor productividad y menor rotación mientras tu equipo se conecta y crece en conjunto.",
      },
    ],
  },
};

export default function AboutUsPageContainer() {
  return (
    <>
      <AboutUsHero data={data.hero} />
      <AboutUsCards data={data.aboutUsCards} />
      <MeetTheTeamContainer data={data.meetTheTeam} />
      <WhyUs data={data.whyUs} />
    </>
  );
}
