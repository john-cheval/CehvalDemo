"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import LoadingAnimation from "@/util/LoadingAnimation";

// Only import Section1 directly since it needs to be rendered immediately
import Section1 from "@/components/Home/Section1";
import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";

// Create lightweight placeholder components
const SectionPlaceholder = ({ height = 500, showLoader = false }) => (
  <div
    className="w-full flex items-center justify-center bg-white/10"
    style={{ height: `${height}px` }}
  >
    {showLoader && <LoadingAnimation />}
  </div>
);

// Dynamically import sections with custom loading state
const Section2 = dynamic(() => import("@/components/Home/Section2"), {
  loading: () => <SectionPlaceholder height={600} />,
  ssr: false,
});

const Section4 = dynamic(() => import("@/components/Home/Section4"), {
  loading: () => <SectionPlaceholder height={800} />,
  ssr: false,
});

const Section5 = dynamic(() => import("@/components/Home/Section5"), {
  loading: () => <SectionPlaceholder height={700} />,
  ssr: false,
});

const NewService = dynamic(() => import("@/components/Home/NewService"), {
  loading: () => <SectionPlaceholder height={700} />,
  ssr: false,
});

const Section8 = dynamic(() => import("@/components/Home/Section8"), {
  loading: () => <SectionPlaceholder height={900} />,
  ssr: false,
});

const Section9 = dynamic(() => import("@/components/Home/Section9"), {
  loading: () => <SectionPlaceholder height={700} />,
  ssr: false,
});

const Section10 = dynamic(() => import("@/components/Home/Section10"), {
  loading: () => <SectionPlaceholder height={500} />,
  ssr: false,
});

const Section11 = dynamic(() => import("@/components/Home/Section11"), {
  loading: () => <SectionPlaceholder height={600} />,
  ssr: false,
});

// Component to handle preloading and visibility
function PreloadableSection({
  component: Component,
  props,
  priority = 0,
  preloadImmediately = false,
  id,
}) {
  const [shouldRender, setShouldRender] = useState(preloadImmediately);
  const [isLoaded, setIsLoaded] = useState(false);
  const hasRendered = useRef(false);

  // Use a much larger rootMargin to start loading well before coming into view
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "1000px 0px", // Start loading when within 1000px of viewport
  });

  useEffect(() => {
    // Start loading if in view or if this is a high-priority section to preload
    if (inView && !shouldRender) {
      setShouldRender(true);
    }

    // If flagged for immediate preload, trigger loading right away
    if (preloadImmediately && !hasRendered.current) {
      hasRendered.current = true;
      setShouldRender(true);
    }

    // For high-priority sections, set a timer to load them shortly after page load
    // regardless of scroll position - stagger the loads to avoid too much work at once
    if (priority > 0 && !shouldRender && !hasRendered.current) {
      const timer = setTimeout(
        () => {
          if (!hasRendered.current) {
            hasRendered.current = true;
            setShouldRender(true);
          }
        },
        1000 + priority * 500
      ); // Stagger based on priority

      return () => clearTimeout(timer);
    }
  }, [inView, priority, preloadImmediately, shouldRender]);

  // Once component is actually loaded, update state to avoid showing placeholder
  const handleComponentLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={ref} id={id} className="section-container">
      {shouldRender ? (
        <div onLoad={handleComponentLoad}>
          <Component {...props} />
        </div>
      ) : (
        <SectionPlaceholder height={props.placeholderHeight || 700} />
      )}
    </div>
  );
}

export default function HomePage({
  homeContent,
  worksHomePage,
  services,
  gallery,
  blogsHomePage,
  googleReviews,
  clients,
  faq_title,
  faq_list,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const [preloadStarted, setPreloadStarted] = useState(false);

  // Record performance timing
  useEffect(() => {
    if (typeof window !== "undefined" && window.performance) {
      window.performance.mark("app-start");
    }
  }, []);

  // Load GSAP and its plugins on client-side only
  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadGSAP = async () => {
      try {
        // Create a non-blocking load of GSAP
        const gsapPromise = import("gsap");
        const scrollTriggerPromise = import("gsap/dist/ScrollTrigger");

        // Load in parallel
        const [gsapModule, { ScrollTrigger }] = await Promise.all([
          gsapPromise,
          scrollTriggerPromise,
        ]);

        const gsap = gsapModule.default;
        gsap.registerPlugin(ScrollTrigger);

        // Make GSAP available globally for components
        window.gsap = gsap;
        window.ScrollTrigger = ScrollTrigger;

        setGsapLoaded(true);

        // Once GSAP is loaded, start preloading other sections
        setPreloadStarted(true);

        // Mark performance timing
        if (window.performance) {
          window.performance.mark("gsap-loaded");
          window.performance.measure(
            "gsap-load-time",
            "app-start",
            "gsap-loaded"
          );
        }
      } catch (error) {
        console.error("Failed to load GSAP:", error);
      }
    };

    loadGSAP();
  }, []);

  useEffect(() => {
    if (homeContent) {
      setIsLoading(false);

      // Start preloading critical sections after a short delay
      if (!preloadStarted) {
        const timer = setTimeout(() => {
          setPreloadStarted(true);
        }, 200);

        return () => clearTimeout(timer);
      }
    }
  }, [homeContent, preloadStarted]);

  // Calculate split value for gallery section
  const split = gallery?.show_off_gallery?.length / 2 || 0;

  if (isLoading || !homeContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <>
      {/* Always render Section1 immediately - this is the critical above-the-fold content */}
      {homeContent.web_title && (
        <Section1
          title={homeContent.web_title}
          subTitle={homeContent.web_sub_title}
          linkText={homeContent.web_link_text}
          link={homeContent.web_link}
          fullVideo={homeContent.web_video}
          shortVideo={homeContent.web_video_short}
        />
      )}

      {/* First batch of high-priority sections to preload immediately after first render */}
      {homeContent.service_heading && (
        <PreloadableSection
          id="service-section"
          component={Section2}
          props={{
            title: homeContent.service_heading,
            description: homeContent.service_description,
            countdown: homeContent.service_countdown,
            placeholderHeight: 600,
          }}
          priority={1}
          preloadImmediately={preloadStarted}
        />
      )}

      {homeContent.home_section && (
        <PreloadableSection
          id="home-section"
          component={Section4}
          props={{
            cardData: homeContent.home_section,
            placeholderHeight: 800,
          }}
          priority={2}
          preloadImmediately={preloadStarted}
        />
      )}

      {/* Second batch of sections with medium priority */}
      {worksHomePage && (
        <PreloadableSection
          id="works-section"
          component={Section5}
          props={{
            data: worksHomePage,
            placeholderHeight: 700,
          }}
          priority={3}
        />
      )}

      {services && homeContent.services_heading && (
        <PreloadableSection
          id="services-section"
          component={NewService}
          props={{
            data: services,
            title: homeContent.services_heading,
            placeholderHeight: 700,
          }}
          priority={4}
        />
      )}

      {/* Lower priority sections that load only when scrolled near */}
      {gallery && (
        <PreloadableSection
          id="gallery-section"
          component={Section8}
          props={{
            data: gallery,
            split: split,
            placeholderHeight: 900,
          }}
          priority={5}
        />
      )}

      {googleReviews && (
        <PreloadableSection
          id="reviews-section"
          component={Section11}
          props={{
            data: googleReviews,
            placeholderHeight: 600,
          }}
          priority={0}
        />
      )}

      {blogsHomePage && homeContent.blog_heading && (
        <PreloadableSection
          id="blog-section"
          component={Section9}
          props={{
            data: blogsHomePage,
            title: homeContent.blog_heading,
            placeholderHeight: 700,
          }}
          priority={0}
        />
      )}

      {clients && (
        <PreloadableSection
          id="clients-section"
          component={Section10}
          props={{
            data: clients,
            placeholderHeight: 500,
          }}
          priority={0}
        />
      )}
      {faq_list && faq_title && (
        <FaqSchemaAccordion
          faqs_heading_footer={faq_title}
          faqs_list_footer={faq_list}
        />
      )}
    </>
  );
}
