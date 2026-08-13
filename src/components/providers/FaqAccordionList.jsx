"use client";

import { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FaqAccordionList({ faqs }) {
  const [openId, setOpenId] = useState(null);
  const contentRefs = useRef({});

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 space-y-4">
      {faqs.map((item) => {
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
  );
}
