import Link from "next/link";
import React from "react";

export default function Button({ btnText, btnClass, href }) {
  return (
    <button
      className={`${btnClass} px-6 py-3 rounded-[10px] flex items-center justify-center`}
    >
      <Link
        className="w-full h-full flex justify-center items-center text-[18px] font-medium leading-[100%] tracking-tight"
        href={href}
      >
        {btnText}
      </Link>
    </button>
  );
}
