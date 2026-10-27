"use client";

import { useState } from "react";
import { inter } from "@/app/fonts/fonts";

// Mismo endpoint que el formulario de contacto; "tipo" permite filtrar en Formspree
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoeadbnr";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error | invalid

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email.trim())) {
      setStatus("invalid");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          tipo: "Newsletter",
          _subject: "Nueva suscripción al newsletter",
        }),
      });

      if (!response.ok) throw new Error("Formspree error");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="text-[18px] font-semibold" role="status">
        ¡Listo! Ya estás suscripto al newsletter.
      </p>
    );
  }

  return (
    <div className="max-w-md w-full mx-auto md:mx-0">
      <form
        className="flex flex-col lg:flex-row items-center gap-3 w-full"
        onSubmit={handleSubmit}
        noValidate
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "loading") setStatus("idle");
          }}
          placeholder="Email"
          aria-invalid={status === "invalid" || undefined}
          aria-describedby="newsletter-feedback"
          className="flex w-full lg:w-auto bg-transparent border-0 border-b border-zinc-900/60 focus:border-zinc-900 focus:outline-none text-[15px] placeholder-zinc-700"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`${inter.className} primary-btn rounded-[10px] px-6 py-3 text-[18px] font-medium leading-[100%] tracking-tight w-[85%] sm:w-[65%] md:w-auto transition-transform hover:scale-105 active:scale-95 disabled:opacity-60 disabled:hover:scale-100`}
        >
          {status === "loading" ? "Enviando..." : "Suscribirse"}
        </button>
      </form>
      <p
        id="newsletter-feedback"
        className="mt-2 text-[14px] text-red-700 empty:hidden"
        role="alert"
      >
        {status === "invalid" && "Ingresá un email válido."}
        {status === "error" && "No pudimos suscribirte. Probá de nuevo."}
      </p>
    </div>
  );
}
