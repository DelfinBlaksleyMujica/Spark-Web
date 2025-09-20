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
        id: "organizer",
        question: "Who is Sparkclub for?",
        answer: [
            ["- ", { bold: "Employees" }, " — discover and join activities that match your interests."],
            ["- ", { bold: "Managers & HR teams" }, " — plan team-building experiences easily and measure their impact."],
            ["- ", { bold: "Brands & suppliers" }, " — connect with companies and communities through meaningful events."],
        ],
    },
    {
        id: "analytics",
        question: "How does Sparkclub work?",
        answer:
            "You create your profile, share your interests, and Sparkclub recommends events, activities, and experiences that fit your team’s vibe. From after-work meetups to larger offsites or wellness activities, everything is designed to strengthen connections.",
    },
    {
        id: "billing",
        question: "What kind of experiences can I expect?",
        answer: [
            ["- 🏔 Internal team events: offsites, workshops, sports, cultural activities."],
            ["- 🌍 External community events: networking, festivals, learning sessions, and collaborations with other companies."],
            ["- ✨ Well-being & lifestyle perks: from yoga classes to cooking nights."],
        ],
    },
    {
        id: "companies",
        question: "Why should companies use Sparkclub?",
        answer:
            "Because engaged teams perform better. Sparkclub saves managers time by automating event planning and helps companies create a culture of belonging, motivation, and connection.",
    },
    {
        id: "communities",
        question: "How does Sparkclub help communities grow?",
        answer:
            "Every event, big or small, becomes a way to connect. Employees bond with each other, companies connect with suppliers, and brands get closer to communities through real experiences.",
    },
    {
        id: "active",
        question: "Is Sparkclub already active?",
        answer:
            "Yes. We’ve already organized multiple events and activities, with teams and suppliers joining in. Our community is growing every week.",
    },
];

export default function FaqSection() {
    const [openId, setOpenId] = useState(null);
    const contentRefs = useRef({});

    const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <section className={`bg-white text-zinc-900 ${publicSans.className} overflow-hidden`}>
            <div className="px-4 sm:px-6 md:px-0 py-14 sm:py-16 lg:py-20">
                <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                    {/* TITULO */}
                    <header className="col-start-2 col-span-10 text-center">
                        <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold ">
                            FAQs
                        </h2>
                        <p className="mt-3 text-[18px] sm:[20px] text-zinc-600">
                            Your questions answered: how we make work more engaging, fun, and connected.
                        </p>
                    </header>

                    {/* LISTA */}
                    <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 space-y-4">
                        {FAQS.map((item) => {
                            const isOpen = openId === item.id;
                            const contentEl = contentRefs.current[item.id];
                            const contentHeight = contentEl?.scrollHeight ?? 0;

                            return (
                                <div
                                    key={item.id}
                                    className="rounded-2xl bg-black text-white "
                                >
                                    {/* BUTTON */}
                                    <button
                                        type="button"
                                        onClick={() => toggle(item.id)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-panel-${item.id}`}
                                        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black focus-visible:ring-offset-white"
                                    >
                                        <span className="text-[18px] md:text-[20px] font-medium">
                                            {item.question}
                                        </span>

                                        <span
                                            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[50px] border border-white/30 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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
                                                                    <strong key={j} className="font-semibold text-white">
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
