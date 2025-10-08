import React from "react";
import Image from "next/image";

const AdsSectionTwo = ({ title }) => {
  const websiteImages = [
    { image: "/Ads/new/web-work-1.jpg", title: "IMG World" },
    { image: "/Ads/new/web-work-2.jpg", title: "Faraj Fund" },
    { image: "/Ads/new/web-work-3.jpg", title: "Sheikh Zayed Grand Mosque" },
    { image: "/Ads/new/web-work-4.jpg", title: "VAO Concept Store" },
    { image: "/Ads/new/web-work-5.jpg", title: "UAE Tyers" },
    { image: "/Ads/new/web-work-6.jpg", title: "Planet Pay" },
  ];

  const mobileImges = [
    { image: "/Ads/new/mob-work-1.jpg", title: "Bikini" },
    { image: "/Ads/new/mob-work-2.jpg", title: "Faraj Fund" },
    { image: "/Ads/new/mob-work-3.jpg", title: "Lobby 5" },
    { image: "/Ads/new/mob-work-4.jpg", title: "Watch Pro" },
    { image: "/Ads/new/mob-work-5.jpg", title: "Pocoloco" },
    { image: "/Ads/new/mob-work-6.jpg", title: "Tawla" },
  ];

  const selectedImages = title === "Website" ? websiteImages : mobileImges;
  return (
    <section>
      <div className="grid gap-y-2 md:gap-3 lg:gap-4 grid-cols-1 md:grid-cols-2 ">
        {selectedImages?.map((img, index) => {
          return (
            <div key={index}>
              <Image
                src={img?.image}
                width={800}
                height={384}
                sizes="100vw"
                alt={img?.title}
                unoptimized
                className="w-full h-auto rounded-[15px] lg:rounded-[30px] border-[#ececec]"
              />
              <p className="font-sora text-[#101763] text-sm md:text-base lg:text-xl leading-[170%] mt-2">
                {img?.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdsSectionTwo;
