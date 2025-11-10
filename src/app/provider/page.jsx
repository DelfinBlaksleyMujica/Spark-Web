import TestimonialsContainer from "@/components/generals/TestimonialsContainer";
import Hero from "@/components/providers/Hero";
import KickOffComponent from "@/components/providers/KickOffComponent";
import ActivityTags from "@/components/providers/ActivityTags";
import FaqsProviders from "@/components/providers/FaqsProviders";


import React from "react";

const data = {
  hero: {
    title: "Certified Experiences. ",
    titleSpan: "Real Impact.",
    subtitle:
      "Join Sparkclub´s partner network to scale your experiences/services and connect with brands that value human interaction.",
  },
  kickOffWithSparkClub: {
    title: "Kick off your journey",
    subtitle:
      "Three simple steps to certify your profile, showcase your experiences, and connect with brands.",
    cards: [
      {
        id: 1,
        image: "/images/Providers/KickOffJourneyStep1.webp",
        title: "Sync with Nevenka",
        description:
          "Easily complete your profile and become a verified partner.",
        color: "#D8B4FE",
      },
      {
        id: 2,
        image: "/images/Providers/KickOffJourneyStep2.webp",
        title: "Share your experiences",
        description:
          "Share your activities, get discovered, and track engagement.",
        color: "#FCA5A5",
      },
      {
        id: 3,
        image: "/images/Providers/KickOffJourneyStep3.webp",
        title: "Grow your impact.",
        description:
          "Connect with brands, scale your reach, and unlock new opportunities.",
        color: "#6EE7B7",
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
  providersFaqs: {
    title: "FAQs",
    subtitle:
      "Your questions answered: how we make work more engaging, fun, and connected.",
    faqs: [
      {
        id: "user",
        question: "What is Sparkclub?",
        answer:
          "Sparkclub is a platform that brings people together through curated events, activities, and experiences designed to build stronger teams and communities — inside and outside the workplace.",
      },
      {
        id: "supplier",
        question: "Who can become a supplier?",
        answer:
          "Any provider offering services or experiences for teams — from workshops and sports to catering, venues, tech, or wellness activities.",
      },
      {
        id: "work",
        question: "How does Sparkclub work for suppliers?",
        answer:
          "You create your profile, list your services, and companies can book directly. Sparkclub makes it easy to connect with new clients and manage requests.",
      },
      {
        id: "companies",
        question: "What kind of companies will I reach?",
        answer:
          "Startups, SMEs, and large organizations looking for team-building, offsites, and well-being activities for their employees.",
      },
      {
        id: "payments",
        question: "How do bookings and payments work?",
        answer:
          "Companies book through Sparkclub, and you’ll receive payment securely after the event.",
      },
      {
        id: "cancelled",
        question: "What happens if a booking is cancelled?",
        answer:
          "Sparkclub has a cancellation policy to protect both companies and suppliers. You’ll always be notified in advance, and in some cases you may keep part of the payment depending on timing.",
      },
      {
        id: "ratings",
        question: "How do ratings and reviews work?",
        answer:
          "After each event, companies can leave feedback. Positive reviews increase your visibility on the platform and help you reach more clients.",
      },
      {
        id: "costs",
        question: "Is there a cost to join as a supplier?",
        answer:
          "Joining is free. Sparkclub charges a small commission per booking to keep the platform running.",
      },
      {
        id: "availability",
        question: "Can I manage my own availability?",
        answer:
          "Yes. You decide when and how your services are offered, including blackout dates or limits.",
      },
      {
        id: "joining",
        question: "Why should I join Sparkclub?",
        answer:
          "Sparkclub helps you grow your business, reach new clients, and be part of a community that values real experiences.",
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
