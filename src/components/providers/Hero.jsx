import React from "react";
import Button from "../generals/Button";
import ActivityTags from "./ActivityTags";
import { public_sans } from "@/app/fonts/fonts";

export default function Hero() {
  return (
    <div className="relative flex justify-center items-center h-screen w-full bg-white pt-[40px] ">
      <div className="w-full h-full flex justify-center items-center px-[20px] lg:px-[100px]">
        <div className="flex flex-col justify-center items-center max-w-[800px] w-full">
          <h1
            className={`${public_sans.className} text-black text-[2rem] md:text-[60px] font-medium leading-[100%] mb-[30px] text-center leading-[100%]`}
          >
            Certified Experiences. <br />
            Real Impact.
          </h1>
          <p
            className={`${public_sans.className} mb-[56px] text-[18px] leading-[136%] tracking-tight text-center text-black`}
          >
            Join Sparkclub´s partner network to scale your experiences/services
            and connect with brands that value human interaction.
          </p>
          <div className="flex flex-col lg:flex-row sm:flex-row gap-4 w-full justify-center items-center">
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
