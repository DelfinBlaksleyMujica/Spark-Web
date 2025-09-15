import Image from "next/image";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function ChallengeCards() {
    return (
        <section className={`${publicSans.className} bg-black text-white py-0`}>
            <div className="relative w-full overflow-hidden">
                {/* Bg texture */}
                <img
                    src="/images/Textures/SparkBackground.png"
                    alt="Background texture"
                    className="absolute inset-0 z-10 w-[2216.25px] h-full object-cover"
                />

                {/* CARDS */}
                <div className="relative z-10 px-4 sm:px-6 md:px-0 py-12 sm:py-16 lg:py-20">
                    <div className="grid grid-cols-12 gap-x-6 gap-y-10">

                        {/* CARD 1 . pink*/}
                        <article
                            className="
                col-start-2 col-span-10
                md:col-start-4 md:col-span-6
                rounded-[8px] bg-[#F7A7A5] text-black p-5 sm:p-6 lg:p-8
              "
                        >
                            <div
                                className="
                  grid grid-cols-1 items-center gap-6 lg:gap-8
                  lg:grid-cols-[minmax(0,1fr)_340px]   /* slightly narrower for 1280px */
                "
                            >
                                {/* IMAGE */}
                                <div className="order-1 lg:order-2">
                                    <div
                                        className="
                    relative mx-auto w-full max-w-[420px]    /* mobile/tablet */
                    aspect-[456/364] overflow-hidden ring-1 ring-black/10
                    md:max-w-[360px] lg:w-[340px] lg:max-w-none
                "
                                    >
                                        <Image
                                            src="/images/AboutUs/Card5.svg"
                                            alt="Remote work scene with laptop"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 340px, (min-width: 768px) 360px, 100vw"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* TEXT */}
                                <div className="order-2 lg:order-1 mx-1 sm:mx-2">
                                    <h3 className="text-[26px] sm:text-[32px] lg:text-[32px] font-extrabold mb-3 leading-[1.2]">
                                        Here’s the challenge:
                                    </h3>
                                    <p className="text-[15px] sm:text-[20px] lg:text-[18px]">
                                        Fast-growing companies struggle to keep top talent engaged, while
                                        employees feel disconnected. At the same time, businesses often miss
                                        the mark when trying to appreciate their customers — relying on generic
                                        gestures that don’t leave a lasting impression.
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* CARD 2 — green */}
                        <article
                            className="col-start-2 col-span-10 md:col-start-4 md:col-span-6 rounded-[8px] bg-[#9CF0C3] text-black p-5 sm:p-6 lg:p-8"
                        >
                            <div
                                className="
                  grid grid-cols-1 items-center gap-6 lg:gap-8
                  lg:grid-cols-[340px_minmax(0,1fr)]
                "
                            >
                                {/* IMAGE */}
                                <div className="order-1">
                                    <div
                                        className="
                      relative mx-auto w-full max-w-[420px]
                      aspect-[456/364] overflow-hidden ring-1 ring-black/10
                      md:max-w-[360px] lg:w-[340px] lg:max-w-none
                    "
                                    >
                                        <Image
                                            src="/images/AboutUs/Card2.png"
                                            alt="Team outdoor activity"
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 340px, (min-width: 768px) 360px, 100vw"
                                        />
                                    </div>
                                </div>

                                {/* TEXT */}
                                <div className="order-2 mx-1 sm:mx-2">
                                    <h3 className="text-[26px] sm:text-[32px] lg:text-[32px] font-extrabold mb-3 leading-[1.2]">
                                        So, we did something about it.
                                    </h3>
                                    <p className="text-[15px] sm:text-[20px] lg:text-[18px]">
                                        As a team of experience-obsessed, adventure-seeking, culture-loving pros,
                                        we created SparkClub to turn business relationships into real connections.
                                        Because every interaction is a chance to build trust, create quality moments,
                                        and make lasting memories.
                                    </p>
                                    <p className="text-[15px] sm:text-[20px] lg:text-[18px] font-bold">
                                        Let’s make it count.
                                    </p>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    );
}
