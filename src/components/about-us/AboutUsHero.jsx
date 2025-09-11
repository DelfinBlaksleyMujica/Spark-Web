
import Image from "next/image";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function AboutUsHero() {
    return (
        <section className={`${publicSans.className} bg-black text-white`}>
            <div className="px-4 sm:px-6 md:px-0 pt-24">
                <div className="grid grid-cols-12">
                    {/* HERO IMAGE */}
                    <div className="col-start-0 col-span-12">
                        <div className="relative w-full overflow-hidden">

                            {/* Mobile image (visible only SMALLER THAN LARGE DEVICES) */}
                            <div className="block lg:hidden">
                                <Image
                                    src="/images/AboutUs/HeroImg_Mobile.png" // replace with your mobile image
                                    alt="SparkClub mobile hero"
                                    width={800}
                                    height={900}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>

                            {/* Desktop image (visible LARGE and up) */}
                            <div className="hidden lg:block">
                                <Image
                                    src="/images/AboutUs/HeroImg.png" // replace with your desktop image
                                    alt="SparkClub desktop hero"
                                    width={1920}
                                    height={900}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* TITLE */}
                    <header className="col-start-2 col-span-10 text-center py-4">
                        <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-[1.1]">
                            Our mission is to strengthen work relationships through{" "}
                            <span className="font-extrabold">shared experiences.</span>
                        </h1>
                    </header>

                    {/* SUBTITLE */}
                    <div className="col-start-2 col-span-10 pt-4 pb-12">
                        <p className="mx-auto text-[18px] sm:text-[20px] md:text-[24px] text-white text-center ">
                            At Spark, we redefine connections. We believe a single experience can flip your perception of someone 180º. That’s why we’re on a mission to make every moment unforgettable. We’ve handpicked, tested, and perfected the trendiest local experiences to help you build game-changing relationships—with your all-star team and top-tier clients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
