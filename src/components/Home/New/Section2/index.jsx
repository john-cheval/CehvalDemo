"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useMemo, useRef } from "react";
import gsap from "gsap";

const HomeSectionTwo = ({ clientsData, serviceInner = false }) => {
  const elements = [...clientsData, ...clientsData];
  let timeline = useRef();
  const movingContainer = useRef(null);
  useGSAP(() => {
    timeline.current?.kill();

    gsap.set(movingContainer.current, {
      xPercent: 0,
    });

    timeline.current = gsap.timeline({
      repeat: -2,
      defaults: { ease: "none" },
    });

    timeline.current.to(movingContainer.current, {
      xPercent: -50,
      duration: 50,
    });
  }, []);

  const list = useMemo(() => (
    <div className="flex w-fit  overflow-hidden">
      {elements?.map((client, index) => {
        return (
          <div
            key={index}
            className={`flex items-center justify-center min-w-[240px] 5xl:min-w-[300px] shrink-0`}
          >
            <Image
              src={client?.image}
              alt={`${client?.title} || image-${index + 1}`}
              width={250}
              height={150}
              sizes="100vw"
              // unoptimized={process.env.NEXT_PUBLIC_IMAGE_// unoptimized === "true"}
              className="w-full h-auto object-cover max-w-[200px] md:max-w-[200px] 5xl:max-w-[350px]"
            />
          </div>
        );
      })}
    </div>
  ));
  return (
    <div
      className={`${serviceInner ? "pt-5 md:pt-10 " : "pb-10 md:pb-0 md:pt-12 lg:pt-20 lg:pb-10 xl:pb-20- "}  overflow-hidden`}
    >
      <div ref={movingContainer} className="flex w-fit">
        {list}
        {/* {list} */}
      </div>
    </div>
  );
};

export default HomeSectionTwo;
