"use client";

import Image from "next/image";
import { Public_Sans } from "next/font/google";
import { motion } from "framer-motion";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function ChallengeCards({ data }) {
  return (
    <section className={`${publicSans.className} bg-black text-white py-0`}>
      <div className="relative w-full overflow-hidden">
        {/* Bg texture */}
        <img
          src="/images/Textures/SparkLogo_Texture.webp"
          alt="Background texture"
          className="absolute inset-0 z-10 w-full  h-full object-cover"
        />

        {/* CARDS */}
        <div className="relative z-10 px-4 sm:px-6 md:px-0 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            {/* CARD 1 — pink (from left) */}
            <motion.article
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
              }}
              className="
                col-start-2 col-span-10
                md:col-start-4 md:col-span-6 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6
                rounded-[8px] bg-[#F7A7A5] text-black p-5 sm:p-6 lg:p-8
              "
            >
              <div
                className="
                  grid grid-cols-1 items-center gap-6 lg:gap-8
                  lg:grid-cols-[minmax(0,1fr)_340px]
                "
              >
                {/* IMAGE */}
                <div className="order-1 lg:order-2">
                  <div
                    className="
                      relative mx-auto w-full max-w-[420px]
                      aspect-[456/364] overflow-hidden ring-1 ring-black/10
                      md:max-w-[360px] lg:w-[340px] lg:max-w-none
                    "
                  >
                    <Image
                      src="/images/AboutUs/Card1.webp"
                      alt="Remote work scene with laptop"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 340px, (min-width: 768px) 360px, 100vw"
                      priority
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div className="order-2 lg:order-1 mx-1 sm:mx-2">
                  <h3 className="text-[26px] sm:text-[30px] lg:text-[30px] font-extrabold mb-3 leading-[1.2]">
                    {data.firstTitle}
                  </h3>
                  <p className="text-[15px] sm:text-[20px] lg:text-[18px]">
                    {data.firstDescription}
                  </p>
                </div>
              </div>
            </motion.article>

            {/* CARD 2 — green (from right) */}
            <motion.article
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
              }}
              className="col-start-2 col-span-10
                md:col-start-4 md:col-span-6 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 
                rounded-[8px] bg-[#9CF0C3] text-black p-5 sm:p-6 lg:p-8"
            >
              <div
                className="
                  grid grid-cols-1 items-center gap-6 lg:gap-8
                  lg:grid-cols-[340px_minmax(0,1fr)]
                "
              >
                {/* IMAGE */}
                <div className="order-1">
                  <div
                    className="
                      relative mx-auto w-full max-w-[420px]
                      aspect-[456/364] overflow-hidden ring-1 ring-black/10
                      md:max-w-[360px] lg:w-[340px] lg:max-w-none
                    "
                  >
                    <Image
                      src="/images/AboutUs/Card2.webp"
                      alt="Team outdoor activity"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 340px, (min-width: 768px) 360px, 100vw"
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div className="order-2 mx-1 sm:mx-2">
                  <h3 className="text-[26px] sm:text-[30px] lg:text-[30px] font-extrabold mb-3 leading-[1.2]">
                    {data.secondTitle}
                  </h3>
                  <p className="text-[15px] sm:text-[20px] lg:text-[18px]">
                    {data.secondDescription}
                  </p>
                  <p className="text-[15px] sm:text-[20px] lg:text-[18px] font-bold">
                    {data.secondDescriptionSpan}
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
