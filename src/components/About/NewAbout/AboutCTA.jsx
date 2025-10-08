import DarkButton from "@/components/Buttons/DarkButton";
import React from "react";

const AboutCTA = ({ ctaHeading, description, VideoUrl }) => {
  return (
    <div className=" relative w-screen z-[1111] lg:pt-14 bg-white--">
      <div className="wrapper-padding  ">
        <div className="relative h-[400px] md:h-[454px] flex items-center justify-center rounded-[30px] overflow-hidden ">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              controlsList="nodownload"
              className="object-cover w-full h-full"
            >
              <source src={VideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-7 text-center text-white">
            <h3 className="text-3xl sm:text-4xl md:text-[44px] font-normal font-sora leading-[133%] tracking-[-1.76px]">
              {ctaHeading}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              className="font-satoshi para text-sm sm:text-base leading-[154%] max-w-[85%] md:max-w-[612px]"
            ></p>

            <DarkButton
              link={"/contact-us"}
              color={true}
              text={"  Start your project"}
              transform={true}
              bgWhite={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCTA;
