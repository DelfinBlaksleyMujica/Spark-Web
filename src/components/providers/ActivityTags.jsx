"use client";

import Image from "next/image";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

const tags = [
    { label: "Running Session", color: "#93C5FD" },
    { label: "Paintball", color: "#86EFAC" },
    { label: "WimHof XP", color: "#F9A8D4" },
    { label: "Art & Culture", color: "#D8B4FE" },
    { label: "Global Events", color: "#FEF08A" },
    { label: "Ceramics & Wine", color: "#93C5FD" },
    { label: "Bubble Football", color: "#86EFAC" },
    { label: "SkyDiving", color: "#F9A8D4" },
    { label: "Golf Tournament", color: "#D8B4FE" },
    { label: "Escape Room", color: "#FEF08A" },
    { label: "Cold Plunge", color: "#93C5FD" },
    { label: "Wellness", color: "#86EFAC" },
    { label: "Bartender Class", color: "#F9A8D4" },
    { label: "TrackDay", color: "#D8B4FE" },
    { label: "HeliTour in Delta", color: "#FEF08A" },
];

function Row({ reverse = false, duration = 60, delay = 0 }) {
    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ "--marquee-duration": `${duration}s` }}
        >
            <div
                className={`${reverse ? "marquee-reverse" : "marquee"} flex w-[200%]`}
                style={delay ? { animationDelay: `${delay}s` } : undefined}
            >
                {[0, 1].map((copy) => (
                    <ul
                        key={copy}
                        className="flex min-w-[50%] shrink-0 items-center gap-3 sm:gap-4 py-1"
                        aria-hidden={copy === 1 ? true : undefined}
                    >
                        {tags.map((t, i) => (
                            <li
                                key={`${copy}-${i}`}
                                className="text-slate-900 flex items-center gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap "
                                style={{ backgroundColor: t.color }}
                            >
                                {/* LOGO */}
                                <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                                    <Image
                                        src="/images/Logos/Logo_icon.png"
                                        alt="SparkClub Logo"
                                        fill
                                        className="object-contain"
                                        priority={i === 0}
                                    />
                                </div>

                                {/* LABEL */}
                                <span className="text-[16px] sm:text-sm font-regular ">{t.label}</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default function ActivityTags() {
    return (
        <section className="w-full bg-white">
            <div className={`${publicSans.className} py-4`}>
                {/* TOP ROW */}
                <Row reverse={false} duration={32} delay={-50} />
                {/* BOTTOM ROW */}
                <Row reverse duration={32} delay={-50} />
            </div>
        </section>
    );
}
