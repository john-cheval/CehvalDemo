import React from "react";
import Image from "next/image";
import AboutClientMobile from "./AboutClientMobile";
import { disableImageOptimization } from "@/util/constants";

const AboutClients = ({ clientData }) => {
  return (
    <div className="relative z-[100] w-screen bg-white overflow-x-hidden">
      <div className="pt-10 lg:pt-20 wrapper-padding pb-10 lg:pb-20 ">
        <h2 className="text-[#101763] font-sora text-3xl sm:text-4xl md:text-6xl lg:text-start text-center leading-[133%] tracking-[-1.76px] lg:mb-8 heading2">
          Our Clients
        </h2>
        <div className="hidden  md:grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center gap-4">
          {clientData?.map((client, index) => (
            <div
              key={index + 1}
              className="w-[205px] h-[104px] flex items-center justify-center  rounded-lg overflow-hidden "
            >
              <Image
                src={client?.image}
                alt={client?.title || "Client"}
                className="object-contain w-full h-full"
                width={200}
                height={50}
                sizes="100vw"
                // unoptimized={disableImageOptimization}
              />
            </div>
          ))}
        </div>
        {clientData && (
          <div className="md:hidden">
            <AboutClientMobile data={clientData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutClients;
