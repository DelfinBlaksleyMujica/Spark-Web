"use client";

import Image from "next/image";
import { Public_Sans } from "next/font/google";
import { motion } from "framer-motion";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function WhyWorkWithUs({ data }) {
  return (
    <section
      className={`${publicSans.className} text-white relative bg-black overflow-hidden min-h-[700px] `}
    >
      {/* BACKGROUND  */}
      <img
        src="/images/Textures/Circle_BG.png"
        alt="Home, Why Work with Us component Background pattern 1"
        className="absolute w-[300px] h-[300px] left-[10px] bottom-[10px]   lg:left-[4px] lg:bottom-[10px] z-0"
      />
      <img
        src="/images/Textures/SquareBlack_BG.svg"
        alt="Home, Why Work with Us component Background pattern 2"
        className="absolute w-[250px] h-[250px] opacity-0 lg:opacity-100 rotate-45 z-0 lg:left-[-100px] lg:top-[0px] "
      />
      <img
        src="/images/Textures/SquareBlack_BG.svg"
        alt="Home, Why Work with Us component Background pattern 3"
        className="absolute w-[350px] h-[350px] rotate-45 right-[-100px] z-0 lg:right-[70px] lg:bottom-[10px]"
      />
      <img
        src="/images/Textures/Circle_BG.png"
        alt="Home, Why Work with Us component Background patter 4"
        className="absolute w-[200px] h-[200px]  z-0 opacity-0 lg:opacity-100 lg:right-[-10px] lg:top-[80px]"
      />

      {/* MAIN  */}
      <div className="relative z-10 px-4 sm:px-8 md:px-0 py-14 sm:py-16 lg:py-20">
        <div className="sm:column md:grid md:grid-cols-12 gap-x-10 gap-y-10">
          {/* Title */}
          <motion.header
            className="col-start-2 col-span-10 text-center pb-24 pt-4"
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              duration: 0.8,
            }}
          >
            <h2 className="text-[28px] sm:text-[36px] lg:text-[38px] font-medium">
              {data.title}
            </h2>
          </motion.header>

          {/* 3 Cards */}
          <div className=" md:col-start-3 md:col-span-8 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 xl:gap-20">
              {data.items.map((item, i) => (
                <motion.article
                  key={item.id}
                  className="flex flex-col items-center text-center space-y-5 sm:space-y-6"
                  initial={{ opacity: 0, y: 90 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 14,
                    duration: 0.9,
                    delay: i * 0.12,
                  }}
                  whileHover={{ scale: 1.09 }}
                  whileTap={{ scale: 0.995 }}
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
                  <p className="max-w-[28rem] text-[18px] sm:text-[20px] leading-7 ">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
