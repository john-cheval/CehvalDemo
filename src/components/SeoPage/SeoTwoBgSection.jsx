import Image from "next/image";
import Link from "next/link";
import React from "react";

const SeoTwoBgSection = ({ section }) => {
  return (
    <div className="w-full h-fit wrapper-padding">
      <div className="w-full h-[650px]-- relative grid grid-cols-2  gap-3">
        {section?.sub_sections?.map((item, index) => {
          return (
            <div
              className="col-span-2 lg:col-span-1 flex-col w-full flex items-end justify-end relative h-fit lg:h-full oveflow-hidden rounded-lg md:rounded-none"
              key={index + 1}
            >
              <Image
                src={item?.image?.url}
                alt={item?.title || "image"}
                width={400}
                height={300}
                className={`object-cover w-full absolute top-0 rounded-lg left-0 ${index === 0 ? "h-[60%] object-center" : "h-full object-top"}`}
              />
              {index === 0 && (
                <div className=" w-full h-full bg-gradient-to-b from-transparent rounded-t-lg to-[#27172F] to-95% z-20"></div>
              )}
              <div
                className={`flex w-full  h-fit rounded-b-lg flex-col pb-14 space-y-4  z-20 px-8 md:px-14 py-8 lg:py-0 ${index === 0 ? "bg-[#27172F]" : ""}`}
              >
                <h4
                  className={`font-sora font-semibold text-white text-3xl lg:text-4xl text-center md:text-left md:!leading-[130%] ${index === 0 ? "" : "pt-5"}`}
                  style={{
                    background:
                      index === 0 &&
                      "linear-gradient(92.09deg, #FF0C15 0.33%, #FFFFFF 26.13%)",
                    WebkitBackgroundClip: index === 0 && "text",
                    WebkitTextFillColor: index === 0 && "transparent",
                    color: index == 0 ? "transparent" : "white",
                  }}
                >
                  {item?.title}
                </h4>
                <div
                  className="seo_loction_desc paragraphText-Size"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                />
                {item?.link && (
                  <Link href={item?.link} className="hidden sm:block lg:pb-5">
                    <div className="flex items-center justify-between mt-2 py-3 text-white space-x-3.5 rounded-[50px] sm:w-fit w-full  px-5   bg-[#27172F]  font-sora text-center text-sm ">
                      <span className="">Contact Us</span>
                      <svg
                        className="w-3 rotate-45 object-contain"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.671646 7.29248L0.0625 6.68333L5.80279 0.9375H0.584146V0.0625H7.29248V6.77083H6.41748V1.55219L0.671646 7.29248Z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeoTwoBgSection;
