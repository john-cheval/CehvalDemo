import Link from "next/link";
import React from "react";

const LocationBottomBanner = ({ title, description }) => {
  return (
    <div className="relative w-screen h-fit  pb-12 sm:pb-14 md:pb-16 text-[#101763] bg-white overflow-x-hidden">
      <div className="relative max-w-screen wrapper-padding sm:py-0 py-10 w-full">
        <div className="grid w-full gap-5 grid-cols-9">
          <div className="flex space-y-5 sm:space-y-10 sm:items-start pr-2 items-center sm:justify-start justify-center  flex-col col-span-9 lg:col-span-4 h-fit">
            <p
              style={{
                background:
                  "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
              className="font-sora font-semibold  text-[#101763]  text-xl sm:text-2xl md:text-3xl  !leading-[130%] text-center lg:text-left  "
            >
              {title}
            </p>
            <div className="my-3 lg:ml-1 w-full max-w-40 h-[1px] bg-black mx-auto"></div>
          </div>
          <div className=" col-span-9 lg:col-span-5 flex flex-col space-y-6 w-full items-center justify-center lg:items-start lg:justify-start">
            <p className="font-satoshi w-full paragraphText-Size text-[#27172F] text-center lg:text-start">
              {description}
            </p>
            <Link
              href={"/contact-us"}
              className="flex items-center justify-between py-3 space-x-5 rounded-[50px] w-fit   px-6 border border-[#EE2525] bg-[#EE2525] text-white   font-sora text-center  text-sm "
            >
              <span className="">Contact Us</span>
              <svg
                className="w-3 object-contain rotate-45"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationBottomBanner;
