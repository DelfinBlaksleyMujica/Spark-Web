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
    tituloPrincipal: "Experiences that foster",
    kwTituloPrincipal: "engagement.",
    firstSubtitle: "Stop spending weeks planning and fortune on team events. ",
    strongSubtitle: "Tell Nevenka what you need ",
    secondPartSubtitle:
      "and get perfectly curated, budget-friendly experiences with certified suppliers, ready in just 10 minutes.",
  },
  aboutNevenka: {
    title: "But wait, who is",
    firstSubtitle: "Nevenka is the teammate every manager wishes they had.",
    secondSubtitle:
      " She listens, understands your team, and turns scattered ideas into meaningful experiences that truly bring people together.",
    cards: [
      {
        id: "input",
        img: "/images/Cards/MockUp-01.webp",
        imageAlt: "Input your event ideas",
        title: "Input your event ideas",
        description: "Dates, guests, vibe, format, services.",
      },
      {
        id: "proposal",
        img: "/images/Cards/MockUp-02.webp",
        imageAlt: "Get a proposal in 20 sec",
        title: "Get a proposal in 20 sec",
        description: "Nevenka briefs the event for all your needs.",
      },
      {
        id: "pm",
        img: "/images/Cards/MockUp-03.webp",
        imageAlt: "Your PM takes over",
        title: "Your PM takes over",
        description: "Experiences, suppliers, and love for details.",
      },
    ],
  },
  weMakeWorkWork: [
    {
      title: "Make Events, ",
      titleSpan: "Work",
    },
  ],
  whyChooseSparkClub: {
    title: "Why choose",
    titleSpan: "SparkClub?",
    tableTitle: "Features",
    firstColumnTitle: "SparkClub",
    secondColumnTitle: "Others",
    rows: [
      { feature: "Can you track events?", spark: true, other: false },
      {
        feature: "Is the organizer investing hours for every event?",
        spark: "10 mins = $5 salary",
        other: "+8hs = +$500 salary",
      },
      {
        feature: "Are the events impactful?",
        spark: true,
        other: "Not certified",
      },
      {
        feature: "Can you scale events through your organization?",
        spark: true,
        other: "Limited",
      },
      {
        feature:
          "Do you have a host guiding you though the organizing process?",
        spark: true,
        other: false,
      },
      {
        feature: "Can you track organizational behaviour?",
        spark: "w/ specific dynamics",
        other: false,
      },
      { feature: "Can you track specific EX KPIs?", spark: true, other: false },
      { feature: "High-end UX", spark: true, other: false },
    ],
  },
  ourNonNegotiables: {
    title: "Our non-negotiables",
    nonNegotiables: [
      {
        id: 1,
        title: "INNOVATION",
        description: "Leveraging AI to foster employee well-being.",
        color: "bg-[#FCA5A5]",
        img: "/images/3DIllus/Rocket.svg",
      },
      {
        id: 2,
        title: "EMPLOYEE CENTRIC",
        description: "To reduce rotation and turnover rates.",
        color: "bg-[#D8B4FE]",
        img: "/images/3DIllus/Backpack.svg",
      },
      {
        id: 3,
        title: "DATA DRIVEN",
        description: "To enhance workforce performance and satisfaction",
        color: "bg-[#FAE5A8]",
        img: "/images/3DIllus/Plant.svg",
      },
      {
        id: 4,
        title: "EFFICIENCY",
        description: "S.M.A.R.T long-term plans to enforce brand culture.",
        color: "bg-[#67E8F9]",
        img: "/images/3DIllus/Lamp.svg",
      },
    ],
  },
  testimonials: {
    title: "What people are saying",
    testimonials: [
      {
        id: 1,
        img: "/images/Testimonios/TestimonialIconPlaceholder1.jpeg",
        testimonio:
          "Working with SparkClub feels natural. The connections are there, the way of working is clear, and everything runs smooth from start to finish. It´s the kind of partner you don´t need to over-explain things to - they get it and make it happen.",
        firma: "Technical production",
      },
      {
        id: 2,
        img: "/images/Testimonios/TestimonialIconPlaceholder2.svg",
        testimonio:
          "I like how SparkClub opens doors. One week I´m setting up an event for a startup, the next I´m meeting a new brand I never thought I´d work with. They make thos connections possible, and for frelancers like me, that´s gold.",
        firma: "Wellness Coach",
      },
      {
        id: 3,
        img: "/images/Testimonios/TestimonialIconPlaceholder3.svg",
        testimonio:
          "With SparkClub, creating events stopped being a headache. The platform connects us instantly with trusted suppliers, and in minutes we have everything set up. It´s seamless, efficient, and lets us focus on delivering experiences that strenghten our brand.",
        firma: "FMCG Beverages",
      },
      {
        id: 4,
        img: "/images/Testimonios/TestimonialIconPlaceholder4.svg",
        testimonio:
          "We needed to organize an activation for DevConnect, and we were 10,500 km away from the venue. Honestly, I didn´t expect it to come together so fast. SparkClub managed everything with precision and delivered an event that felt like we´d been on the ground al along.",
        firma: "Industry-Blockchain",
      },
    ],
  },
  faqs: {
    title: "FAQs",
    subtitle:
      "Your questions answered: how we make work more engaging, fun, and connected.",
    FAQS: [
      {
        id: "user",
        question: "What is Sparkclub?",
        answer:
          "Sparkclub is a platform that brings people together through curated events, activities, and experiences designed to build stronger teams and communities — inside and outside the workplace.",
      },
      {
        id: "organizer",
        question: "Who is Sparkclub for?",
        answer: [
          [
            "- ",
            { bold: "Employees" },
            " — discover and join activities that match your interests.",
          ],
          [
            "- ",
            { bold: "Managers & HR teams" },
            " — plan team-building experiences easily and measure their impact.",
          ],
          [
            "- ",
            { bold: "Brands & suppliers" },
            " — connect with companies and communities through meaningful events.",
          ],
        ],
      },
      {
        id: "analytics",
        question: "How does Sparkclub work?",
        answer:
          "You create your profile, share your interests, and Sparkclub recommends events, activities, and experiences that fit your team’s vibe. From after-work meetups to larger offsites or wellness activities, everything is designed to strengthen connections.",
      },
      {
        id: "billing",
        question: "What kind of experiences can I expect?",
        answer: [
          [
            "- 🏔 Internal team events: offsites, workshops, sports, cultural activities.",
          ],
          [
            "- 🌍 External community events: networking, festivals, learning sessions, and collaborations with other companies.",
          ],
          [
            "- ✨ Well-being & lifestyle perks: from yoga classes to cooking nights.",
          ],
        ],
      },
      {
        id: "companies",
        question: "Why should companies use Sparkclub?",
        answer:
          "Because engaged teams perform better. Sparkclub saves managers time by automating event planning and helps companies create a culture of belonging, motivation, and connection.",
      },
      {
        id: "communities",
        question: "How does Sparkclub help communities grow?",
        answer:
          "Every event, big or small, becomes a way to connect. Employees bond with each other, companies connect with suppliers, and brands get closer to communities through real experiences.",
      },
      {
        id: "active",
        question: "Is Sparkclub already active?",
        answer:
          "Yes. We’ve already organized multiple events and activities, with teams and suppliers joining in. Our community is growing every week.",
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
