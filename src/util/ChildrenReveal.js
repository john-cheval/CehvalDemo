/** @format */
"use client";
import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
function ChildrenReveal({ children, styling, x, y, start }) {
  const childrenReveal = useRef(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (document.readyState === "complete") {
      setReady(true);
    }
  });
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (ready) {
      let tl = gsap.timeline({ paused: true }).fromTo(
        childrenReveal.current.children,
        {
          y: y,
          x: x,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          duration: 0.5,
          opacity: 1,
          // ease: [0.33, 1, 0.68, 1],
          stagger: {
            amount: 0.4,
          },
        }
      );

      ScrollTrigger.create({
        trigger: childrenReveal.current,
        start: start ? start : "top 90%",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      });
    }
  }, [ready]);
  return (
    <div className={styling} ref={childrenReveal}>
      {children}
    </div>
  );
}

export default ChildrenReveal;
