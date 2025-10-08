import { disableImageOptimization } from "@/util/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhyChooseUsSection = ({ section }) => {
  return (
    <section className=" mt-10 md:mt-14 lg:mt-[74px] xl:mt-20 bg-main">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5">
          <Image
            src={section?.image?.url}
            width={1000}
            height={1000}
            alt={section?.title || "image"}
            // unoptimized={disableImageOptimization}
            sizes="100vw"
            className="w-full max-h-[300px] h-full md:max-h-full object-cover"
          />
        </div>
        <div className="col-span-12 lg:col-span-7 bg-main py-8 md:py-14 md:pl-14 lg:pl-[74px] md:pr-10 lg:pr-14 text-white font-sora flex flex-col gap-y-3 wrapper-padding lg:gap-y-5 justify-center- itms-cen">
          <h3 className="  font-semibold text-2xl sm:text-3xl lg:text-[40px] leading-[135%] tracking-[-0.4px] text-center md:text-left">
            {section?.title}
          </h3>
          <span className="bg-sec w-16 h-1 block mx-auto md:mx-0 " />
          <div
            dangerouslySetInnerHTML={{ __html: section?.description }}
            className="text-lg sm:text-xl md:text-2xl font-semibold leading-[135%] tracking-[-0.25px] text-center md:text-left "
          ></div>
          <ul className="space-y-3 lg:space-y-5 mt-2 whyChev">
            {section?.sub_sections?.map((item, index) => (
              <li key={index}>
                <p className="text-base md:text-lg lg:text-xl font-semibold leading-[135%] tracking-[-0.2px] ">
                  {item?.title}
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                  className="text-sm md:text-base font-light leading-[202%] "
                ></div>
              </li>
            ))}
          </ul>

          <Link
            href={section?.button_link || "#contact"}
            className="bg-sec text-white rounded-[10px] flex items-center font-satoshi text-sm md:text-base font-medium leading-[154%] gap-x-4 py-3 md:py-4 px-5 md:px-7 w-fit  group mt-5 mx-auto lg:mx-0"
          >
            {section?.button_link_text}
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
