"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Button from "../generals/Button";
import { motion } from "framer-motion";


import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className={`${publicSans.className} bg-[#FCD34D] text-zinc-900`}>
      {/* TOP OF FOOTER */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 pt-12 pb-6 text-center md:px-0 md:grid-cols-12 md:text-left sm:px-6  ">
        <section className="md:col-start-2 md:col-span-7">
          <h2
            className="font-regular leading-[1.2] text-balance p-x-4 sm:px-0
                         text-[30px] sm:text-[40px] md:text-[45px] lg:text-[55px]"
          >
            <span className="block">Transform teams,</span>
            <span className="block">Reduce turnover,</span>
            <span className="block font-semibold">Boost performance</span>
          </h2>

          <div className="mt-6 sm:mt-8">
            <Button btnText="Book a demo" btnClass="primary-btn" href="/pricing" />
          </div>
        </section>

        {/* Right: Vertical nav  */}
        <nav
          aria-label="Footer navigation"
          className="pt-12 pb-6 md:col-start-9 md:col-span-3 md:py-4 md:self-start "
        >
          <ul className="space-y-4 text-[25px] sm:text-[30px] md:text-[20px] font-semibold leading-6 flex flex-col md:items-start sm:items-center ">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/es" className="hover:underline">
                ES
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* BOTTOM OF FOOTER */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8 pt-0 pb-12 md:pb-24 md:pt-2 px-4 sm:px-6 sm:py-12 md:px-0 text-center md:text-left ">
        {/* LEFT: Socials */}
        <section className="md:col-start-2 md:col-span-4 md:row-start-2 space-y-10 mx-auto md:mx-0 py-8 sm:py-4">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}>
            <FaInstagram className="h-7 w-7 text-black" />
            <span className="text-[20px] ">in/sparkclub.xyz</span>
          </motion.div>


          <motion.div className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}>
            <FaLinkedin className="h-7 w-7 text-black" />
            <span className="text-[20px] ">ig/sparkclub</span>
          </motion.div>

          <motion.div className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}>
            <FaTelegram className="h-7 w-7 text-black" />
            <span className="text-[20px] ">tg/sparkclub</span>
          </motion.div>

          <motion.div className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}>
            <FaTwitter className="h-7 w-7 text-black" />
            <span className="text-[20px] ">tw/sparkclub</span>
          </motion.div>
        </section>

        {/* LEFT: Logo + copyright */}
        <section className="md:col-start-2 md:col-span-3 md:row-start-3 flex flex-col items-center md:items-start py-6 sm:py-6">
          <div className="md:space-y-6 space-y-6">
            <div className="flex justify-center md:justify-start items-center sm:justify-center sm:items-center">
              <Image
                src="/images/Logos/Logo_black.png"
                alt="SparkClub Logo"
                width={230}
                height={0}
                sizes="200px"
                style={{ height: "auto" }}
                priority
              />
            </div>

            <p className="text-[14px] mt-4">
              We are a comprehensive smart engagement platform designed to help
              companies boost employee engagement, reduce turnover, and improve
              employee performance.
            </p>

            <p className="text-[13px] mt-4 md:mt-auto">
              &copy; 2025 Spark. All Rights Reserved.
            </p>
          </div>
        </section>

        {/* RIGHT: Contact */}
        <section
          aria-labelledby="contact-heading"
          className="md:col-start-9 md:col-span-3 md:row-start-2 space-y-2 mx-auto md:mx-0"
        >
          <h3 id="contact-heading" className="font-semibold text-[25px]">
            Contact Info
          </h3>
          <p className="text-[20px] ">+54 9 1157979949</p>
          <p className="text-[20px] ">Mon–Fri 9am–6pm</p>
        </section>

        {/* RIGHT: Newsletter */}
        <section
          aria-labelledby="newsletter-heading"
          className="md:col-start-9 md:col-span-3 md:row-start-3 space-y-4 mx-auto md:mx-0 pt-12 pb-6 sm:py-10"
        >
          <h3 id="newsletter-heading" className="font-semibold text-[25px] ">
            Join Our Newsletter
          </h3>
          <p className="text-[20px] leading-[2] max-w-sm ">
            Sign up for our newsletter to enjoy free marketing tips,
            inspiration, and more
          </p>

          <form
            className="flex items-center gap-3 max-w-md w-full mx-auto md:mx-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Email Address"
              className="flex-1 bg-transparent border-0 border-b border-zinc-900/60 focus:border-zinc-900 focus:outline-none text-[15px] placeholder-zinc-700"
            />
            <Button
              btnText="Join us" btnClass="primary-btn" href="/about-us"
            />
          </form>
        </section>
      </div>
    </footer>
  );
}