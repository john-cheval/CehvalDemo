import React from "react";

const SeoSectionThree = ({ section }) => {
  return (
    <div className="wrapper-padding w-full">
      <div className="grid grid-cols-12 md:gap-x-8">
        <div className="col-span-12 lg:col-span-4">
          <p
            style={{
              background: "linear-gradient(92deg, #FF0C15 0.33%, #000 26.13%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-2xl sm:text-3xl lg:text-4xl font-sora font-semibold leading-[136.5%] lg:max-w-[450px] text-center md:text-left mb-4 lg:mb-0 w-full"
          >
            {section?.title}
          </p>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <div
            className="font-satoshi text-sm md:text-base leading-[173.85%] text-black text-center md:text-left"
            dangerouslySetInnerHTML={{ __html: section?.description }}
          ></div>

          {section?.sub_sections && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {section?.sub_sections?.map((card, index) => (
                <div key={index} className="space-y-3">
                  <p className="text-[#27172f] font-sora text-xl sm:text-2xl md:text-3xl font-semibold leading-[136.5%] text-center md:text-left">
                    {card?.title}
                  </p>
                  <div
                    className="text-sm text-black font-satoshi leading-[173.85%] md:max-w-[430px] w-full  text-center md:text-left"
                    dangerouslySetInnerHTML={{ __html: card?.description }}
                  ></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeoSectionThree;
