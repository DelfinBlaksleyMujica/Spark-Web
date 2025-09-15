"use client";
import React from "react";
import PlanCard from "./PlanCard";
import { poppins } from "@/app/fonts/fonts";
import { LayoutGroup, motion } from "framer-motion";

export default function PlansContainer({ data }) {
  // normalizo a 'monthly' | 'annual'
  const [payment, setPayment] = React.useState("monthly");
  const [cardsData, setCardsData] = React.useState([]);

  React.useEffect(() => {
    setCardsData(data);
  }, [data]);

  // para disparar la animación inmediatamente al click (idéntico patrón)
  const [selectedKey, setSelectedKey] = React.useState(null);
  React.useEffect(() => {
    // como no hay navegación, cuando payment cambia “consolido” el estado
    setSelectedKey(null);
  }, [payment]);

  const currentKey = selectedKey ?? payment; // dónde se posiciona la píldora

  const handleClick = (key) => {
    if (payment === key) return;
    setSelectedKey(key); // mueve la píldora YA
    setPayment(key); // actualiza el estado (los precios se re-renderizan)
  };

  return (
    <div className="w-auto flex justify-center items-center gap-[20px] z-1 flex-wrap px-[10px] ">
      {/* Toggle con píldora animada */}
      <LayoutGroup id="pricing-toggle">
        <motion.div
          layout
          className="flex justify-center items-center p-[10px] rounded-[10px] mb-[40px]"
          style={{ backgroundColor: "#F2F2F2" }}
        >
          <div
            className="relative inline-flex h-10 w-auto select-none p-1 rounded-[12px]"
            role="tablist"
            aria-label="Monthly / Annual"
          >
            {/* Slot Monthly */}
            <motion.button
              type="button"
              onClick={() => handleClick("monthly")}
              className={`${poppins.className} relative z-10 grid h-full w-auto place-items-center px-3 rounded-[10px]`}
              aria-selected={payment === "monthly"}
            >
              {/* píldora compartida */}
              {currentKey === "monthly" && (
                <motion.span
                  layoutId="pricing-pill"
                  className="absolute inset-0 rounded-[10px]"
                  style={{
                    background: "#FCD34D",
                    boxShadow: "0 1px 2px rgba(0,0,0,.06)",
                    willChange: "transform",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 40,
                    mass: 0.6,
                  }}
                />
              )}
              <span
                className={`relative z-10 text-[18px] leading-[100%] tracking-tight ${
                  payment === "monthly" ? "text-[#333333]" : "text-[#5F5F5F]"
                }`}
              >
                Monthly
              </span>
            </motion.button>

            {/* Slot Annual */}
            <motion.button
              type="button"
              onClick={() => handleClick("annual")}
              className={`${poppins.className} relative z-10 grid h-full w-auto place-items-center px-3 rounded-[10px]`}
              aria-selected={payment === "annual"}
            >
              {currentKey === "annual" && (
                <motion.span
                  layoutId="pricing-pill"
                  className="absolute inset-0 rounded-[10px]"
                  style={{
                    background: "#FCD34D",
                    boxShadow: "0 1px 2px rgba(0,0,0,.06)",
                    willChange: "transform",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 40,
                    mass: 0.6,
                  }}
                />
              )}
              <span
                className={`relative z-10 text-[18px] leading-[100%] tracking-tight ${
                  payment === "annual" ? "text-[#333333]" : "text-[#5F5F5F]"
                }`}
              >
                Annual
              </span>
            </motion.button>
          </div>

          {/* Badge “2 meses gratis” */}
          <div className="ml-[12px]">
            <p
              className={`text-[#00A03A] ${poppins.className} text-[18px] leading-[100%] tracking-tight`}
            >
              Get 2 months free🔥
            </p>
          </div>
        </motion.div>
      </LayoutGroup>

      {/* Cards */}
      <div className="flex justify-center items-center w-full gap-[30px] lg:gap-[12px] flex-wrap">
        {cardsData.map((card) => (
          <PlanCard
            key={card.id}
            name={card.name}
            price={`${payment === "monthly" ? card.price : card.anualPrice}`}
            features={card.features}
            icon={card.icon}
            href={card.href}
            btnText={card.btnText}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </div>
  );
}
