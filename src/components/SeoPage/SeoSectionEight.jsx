import React from "react";

const SeoSectionEight = ({ section }) => {
  return (
    <div className="wrapper-padding w-full">
      <div>
        <p
          style={{
            background:
              "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className={`font-sora text-2xl sm:text-3xl  font-semibold leading-[136.5%] max-w-[625px]-- text-center  ${section?.sub_sections ? "md:text-left" : "md:text-center"}`}
        >
          {section?.title}
        </p>

        {section?.description && (
          <div
            className={`text-[#27172f] font-satoshi text-sm md:text-base leading-[173.85%] mt-3 text-center ${section?.sub_sections ? "md:text-left" : "md:text-center"}`}
            dangerouslySetInnerHTML={{ __html: section?.description }}
          ></div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 mt-8">
        {section?.sub_sections &&
          section?.sub_sections?.map((item, index) => (
            <div
              key={index + 1}
              className="bg-[#F8F8F8] flex flex-col gap-y-5 md:gap-y-8 rounded-lg py-7 md:py-12 wrapper-padding "
            >
              <p
                style={{
                  background:
                    "linear-gradient(92deg, #FF0C15 0.33%, #000 26.13%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="font-sora text-xl sm:text-2xl md:text-3xl text-center md:text-left font-semibold leading-[136.5%]"
              >
                {item?.title}
              </p>
              <div
                className="text-[#27172f]  font-satoshi leading-[173.85%] tetx-sm md:text-base text-center md:text-left"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SeoSectionEight;
