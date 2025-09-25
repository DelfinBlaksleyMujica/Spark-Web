"use client";

import React from "react";
import { Public_Sans } from "next/font/google";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import Image from "next/image";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function BlogLanding({ data }) {
  return (
    <main className={publicSans.className}>
      {/* ===== HERO ===== */}
      <section className="relative bg-[#E6E6E6] text-black overflow-hidden pt-[100px]">
        {/*  (background texture) */}
        <div>
          <img
            src="/images/Pricing/PricingBackgroundDecoration1.svg"
            alt="Textura de Fondo"
            className="pointer-events-none absolute w-[420px] h-[420px] -left-32 -top-24 opacity-80"
          />
          <img
            src="/images/Pricing/PricingBackgroundDecoration2.svg"
            alt="Textura de Fondo"
            className="pointer-events-none absolute w-[280px] h-[280px] -right-8 top-28 opacity-80"
          />
          <img
            src="/images/Pricing/PricingBackgroundDecoration3.svg"
            alt="Textura de Fondo"
            className="pointer-events-none absolute w-[420px] h-[420px] left-1/4 bottom-[-140px] opacity-60 hidden lg:block"
          />
          <img
            src="/images/Pricing/PricingBackgroundDecoration4.svg"
            alt="Textura de Fondo"
            className="pointer-events-none absolute w-[420px] h-[420px] right-0 bottom-[-180px] opacity-60 hidden lg:block"
          />
        </div>

        {/* HERO SECTION */}
        <div className="px-4 sm:px-6 md:px-0 py-10 sm:py-14 lg:py-16 relative z-10">
          <div className="grid grid-cols-12 gap-x-6">
            {/* Banner image */}
            <motion.div
              className="col-start-3 col-span-8  mt-6 lg:mt-8 relative"
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
              }}
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                {/* mobile */}
                <div className="block lg:hidden">
                  <Image
                    src="/images/Blog/Banner.webp"
                    alt="Engagement blog banner"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* desktop */}
                <div className="hidden lg:block">
                  <Image
                    src="/images/Blog/Banner.webp"
                    alt="Engagement blog banner"
                    width={1920}
                    height={640}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.header
              className="col-start-2 col-span-10 text-center"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.6,
              }}
            >
              <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold">
                {data.title}
              </h1>
              <p className="mt-3 mx-auto max-w-[900px] text-[16px] sm:text-[18px] lg:text-[18px] text-zinc-700">
                {data.subtitle}
              </p>
            </motion.header>
          </div>
        </div>
      </section>

      {/* ===== POSTS ===== */}
      <section className="bg-white text-zinc-900">
        <div className="px-4 sm:px-6 md:px-0 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-start-2 col-span-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16">
                {data.posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
