import React from "react";

const Process = ({ section }) => {
  return (
    <div className="w-full wrapper-padding">
      <div className="grid grid-cols-1  lg:grid-cols-12 gap-5 w-full h-fit">
        <div className="lg:col-span-4 ">
          <h4
            style={{
              background: "linear-gradient(92deg, #FF0C15 0.33%, #000 26.13%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-sora font-semibold text-[#101763] text-2xl sm:text-3xl lg:text-4xl !leading-[136.5%]  text-center lg:text-left  "
          >
            {section?.title}
          </h4>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 md:gap-7">
          {section?.sub_sections?.map((item, index) => (
            <div
              className="col-span-1 grid grid-cols-1 grid-flow-row mt-10 sm:mt-20 gap-20-- lg:gap-0"
              key={index}
            >
              <div
                className={`w-full relative h-fit col-span-1 bg-[#F2F4F9] flex flex-col text-[#27172F] space-y-4 px-10 pt-14 sm:pt-16 lg:pt-20 pb-10 ${index % 2 === 0 ? "" : "md:mt-20"}`}
              >
                <p
                  style={{
                    background:
                      "linear-gradient(180deg, #27172F 0%, #F00 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                  className=" absolute text-[90px] sm:text-[150px] font-sora font-semibold -top-10 sm:-top-16 leading-none left-10"
                >
                  {index + 1}
                </p>
                <p className="font-sora font-semibold text-xl sm:text-2xl lg:text-3xl ">
                  {item?.title}
                </p>
                <div
                  className="font-satoshi w-full paragraphText-Size "
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
