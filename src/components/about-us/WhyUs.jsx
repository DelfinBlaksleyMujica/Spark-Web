"use client";

import Image from "next/image";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

const ITEMS = [
    {
        id: "vision",
        icon: "/images/Icons/Illus1.svg",
        title: "VISION",
        text: "Dedicated to enhancing workplace engagement through innovative team building events and loyalty features.",
    },
    {
        id: "mission",
        icon: "/images/Icons/Illus2.svg",
        title: "MISSION",
        text: "Our mission is to significantly reduce turnover and elevate performance by fostering strong connections among employees.",
    },
    {
        id: "process",
        icon: "/images/Icons/Illus3.svg",
        title: "PROCESS",
        text: "Enhance collaboration and boost morale with our tailored team-building events. Experience increased productivity and reduced turnover as your team connects and grows together.",
    },
];

export default function WhyWorkWithUs() {
    return (
        <section className={`${publicSans.className} relative bg-black overflow-hidden`}>
            {/* BACKGROUND  */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <Image
                    src="/images/Textures/Circle_BG.png"
                    alt=""
                    width={200}
                    height={200}
                    className="absolute md:bottom-10 lg:top-10 lg:left-6 opacity-0 md:opacity-100"
                />
                <Image
                    src="/images/Textures/Circle_BG.png"
                    alt=""
                    width={240}
                    height={240}
                    className="absolute md:bottom-0 md:right-0 lg:bottom-[140px] lg:left-[300px] opacity-0 md:opacity-100"
                />
                <Image
                    src="/images/Textures/Circle_BG.png"
                    alt=""
                    width={460}
                    height={460}
                    className="absolute md:bottom-[100px] md:right-[50px] lg:top-80 lg:right-10 opacity-0 md:opacity-100"
                />
                <Image
                    src="/images/Textures/Circle_BG.png"
                    alt=""
                    width={300}
                    height={300}
                    className="absolute lg:top-1/2 lg:left-1/3 opacity-0 md:opacity-100"
                />
            </div>

            {/* MAIN  */}
            <div className="relative z-10 px-4 sm:px-6 md:px-0 py-14 sm:py-16 lg:py-20">
                <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                    {/* Title */}
                    <header className="col-start-2 col-span-10 text-center pb-24 pt-4 ">
                        <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold">
                            Why work with us?
                        </h2>
                    </header>

                    {/* 3 Cards */}
                    <div className="col-start-2 col-span-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 xl:gap-20">
                            {ITEMS.map((item) => (
                                <article
                                    key={item.id}
                                    className="flex flex-col items-center text-center space-y-5 sm:space-y-6"
                                >
                                    {/* Icon */}
                                    <div className="relative w-20 h-20 sm:w-20 sm:h-20">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                            sizes="100px"
                                            priority={item.id === "vision"}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[26px] sm:text-[28px] lg:text-[30px] font-extrabold tracking-tight">
                                        {item.title}
                                    </h3>

                                    {/* Text */}
                                    <p className="max-w-[28rem] text-[18px] sm:text-[20px] leading-7 text-white/90">
                                        {item.text}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}