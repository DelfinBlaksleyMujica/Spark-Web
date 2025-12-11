"use client";

import Image from "next/image";
import { Public_Sans } from "next/font/google";
import { Maven_Pro } from "next/font/google";
import Button from "../generals/Button";
import { motion } from "framer-motion";

const publicSans = Public_Sans({ subsets: ["latin"] });
const mavenPro = Maven_Pro({ subsets: ["latin"] });

const sparkleSrc = "/images/Logos/Nevenka_asset.webp";

const cards = [
  {
    id: "input",
    img: "/images/Cards/MockUp-01.webp",
    imageAlt: "Input your event ideas",
    title: "Input your event ideas",
    description: "Dates, guests, vibe, format, services.",
  },
  {
    id: "proposal",
    img: "/images/Cards/MockUp-02.webp",
    imageAlt: "Get a proposal in 20 sec",
    title: "Get a proposal in 20 sec",
    description: "Nevenka briefs the event for all your needs.",
  },
  {
    id: "pm",
    img: "/images/Cards/MockUp-03.webp",
    imageAlt: "Your PM takes over",
    title: "Your PM takes over",
    description: "Experiences, suppliers, and love for details.",
  },
];

export default function AboutNevenka({ data }) {
  return (
    <section
      className={`bg-white ${publicSans.className} text-zinc-900 relative`}
    >
      <div className="px-4 py-12 sm:py-16 lg:py-20 relative">
        {/* FLOATING LOGO FOR LARGE SCREENS (top-right) */}
        {/* FLOATING LOGOS (desktop only) */}
        {/* Right side */}

        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {/* TITLE + SUBTITLE */}
          <header className="col-start-2 col-span-10 text-center max-w-[1600px] mx-auto">
            <h2 className="text-[38px] sm:text-[40px] lg:text-[40px] font-medium">
              {data.title}{" "}
              <span className="inline-block align-[0.31rem] pr-2">
                <Image
                  src="/images/Logos/Nevenka_logo.png"
                  alt="Nevenka Logo"
                  width={180}
                  height={50}
                  className="inline-block object-contain"
                  priority
                />
              </span>
              ?
            </h2>

            <p className="mt-4 text-base sm:text-[20px] text-zinc-700">
              {data.firstSubtitle}
            </p>
            <p className="text-base sm:text-[20px] text-zinc-700">
              {data.secondSubtitle}
            </p>
          </header>

          {/* CARDS */}
          <div className="col-start-2 col-span-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {data.cards.map((c, i) => (
              <motion.article
                key={c.id}
                className="relative overflow-hidden"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  duration: 0.9,
                  delay: i * 0.08,
                }}
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.995 }}
              >
                {/* CARD BACKGROUND */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/Cards/Background.webp"
                    alt="Fondo de Card"
                    fill
                    className="object-cover rounded-[10px]"
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="relative p-4 sm:p-5 flex flex-col">
                  <div className="w-full">
                    <Image
                      src={c.img}
                      alt={c.imageAlt}
                      width={1686}
                      height={648}
                      className="w-full h-auto"
                    />
                  </div>

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

        {/* CTA BUTTON */}
        <div className="mt-10 flex flex-col lg:flex-row justify-center items-center px-8">
          <Button
            btnText="Join Waitlist"
            btnClass="primary-btn"
            href="https://zcal.co/sparkclub"
          />
        </div>
      </div>
    </section>
  );
}
