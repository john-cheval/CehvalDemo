"use client";
import LoadingAnimation from "@/util/LoadingAnimation";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { use, useEffect, useState } from "react";
import FaqSchemaAccordion from "../common/FaqSchemaAccordion";
import { baseUrl } from "@/util/baseUrl";

const SerivcesComp = ({ page, faq_title, faq_list }) => {
  const routers = useRouter();

  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  // useEffect(() => {
  //   let filePath = "/htmltemplate/" + page + ".html";

  //   setLoading(true);

  //   fetch(filePath)
  //     .then((response) => response.text())
  //     .then((data) => {
  //       setHtmlContent(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //     });
  // }, [page]);

  useEffect(() => {
    let filePath = "/htmltemplate/" + page + ".html";

    // Force minimum loading time (e.g., 500ms)
    const loadStartTime = Date.now();

    setLoading(true);

    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        const loadTime = Date.now() - loadStartTime;
        const minLoadTime = 500;
        if (loadTime < minLoadTime) {
          setTimeout(() => {
            setHtmlContent(data);
            setLoading(false);
          }, minLoadTime - loadTime);
        } else {
          setHtmlContent(data);
          setLoading(false);
        }
      })
      .catch((error) => {
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
  }, [loading, htmlContent, swiperLoaded]);

  useEffect(() => {
    if (!loading && htmlContent && swiperLoaded) {
      const testimonial = document.querySelector(".testimonial-center-slider");

      if (testimonial && window.Swiper) {
        new window.Swiper(testimonial, {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          },
        });
      }
    }
  }, [loading, htmlContent, swiperLoaded]);

  useEffect(() => {
    if (!loading && htmlContent) {
      // Handle form submission
      const forms = document.querySelectorAll("form.wpcf7-form");
      forms.forEach((form) => {
        form.addEventListener("submit", handleFormSubmit);
      });

      return () => {
        forms.forEach((form) => {
          form.removeEventListener("submit", handleFormSubmit);
        });
      };
    }
  }, [loading, htmlContent, swiperLoaded]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    formData.delete("cf7sr-recaptcha");

    try {
      const submitButton = form.querySelector(".wpcf7-submit");
      const spinner = form.querySelector(".wpcf7-spinner");
      if (submitButton) submitButton.disabled = true;
      if (spinner) spinner.style.visibility = "visible";

      const response = await fetch(
        `${baseUrl}/wp-json/contact-form-7/v1/contact-forms/844/feedback`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // const output = form.querySelector(".wpcf7-response-output");
        // if (output) {
        //   output.textContent = "Thank you for your message!";
        //   output.style.display = "block";
        // }
        window.scrollTo(0, 0);
        routers.push("/thank-you");
        routers.refresh();

        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      const output = form.querySelector(".wpcf7-response-output");
      if (output) {
        output.textContent =
          "There was an error submitting your form. Please try again.";
        output.style.display = "block";
      }
    } finally {
      const submitButton = form.querySelector(".wpcf7-submit");
      const spinner = form.querySelector(".wpcf7-spinner");
      if (submitButton) submitButton.disabled = false;
      if (spinner) spinner.style.visibility = "hidden";
    }
  };

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          setSwiperLoaded(true);
        }}
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />
      <script src="https://manage.chevalme.com/wp-content/themes/cheval-one/assets/js/jquery.min.js"></script>
      <script src="https://manage.chevalme.com/wp-content/themes/cheval-one/assets/js/slick.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      <script src="https://manage.chevalme.com/wp-content/themes/cheval-one/assets/js/lp.js"></script>

      <link
        href="https://manage.chevalme.com/wp-content/themes/cheval-one/style.css"
        rel="stylesheet"
      ></link>
      <link
        href="https://manage.chevalme.com/wp-content/themes/cheval-one/assets/landing-page/css/new-landing.css"
        rel="stylesheet"
      ></link>
      <link
        href="https://manage.chevalme.com/wp-content/themes/cheval-one/assets/css/lp.css"
        rel="stylesheet"
      ></link>
      <link
        href="https://manage.chevalme.com/wp-content/themes/cheval-one/assets/css/style_new.css"
        rel="stylesheet"
      ></link>
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
      <script
        defer
        async
        src="https://manage.chevalme.com/wp-content/themes/cheval-one/assets/js/main.js"
      ></script>
    </>
  );
};

export default SerivcesComp;
