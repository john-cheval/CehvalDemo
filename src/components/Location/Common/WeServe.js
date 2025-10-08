import React from "react";
import mall from "../../../../public/local_mall.svg";
import shipping from "../../../../public/local_shipping.svg";
import cast from "../../../../public/cast_for_education.svg";
import cinematic from "../../../../public/cinematic_blur.svg";
import shuttle from "../../../../public/airport_shuttle.svg";
import belt from "../../../../public/conveyor_belt.svg";
import balance from "../../../../public/account_balance.svg";
import agent from "../../../../public/real_estate_agent.svg";
import fastfood from "../../../../public/fastfood.svg";
import alert from "../../../../public/pulse_alert.svg";
import Image from "next/image";
import { disableImageOptimization } from "@/util/constants";
const WeServe = () => {
  return (
    <div className="col-span-3 lg:col-span-2 h-fit w-full grid text-[#27172F] grid-cols-2">
      <div className="hidden lg:block col-span-2 h-[1px] w-full  bg-[#D8D8D8]"></div>
      <div className="py-6 col-span-2 md:col-span-1 text-base   sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image
          unoptimized={disableImageOptimization}
          src={mall}
          className="w-10 object-contain h-fit"
          alt="mall"
        />
        <p>
          <span className="font-semibold">Retail</span> and E-commerce
        </p>
      </div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image
          unoptimized={disableImageOptimization}
          src={agent}
          className="w-10 object-contain h-fit"
          alt="agent"
        />
        <p>
          <span className="font-semibold">Real Estate</span> and Property
        </p>
      </div>
      <div className="hidden md:block col-span-2 h-[1px] w-full  bg-[#D8D8D8]"></div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image
          unoptimized={disableImageOptimization}
          src={alert}
          className="w-10 object-contain h-fit"
          alt="alert"
        />
        <p>
          <span className="font-semibold">Healthcare</span> and Fitness
        </p>
      </div>
      <div className="py-6 col-span-2 md:col-span-1  text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image
          unoptimized={disableImageOptimization}
          src={fastfood}
          className="w-10 object-contain h-fit"
          alt="fastfood"
        />
        <p>
          <span className="font-semibold">Management </span>Food and Beverage
        </p>
      </div>
      <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8] hidden md:block"></div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image
          unoptimized={disableImageOptimization}
          src={balance}
          className="w-10 object-contain h-fit"
          alt="balance"
        />
        <p>
          <span className="font-semibold">Banking</span> and Finance
        </p>
      </div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image
          unoptimized={disableImageOptimization}
          src={belt}
          className="w-10 object-contain h-fit"
          alt="belt"
        />
        <p>
          <span className="font-semibold">Logistics</span> and Transportation
        </p>
      </div>
      <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8] hidden md:block"></div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image
          unoptimized={disableImageOptimization}
          src={shuttle}
          className="w-10 object-contain h-fit"
          alt="shuttle"
        />
        <p>
          <span className="font-semibold">Travel </span> and Hospitality
        </p>
      </div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image
          unoptimized={disableImageOptimization}
          src={cinematic}
          className="w-10 object-contain h-fit"
          alt="cinematic"
        />
        <p>
          <span className="font-semibold">Entertainment </span>
          and Media
        </p>
      </div>
      <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8] hidden md:block"></div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image
          unoptimized={disableImageOptimization}
          src={cast}
          className="w-10 object-contain h-fit"
          alt="cast"
        />
        <p>
          <span className="font-semibold">Education</span> and E-learning
        </p>
      </div>
      <div className="py-6 col-span-2 md:col-span-1 text-base sm:text-xl font-normal flex leading-none items-center gap-x-4 md:gap-x-6 px-3 uppercase justify-start">
        <Image
          unoptimized={disableImageOptimization}
          src={shipping}
          className="w-10 object-contain h-fit"
          alt="shipping"
        />
        <p>
          <span className="font-semibold">Automotive </span>
          and Transportation
        </p>
      </div>
      <div className="col-span-2 h-[1px] w-full  bg-[#D8D8D8] hidden md:block"></div>
    </div>
  );
};

export default WeServe;
