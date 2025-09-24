import SectionContainer from "@/components/pricing/SectionContainer";
import React from "react";

const data = {
  title: "Plans built for ",
  spanTitle: "people-first companies",
  subtitle:
    "From small teams to global companies, Sparkclub helps you scale engagement month by month.",
  planesData: [
    {
      id: 1,
      name: "Essential",
      features: [
        "Unlimited experiences",
        "Unlimited services",
        "Unlimited user invites",
        "Schedule experiences",
      ],
      price: "15",
      anualPrice: "10",
      icon: "/images/Icons/TickRosa.svg",
      href: "https://api.whatsapp.com/send?phone=541149604816",
      bgColor: "primary",
      btnText: "Default",
    },
    {
      id: 2,
      name: "PRO",
      features: [
        "Unlimited experiences",
        "Unlimited services",
        "Unlimited user invites",
        "Schedule experiences",
        "Event tracking & reports",
        "Recurring event automation",
        "Budget management",
      ],
      price: "30",
      anualPrice: "20",
      icon: "/images/Icons/TickNegro.svg",
      href: "https://api.whatsapp.com/send?phone=541149604816",
      bgColor: "secondary",
      btnText: "Select Plan",
    },
    {
      id: 3,
      name: "Enterprise",
      features: [
        "Unlimited team events",
        "Unlimited users",
        "Gift tracking & reports",
        "Budget management",
        "Branded gifts",
        "HRIS integrations",
        "Team event host",
        "Engagement tracking tool",
        "Priority support",
        "Advanced workspace management",
        "Custom integration",
      ],
      price: "85",
      anualPrice: "60",
      icon: "/images/Icons/TickRosa.svg",
      href: "https://api.whatsapp.com/send?phone=541149604816",
      bgColor: "primary",
      btnText: "Get a quote",
    },
  ],
  personalisedPlanTitle: "Need a personalised plan?",
  secondTitle: "For Experience Providers",
  secondSubtitle:
    "We´ve designed flexible tiers for providers, with commissions that scale as you do. Whether you´re just starting or already established, Sparkclub helps you grow.",
};

export default function PricingPageContainer() {
  return (
    <>
      <SectionContainer data={data} />
    </>
  );
}
