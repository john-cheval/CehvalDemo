import { disableImageOptimization } from "@/util/constants";
import Image from "next/image";
import React from "react";

const SeoSectionChoose = ({ section }) => {
  return (
    <div className="w-full h-fit wrapper-padding">
      <div className="grid w-full gap-5 grid-cols-3">
        <h4
          style={{
            background:
              "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
          className="font-sora font-semibold col-span-3 lg:col-span-1 text-[#101763] text-2xl sm:text-3xl  !leading-normal text-center lg:text-start "
        >
          {section?.title}
        </h4>
        <div className="col-span-3 lg:col-span-2 w-full flex flex-col gap-y-3">
          {section?.sub_sections?.map((item, index) => {
            return (
              <div
                className="wrapper-padding py-8 flex flex-col sm:flex-row bg-[#F8F8F8]  rounded-lg items-center gap-x-8 gap-y-4"
                key={index}
              >
                <Image
                  src={item?.image?.url}
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="w-[70px] h-fit object-cover"
                  alt={item?.title}
                  unoptimized={disableImageOptimization}
                />
                <div className=" text-[#27172F] flex w-full flex-col items-center- space-y-2">
                  <p className="font-sora font-semibold text-2xl  sm:text-3xl ">
                    {item?.title}
                  </p>
                  <div
                    className="font-satoshi w-full paragraphText-Size text-center sm:text-left "
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></div>
                </div>
              </div>
            );
          })}

          {/* <div className="px-5 sm:px-10 py-8 flex flex-col sm:flex-row bg-[#F8F8F8]  rounded-lg items-center gap-x-8 gap-y-4">
            <Image
              src={history}
              className="w-[85px] h-fit object-contain"
              alt="historic"
            />
            <div className=" text-[#27172F] flex w-full flex-col items-center space-y-1.5">
              <p className="font-sora font-semibold text-2xl  sm:text-3xl">
                Customization
              </p>
              <p className="font-satoshi w-full paragraphText-Size text-center sm:text-left ">
                Every business is unique, so we offer customized web design
                solutions to meet your requirements.
              </p>
            </div>
          </div>
          <div className="px-5 sm:px-10 py-8 flex flex-col sm:flex-row bg-[#F8F8F8]  rounded-lg items-center gap-x-8 gap-y-4">
            <Image
              src={acute}
              className="w-[85px] h-fit object-contain"
              alt="acute"
            />
            <div className="text-[#27172F] flex w-full flex-col items-center space-y-1.5">
              <p className="font-sora font-semibold text-2xl  sm:text-3xl">
                Timely Delivery
              </p>
              <p className="font-satoshi w-full paragraphText-Size text-center sm:text-left ">
                We value your time and ensure that your website is delivered
                within the agreed-upon timeframe without compromising quality.
              </p>
            </div>
          </div>
          <div className="px-5 sm:px-10 py-8 flex flex-col sm:flex-row bg-[#F8F8F8]  rounded-lg items-center gap-x-8 gap-y-4">
            <Image
              src={card}
              className="w-[85px] h-fit object-contain"
              alt="card"
            />
            <div className=" text-[#27172F] flex w-full flex-col items-center space-y-1.5">
              <p className="font-sora font-semibold text-2xl  sm:text-3xl">
                Competitive Pricing
              </p>
              <p className="font-satoshi w-full paragraphText-Size text-center sm:text-left ">
                Our web design services in Dammam are competitively priced,
                offering you excellent value for money without compromising on
                quality.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SeoSectionChoose;
