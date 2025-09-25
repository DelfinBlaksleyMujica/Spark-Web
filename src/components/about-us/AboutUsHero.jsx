"use client";

import Image from "next/image";
import { Public_Sans } from "next/font/google";
import { motion } from "framer-motion";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function AboutUsHero({ data }) {
  return (
    <section
      className={`${publicSans.className} bg-black text-white lg:min-h-[700px]`}
    >
      <div className="px-4 sm:px-6 md:px-0 pt-24">
        <div className="grid grid-cols-12">
          {/* HERO IMAGE */}
          <motion.div
            className="col-start-4 col-span-6 justify-self-center py-4"
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8,
            }}
          >
            <div className="relative w-full overflow-hidden">
              {/* IMG MOBILE */}
              <div className="block lg:hidden">
                <Image
                  src="/images/AboutUs/HeroImg_mobile.webp"
                  alt="SparkClub mobile hero"
                  width={800}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* IMG DESKTOP */}
              <div className="hidden lg:block">
                <Image
                  src="/images/AboutUs/HeroImg.webp"
                  alt="SparkClub desktop hero"
                  width={1920}
                  height={900}
                  className="w-full h-auto object-cover lg:max-h-[480px]"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* TITLE */}
          <motion.header
            className="col-start-2 col-span-10 text-center py-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8,
            }}
          >
            <h1 className="text-[28px] sm:text-[36px] lg:text-[30px] font-semibold leading-[1.1] lg:leading-[1.05]">
              {data.title}
              <span className="font-extrabold">{data.titleSpan}</span>
            </h1>
          </motion.header>

          {/* SUBTITLE */}
          <motion.header
            className="col-start-2 col-span-10 pt-4 pb-12"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8,
            }}
          >
            <p className="mx-auto text-[18px] sm:text-[20px] md:text-[24px] lg:text-[16px] text-center lg:max-w-[800px]">
              {data.subtitle}
            </p>
          </motion.header>
        </div>
      </div>
    </section>
  );
}
