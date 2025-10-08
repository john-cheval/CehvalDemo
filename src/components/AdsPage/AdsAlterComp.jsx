"use client";
import { useEffect, useState } from "react";
import React from "react";
import Section11 from "../Home/Section11";
import ContactForm from "../Contact/NewContact/ContactForm";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swiper from "swiper";
import "./ads.css";
const AdsAlterComp = ({
  page,
  faq_title,
  faq_list,
  review,
  services,
  clientData,
}) => {
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [swiperInitialized, setSwiperInitialized] = useState(false);

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

    // if (page) {
    //   setHtmlContent(page);
    //   setLoading(false);
    // }
  }, [page]);

  useEffect(() => {
    if (!htmlContent) return;
    const clientImageContainer = document.querySelector(".marquee__content");

    if (!clientImageContainer || !clientData) return;

    const duplicatedClients = [...clientData, ...clientData];

    duplicatedClients?.forEach((img) => {
      const imageEl = document.createElement("img");
      imageEl.src = img?.image;
      imageEl.alt = img?.title || "marquee-img";
      imageEl.classList.add("marquee-img");
      clientImageContainer.appendChild(imageEl);
    });
  }, [htmlContent, swiperInitialized]);

  useEffect(() => {
    if (!htmlContent) return;

    const initSwipers = () => {
      const mainSwiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
      });

      const slides = document.querySelectorAll(".mySwiper .swiper-slide");

      slides.forEach((slide) => {
        slide.addEventListener("click", function () {
          slides.forEach((s) => {
            s.classList.remove("active-slide");
            const heading = s.querySelector(".vertical");
            if (heading) {
              heading.style.opacity = "1";
              heading.style.visibility = "visible";
            }
          });

          this.classList.add("active-slide");

          const activeHeading = this.querySelector(".vertical");
          if (activeHeading) {
            activeHeading.style.opacity = "0";
            activeHeading.style.visibility = "hidden";
          }

          const innerSwiperContainer = this.querySelector(".my-swiper-2");
          if (innerSwiperContainer && !innerSwiperContainer.swiper) {
            new Swiper(innerSwiperContainer, {
              slidesPerView: 1,
              modules: [Navigation],
              spaceBetween: 10,
              loop: true,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            });
          }

          mainSwiper.update();
        });
      });
    };

    const timer = setTimeout(initSwipers, 100);
    return () => clearTimeout(timer);
  }, [htmlContent]);
  return (
    <>
      {" "}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      {htmlContent && (
        <>
          <Section11 data={review} title={"Testimonials"} />
          <ContactForm
            title={
              "Let’s design something bold, brilliant, and built for results."
            }
            desc="Book your free consultation today"
            services={services}
          />
          {faq_list && faq_title && (
            <FaqSchemaAccordion
              faqs_heading_footer={faq_title}
              faqs_list_footer={faq_list}
            />
          )}
        </>
      )}
    </>
  );
};

export default AdsAlterComp;
