"use client";
import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from "react";

const CustomMarquee = forwardRef(({ children, speed = 50, direction = "left" }, ref) => {
  const containerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [duplicateContent, setDuplicateContent] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [currentDirection, setCurrentDirection] = useState(direction);

  // Expose methods to parent components
  useImperativeHandle(ref, () => ({
    slidePrev: () => {
      setCurrentDirection("right");
    },
    slideNext: () => {
      setCurrentDirection("left");
    },
    pause: () => {
      setIsPaused(true);
    },
    play: () => {
      setIsPaused(false);
    }
  }));

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidths = () => {
      const container = containerRef.current;
      if (!container) return;

      // Get the width of the content
      const contentWidth = container.firstChild.scrollWidth;
      const containerWidth = container.offsetWidth;

      setContentWidth(contentWidth);

      // Determine how many duplicates we need to create a continuous effect
      // We need at least 2 copies to create a seamless loop
      const duplicatesNeeded = Math.max(2, Math.ceil((containerWidth * 2) / contentWidth));
      setDuplicateContent(duplicatesNeeded);
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);

    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, [children]);

  // Calculate animation duration based on content width and speed
  // For a similar effect to the original marquee with speed 165, we use a different calculation
  const duration = contentWidth / (speed * 10);

  // Determine animation direction
  const animationDirection = currentDirection === "right" ? "normal" : "reverse";
  const animationPlayState = isPaused ? "paused" : "running";

  return (
    <div className="custom-marquee-container overflow-hidden w-full">
      <div
        ref={containerRef}
        className="custom-marquee-content flex items-center"
        style={{
          animationName: 'marqueeAnimation',
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDirection: animationDirection,
          animationPlayState: animationPlayState,
          whiteSpace: "nowrap",
        }}
      >
        {/* Original content */}
        <div className="flex items-center">{children}</div>

        {/* Duplicated content for seamless looping */}
        {Array(duplicateContent).fill(0).map((_, index) => (
          <div key={`duplicate-${index}`} className="flex items-center">
            {children}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marqueeAnimation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${contentWidth}px);
          }
        }
      `}</style>
    </div>
  );
});

CustomMarquee.displayName = "CustomMarquee";

export default CustomMarquee;