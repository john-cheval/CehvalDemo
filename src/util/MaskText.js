/** @format */
"use client";
import { useEffect, useRef, useState } from "react";
import gsap, { Expo } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
export function MaskText({ text, styling, height, marginB }) {
  const body = useRef(null);
  const splittext = useRef();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    document.fonts.ready.then((fontFaceSet) => {
      setReady(true);
    });
  });
  useGSAP(() => {
    if (ready) {
      // Any operation that needs to be done only after all used fonts
      // have finished loading can go here.
      const splittype = new SplitType(splittext.current, {
        types: "words",
        lineClass: "overflow-hidden inline-block ",
        tagName: "span",
      });
      let tl = gsap
        .timeline({
          paused: true,
        })
        .fromTo(
          splittype.words,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            duration: 0.5,
            opacity: 1,
            // onComplete: splitRevert,
            ease: Expo,
            stagger: {
              amount: 0.2,
            },
          }
        );
      // function splitRevert() {
      //   splittype.revert();
      // }
      ScrollTrigger.create({
        trigger: splittext.current,
        start: "top 95%",
        // markers: true,
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      });
    }
  }, [ready]);
  //   const animation = {
  //     initial: { y: "100%" },
  //     enter: (i) => ({
  //       y: "0",
  //       transition: {
  //         duration: 0.75,
  //         ease: [0.33, 1, 0.68, 1],
  //         delay: 0.075 * i,
  //       },
  //     }),
  //   };
  return (
    <div
      ref={splittext}
      id="splittype"
      className={styling}
      style={{
        lineHeight: height?.lineHeight || "normal",
        fontKerning: "none",
        willChange: "transform",
        marginBottom: marginB?.marginBottom,
      }}
    >
      {text}
    </div>
  );
}
