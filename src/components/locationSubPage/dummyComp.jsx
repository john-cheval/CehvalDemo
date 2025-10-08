"use client";
import { useEffect, useState } from "react";
import $ from "jquery";
import "./locationsub.css";
import "./lp.css";
import LoadingAnimation from "@/util/LoadingAnimation";
import "slick-carousel";
import FaqSchemaAccordion from "../common/FaqSchemaAccordion";
import Script from "next/script";
function DummyComp({ page, faq_title, faq_list }) {
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [scriptsReady, setScriptsReady] = useState({
    jquery: false,
    slick: false,
  });

  useEffect(() => {
    let filePath = "/htmltemplate/" + page + ".html";

    setLoading(true);

    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        setHtmlContent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading HTML:", error);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    if (!loading && htmlContent) {
      const handleAccordionClick = (event) => {
        const clickedHeading = event.target.closest(".accordionItemHeading");

        if (!clickedHeading) return;

        const accordionItem = clickedHeading.closest(".accordionItem");
        const allItems = document.querySelectorAll(".accordionItem");

        allItems.forEach((item) => {
          if (item === accordionItem) {
            item.classList.toggle("open");
            item.classList.toggle("close");
          } else {
            item.classList.add("close");
            item.classList.remove("open");
          }
        });
      };

      const accordionWrapper = document.querySelector(".accordionWrapper");
      if (accordionWrapper) {
        accordionWrapper.addEventListener("click", handleAccordionClick);
      }

      // Cleanup function
      return () => {
        if (accordionWrapper) {
          accordionWrapper.removeEventListener("click", handleAccordionClick);
        }
      };
    }
  }, [loading, htmlContent, scriptsReady]);

  useEffect(() => {
    if (!loading) {
      const initializeSlider = () => {
        const slider1 = document.querySelector(".slick-slider-services");
        const slider2 = document.querySelector(".slick-slider-process");
        const slider3 = document.querySelector(".testimonial-sld");

        if (slider1 && !$(slider1).hasClass("slick-initialized")) {
          $(slider1)?.slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            adaptiveHeight: false,
            prevArrow:
              "<img class='a-left control-c prev slick-prev' src='https://manage.chevalme.com/wp-content/uploads/2023/07/Group-662.svg'>",
            nextArrow:
              "<img class='a-right control-c next slick-next' src='https://manage.chevalme.com/wp-content/uploads/2023/07/Group-660-1.svg'>",
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 320,
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            ],
          });
          $(".slick-slider-services .slick-slide").css("margin", "0 10px");
        }

        if (slider2 && !$(slider2).hasClass("slick-initialized")) {
          $(slider2)?.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:
              "<img class='a-left control-c prev slick-prev' src='https://manage.chevalme.com/wp-content/uploads/2023/07/iconamoon_arrow-left-2-duotone-2.svg'>",
            nextArrow:
              "<img class='a-right control-c next slick-next' src='https://manage.chevalme.com/wp-content/uploads/2023/07/iconamoon_arrow-left-2-duotone-3.svg'>",
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          });
          $(".slick-slider-process .slick-slide").css("margin", "0 10px");
        }

        if (slider3 && !$(slider2).hasClass("slick-initialized")) {
          $(slider3)?.slick({
            dots: true,
            arrow: false,
            infinite: true,
            autoplay: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          });
          $(".testimonial-sld .slick-slide").css("margin", "0 10px");
        }
      };

      initializeSlider();

      const timeout = setTimeout(initializeSlider, 500); // Fallback
      return () => clearTimeout(timeout);
    }
  }, [loading, scriptsReady, htmlContent]);

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
        onLoad={() => setScriptsReady((prev) => ({ ...prev, jquery: true }))}
      ></Script>

      <Script
        src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          setScriptsReady((prev) => ({ ...prev, slick: true }));
        }}
      ></Script>

      <script src="https://cdn.tailwindcss.com"></script>
      <link
        href="https://manage.chevalme.com/wp-content/themes/cheval-one/style.css"
        rel="stylesheet"
      ></link>

      <link
        href="https://manage.chevalme.com/wp-content/themes/cheval-one/assets/css/slick.css"
        rel="stylesheet"
      ></link>
      <link
        href="https://manage.chevalme.com/wp-content/themes/cheval-one/assets/css/owl.carousel.min.css"
        rel="stylesheet"
      ></link>
      <link
        href="https://manage.chevalme.com/wp-content/themes/cheval-one/assets/css/style_new.css"
        rel="stylesheet"
      ></link>

      {/* <link
        href="https://manage.chevalme.com/wp-content/themes/cheval-one/assets/css/lp.css"
        rel="stylesheet"
      ></link> */}
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <div
            className="pt-20 md:pt-28"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          {faq_list && faq_title && (
            <FaqSchemaAccordion
              faqs_heading_footer={faq_title}
              faqs_list_footer={faq_list}
            />
          )}
        </>
      )}
      <Script
        // strategy="afterInteractive"
        defer
        async
        src="https://manage.chevalme.com/wp-content/themes/cheval-one/assets/js/main.js"
      ></Script>
    </>
  );
}

export default DummyComp;
