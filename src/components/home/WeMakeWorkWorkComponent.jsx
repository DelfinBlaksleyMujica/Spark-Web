import React from "react";
import Button from "../generals/Button";

function ColoredCard({ color, icon, title, text }) {
  return (
    <div
      className={`h-[225px] w-[283px] bg-${color} rounded-[10px] px-[26px] py-[20px]`}
    >
      {/*Card Content Container*/}
      <div>
        <img src={icon} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function CategoryCard({ category, bgImg, badge }) {
  return (
    <div className="h-[396px] w-[283px] relative">
      <img className="h-full w-full absolute top-0 left-0" src={bgImg} alt="" />
      <div className="bg-white rounded-[10px] px-[20px] py-[20px] absolute top-0 left-0 w-full h-[120px]">
        <h3 className="text-black text-[32px] font-bold leading-[100%] tracking-tight">
          {category}
        </h3>
        {badge != "" ? (
          <div className="rounded-[20px] bg-[#FFE696] flex justify-center items-center px-[16px] py-[8px] mt-[12px]">
            <p>COMING SOON</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function WeMakeWorkWorkComponent() {
  return (
    <div className="h-[1000px] bg-black relative flex justify-center items-center w-full">
      <img
        className="w-full h-full absolute top-0 left-0"
        src="/images/Textures/Home_WeMakeWorkWork_Texture.png"
        alt=""
      />
      <div className="py-[76px] px-[121px] w-full h-full flex flex-col justify-center items-center z-10">
        <h2 className="text-white text-[48px] font-regular leading-[100%] mb-[70px]">
          We make work, <strong>work</strong>
        </h2>
        <div className="w-full flex justify-center items-center mb-[70px]">
          <div className="flex gap-[30px] mb-[30px] justify-center items-center">
            <div className="flex flex-col">
              <CategoryCard
                category="Wellness Experiences"
                bagde=""
                bgImg="/images/Events.png"
              />
              <ColoredCard
                color="blue"
                icon="/images/Icons/Icon_1.png"
                title="Global Events"
                text="Access to the biggest event network in LatAm"
              />
            </div>
            <div>
              <ColoredCard
                color="blue"
                icon="/images/Icons/Icon_1.png"
                title="+20 Brands"
                text="Already using Sparkclub as their engagement platform. "
              />
              <CategoryCard
                category="Art & Culture"
                bgImg="/images/Events.png"
              />
            </div>
          </div>
          <div className="flex gap-[30px] mb-[30px] justify-center items-center">
            <div>
              <CategoryCard
                category="Running Session"
                bgImg="/images/Events.png"
              />
              <ColoredCard
                color="blue"
                icon="/images/Icons/Icon_1.png"
                title="+300 Certified Suppliers"
                text="Scaling their experiences and services."
              />
            </div>
            <div>
              <ColoredCard
                color="blue"
                icon="/images/Icons/Icon_1.png"
                title="Experiences"
                text="Looking for meaningful moments with your team? "
              />
              <CategoryCard category="Ed Tech" bgImg="/images/Events.png" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center">
          <Button
            btnText="Create an event now!"
            btnClass="tertiary-btn"
            href="/"
          />
        </div>
      </div>
    </div>
  );
}
