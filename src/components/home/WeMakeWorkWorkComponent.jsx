import React from "react";
import Button from "../generals/Button";

function ColoredCard({ color, icon, title, text }) {
  return (
    <div
      className={`h-[225px] w-full md:w-[243px] bg-[${color}] rounded-[10px] px-[13px] md:px-[26px] py-[10px] md:py-[20px]`}
    >
      {/*Card Content Container*/}
      <div>
        <img src={icon} alt="" />
        <h3 className="text-black text-[26px] sm:text-[28px] font-bold leading-[100%] tracking-tight my-[12px]">
          {title}
        </h3>
        <p className="text-black text-[14px] sm:text-[16px] font-regular leading-[136%] tracking-tight">
          {text}
        </p>
      </div>
    </div>
  );
}

function CategoryCard({ category, bgImg, badge }) {
  return (
    <div className="h-[376px] w-full md:w-[243px] relative">
      <img
        className="h-full w-full absolute top-0 left-0 object-cover rounded-[10px]"
        src={bgImg}
        alt=""
      />
      <div className="bg-white rounded-[10px] px-[20px] py-[20px] absolute top-0 left-0 w-full h-[90px] sm:h-[120px]">
        <h3 className="text-black text-[26px] sm:text-[32px] font-bold leading-[100%] tracking-tight">
          {category}
        </h3>
        {badge === "" ? null : (
          <div className="rounded-[20px] bg-[#FFE696] flex justify-center items-center px-[12px] py-[6px] mt-[12px] w-[120px]">
            <p className="text-black text-[12px] font-bold leading-[100%]">
              COMING SOON
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function WeMakeWorkWorkComponent() {
  return (
    <div className="h-[1900px] lg:h-[1000px] bg-black relative flex justify-center items-center w-full">
      <img
        className="w-full h-full absolute top-0 left-0 object-cover"
        src="/images/Textures/Home_WeMakeWorkWork_Texture.png"
        alt=""
      />
      <div className="py-[76px] px-0 md:px-[121px] w-full h-full flex flex-col justify-center items-center z-10">
        <h2 className="text-white text-[48px] font-regular leading-[100%] mb-[70px] text-center w-full">
          We make work, <strong>work</strong>
        </h2>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center mb-[70px] gap-[2%] md:gap-[20px] px-0 md:px-[119px]">
          <div className="w-full flex gap-[2%] md:gap-[20px] mb-[10px] lg:mb-[20px] justify-center items-center">
            <div className="flex flex-col gap-[7px] sm:gap-[20px] w-[50%] md:w-auto">
              <CategoryCard
                category="Wellness Experiences"
                badge=""
                bgImg="/images/Cards/We_make_work_work_1.png"
              />
              <ColoredCard
                color="#FCD34D"
                icon="/images/3DIllus/Mountain.svg"
                title="Global Events"
                text="Access to the biggest event network in LatAm"
              />
            </div>
            <div className="flex flex-col gap-[7px] sm:gap-[20px] w-[50%] md:w-auto">
              <ColoredCard
                color="#FCA5A5"
                icon="/images/3DIllus/Laptop.svg"
                title="+20 Brands"
                text="Already using Sparkclub as their engagement platform. "
              />
              <CategoryCard
                category="Art & Culture"
                badge=""
                bgImg="/images/Cards/We_make_work_work_2.png"
              />
            </div>
          </div>
          <div className="w-full flex gap-[2%] md:gap-[20px] mb-[20px] justify-center items-center">
            <div className="flex flex-col gap-[7px] sm:gap-[20px] w-[49%] md:w-auto">
              <CategoryCard
                category="Running Session"
                badge=""
                bgImg="/images/Cards/We_make_work_work_3.png"
              />
              <ColoredCard
                color="#67E8F9"
                icon="/images/3DIllus/Truck.svg"
                title="+300 Certified Suppliers"
                text="Scaling their experiences and services."
              />
              {/* <ColoredCard
                color="red"
                icon="/images/3DIllus/Truck.svg"
                title="+300 Certified Suppliers"
                text="Scaling their experiences and services."
              /> */}
            </div>
            <div className="flex flex-col gap-[7px] sm:gap-[20px] w-[49%] md:w-auto">
              <ColoredCard
                color="#D8B4FE"
                icon="/images/3DIllus/Bicycle.svg"
                title="Experiences"
                text="Looking for meaningful moments with your team? "
              />
              <CategoryCard
                category="Ed Tech"
                badge="Coming Soon"
                bgImg="/images/Cards/We_make_work_work_4.png"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center lg:justify-end items-center max-w-[1440px]">
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
