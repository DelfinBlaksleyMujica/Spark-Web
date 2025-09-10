import React from "react";
import Button from "../generals/Button";
// import BackgroundImg from "@/images/Textures/Hero_Background.png";

export default function Hero() {
  return (
    <>
      <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/*Imagen de Fondo*/}
        <img
          src="/images/Textures/Hero_Background.png"
          alt="Hero Background Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/*Content Container*/}
        <div className="w-full h-auto flex justify-center items-center z-10 px-4">
          <div className="flex flex-col gap-6 max-w-[1024px] text-center text-white pt-[116px]">
            <h1 className="text-white text-[2rem] md:text-[60px] font-medium leading-[100%] mb-[18px] md:mb-[18px]">
              Experiences that foster <br /> engagement.
            </h1>
            <div className="flex flex-col gap-3 md:gap-1 text-[16px] md:text-[18px] leading-[150%] mb-[25px] md:mb-[30px] px-[1rem] md:px-[2rem] lg:px-0">
              <p>
                Designing team experiences shouldn´t take weeks or blow your
                budget.
              </p>
              <p>What used to take months now takes 10 minutes.</p>
              <p>
                Just tell Nevenka what you need and get a curated,
                cost-efficient event, ready to go with certified suppliers.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-[18px] justify-center items-center ">
              <Button
                btnText="Experiences"
                btnClass="primary-btn"
                href="/get-started"
              />
              <Button
                btnText="Try Nevenka"
                btnClass="secondary-btn"
                href="/learn-more"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
