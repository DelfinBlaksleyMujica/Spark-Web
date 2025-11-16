import Link from "next/link";
import React from "react";

export default function HeaderDataEventos() {
  return (
    <nav className="h-[90px] w-full flex justify-between items-center fixed top-0 z-50 bg-[#121212]">
      <div className="w-[20%] flex justify-center items-center">
        <img
          src="/images/Logos/Logo_SparkClub_Original.webp"
          alt="Sparkclub Logo"
          width={155}
          height={30}
          className="block w-[135px] h-[25px] md:h-[20px] md:h-[auto] lg:w-[155px]"
        />
      </div>
      <div className="w-[20%] flex justify-center items-center text-white">
        <Link href="/data/eventos">Eventos</Link>
      </div>
    </nav>
  );
}
