"use client";

import React, { useState } from "react";
import Button from "../generals/Button";
import ActivityTags from "./ActivityTags";
import { public_sans } from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import NavUserProviderToggle from "../generals/NavUserProviderToggle";

export default function Hero({ data }) {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      opacity: 0,
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
    },
  };


  return (
    <div className="relative flex justify-center items-center h-screen w-full bg-white pt-[40px] ">
      <div className="w-full h-full flex justify-center items-center px-[20px] lg:px-[100px]">
        {/* Pill Users/Providers in mobile version */}
        <div className="md:hidden absolute top-[120px] flex justify-center">
          <motion.div onClick={toggleMenu} variants={mobileLinkVars}>
            <NavUserProviderToggle />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center max-w-[800px] w-full">
          <motion.h1
            className={`${public_sans.className} text-black text-[2rem] md:text-[60px] font-medium leading-[100%] mb-[30px] text-center leading-[100%]`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {data.title}
            <br />
            {data.titleSpan}
          </motion.h1>
          <p
            className={`${public_sans.className} mb-[56px] text-[18px] leading-[136%] tracking-tight text-center text-black`}
          >
            {data.subtitle}
          </p>

          <div className=" flex flex-col lg:flex-row items-center w-full gap-[18px] justify-center ">
            <Button btnText="Become a Certified Partner" btnClass="primary-btn" href="https://app.formbricks.com/s/cmhxz4jy53zuwad01lat59has" />
            <Button btnText="Try Nevenka (alpha)" btnClass="tertiary-btn" href="https://zcal.co/sparkclub" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center items-center">
        <ActivityTags />
      </div>
    </div>
  );
}
