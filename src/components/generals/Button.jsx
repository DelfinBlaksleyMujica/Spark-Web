import { poppins } from "@/app/fonts/fonts";
import Link from "next/link";
import React from "react";

export default function Button({ btnText, btnClass, href }) {
  return (
    <button
      className={`${btnClass} rounded-[10px] flex items-center justify-center`}
    >
      <Link
        className={`${poppins.className} w-full h-full flex justify-center items-center text-[18px] font-medium leading-[100%] tracking-tight px-6 py-3`}
        href={href}
      >
        {btnText}
      </Link>
    </button>
  );
}
