"use client";

import Button from "../generals/Button";
import { Public_Sans } from "next/font/google";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const publicSans = Public_Sans({ subsets: ["latin"] });

function CellContent({ value, positiveColor = "text-black" }) {
  if (value === true)
    return (
      <CheckIcon
        className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-3 lg:h-3 ${positiveColor}`}
      />
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

export default function WhyChoose({ data }) {
  return (
    <section className={`bg-white text-zinc-900 ${publicSans.className}`}>
      <div className="px-4 py-16 sm:py-20 lg:py-14">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {/* Title */}
          <header className="col-start-2 col-span-10 text-center">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[28px] font-semibold tracking-tight">
              {data.title} <span className="font-bold">{data.titleSpan}</span>
            </h2>
          </header>

          {/* Inner grid */}
          <div className="col-start-2 col-span-10 grid grid-cols-12 gap-6 sm:gap-10 lg:gap-4 lg:px-24">
            {/* Features */}
            <div className="col-span-5">
              <h3 className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[14px] font-semibold mb-4 md:mb-6">
                {data.tableTitle}
              </h3>
              <div className="divide-y divide-black/5 lg:pr-0 lg:mr-0">
                {data.rows.map((r) => (
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
                {data.firstColumnTitle}
              </div>
              <div className="divide-y divide-black/5">
                {data.rows.map((r, i) => (
                  <div
                    key={r.feature + "-spark"}
                    className={`flex items-center justify-center min-h-[72px] sm:min-h-[80px] md:min-h-[84px] lg:min-h-[60px] px-2 sm:px-3 ${
                      i % 2 === 0 ? "bg-[#FFE696]" : "bg-[#FCD34D]"
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
                {data.secondColumnTitle}
              </div>
              <div className="divide-y divide-black/5">
                {data.rows.map((r, i) => (
                  <div
                    key={r.feature + "-other"}
                    className={`flex items-center justify-center min-h-[72px] sm:min-h-[80px] md:min-h-[84px] lg:min-h-[60px] px-2 sm:px-3 ${
                      i % 2 === 0 ? "bg-zinc-100" : "bg-zinc-200"
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
