import React from "react";

const companies = [
  {
    id: 1,
    img: "/images/TrustedBy/Company1.svg",
  },
  {
    id: 2,
    img: "/images/TrustedBy/Company2.svg",
  },
  {
    id: 3,
    img: "/images/TrustedBy/Company3.svg",
  },
  {
    id: 4,
    img: "/images/TrustedBy/Company4.svg",
  },
  {
    id: 5,
    img: "/images/TrustedBy/Company5.svg",
  },
  {
    id: 6,
    img: "/images/TrustedBy/Company6.svg",
  },
];

export default function TrustedByComponent() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center w-full py-[40px]">
        <h2 className="text-[24px] font-semibold leading-[100%] tracking-tight text-center mb-[12px] pt-[36px]">
          Trusted by
        </h2>
        <div className="flex gap-[75px] w-full justify-center items-center">
          {companies.map((company) => (
            <div key={company.id}>
              <img src={company.img} alt={`Empresa asociada a Sparkclub`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
