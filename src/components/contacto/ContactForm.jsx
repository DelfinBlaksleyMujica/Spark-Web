"use client";

import { useState } from "react";
import { inter } from "@/app/fonts/fonts";
import { motion, useReducedMotion } from "framer-motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoeadbnr";

const INITIAL_FORM = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  empresa: "",
  mensaje: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_LABELS = {
  nombre: "Nombre",
  apellido: "Apellido",
  email: "Email",
  telefono: "Teléfono",
  mensaje: "Mensaje",
};

function validate(form) {
  const errors = {};

  Object.keys(FIELD_LABELS).forEach((field) => {
    if (!form[field].trim()) {
      errors[field] = `${FIELD_LABELS[field]} es requerido.`;
    }
  });

  if (form.email.trim() && !EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Ingresá un email válido.";
  }

  return errors;
}

const inputClass =
  "w-full bg-[#121212] border border-white/10 rounded-[10px] px-4 py-3 text-white placeholder:text-white/40 outline-none transition-colors duration-200 focus:border-[#FFEE35] focus:ring-1 focus:ring-[#FFEE35]";

const labelClass = "block text-[14px] font-medium text-white/70 mb-2";

const errorClass = "mt-1 text-[13px] text-red-400";

export default function ContactForm() {
  const prefersReduced = useReducedMotion();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <section className="bg-black px-4 sm:px-6 md:px-0 pb-24">
      <form
        onSubmit={handleSubmit}
        noValidate
        className={`${inter.className} mx-auto max-w-[560px] flex flex-col gap-5`}
      >
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby={errors.nombre ? "nombre-error" : undefined}
            className={inputClass}
          />
          {errors.nombre && (
            <p id="nombre-error" className={errorClass} aria-live="polite">
              {errors.nombre}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="apellido" className={labelClass}>
            Apellido
          </label>
          <input
            id="apellido"
            name="apellido"
            type="text"
            value={form.apellido}
            onChange={handleChange}
            aria-invalid={Boolean(errors.apellido)}
            aria-describedby={errors.apellido ? "apellido-error" : undefined}
            className={inputClass}
          />
          {errors.apellido && (
            <p id="apellido-error" className={errorClass} aria-live="polite">
              {errors.apellido}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
          {errors.email && (
            <p id="email-error" className={errorClass} aria-live="polite">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="telefono" className={labelClass}>
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            value={form.telefono}
            onChange={handleChange}
            aria-invalid={Boolean(errors.telefono)}
            aria-describedby={errors.telefono ? "telefono-error" : undefined}
            className={inputClass}
          />
          {errors.telefono && (
            <p id="telefono-error" className={errorClass} aria-live="polite">
              {errors.telefono}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="empresa" className={labelClass}>
            Empresa <span className="text-white/40">(opcional)</span>
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            value={form.empresa}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="mensaje" className={labelClass}>
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            value={form.mensaje}
            onChange={handleChange}
            aria-invalid={Boolean(errors.mensaje)}
            aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
            className={`${inputClass} resize-none`}
          />
          {errors.mensaje && (
            <p id="mensaje-error" className={errorClass} aria-live="polite">
              {errors.mensaje}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={prefersReduced || isLoading ? {} : { scale: 1.05 }}
          whileTap={prefersReduced || isLoading ? {} : { scale: 0.96 }}
          transition={
            prefersReduced
              ? undefined
              : { type: "spring", stiffness: 260, damping: 20 }
          }
          className="mt-2 w-full rounded-[10px] bg-[#FFEE35] text-black font-medium text-[18px] leading-[100%] tracking-tight px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Enviando..." : "Enviar mensaje"}
        </motion.button>

        <div aria-live="polite">
          {status === "success" && (
            <p className="text-center text-[14px] text-[#FFEE35]">
              ¡Gracias! Recibimos tu mensaje y te vamos a contactar pronto.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-[14px] text-red-400">
              Hubo un problema al enviar tu mensaje. Por favor, intentá de
              nuevo.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
