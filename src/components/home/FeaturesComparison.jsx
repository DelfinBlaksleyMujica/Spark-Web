"use client";

import Button from "../generals/Button";
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
        feature: "Do you have a host guiding you though the organizing process?",
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
            <CheckIcon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-3 lg:h-3 ${positiveColor}`} />
        );

    if (value === false)
        return (
            <CloseIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-3 lg:h-3 text-zinc-600" />
        );

    return (
        <span className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[12px] leading-snug">
            {value}
        </span>
    );
}

export default function WhyChoose() {
    return (
        <section className={`bg-white text-zinc-900 ${publicSans.className}`}>
            <div className="px-4 py-16 sm:py-20 lg:py-14">
                <div className="grid grid-cols-12 gap-x-6 gap-y-12">
                    {/* Title */}
                    <header className="col-start-2 col-span-10 text-center">
                        <h2 className="text-[32px] sm:text-[38px] lg:text-[28px] font-semibold tracking-tight">
                            Why choose <span className="font-bold">SparkClub?</span>
                        </h2>
                    </header>

                    {/* Inner grid */}
                    <div className="col-start-2 col-span-10 grid grid-cols-12 gap-6 sm:gap-10 lg:gap-4 lg:px-24">
                        {/* Features */}
                        <div className="col-span-5">
                            <h3 className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[14px] font-semibold mb-4 md:mb-6">
                                Features
                            </h3>
                            <div className="divide-y divide-black/5 lg:pr-0 lg:mr-0">
                                {ROWS.map((r) => (
                                    <div
                                        key={r.feature}
                                        className="flex items-center min-h-[72px] sm:min-h-[80px] md:min-h-[84px] lg:min-h-[60px]"
                                    >
                                        <span className="text-[12px] sm:text-[16px] lg:text-[18px] ">
                                            {r.feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sparkclub */}
                        <div className="col-span-3 rounded-[8px] overflow-hidden">
                            <div className="bg-[#FCD34D] py-3 sm:py-4 text-center font-semibold text-[10px] sm:text-[20px] md:text-[22px] lg:text-[14px]">
                                Sparkclub
                            </div>
                            <div className="divide-y divide-black/5">
                                {ROWS.map((r, i) => (
                                    <div
                                        key={r.feature + "-spark"}
                                        className={`flex items-center justify-center min-h-[72px] sm:min-h-[80px] md:min-h-[84px] lg:min-h-[60px] px-2 sm:px-3 ${i % 2 === 0 ? "bg-[#FFE696]" : "bg-[#FCD34D]"
                                            }`}
                                    >
                                        <CellContent value={r.spark} positiveColor="text-black" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Others */}
                        <div className="col-span-3 rounded-[8px] overflow-hidden">
                            <div className="bg-zinc-100 py-3 sm:py-4 text-center font-semibold text-[10px] sm:text-[20px] md:text-[22px] lg:text-[14px]">
                                Others
                            </div>
                            <div className="divide-y divide-black/5">
                                {ROWS.map((r, i) => (
                                    <div
                                        key={r.feature + "-other"}
                                        className={`flex items-center justify-center min-h-[72px] sm:min-h-[80px] md:min-h-[84px] lg:min-h-[60px] px-2 sm:px-3 ${i % 2 === 0 ? "bg-zinc-100" : "bg-zinc-200"
                                            }`}
                                    >
                                        <CellContent value={r.other} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA - button unchanged */}
                    <div className="col-start-2 col-span-10 flex justify-center">
                        <Button
                            btnText="See Pricing"
                            btnClass="primary-btn"
                            href="/pricing"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
