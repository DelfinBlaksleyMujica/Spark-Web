"use client";

import { Public_Sans } from "next/font/google";
import { motion } from "framer-motion";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function ContactHero({ data }) {
  return (
    <section className={`${publicSans.className} text-white`}>
      <div className="px-4 sm:px-6 md:px-0 pt-32 pb-8">
        <div className="grid grid-cols-12">
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
            <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] font-semibold leading-[1.1] lg:leading-[1.05]">
              {data.title}
              <span className="font-extrabold">{data.titleSpan}</span>
            </h1>
          </motion.header>

          {/* SUBTITLE */}
          <motion.header
            className="col-start-2 col-span-10 pt-4 pb-4"
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
            <p className="mx-auto text-[18px] sm:text-[20px] md:text-[22px] lg:text-[18px] text-center lg:max-w-[700px] text-white/70">
              {data.subtitle}
            </p>
          </motion.header>
        </div>
      </div>
    </section>
  );
}
