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
      <p className={`${inter.className} text-[15px] font-semibold`} role="status">
        ¡Listo! Ya estás suscripto al newsletter.
      </p>
    );
  }

  return (
    <div className="w-full sm:max-w-[420px]">
      <form
        className={`${inter.className} flex w-full flex-col gap-[8px] sm:flex-row`}
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
          className="h-[44px] w-full min-w-0 sm:flex-1 rounded-[10px] border border-black/20 bg-white/50 px-[14px] text-[15px] text-zinc-900 placeholder-zinc-600 focus:border-black focus:bg-white/70 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="primary-btn h-[44px] w-full shrink-0 rounded-[10px] px-[18px] text-[15px] font-medium sm:w-auto transition-transform hover:scale-[1.03] active:scale-95 disabled:opacity-60 disabled:hover:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
