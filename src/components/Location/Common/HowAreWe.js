import Image from "next/image";
import React from "react";
import arrow from "../../../../public/arrow_circle_right (4).svg";
import image4 from "../../../../public/dammam/8.jpeg";
import { disableImageOptimization } from "@/util/constants";

const HowAreWe = () => {
  return (
    <div className="w-full h-fit  wrapper-padding">
      <div className="w-full relative grid grid-cols-2  h-fit gap-5">
        <div className="col-span-2 lg:col-span-1 flex-col w-full flex items-end justify-end relative h-fit">
          <div className="flex w-full  h-fit text-black rounded-b-lg flex-col pb-5 lg:pb-14 space-y-4  z-20 lg:pr-14">
            <h4
              style={{
                background:
                  "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
              className="font-sora font-semibold text-white text-2xl sm:text-3xl lg:text-4xl  !leading-[130%] text-center lg:text-left "
            >
              How We Are Different From Other Web Design Companies In Dammam
            </h4>
            <div className="py-2 flex  gap-x-4">
              <Image
                src={arrow}
                className="w-6 mt-1 h-fit object-contain"
                alt="arrow"
              />
              <p className="font-satoshi w-full paragraphText-Size ">
                ǎOur team at Cheval ME is dedicated to creating unique and
                innovative web designs that stand out from the competition. We
                believe in pushing boundaries and thinking outside the box to
                deliver exceptional client results.
              </p>
            </div>
            <div className="py-2 flex  gap-x-4">
              <Image
                src={arrow}
                className="w-6 mt-1 h-fit object-contain"
                alt="arrow"
              />
              <p className="font-satoshi w-full paragraphText-Size ">
                Unlike other web design companies in Dammam, we prioritize the
                user experience and ensure that Our websites are aesthetically
                pleasing and user-friendly, making navigation effortless and
                useful. We recognise the significance of crafting a seamless and
                delightful online experience for visitors.
              </p>
            </div>{" "}
            <div className="py-2 flex  gap-x-4">
              <Image
                src={arrow}
                className="w-6 mt-1 h-fit object-contain"
                alt="arrow"
              />
              <p className="font-satoshi w-full paragraphText-Size ">
                At Cheval ME, we take a personalized approach to web design. We
                collaborate closely with our clients, understanding their needs
                and goals and customizing our designs to meet those
                requirements. We focus on creating websites that reflect our
                client's brand identity and message.
              </p>
            </div>{" "}
            <div className="py-2 flex  gap-x-4">
              <Image
                src={arrow}
                className="w-6 mt-1 h-fit object-contain"
                alt="arrow"
              />
              <p className="font-satoshi w-full paragraphText-Size ">
                We pride ourselves on delivering high-quality web designs within
                the agreed-upon timeframe. Our experienced designers and
                developers work efficiently to ensure that our client's websites
                are launched on schedule without compromising quality.
              </p>
            </div>
          </div>
        </div>
        <Image
          src={image4}
          alt="image4"
          className="object-cover col-span-2 lg:col-span-1 w-full top-0 rounded-lg  h-full object-center"
          unoptimized={disableImageOptimization}
        />
      </div>
    </div>
  );
};

export default HowAreWe;
