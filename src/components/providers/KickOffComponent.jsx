"use client";

import React from "react";
import Button from "../generals/Button";
import { poppins, public_sans } from "@/app/fonts/fonts";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = ({ id, image, title, description, color, index }) => {
  return (
    <motion.div
      style={{ backgroundColor: color }}
      className={`card w-[345px] h-[449px] px-[5px] py-[10px]`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: index * 0.2,
      }}
    >
      <div className="relative w-full h-[226px] mb-[24px] overflow-hidden">
        <div
          style={{ backgroundColor: color }}
          className={`z-1 w-[64px] h-[64px] rounded-br-[5px] absolute top-0 left-0 flex items-center justify-center`}
        >
          <span className="text-[48px] font-bold text-black tracking-tight leading-[100%]">
            {id}.
          </span>
        </div>
        <img
          className="w-full absolute top-0 left-0 object-cover h-full"
          src={image}
          alt=""
        />
      </div>
      <h3
        className={`${public_sans.className} w-[80%] pl-[10px] mb-[24px] text-black text-[36px] font-bold leading-[100%] tracking-tight`}
      >
        {title}
      </h3>
      <p
        className={`${poppins.className} w-[90%] pl-[10px] text-black text-[18px] font-regular leading-[100%] tracking-tight`}
      >
        {description}
      </p>
    </motion.div>
  );
};

export default function KickOffComponent({ cardsData, titleKickoff }) {
  //parallax animation
  const { scrollY } = useScroll();

  const yFast = useTransform(scrollY, [0, 500], [0, -80]);
  const yMed = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    // <div className="w-full py-[70px] flex justify-center items-center bg-white">
    //   <div className="flex flex-col justify-center items-center w-full overflow-hidden px-[40px] xl:px-[70px] 2xl:px-[120px]">
    <div className="relative w-full py-[70px] flex justify-center items-center bg-black overflow-hidden">
      {/* BACKGROUND SHAPES */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.img
          src="/images/Textures/Circle_BG.png"
          alt=""
          className="absolute w-[300px] h-[300px] left-[10px] bottom-[10px] lg:left-[4px] lg:bottom-[10px] z-0"
          style={{ y: yFast }}
        />

        <motion.img
          src="/images/Textures/SquareBlack_BG.svg"
          alt=""
          className="absolute w-[250px] h-[250px] opacity-0 lg:opacity-100 rotate-45 z-0 lg:left-[-100px] lg:top-[0px]"
          style={{ y: yFast }}
        />

        <motion.img
          src="/images/Textures/SquareBlack_BG.svg"
          alt=""
          className="absolute w-[350px] h-[350px] rotate-45 right-[-100px] z-0 lg:right-[70px] lg:bottom-[10px]"
          style={{ y: yFast }}
        />

        {/* Circle top-right */}
        <motion.img
          src="/images/Textures/Circle_BG.png"
          alt=""
          className="absolute w-[200px] h-[200px] z-0 opacity-0 lg:opacity-100 lg:right-[-10px] lg:top-[80px]"
          style={{ y: yMed }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full overflow-hidden px-[40px] xl:px-[70px] 2xl:px-[120px]">
        {/* TITLE */}
        <h2
          className={`${public_sans.className} text-center text-[44px] font-extrabold leading-[100%] text-white mb-[45px]`}
        >
          {titleKickoff}
        </h2>

        {/* SUBTITLE */}
        <p
          className={`${poppins.className} text-[18px] font-regular leading-[100%] tracking-tight text-white mb-[30px] text-center`}
        >
          Three simple steps to certify your profile, showcase your experiences,
          and connect with brands.
        </p>

        {/* CARDS */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-[22px] flex-wrap">
          {cardsData.map((card, index) => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              color={card.color}
              index={index}
            />
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="w-full flex justify-center items-center mt-[50px]">
          <Button btnText="Become a partner" btnClass="primary-btn" href="/" />
        </div>
      </div>
    </div>
  );
}
