"use client";
import React from "react";
import PlanCard from "./PlanCard";

export default function PlansContainer({ data }) {
  const [cardsData, setCardsData] = React.useState([]);
  React.useEffect(() => {
    setCardsData(data);
  }, [data]);

  return (
    <div className="w-full max-w-[1200px] p-[20px] flex justify-center items-center gap-[20px] z-1 flex-wrap px-[10px] md:px-[40px]">
      <div>Selector</div>
      <div className="flex justify-center items-center w-full gap-[30px] lg:gap-[12px] flex-wrap">
        {cardsData.map((card) => (
          <PlanCard
            key={card.id}
            name={card.name}
            price={card.price}
            features={card.features}
            icon={card.icon}
            href={card.href}
            btnText={card.btnText}
            bgColor={card.bgColor}
          />
        ))}
      </div>
      {/* Pricing cards go here */}
    </div>
  );
}
