"use client";

import Image from "next/image";
import { Public_Sans } from "next/font/google";
import Button from "../generals/Button";
import { motion } from "framer-motion";

const publicSans = Public_Sans({ subsets: ["latin"] });

const cards = [
    {
        id: "input",
        img: "/images/Cards/MockUp-01.png",
        imageAlt: "Input your event ideas",
        title: "Input your event ideas",
        description: "Dates, guests, vibe, format, services.",
    },
    {
        id: "proposal",
        img: "/images/Cards/MockUp-02.png",
        imageAlt: "Get a proposal in 20 sec",
        title: "Get a proposal in 20 sec",
        description: "Nevenka briefs the event for all your needs.",
    },
    {
        id: "pm",
        img: "/images/Cards/MockUp-03.png",
        imageAlt: "Your PM takes over",
        title: "Your PM takes over",
        description: "Experiences, suppliers, and love for details.",
    },
];

export default function AboutNevenka() {
    return (
        <section className={`bg-white ${publicSans.className} text-zinc-900`}>
            <div className="px-4 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-12 gap-x-6 gap-y-12">
                    {/* TITLE + SUBTITLE */}
                    <header className="col-start-2 col-span-10 text-center max-w-[1600px] mx-auto">
                        <h2 className="text-[38px] sm:text-[40px] lg:text-[40px] font-semibold ">
                            But wait, who is <span className="font-bold">Nevenka?</span>
                        </h2>
                        <p className="mt-4 text-base sm:text-[20px] text-zinc-700">
                            Nevenka is the teammate every manager wishes they had.
                        </p>
                        <p className="text-base sm:text-[20px] text-zinc-700">
                            She listens, understands your team, and turns scattered ideas into
                            meaningful experiences that truly bring people together.
                        </p>
                    </header>

                    {/* CARDS  */}
                    <div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {cards.map((c, i) => (
                            <motion.article
                                key={c.id}
                                className="relative overflow-hidden"
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.5,
                                    duration: 0.7,      // snappy
                                    delay: i * 0.1,
                                    duration: 0.6,
                                }}
                            >
                                {/* CARD BG */}
                                <div className="absolute inset-0">
                                    <Image
                                        src="/images/Cards/Background.png"
                                        alt=""
                                        fill
                                        className="object-cover"
                                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                                    />
                                </div>

                                {/* card content */}
                                <div className="relative p-4 sm:p-5 flex flex-col">
                                    {/* MOCK UP IMAGE */}
                                    <div className="w-full">
                                        <Image
                                            src={c.img}
                                            alt={c.imageAlt}
                                            width={1686}
                                            height={648}
                                            className="w-full h-auto"
                                        />
                                    </div>

                                    {/* YELLOW RECT */}
                                    <div className="rounded-[8px] bg-[#FCD34D] text-zinc-900 p-4 sm:p-5">
                                        <h3 className="text-[20px] sm:text-[32px] font-extrabold leading-[1.2]">
                                            {c.title}
                                        </h3>
                                        <p className="mt-2 text-[16px] sm:text-[20px] leading-[1.2]">
                                            {c.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-10 sm:mt-12 flex justify-center">
                    <Button btnText="Try for free" btnClass="primary-btn" href="/get-started" />
                </div>
            </div>
        </section>
    );
}
