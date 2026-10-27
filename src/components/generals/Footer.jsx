"use client";

import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";
import { CHANNELS } from "../home/ChannelsBar";
import { inter, public_sans } from "@/app/fonts/fonts";

const NAV_LINKS = [
  { title: "Inicio", href: "/" },
  { title: "Quiénes somos", href: "/about-us" },
  { title: "Proveedores", href: "/provider" },
  { title: "Blog", href: "/blog" },
  { title: "Contacto", href: "/contacto" },
];

const headingClass = "text-[15px] font-semibold text-zinc-900";
const linkClass =
  "rounded-[4px] text-zinc-800 underline-offset-4 hover:text-black hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

export default function Footer() {
  return (
    <footer className={`${public_sans.className} bg-[#FCD34D] text-zinc-900`}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-[48px] lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] lg:gap-x-10 lg:py-[56px]">
          {/* Marca */}
          <section className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label="SparkClub - Inicio" className="inline-block">
              <Image
                src="/images/Logos/Logo_black.png"
                alt="SparkClub"
                width={150}
                height={30}
                style={{ height: "auto" }}
              />
            </Link>
            <p className={`${inter.className} mt-[16px] max-w-[36ch] text-[15px] leading-[1.6] text-zinc-800`}>
              Organizamos eventos corporativos que unen equipos, reducen la
              rotación y mejoran el rendimiento.
            </p>
            <ul className="mt-[20px] flex gap-[8px]" aria-label="Redes de SparkClub">
              {CHANNELS.map(({ name, href, Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-black/15 text-zinc-900 transition-colors hover:border-black hover:bg-black hover:text-[#FCD34D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <Icon className="h-[17px] w-[17px]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Navegación */}
          <nav aria-labelledby="footer-nav-heading">
            <h2 id="footer-nav-heading" className={headingClass}>
              Navegación
            </h2>
            <ul className={`${inter.className} mt-[14px] space-y-[10px] text-[15px]`}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <section aria-labelledby="footer-contact-heading">
            <h2 id="footer-contact-heading" className={headingClass}>
              Contacto
            </h2>
            <ul className={`${inter.className} mt-[14px] space-y-[10px] text-[15px]`}>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=541123641441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  +54 9 11 2364-1441
                </a>
              </li>
              <li className="text-zinc-700">Lun a vie, 9 a 18 h</li>
              <li>
                <a href="https://zcal.co/sparkclub/discovery" className={`${linkClass} font-semibold`}>
                  Agendar con un asesor
                </a>
              </li>
            </ul>
          </section>

          {/* Newsletter */}
          <section aria-labelledby="newsletter-heading" className="col-span-2 lg:col-span-1">
            <h2 id="newsletter-heading" className={headingClass}>
              Newsletter
            </h2>
            <p className={`${inter.className} mt-[14px] mb-[16px] max-w-[40ch] text-[15px] leading-[1.6] text-zinc-800`}>
              Novedades de SparkClub e ideas para tus próximos eventos de equipo.
            </p>
            <NewsletterForm />
          </section>
        </div>

        <div className={`${inter.className} border-t border-black/15 py-[20px] text-[13px] text-zinc-700`}>
          &copy; 2026 SparkClub. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
