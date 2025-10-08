import { disableImageOptimization } from "@/util/constants";
import Image from "next/image";
import React from "react";

const AdsSectionSix = ({ clientsData }) => {
  return (
    <section className="pb-14 pt-4 md:pt-8 lg:pt-12">
      {" "}
      <h3 className="ads-heading ">Clients</h3>
      <div className="grid grid-cols-3 lg:grid-cols-4 justify-items-center- gap-4 mt-3 md:mt-5">
        {clientsData?.map((client, index) => (
          <div
            key={index + 1}
            className="md:w-[205px] md:h-[104px] flex items-center justify-center  rounded-lg overflow-hidden "
          >
            <Image
              src={client?.image}
              alt={client?.title || "Client"}
              className="object-contain w-full h-full"
              width={200}
              height={50}
              sizes="100vw"
              unoptimized={disableImageOptimization}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdsSectionSix;
