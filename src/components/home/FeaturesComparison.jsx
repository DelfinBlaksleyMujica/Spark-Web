"use client";

import Link from "next/link";
import { Public_Sans } from "next/font/google";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";


const publicSans = Public_Sans({ subsets: ["latin"] });

const ROWS = [
    { feature: "Can you track events?", spark: true, other: false },
    {
        feature: "Is the organizer investing hours for every event?",
        spark: "10 mins = $5 salary",
        other: "+8hs = +$500 salary",
    },
    { feature: "Are the events impactful?", spark: true, other: "Not certified" },
    {
        feature: "Can you scale events through your organization?",
        spark: true,
        other: "Limited",
    },
    {
        feature:
            "Do you have a host guiding you though the organizing process?",
        spark: true,
        other: false,
    },
    {
        feature: "Can you track organizational behaviour?",
        spark: "w/ specific dynamics",
        other: false,
    },
    { feature: "Can you track specific EX KPIs?", spark: true, other: false },
    { feature: "High-end UX", spark: true, other: false },
];

function CellContent({ value, positiveColor = "text-black" }) {
    if (value === true)
        return (
            <CheckIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${positiveColor}`} />
        );

    if (value === false)
        return (
            <CloseIcon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600" />
        );

    return (
        <span className="text-[10px] sm:text-[12px] md:text-[14px] leading-snug">
            {value}
        </span>
    );
}

export default function WhyChoose() {
    return (
        <section className={`bg-white text-zinc-900 ${publicSans.className}`}>
            <div className="px-4 py-16 sm:py-20">
                <div className="grid grid-cols-12 gap-x-6 gap-y-12">
                    {/* Title */}
                    <header className="col-start-2 col-span-10 text-center">
                        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight">
                            Why choose <span className="font-bold">SparkClub?</span>
                        </h2>
                    </header>

                    {/* 12-col inner grid: keep 1-col margins; features 5 cols, each box 2 cols */}
                    <div className="col-start-2 col-span-10 grid grid-cols-12 gap-6 sm:gap-10">
                        {/* Features */}
                        <div className="col-span-5">
                            <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold mb-4 md:mb-6">
                                Features
                            </h3>
                            <div className="divide-y divide-black/5">
                                {ROWS.map((r, i) => (
                                    <div
                                        key={r.feature}
                                        className={`flex items-center min-h-[72px] sm:min-h-[80px] md:min-h-[84px] px-1 sm:px-2`}
                                    >
                                        <span className="text-[12px] sm:text-[20px] leading-snug">
                                            {r.feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sparkclub */}
                        <div className="col-span-3  rounded-[8px] overflow-hidden">
                            <div className="bg-[#FCD34D] py-3 sm:py-4 text-center font-semibold text-[10px] sm:text-[20px] md:text-[22px]">
                                Sparkclub
                            </div>
                            <div className="divide-y divide-black/5">
                                {ROWS.map((r, i) => (
                                    <div
                                        key={r.feature + "-spark"}
                                        className={`flex items-center justify-center  min-h-[72px] sm:min-h-[80px] md:min-h-[84px] px-2 sm:px-3 ${i % 2 === 0 ? "bg-[#FFE696]" : "bg-[#FCD34D]"
                                            }`}
                                    >
                                        <CellContent value={r.spark} positiveColor="text-black" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Others */}
                        <div className="col-span-3  rounded-[8px]  overflow-hidden">
                            <div className="bg-zinc-100 py-3 sm:py-4 text-center font-semibold text-[10px] sm:text-[20px] md:text-[22px]">
                                Others
                            </div>
                            <div className="divide-y divide-black/5">
                                {ROWS.map((r, i) => (
                                    <div
                                        key={r.feature + "-other"}
                                        className={`flex items-center justify-center min-h-[72px] sm:min-h-[80px] md:min-h-[84px] px-2 sm:px-3 ${i % 2 === 0 ? "bg-zinc-100" : "bg-zinc-200"
                                            }`}
                                    >
                                        <CellContent value={r.other} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="col-start-2 col-span-10 flex justify-center">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center justify-center rounded-[10px] bg-black text-white
                       h-12 px-6 sm:px-8 sm:text-[20px] sm:text-base sm:font-semibold font-semibold"
                        >
                            See Pricing
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
