"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import contactHeader from "../../../../public/Contact/header/headerBG.svg";
import H from "../../../../public/Contact/header/h.svg";
import E from "../../../../public/Contact/header/e.svg";
import firstL from "../../../../public/Contact/header/1L.svg";
import secondL from "../../../../public/Contact/header/2L.svg";
import O from "../../../../public/Contact/header/o.svg";
import ex from "../../../../public/Contact/header/0.svg";

const ContactHeader = () => {
  const letterImages = [H, E, firstL, secondL, O, ex];
  const lettersRef = useRef([]);

  useEffect(() => {
    const letterWrappers = lettersRef.current;

    gsap.set(letterWrappers, {
      opacity: 0,
      y: 100,
    });

    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      letterWrappers,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      }
    ).to(letterWrappers, {
      opacity: 0,
      y: -100,
      stagger: 0.1,
      duration: 1,
      ease: "power4.in",
      delay: 0.5,
    });
  }, []);

  return (
    <div className="relative w-screen pt-28 sm:pt-36 md:pt-40  lg:pt-[12rem]  overflow-hidden mt-7-- contact-header">
      <Image
        src={contactHeader}
        alt="Contact Header"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="wrapper-padding w-full flex items-center justify-center mx-auto h-full z-10">
        <div className="relative flex gap-2 h-auto items-baseline">
          {letterImages?.map((imgSrc, index) => (
            <div
              key={index}
              ref={(el) => (lettersRef.current[index] = el)}
              className="letter-image-wrapper"
              style={{
                opacity: 0,
              }}
            >
              <Image
                src={imgSrc}
                alt={`letter-${index}`}
                className="object-contain w-auto"
                height={100}
                width={100}
                style={{
                  height: `${index === 1 || index === 4 ? "200px" : "200px"}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
