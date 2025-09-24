"use client";
import React from "react";
import PlansContainer from "./PlansContainer";
import Link from "next/link";
import Button from "../generals/Button";
import { public_sans } from "@/app/fonts/fonts";
import { motion } from "framer-motion";

export default function SectionContainer({ data }) {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen relative bg-[#D9D9D9] overflow-hidden py-[60px] h-[3000px] lg:h-[1500px]">
      <img
        src="/images/Pricing/PricingBackgroundDecoration1.svg"
        alt="Pricing Section Background Pattern"
        className="absolute w-[437px] h-[437px] left-[-150px] top-[300px] lg:top-[-50px] z-0"
      />
      <img
        src="/images/Pricing/PricingBackgroundDecoration2.svg"
        alt="Pricing Section Background Pattern"
        className="absolute w-[272px] h-[272px] right-[-50px] lg:right-[20px] top-[650px] lg:top-[270px] z-0"
      />
      <img
        src="/images/Pricing/PricingBackgroundDecoration3.svg"
        alt="Pricing Section Background Pattern"
        className="w-[437px] h-[437px] absolute z-0 left-[-100px] bottom-[1100px] lg:bottom-[400px]"
      />
      <img
        src="/images/Pricing/PricingBackgroundDecoration4.svg"
        alt="Pricing Section Background Pattern"
        className="absolute w-[437px] h-[437px] absolute z-0 right-[0px] bottom-[300px]"
      />

      {/* CONTENT */}
      <div className="w-full max-w-[1200px] px-[20px] sm:px-[60px] lg:p-[20px] flex flex-col justify-start items-center width-[80%] h-full z-1">
        <motion.h1
          className="mt-[120px] sm:mt-[240px] lg:mt-[120px] text-[36px] sm:text-[48px] font-medium leading-[100%] tracking-tight mb-[30px] lg:mb-[10px] text-center width-[90%] text-black"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {data.title}
          <strong>{data.spanTitle}</strong>
        </motion.h1>
        <p className="text-[24px] leading-[136%] tracking-tight font-medium mb-[40px] text-center text-black">
          {data.subtitle}
        </p>
        <PlansContainer data={data.planesData} />
        <div className="w-full flex justify-center items-center mt-[20px] mb-[125px] text-black">
          <p>
            {data.personalisedPlanTitle}{" "}
            <Link className="underline font-semibold" href="/contact">
              Get in touch
            </Link>
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center w-full lg:w-[75%] text-center">
            <h3
              className={`${public_sans.className} font-medium text-[32px] sm:text-[48px] leading-[100%] tracking-tight text-center mb-[20px] text-black`}
            >
              {data.secondTitle}
            </h3>
            <p
              className={`${public_sans.className} text-[18px] sm:text-[24px] leading-[136%] tracking-tight font-medium  text-center mb-[40px] text-black`}
            >
              {data.secondSubtitle}
            </p>
            <div className="w-full flex justify-center items-center">
              <Button
                btnText="Become a partner"
                btnClass="primary-btn"
                href="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
