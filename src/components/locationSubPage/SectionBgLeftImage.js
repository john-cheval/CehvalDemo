import { disableImageOptimization } from "@/util/constants";
import Image from "next/image";
import React from "react";

const SectionBgLeftImage = ({ section }) => {
  return (
    <>
      {section?.sub_sections?.map((data, index) => (
        <section className="grid grid-cols-12" key={index}>
          <div className="col-span-12 md:col-span-4 lg:col-span-5">
            <Image
              height={720}
              width={680}
              sizes="100vw"
              src={data?.image?.url}
              alt="left_image"
              className="w-full h-full object-cover"
              unoptimized={disableImageOptimization}
            />
          </div>

          <div className="col-span-12 md:col-span-8 lg:col-span-7 px-10 lg:px-16 flex flex-col justify-center bg-black gap-y-5 relative py-5">
            <h5
              style={{
                background:
                  "linear-gradient(93deg, #FF0C15 0.34%, #FFF 14.22%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="font-sora text-xl sm:text-2xl md:text-3xl text-center md:text-left font-semibold leading-[153%]"
            >
              {data?.title}
            </h5>
            <div
              className="font-satoshi text-sm md:text-base leading-[173.85%] text-white text-center md:text-left "
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></div>

            <div
              className="w-[262px] h-[262px] absolute top-1/2 right-0 -translate-y-1/2 hidden md:block"
              style={{
                borderRadius: "262px",
                background: "#FF0C15",
                filter: "blur(150px)",
              }}
            />
          </div>
        </section>
      ))}
    </>
  );
};

export default SectionBgLeftImage;
