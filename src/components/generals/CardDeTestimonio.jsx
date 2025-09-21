import { poppins } from "@/app/fonts/fonts";

export default function CardDeTestimonio({ imagen, testimonio, firma }) {
  return (
    <div className="rounded-[10px] bg-black px-[44px] py-[36px] h-[336px] w-[357px] min-w-[357px] shrink-0">
      <div className="flex flex-col gap-6 text-white w-full h-full relative">
        <img
          className="w-[69px] h-[69px]"
          src={imagen}
          alt="Testimonial Image"
        />
        <p className={`${poppins.className}`}>{testimonio}</p>
        <p className={`${poppins.className} absolute bottom-0`}>{firma}</p>
      </div>
    </div>
  );
}
