import { public_sans } from "@/app/fonts/fonts";
import FaqAccordionList from "./FaqAccordionList";

export default function FaqSection({ data }) {
  return (
    <section
      className={`bg-white text-zinc-900 ${public_sans.className} overflow-hidden`}
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
          <FaqAccordionList faqs={data.FAQS} />
        </div>
      </div>
    </section>
  );
}
