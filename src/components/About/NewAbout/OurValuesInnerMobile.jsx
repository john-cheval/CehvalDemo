import React from "react";
import Image from "next/image";
import { disableImageOptimization } from "@/util/constants";

const OurValuesInnerMobile = ({ valuesData }) => {
  return (
    <div>
      <div className="space-y-4 ">
        {valuesData?.speed_area_list?.map((values, index) => (
          <div className="flex flex-col gap-y-4" key={index}>
            <div className="h-auto w-full">
              <Image
                src={values?.image}
                alt="Horse"
                height={0}
                width={0}
                className="h-full w-full"
                sizes="100vw"
                unoptimized={disableImageOptimization}
              />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl text-center font-semibold text-[#101763] font-sora leading-[133%]">
                {values?.title}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: values?.description }}
                className="text-center  mt-2 --ml-6 text-black   font-satoshi text-sm para sm:text-base leading-[155%]"
              ></p>
            </div>

            {index === 0 && (
              <div className="flex flex-col h-[100px] items-center">
                <div className="h-4 w-4 rounded-full bg-black" />
                <div className="h-[80px] w-[1px] rounded-full bg-black" />
                <div className="h-4 w-4 rounded-full bg-black" />
              </div>
            )}

            {index === 1 && (
              <div className="flex flex-col h-[100px] items-center">
                <div className="h-4 w-4 rounded-full bg-black" />
                <div className="h-[80px] w-[1px] rounded-full bg-black" />
                <div className="h-4 w-4 rounded-full bg-black" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValuesInnerMobile;
