"use client";

import React from "react";
import Button from "../generals/Button";
import ActivityTags from "./ActivityTags";
import { public_sans } from "@/app/fonts/fonts";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative flex justify-center items-center h-screen w-full bg-white pt-[40px] ">
      <div className="w-full h-full flex justify-center items-center px-[20px] lg:px-[100px]">
        <div className="flex flex-col justify-center items-center max-w-[800px] w-full">
          <motion.h1
            className={`${public_sans.className} text-black text-[2rem] md:text-[60px] font-medium leading-[100%] mb-[30px] text-center leading-[100%]`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Certified Experiences. <br />
            Real Impact.
          </motion.h1>
          <p
            className={`${public_sans.className} mb-[56px] text-[18px] leading-[136%] tracking-tight text-center text-black`}
          >
            Join Sparkclub´s partner network to scale your experiences/services
            and connect with brands that value human interaction.
          </p>

          <div className="flex flex-col w-full lg:flex-row gap-[18px] justify-center px-8">
            <Button btnText="Book a demo" btnClass="primary-btn" href="/" />
            <Button btnText="Join us" btnClass="secondary-btn" href="/" />
          </div>

        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center items-center">
        <ActivityTags />
      </div>
    </div>
  );
}
