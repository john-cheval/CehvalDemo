import ChildrenReveal from "@/util/ChildrenReveal";
import { MaskText } from "@/util/MaskText";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { disableImageOptimization } from "@/util/constants";

const NewService = ({ data, title }) => {
  return (
    <div className="relative wrapper-padding w-screen h-fit bg-[#F6F6F4] overflow-x-hidden">
      <div className="relative  mx-auto w-full ">
        <div className="w-full flex items-center  pt-8 sm:pt-14 md:pt-0    h-fit pb-8   flex-col ">
          {/* <MaskText
            text={title}
            styling="text-center font-sora font-semibold  md:max-w-[800px]  text-3xl sm:text-4xl  lg:text-5xl heading2  text-[#101763]"
          /> */}
          <h2 className="text-center font-sora font-semibold  md:max-w-[800px]  text-3xl sm:text-4xl  lg:text-5xl heading2  text-[#101763]">
            {title}
          </h2>
          <ChildrenReveal
            x={0}
            y={20}
            styling="flex flex-col w-full h-fit py-4 sm:py-12 md:py-14  items-center justify-center"
          >
            {data &&
              Object.keys(data)?.map((key, index) => (
                <div
                  key={index}
                  className={`w-full flex-- border ${index === 0 ? "border-t-1" : "border-t-0"} border-r-0 border-l-0   sm:space-y-0 space-y-1 group    h-fit f  border-b border-[#101763] border-opacity-50 py-7 transition-all duration-300  text-[#101763] grid grid-cols-12 items-center`}
                >
                  <div className="flex gap-x-12 xl:gap-x-16 md:items-center col-span-10 lg:col-span-11 ">
                    <p className="text-[#101763] hidden md:block group-hover:text-[#D81100] font-sora text-xl font-medium  transition-transform transform group-hover:scale-105 duration-300">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </p>

                    <div className="relative hidden lg:block h-40 w-80 object-cover-- object-center-- sm:object-contain--">
                      <Image
                        src={data[key]?.home_page_image}
                        className="rounded-[10px]  object-cover w-full h-auto "
                        fill={true}
                        alt={data[key]?.post_title}
                        priority={true}
                        // unoptimized={disableImageOptimization}
                      />
                    </div>

                    <div className="flex flex-col space-y-3 group-hover:space-y-4 justify-center transition-all duration-300 ml-2 w-full-- lg:max-w-[450px] xl:max-w-[700px]">
                      <h3
                        className="relative text-xl md:text-2xl lg:text-3xl font-normal leading-[140%] font-sora text-[#101763] 
                transition-all duration-300 group-hover:font-bold 
                group-hover:bg-gradient-to-r group-hover:from-[#101763] group-hover:to-[#D81100] 
                group-hover:bg-clip-text group-hover:text-transparent w-fit "
                      >
                        {data[key]?.post_title}
                        <span className="absolute left-0 -bottom-1 w-3/4-- h-[2px] bg-[#d81100] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left "></span>
                      </h3>

                      <MaskText
                        text={data[key]?.home_page_short_description}
                        styling="font-satoshi  sm:text-left   w-[90%] md:w-[80%] text-base md:group-hover:scale-105 md:group-hover:translate-x-3   xl:w-full  transition-all duration-300  "
                      />
                    </div>
                  </div>

                  <div className="w-[50px]  pl-5 sm:w-fit h-fit relative flex group-hover:my-5 my-0 sm:my-0   transition-all duration-700 col-span-2 lg:col-span-1  ">
                    <Link
                      href={`/service/${data[key]?.post_name}`}
                      className=" cursor-pointer px-2 py-2 sm:px-3 sm:py-3 md:px-5 md:py-5 border border-[#101764] rounded-[8px]  lg:rounded-[6px]  transition-all duration-700 sm:bottom-auto   group-hover:border-none group-hover:text-white text-sm  group-hover:bg-[#D81100] flex items-center justify-center"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              ))}
          </ChildrenReveal>
        </div>
      </div>
    </div>
  );
};

export default NewService;
