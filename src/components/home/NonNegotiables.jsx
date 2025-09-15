"use client";

import Image from "next/image";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

const nonNegotiables = [
    {
        id: 1,
        title: "INNOVATION",
        description: "Leveraging AI to foster employee well-being.",
        color: "bg-[#FCA5A5]",
        img: "/images/3DIllus/Rocket.svg",
    },
    {
        id: 2,
        title: "EMPLOYEE CENTRIC",
        description: "To reduce rotation and turnover rates.",
        color: "bg-[#D8B4FE]",
        img: "/images/3DIllus/Backpack.svg",
    },
    {
        id: 3,
        title: "DATA DRIVEN",
        description: "To enhance workforce performance and satisfaction",
        color: "bg-[#FAE5A8]",
        img: "/images/3DIllus/Plant.svg",
    },
    {
        id: 4,
        title: "EFFICIENCY",
        description: "S.M.A.R.T long-term plans to enforce brand culture.",
        color: "bg-[#67E8F9]",
        img: "/images/3DIllus/Lamp.svg",
    },
];

export default function NonNegotiables() {
    return (
        <section className={`${publicSans.className} relative bg-black overflow-hidden`}>
            {/* BACKGROUND SHAPES */}
            <div className="pointer-events-none absolute inset-0 z-0">
                {/* BACKGROUND  */}
                <img
                    src="/images/Textures/Circle_BG.png"
                    alt=""
                    className="absolute w-[300px] h-[300px] left-[10px] bottom-[10px]   lg:left-[4px] lg:bottom-[10px] z-0"
                />
                <img
                    src="/images/Textures/SquareBlack_BG.svg"
                    alt=""
                    className="absolute w-[250px] h-[250px] opacity-0 lg:opacity-100 rotate-45 z-0 lg:left-[-100px] lg:top-[0px] "
                />
                <img
                    src="/images/Textures/SquareBlack_BG.svg"
                    alt=""
                    className="absolute w-[350px] h-[350px] rotate-45 right-[-100px] z-0 lg:right-[70px] lg:bottom-[10px]"
                />
                <img
                    src="/images/Textures/Circle_BG.png"
                    alt=""
                    className="absolute w-[200px] h-[200px]  z-0 opacity-0 lg:opacity-100 lg:right-[-10px] lg:top-[80px]"
                />

            </div>

            {/* HEADER */}
            <div className="relative z-10 py-14 sm:py-16 lg:py-20">
                <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                    {/*  */}
                    <header className="col-start-2 col-span-10 text-center py-6">
                        <h2 className="text-[36px] text-white sm:text-[40px] font-semibold ">
                            Our non-negotiables
                        </h2>
                    </header>

                    {/* CARDS */}
                    <div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-8 py-12">
                        {nonNegotiables.map((item) => (
                            <article
                                key={item.id}
                                className={`relative ${item.color} rounded-[10px] px-4 pt-20 pb-12 text-center flex flex-col  `}
                            >
                                {/* Illustration  */}
                                <div className="absolute -top-20 left-0 right-0 flex justify-center py-4">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={300}
                                        height={300}
                                        className="w-55 h-55 object-contain"
                                        priority={item.id === 1}
                                    />
                                </div>

                                <h3 className="text-[30px] lg:text-[25px] xl:text-[32] font-black text-black mb-2 pt-24 leading-[1.2]">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] sm:text-[22px] text-black leading-[1.3]">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
