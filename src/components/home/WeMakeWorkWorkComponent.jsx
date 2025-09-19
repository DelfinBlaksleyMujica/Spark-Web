"use client";
import React from "react";
import Button from "../generals/Button";
import { poppins, public_sans } from "@/app/fonts/fonts";
import { motion } from "framer-motion";

function ColoredCard({ color, icon, title, text }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-[205px] w-full md:w-[243px] rounded-[10px] px-[13px] md:px-[26px] py-[10px] md:py-[20px]"
    >
      {/*Card Content Container*/}
      <div>
        <img src={icon} alt="" />
        <h3
          className={`${public_sans.className} text-black text-[22px] sm:text-[24px] font-bold leading-[100%] tracking-tight my-[12px]`}
        >
          {title}
        </h3>
        <p
          className={`${poppins.className} text-black text-[14px] sm:text-[16px] font-regular leading-[136%] tracking-tight`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

function CategoryCard({ category, bgImg, badge, hoverText }) {
  return (
    <div className="relative group w-full md:w-[243px]">
      {/* CARD */}
      <div
        className="
          relative h-[346px] w-full rounded-[10px] overflow-hidden
          transition-transform duration-300 ease-out
          group-hover:scale-[1.02]
        "
      >
        {/* Background image */}
        <img
          className="h-full w-full absolute top-0 left-0 object-cover rounded-[10px]"
          src={bgImg}
          alt=""
        />

        {/* White overlay on hover */}
        <div
          className="
            absolute inset-0 rounded-[10px] bg-white
            opacity-0 transition-opacity duration-300 ease-out
            group-hover:opacity-100
          "
        />

        {/* TOP TITLE BAR (always visible) */}
        <div className="relative z-20 bg-white rounded-t-[10px] px-[20px] py-[20px] w-full h-[90px] sm:h-[100px]">
          <h3
            className={`${public_sans.className} text-black text-[24px] sm:text-[28px] font-bold leading-[100%] tracking-tight`}
          >
            {category}
          </h3>

          {badge === "" ? null : badge === "COMING SOON" ? (
            <div className="rounded-[20px] bg-[#FFE696] flex justify-center items-center px-[12px] py-[6px] mt-[12px] w-[120px]">
              <p
                className={`${poppins.className} text-black text-[12px] font-bold leading-[100%]`}
              >
                COMING SOON
              </p>
            </div>
          ) : (
            <div className="rounded-[20px] bg-[#FFE696] flex justify-center items-center px-[12px] py-[6px] mt-[12px] w-[120px]">
              <p
                className={`${poppins.className} text-black text-[12px] font-bold leading-[100%]`}
              >
                TRENDING
              </p>
            </div>
          )}
        </div>

        {/* HOVER TEXT inside the card */}
        {hoverText && (
          <div
            className={`
              absolute top-[100px] left-0 right-0 px-[20px] py-[10px] text-left z-10
              opacity-0 translate-y-2
              transition-all duration-300 ease-out
              group-hover:opacity-100 group-hover:translate-y-0 text-[20px]
            `}
          >
            <p
              className={`${poppins.className} text-black text-[14px] sm:text-[16px] leading-[136%]`}
            >
              {hoverText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/** Animation for cards */
function RevealUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.9, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function WeMakeWorkWorkComponent() {


  return (
    <div className="h-[1500px] md:h-[1900px] lg:h-[1000px] bg-black relative flex justify-center items-center w-full">
      {/* Background Texture */}
      <img
        className="w-full h-full absolute top-0 left-0 object-cover"
        src="/images/Textures/SparkLogo_Texture.webp"
        alt=""
      />

      {/* Content */}
      <div className="py-[76px] px-0 md:px-[121px] w-full h-full flex flex-col justify-center items-center z-10">
        <motion.h2
          className={`${public_sans.className} text-white text-[48px] font-regular leading-[100%] mb-[40px] text-center w-full`}
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 100, damping: 16, duration: 0.6 }}
        >
          We make work, <strong>work</strong>
        </motion.h2>

        {/* Cards layout */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center mb-[20px] gap-[2%] md:gap-[20px] px-0 md:px-[119px]">
          <div className="w-full flex gap-[2%] md:gap-[20px] mb-[10px] lg:mb-[20px] justify-end items-center">
            <div className="flex flex-col gap-[7px] sm:gap-[20px] w-[50%] md:w-auto">
              <RevealUp delay={0.00}>
                <CategoryCard
                  category="Wellness Experiences"
                  badge=""
                  bgImg="/images/Cards/Welness.webp"
                  hoverText="Mindful activities curated for team wellbeing."
                />
              </RevealUp>

              <RevealUp delay={0.08}>
                <ColoredCard
                  color="#FCD34D"
                  icon="/images/3DIllus/Mountain.svg"
                  title="Global Events"
                  text="Access to the biggest event network in LatAm"
                />
              </RevealUp>
            </div>

            <div className="flex flex-col gap-[7px] sm:gap-[20px] w-[50%] md:w-auto">
              <RevealUp delay={0.16}>
                <ColoredCard
                  color="#FCA5A5"
                  icon="/images/3DIllus/Laptop.svg"
                  title="+20 Brands"
                  text="Already using Sparkclub as their engagement platform."
                />
              </RevealUp>

              <RevealUp delay={0.24}>
                <CategoryCard
                  category="Art & Culture"
                  badge="Trending"
                  bgImg="/images/Cards/ArtCulture.webp"
                  hoverText="From museum nights to creative labs."
                />
              </RevealUp>
            </div>
          </div>

          <div className="w-full flex gap-[2%] md:gap-[20px] mb-[20px] justify-start items-center">
            <div className="flex flex-col gap-[7px] sm:gap-[20px] w-[49%] md:w-auto">
              <RevealUp delay={0.32}>
                <CategoryCard
                  category="Running Session"
                  badge=""
                  bgImg="/images/Cards/RunningSessions.webp"
                  hoverText="Weekly group runs and step challenges."
                />
              </RevealUp>

              <RevealUp delay={0.40}>
                <ColoredCard
                  color="#86EFAC"
                  icon="/images/3DIllus/Truck.svg"
                  title="+300 Certified Suppliers"
                  text="Scaling their experiences and services."
                />
              </RevealUp>
            </div>

            <div className="flex flex-col gap-[7px] sm:gap-[20px] w-[49%] md:w-auto">
              <RevealUp delay={0.48}>
                <ColoredCard
                  color="#D8B4FE"
                  icon="/images/3DIllus/Bicycle.svg"
                  title="Experiences"
                  text="Looking for meaningful moments with your team?"
                />
              </RevealUp>

              <RevealUp delay={0.56}>
                <CategoryCard
                  category="Ed Tech"
                  badge="COMING SOON"
                  bgImg="/images/Cards/Edtech.webp"
                  hoverText="Learning tracks and growth paths."
                />
              </RevealUp>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center lg:justify-end lg:max-w-[1040px]">
          <Button
            btnText="Create an event now!"
            btnClass="tertiary-btn"
            href="https://forms.gle/QwyfJa6Nr6ZWz5hY7"
          />
        </div>
      </div>
    </div>
  );
}