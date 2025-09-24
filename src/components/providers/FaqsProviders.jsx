"use client";

import { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

const FAQS = [
  {
    id: "user",
    question: "What is Sparkclub?",
    answer:
      "Sparkclub is a platform that brings people together through curated events, activities, and experiences designed to build stronger teams and communities — inside and outside the workplace.",
  },
  {
    id: "supplier",
    question: "Who can become a supplier?",
    answer:
      "Any provider offering services or experiences for teams — from workshops and sports to catering, venues, tech, or wellness activities.",
  },
  {
    id: "work",
    question: "How does Sparkclub work for suppliers?",
    answer:
      "You create your profile, list your services, and companies can book directly. Sparkclub makes it easy to connect with new clients and manage requests.",
  },
  {
    id: "companies",
    question: "What kind of companies will I reach?",
    answer:
      "Startups, SMEs, and large organizations looking for team-building, offsites, and well-being activities for their employees.",
  },
  {
    id: "payments",
    question: "How do bookings and payments work?",
    answer:
      "Companies book through Sparkclub, and you’ll receive payment securely after the event.",
  },
  {
    id: "cancelled",
    question: "What happens if a booking is cancelled?",
    answer:
      "Sparkclub has a cancellation policy to protect both companies and suppliers. You’ll always be notified in advance, and in some cases you may keep part of the payment depending on timing.",
  },
  {
    id: "ratings",
    question: "How do ratings and reviews work?",
    answer:
      "After each event, companies can leave feedback. Positive reviews increase your visibility on the platform and help you reach more clients.",
  },
  {
    id: "costs",
    question: "Is there a cost to join as a supplier?",
    answer:
      "Joining is free. Sparkclub charges a small commission per booking to keep the platform running.",
  },
  {
    id: "availability",
    question: "Can I manage my own availability?",
    answer:
      "Yes. You decide when and how your services are offered, including blackout dates or limits.",
  },
  {
    id: "joining",
    question: "Why should I join Sparkclub?",
    answer:
      "Sparkclub helps you grow your business, reach new clients, and be part of a community that values real experiences.",
  },
];

export default function FaqSection({ data }) {
  const [openId, setOpenId] = useState(null);
  const contentRefs = useRef({});

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      className={`bg-white text-zinc-900 ${publicSans.className} overflow-hidden`}
    >
      <div className="px-4 sm:px-6 md:px-0 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          {/* TITULO */}
          <header className="col-start-2 col-span-10 text-center">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold ">
              {data.title}
            </h2>
            <p className="mt-3 text-[18px] sm:[20px] text-zinc-600">
              {data.subtitle}
            </p>
          </header>

          {/* LISTA */}
          <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 space-y-4">
            {data.faqs.map((item) => {
              const isOpen = openId === item.id;
              const contentEl = contentRefs.current[item.id];
              const contentHeight = contentEl?.scrollHeight ?? 0;

              return (
                <div key={item.id} className="rounded-2xl bg-black text-white ">
                  {/* BUTTON */}
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black focus-visible:ring-offset-white"
                  >
                    <span className="text-[18px] sm:text-[20px] md:text-[22px] font-medium">
                      {item.question}
                    </span>

                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[50px] border border-white/30 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <FiChevronDown className="text-white h-5 w-5" />
                    </span>
                  </button>

                  {/* ANIMATION */}
                  <div
                    id={`faq-panel-${item.id}`}
                    style={{ height: isOpen ? contentHeight : 0 }}
                    className="grid transition-[height] duration-300 ease-out overflow-hidden"
                    aria-hidden={!isOpen}
                  >
                    <div
                      ref={(el) => (contentRefs.current[item.id] = el)}
                      className="px-5 sm:px-6 pb-5 sm:pb-6 text-[16px] sm:text-[20px] leading-6 text-white/90"
                    >
                      {Array.isArray(item.answer) ? (
                        <div className="space-y-2">
                          {item.answer.map((line, i) => (
                            <p key={i}>
                              {line.map((part, j) =>
                                typeof part === "string" ? (
                                  <span key={j}>{part}</span>
                                ) : part.bold ? (
                                  <strong
                                    key={j}
                                    className="font-semibold text-white"
                                  >
                                    {part.bold}
                                  </strong>
                                ) : null
                              )}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p>{item.answer}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
