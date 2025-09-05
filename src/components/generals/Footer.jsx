"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
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
            className="font-regular leading-[0.95] tracking-tight text-balance
                         text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block">Transform teams,</span>
            <span className="block">Reduce turnover,</span>
            <span className="block font-semibold">Boost performance</span>
          </h2>

          <div className="mt-6 sm:mt-8">
            <Link
              href="#book-demo"
              className="inline-flex items-center justify-center rounded-[10px] bg-black text-white
                       h-12 px-6 sm:px-8 sm:text-[20px] sm:text-base sm:font-semibold font-semibold"
            >
              Book a demo
            </Link>
          </div>
        </section>

        {/* Right: Vertical nav  */}
        <nav
          aria-label="Footer navigation"
          className="pt-12 pb-6 md:col-start-9 md:col-span-3 md:py-4 md:self-start "
        >
          <ul className="space-y-6 text-[25px] font-semibold leading-6 flex flex-col md:items-start sm:items-center ">
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
          <div className="flex items-center gap-3 ">
            <FaInstagram className="h-7 w-7 text-black" />
            <span className="text-[20px] leading-6">in/sparkclub.xyz</span>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="h-7 w-7 text-black" />
            <span className="text-[20px] leading-6">ig/sparkclub</span>
          </div>
          <div className="flex items-center gap-3">
            <FaTelegram className="h-7 w-7 text-black" />
            <span className="text-[20px] leading-6">tg/sparkclub</span>
          </div>
          <div className="flex items-center gap-3">
            <FaTwitter className="h-7 w-7 text-black" />
            <span className="text-[20px] leading-6">tw/sparkclub</span>
          </div>
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

            <p className="text-[14px] leading-6">
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
          <p className="text-[20px] leading-6">+54 9 1157979949</p>
          <p className="text-[20px] leading-6">Mon–Fri 9am–6pm</p>
        </section>

        {/* RIGHT: Newsletter */}
        <section
          aria-labelledby="newsletter-heading"
          className="md:col-start-9 md:col-span-3 md:row-start-3 space-y-4 mx-auto md:mx-0 pt-12 pb-6 sm:py-10"
        >
          <h3 id="newsletter-heading" className="font-semibold text-[25px] ">
            Join Our Newsletter
          </h3>
          <p className="text-[20px] leading-6 max-w-sm ">
            Sign up for our newsletter to enjoy free marketing tips,
            inspiration, and more
          </p>

          <form
            className="flex items-center gap-3 max-w-sm mx-auto md:mx-0"
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
              className="w-full bg-transparent border-0 border-b border-zinc-900/60 focus:border-zinc-900 focus:outline-none text-[15px] leading-6 placeholder-zinc-700"
            />
            <button
              type="submit"
              className="shrink-0 inline-flex items-center justify-center rounded-full border border-zinc-900/80 px-4 py-2 text-[14px] leading-none hover:bg-black hover:text-white transition"
            >
              Join us
            </button>
          </form>
        </section>
      </div>
    </footer>
  );
}
