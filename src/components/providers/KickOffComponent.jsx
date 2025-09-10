import React from "react";
import Button from "../generals/Button";

const cardsData = [
  {
    id: 1,
    image: "/images/Providers/KickOffJourneyStep1.png",
    title: "Sync with Nevenka",
    description: "Easily complete your profile and become a verified partner.",
    color: "#D8B4FE",
  },
  {
    id: 2,
    image: "/images/Providers/KickOffJourneyStep2.png",
    title: "Share your experiences",
    description: "Share your activities, get discovered, and track engagement.",
    color: "#FCA5A5",
  },
  {
    id: 3,
    image: "/images/Providers/KickOffJourneyStep3.png",
    title: "Grow your impact.",
    description:
      "Connect with brands, scale your reach, and unlock new opportunities.",
    color: "#67E8F9",
  },
];

const Card = ({ id, image, title, description, color }) => {
  return (
    <div
      className={`card bg-[${color}] w-[345px] h-[449px] px-[5px] py-[10px]`}
    >
      <div className="relative w-full h-[226px] mb-[24px] overflow-hidden">
        <div
          className={`z-1 w-[64px] h-[64px] bg-[${color}] rounded-br-[5px] absolute top-0 left-0 flex items-center justify-center`}
        >
          <span className="text-[48px] font-bold text-black tracking-tight leading-[100%]">
            {id}.
          </span>
        </div>
        <img
          className="w-full absolute top-0 left-0 object-cover h-full"
          src={image}
          alt=""
        />
      </div>
      <h3 className="w-[80%] pl-[10px] mb-[24px] text-black text-[36px] font-bold leading-[100%] tracking-tight">
        {title}
      </h3>
      <p className="w-[90%] pl-[10px] text-black text-[18px] font-regular leading-[100%] tracking-tight">
        {description}
      </p>
    </div>
  );
};

export default function KickOffComponent() {
  return (
    <div className="w-full py-[70px] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full overflow-hidden px-[40px] xl:px-[70px] 2xl:px-[120px]">
        <h2 className="text-center text-[44px] font-extrabold leading-[100%] text-black mb-[45px]">
          Kick off your journey
        </h2>
        <p className="text-[18px] font-regular leading-[100%] tracking-tight text-black mb-[30px] text-center">
          Three simple steps to certify your profile, showcase your experiences,
          and connect with brands.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[22px] flex-wrap">
          {cardsData.map((card, index) => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              color={card.color}
            />
          ))}
        </div>
        <div className="w-full flex justify-center items-center mt-[50px]">
          <Button btnText="Become a partner" btnClass="primary-btn" href="/" />
        </div>
      </div>
    </div>
  );
}
