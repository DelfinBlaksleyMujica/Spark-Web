import Link from "next/link";
import React from "react";

export default function PlanCard({
  name,
  price,
  features,
  icon,
  href,
  btnText,
  bgColor,
}) {
  return (
    <div
      className={`${
        bgColor == "primary" ? "bg-[#FFFFFF]" : "bg-[#F2C94C]"
      } rounded-[10px] px-[25px] sm:px-[34px] py-[18px] sm:py-[26px] relative h-[550px] sm:h-[500px] flex flex-col justify-start items-start w-[337px]`}
    >
      <div className="flex justify-between items-center w-full mb-[20px] gap-[20px] mb-[20px]">
        <h3 className="font-semibold text-[26px] sm:text-[32px] text-black leading-[100%] tracking-tight">
          {name}
        </h3>
        <p className="font-semibold text-[24px] text-black leading-[100%] tracking-tight">
          {price} $/mo
        </p>
      </div>
      <div className="flex flex-col justify-start items-start gap-[15px] mb-[60px] w-full">
        <h4 className="mb-[10px] font-medium text-[20px] leading-[100%] tracking-tight">
          Includes:
        </h4>
        <ul className="pl-0 w-full">
          {features.map((feature, index) => (
            <li
              className="font-medium text-[14px] text-black leading-[136%] tracking-tight flex justify-start items-center gap-[15px] mb-[10px]"
              key={index}
            >
              <img src={icon} alt="" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-center items-center absolute bottom-[15px] left-0 px-[20px]">
        <Link
          href={href}
          className="bg-[#333333] text-white px-[5px] py-[10px] rounded-[20px] w-full flex justify-center items-center text-[16px] leading-[100%] tracking-tight"
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
}
