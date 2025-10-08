import React from "react";
import Image from "next/image";
import { disableImageOptimization } from "@/util/constants";
const SeoSectionSeven = ({ section }) => {
  return (
    <div className=" wrapper-padding space-y-7 md:space-y-14 pt-5 md:pt-0">
      {section?.sub_sections?.map((item, index) => (
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-6 items-center"
          key={index}
        >
          <div
            className={`flex flex-col gap-y-5- items-center- justify-center- ${index % 2 !== 0 ? "order-0 md:order-1" : "order-0"}`}
          >
            <p
              style={{
                background:
                  "linear-gradient(92deg, #FF0C15 0.33%, #000 26.13%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
              className="font-satoshi text-2xl sm:text-3xl  font-semibold leading-[136.5%] text-center md:text-left"
            >
              {item?.title}
            </p>

            <div
              className="text-[#27172f] mt-3 text-sm md:text-base leading-[178.85%] space-y-5 locDesc text-center md:text-left "
              dangerouslySetInnerHTML={{ __html: item?.description }}
            ></div>
          </div>

          <div className="relative w-full aspect-[4/3]-">
            <Image
              src={item?.image?.url}
              alt={`image-${index + 1}`}
              // fill
              height={100}
              // unoptimized={disableImageOptimization}
              width={100}
              className="object-cover- h-auto w-full rounded-lg"
              // sizes="(min-width: 768px) 50vw, 100vw"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeoSectionSeven;
