import Image from "next/image";
import React from "react";
import history from "../../../../public/manage_history.svg";
import acute from "../../../../public/acute.svg";
import mitre from "../../../../public/mitre.svg";
import card from "../../../../public/credit_card.svg";

const WhyChooseUs = ({ location }) => {
  return (
    <div className="w-full h-fit wrapper-padding">
      <div className="grid w-full gap-5 grid-cols-3">
        <h4
          style={{
            background:
              "linear-gradient(92.09deg, #FF0C15 0.33%, #000000 26.13%)",

            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
          className="font-sora font-semibold col-span-3 lg:col-span-1 text-[#101763] text-2xl sm:text-3xl  !leading-[130%] text-center lg:text-start "
        >
          Why Choose Us For Web Design Company In {location}
        </h4>
        <div className="col-span-3 lg:col-span-2 w-full flex flex-col gap-y-3">
          <div className="py-8 flex flex-col sm:flex-row bg-[#F8F8F8]  rounded-lg items-center gap-x-8 gap-y-4">
            <Image
              src={mitre}
              className="w-[85px] h-fit object-contain"
              alt="mitre"
            />
            <div className=" text-[#27172F] flex w-full flex-col items-center- space-y-1.5">
              <p className="font-sora font-semibold text-2xl text-center sm:text-left  sm:text-3xl ">
                Expertise
              </p>
              <p className="font-satoshi w-full paragraphText-Size text-center sm:text-left ">
                Our team of skilled web designers and developers in Dammam have
                years of experience creating visually appealing and
                user-friendly websites.
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-col sm:flex-row bg-[#F8F8F8]  rounded-lg items-center gap-x-8 gap-y-4">
            <Image
              src={history}
              className="w-[85px] h-fit object-contain"
              alt="historic"
            />
            <div className=" text-[#27172F] flex w-full flex-col items-center- space-y-1.5">
              <p className="font-sora text-center sm:text-left font-semibold text-2xl  sm:text-3xl">
                Customization
              </p>
              <p className="font-satoshi w-full paragraphText-Size text-center sm:text-left ">
                Every business is unique, so we offer customized web design
                solutions to meet your requirements.
              </p>
            </div>
          </div>
          <div className=" py-8 flex flex-col sm:flex-row bg-[#F8F8F8]  rounded-lg items-center gap-x-8 gap-y-4">
            <Image
              src={acute}
              className="w-[85px] h-fit object-contain"
              alt="acute"
            />
            <div className="text-[#27172F] flex w-full flex-col items-center- space-y-1.5">
              <p className="font-sora text-center sm:text-left font-semibold text-2xl  sm:text-3xl">
                Timely Delivery
              </p>
              <p className="font-satoshi w-full paragraphText-Size text-center sm:text-left ">
                We value your time and ensure that your website is delivered
                within the agreed-upon timeframe without compromising quality.
              </p>
            </div>
          </div>
          <div className="py-8 flex flex-col sm:flex-row bg-[#F8F8F8]  rounded-lg items-center gap-x-8 gap-y-4">
            <Image
              src={card}
              className="w-[85px] h-fit object-contain"
              alt="card"
            />
            <div className=" text-[#27172F] flex w-full flex-col items-center- space-y-1.5">
              <p className="font-sora text-center sm:text-left font-semibold text-2xl  sm:text-3xl">
                Competitive Pricing
              </p>
              <p className="font-satoshi w-full paragraphText-Size text-center sm:text-left ">
                Our web design services in Dammam are competitively priced,
                offering you excellent value for money without compromising on
                quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
