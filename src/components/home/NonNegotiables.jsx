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
        img: "/images/3DIllus/Rocket.png",
    },
    {
        id: 2,
        title: "EMPLOYEE CENTRIC",
        description: "To reduce rotation and turnover rates.",
        color: "bg-[#D8B4FE]",
        img: "/images/3DIllus/Backpack.png",
    },
    {
        id: 3,
        title: "DATA DRIVEN",
        description: "To enhance workforce performance and satisfaction",
        color: "bg-[#FAE5A8]",
        img: "/images/3DIllus/Plant.png",
    },
    {
        id: 4,
        title: "EFFICIENCY",
        description: "S.M.A.R.T long-term plans to enforce brand culture.",
        color: "bg-[#67E8F9]",
        img: "/images/3DIllus/Lamp.png",
    },
];

export default function NonNegotiables() {
    return (
        <section className={`${publicSans.className} relative bg-black overflow-hidden`}>
            {/* BACKGROUND SHAPES */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <Image src="/images/Textures/Circle_BG.png" alt="" width={200} height={200} className="absolute md:bottom-10 lg:left-60 lg:top-10 lg:left-6 opacity-[0] md:opacity-[100]" />
                <Image src="/images/Textures/Circle_BG.png" alt="" width={240} height={240} className="absolute md:bottom-0 md:right-0 lg:bottom-140 lg:left-300 opacity-[0] md:opacity-[100]" />
                <Image src="/images/Textures/Circle_BG.png" alt="" width={460} height={460} className="absolute md:bottom-100 md:right-50 lg:top-80 lg:right-10 opacity-[0] md:opacity-[100]" />
                <Image src="/images/Textures/Circle_BG.png" alt="" width={300} height={300} className="absolute lg:top-1/2 lg:left-1/3 opacity-[0] md:opacity-[100]" />
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
                                className={`relative ${item.color} rounded-[10px] px-4 pt-20 pb-8 text-center`}
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

                                <h3 className="text-[30px] md:text-[32px] font-black text-black mb-2 pt-24">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] sm:text-[22px]  text-black">
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
