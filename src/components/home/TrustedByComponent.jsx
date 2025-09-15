"use client";
import { public_sans } from "@/app/fonts/fonts";
import React from "react";
import TrustedByMobileSwiper from "./TrustedByMobileSwiper";

const companies = [
  {
    id: 1,
    img: "/images/TrustedBy/Company1.svg",
  },
  {
    id: 2,
    img: "/images/TrustedBy/Company2.svg",
  },
  {
    id: 3,
    img: "/images/TrustedBy/Company3.svg",
  },
  {
    id: 4,
    img: "/images/TrustedBy/Company4.svg",
  },
  {
    id: 5,
    img: "/images/TrustedBy/Company5.svg",
  },
  {
    id: 6,
    img: "/images/TrustedBy/Company6.svg",
  },
];

export default function TrustedByComponent() {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col justify-center items-center w-full py-[40px]">
        <h2
          className={`${public_sans.className} text-[24px] font-semibold leading-[100%] tracking-tight text-center mb-[12px] pt-[36px] text-black`}
        >
          Trusted by
        </h2>
        <div className="sm:hidden overflow-hidden w-full">
          <TrustedByMobileSwiper companies={companies} />
        </div>

        <div className="flex gap-[75px] w-full justify-center items-center">
          {companies.map((company) => (
            <div key={company.id}>
              <img src={company.img} alt={`Empresa asociada a Sparkclub`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
