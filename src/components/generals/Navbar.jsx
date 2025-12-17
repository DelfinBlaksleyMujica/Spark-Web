"use client";

// React / Next
import React, { useState } from "react";
import Link from "next/link";
// Animaciones
import { AnimatePresence, motion } from "framer-motion";
// Tu pill de Users / Providers
import NavUserProviderToggle from "./NavUserProviderToggle";
import { public_sans } from "@/app/fonts/fonts";

// --- Config menú mobile (mismas animaciones que tu Navbar anterior) ---
const menuVars = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
  },
  exit: {
    scaleY: 0,
    transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVars = {
  initial: {
    transition: { staggerChildren: 0.09, staggerDirection: -1 },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    opacity: 0,
    transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
  },
};

// Links del menú (desktop y mobile)
const NAV_LINKS = [
  { title: "About us", href: "/about-us" },
  //{ title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((v) => !v);

  return (
    <header className="h-[90px] w-full flex justify-center items-center fixed top-0 z-50 bg-[#121212]">
      <nav className="relative z-50 flex w-full max-w-[1440px] items-center justify-between gap-[40px] px-[18px] sm:px-[48px] md:px-[72px] lg:px-[118px] py-[24px] md:py-[40px] h-full">


        <div className="flex items-center gap-[50px] lg:gap-[60px]">


          <div className="flex items-center lg:pr-10">
            {/* Logo */}
            <Link href="/" aria-label="SparkClub - Home" >
              <img
                src="/images/Logos/Logo_SparkClub_Original.webp"
                alt="Sparkclub Logo"
                width={155}
                height={30}
                className="block w-[135px] h-[25px] md:h-[20px] md:h-[auto] lg:w-[155px]"
              />
            </Link>
          </div>


          {/* Links desktop */}
          <ul
            className={`${public_sans.className} hidden md:flex gap-[30px] lg:gap-[80px]`}
          >
            {NAV_LINKS.map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ translateY: -5, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 220, damping: 12 }}
              >
                <Link className="text-white font-semibold" href={item.href}>
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>

        </div>

        {/* Pill Users/Providers (desktop) */}
        <div className="hidden md:block">
          <NavUserProviderToggle />
        </div>

        {/* Botón hamburguesa (mobile) */}
        <button
          onClick={toggleMenu}
          aria-label="Abrir menú"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 text-white"
        >
          {/* Ícono hamburguesa simple en SVG */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="6"
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="3"
              y="11"
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="3"
              y="16"
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* --- OVERLAY MOBILE MENU --- */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed inset-0 origin-top bg-[#000000] p-6 sm:p-8"
            >
              <div className="flex h-full flex-col">
                {/* Header del overlay: logo + cerrar */}
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    onClick={toggleMenu}
                    aria-label="SparkClub - Home"
                  >
                    <img
                      src="/images/Logos/Logo_SparkClub_Original.webp"
                      alt="Sparkclub Logo"
                      width={140}
                      height={28}
                      className="block"
                    />
                  </Link>

                  <button
                    onClick={toggleMenu}
                    aria-label="Cerrar menú"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 text-white"
                  >
                    {/* Ícono cerrar (X) */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 6L6 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Links animados + pill en mobile */}
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col justify-start pt-30 gap-10 sm:gap-8 h-full"
                >

                  {NAV_LINKS.map((link) => (
                    <div className="overflow-hidden" key={link.href}>
                      <motion.div
                        variants={mobileLinkVars}
                        className="flex justify-center items-center"
                        onClick={toggleMenu}
                      >
                        <Link
                          className="text-2xl sm:text-3xl text-white"
                          href={link.href}
                        >
                          {link.title}
                        </Link>
                      </motion.div>
                    </div>
                  ))}

                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
