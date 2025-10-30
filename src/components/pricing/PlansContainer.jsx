"use client";
import React from "react";
import PlanCard from "./PlanCard";
import { poppins } from "@/app/fonts/fonts";
import { LayoutGroup, motion } from "framer-motion";

export default function PlansContainer({ data }) {
  const [payment, setPayment] = React.useState("monthly");
  const [cardsData, setCardsData] = React.useState([]);

  // sólo 1 card expandida en mobile
  const [expandedId, setExpandedId] = React.useState(null);

  // detectar viewport mobile (<441px)
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const mql = window.matchMedia("(max-width: 440px)");
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  // si salimos de mobile, colapsar todo
  React.useEffect(() => {
    if (!isMobile && expandedId !== null) setExpandedId(null);
  }, [isMobile, expandedId]);

  React.useEffect(() => {
    setCardsData(data);
  }, [data]);

  // animación del toggle mensual/anual
  const [selectedKey, setSelectedKey] = React.useState(null);
  React.useEffect(() => {
    setSelectedKey(null);
  }, [payment]);
  const currentKey = selectedKey ?? payment;

  const handleClick = (key) => {
    if (payment === key) return;
    setSelectedKey(key);
    setPayment(key);
  };

  // acordeón mobile: si abrís una, se cierran las otras
  const toggleCard = (id) => {
    if (!isMobile) return; // sólo aplica en mobile
    setExpandedId((curr) => (curr === id ? null : id));
  };

  return (
    <div className="w-auto flex justify-center items-center gap-[20px] z-1 flex-wrap px-[10px] ">
      {/* Toggle con píldora animada */}
      <LayoutGroup id="pricing-toggle">
        <motion.div
          layout
          className="flex flex-col sm:flex-row w-full lg:w-auto justify-center items-center p-[10px] rounded-[10px] mb-[40px]"
          style={{ backgroundColor: "#F2F2F2" }}
        >
          <div
            className="relative inline-flex h-10 w-full md:w-[50%] lg:w-auto select-none p-1 rounded-[12px] mb-[10px] sm:mb-0"
            role="tablist w-full"
            aria-label="Monthly / Annual"
          >
            {/* Monthly */}
            <motion.button
              type="button"
              onClick={() => handleClick("monthly")}
              className={`${poppins.className} relative z-10 grid h-full w-[50%] md:w-auto place-items-center px-3 rounded-[10px]`}
              aria-selected={payment === "monthly"}
            >
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
                className={`relative z-10 text-[18px] leading-[100%] tracking-tight ${payment === "monthly" ? "text-[#333333]" : "text-[#5F5F5F]"
                  }`}
              >
                Monthly
              </span>
            </motion.button>

            {/* Annual */}
            <motion.button
              type="button"
              onClick={() => handleClick("annual")}
              className={`${poppins.className} relative z-10 grid h-full md:w-auto place-items-center px-3 rounded-[10px] w-[50%]`}
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
                className={`relative z-10 flex text-[18px] leading-[100%] tracking-tight  items-center gap-6
                ${payment === "annual" ? "text-[#333333]" : "text-[#5F5F5F]"}`
                }
              >
                <p>Annual  </p>
                <p
                  className={`${poppins.className} py-[8px] text-[12px] sm:text-[14px] leading-[100%] tracking-tight text-center`}
                >
                  Get 2 months free🔥
                </p>
              </span>
            </motion.button>
          </div>

        </motion.div>
      </LayoutGroup>

      {/* Cards */}
      <div className="flex justify-center items-center w-full gap-[30px] lg:gap-[12px] flex-wrap">
        {cardsData.map((card) => (
          <PlanCard
            key={card.id}
            id={card.id}
            name={card.name}
            price={`${payment === "monthly" ? card.price : card.anualPrice}`}
            features={card.features}
            icon={card.icon}
            href={card.href}
            btnText={card.btnText}
            bgColor={card.bgColor}
            // mobile accordion props
            isMobile={isMobile}
            expanded={expandedId === card.id}
            onToggle={() => toggleCard(card.id)}
          />
        ))}
      </div>
    </div>
  );
}
