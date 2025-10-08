/** @format */

import React from "react";
import ServiceInnerSwipper from "@/components/ServicesInner/NewServiceInner/ServiceInnerSwipper";
import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import ServiceSectionTwo from "@/components/ServicesInner/NewServiceInner/ServiceSectionTwo";
import ServiceInnerContent from "@/components/ServicesInner/NewServiceInner/ServiceInnerContent";
import ServiceAccordion from "@/components/ServicesInner/NewServiceInner/ServiceAccordion";
import ServiceInnerTechStack from "@/components/ServicesInner/NewServiceInner/ServiceInnerTechStack";
import ContactForm from "@/components/Contact/NewContact/ContactForm";

function ServicesInnerPage({ data, faq_title, faq_list, services }) {
  return (
    <>
      {data?.services_slider && (
        <ServiceInnerSwipper slides={data?.services_slider} />
      )}

      {data?.small_sub_heading && (
        <ServiceSectionTwo
          title={data?.small_sub_heading}
          description={data?.short_description}
          heading={data?.streamline_heading}
          fullDescription={data?.streamline_left_area}
        />
      )}

      {data?.service_list && (
        <ServiceInnerContent
          services={data?.service_list}
          serviceHeading={data?.web_development_heading}
        />
      )}

      {data?.web_development_process_list && (
        <ServiceAccordion
          title={data?.web_development_process_heading}
          image={data?.web_development_process_image}
          accoridion={data?.web_development_process_list}
        />
      )}

      {data?.web_development_technology_list && (
        <ServiceInnerTechStack
          title={data?.web_development_technology_heading}
          stacks={data?.web_development_technology_list}
        />
      )}

      {/* {data?.image && (
        <ServiceSubBanner
          image={data?.image}
          heading={data?.sub_service_short_heading}
          desc={data?.sub_service_banner_small_heading}
        />
      )} */}

      {/* {data?.sub_service_page_details && (
        <div className="py-10 sm:py-12 md:py-16 space-y-12 bg-white ">
          {data?.sub_service_page_details?.map((section, index) => {
            switch (section?.section_type) {
              case "listwithrightdesc":
                return <SectionOne key={index} section={section} />;

              case "listwithleftdesc":
                return (
                  <SectionTwo key={index} section={section} split={false} />
                );

              case "listwithleftdescwithtoggle":
                return <SectionThree key={index} section={section} />;

              case "listwithleftdescfive":
                return (
                  <SectionTwo key={index} section={section} split={true} />
                );

              case "listwithrightdescfive":
                return (
                  <SectionTwo key={index} section={section} split={true} />
                );

              case "listwithleftdescwithnumber":
                return (
                  <SectionFour key={index} section={section} split={true} />
                );
              default:
                return null;

              // return <p>Hello</p>;
            }
          })}
        </div>
      )} */}

      <div
        className={`grid ${data?.form_area_html ? "grid-cols-12" : "grid-cols-1"}  gap-x-5 bg-white`}
      >
        <div className="col-span-12 lg:col-span-6">
          <ContactForm
            title="We are happy to help you"
            desc="Let us know your requirements and we’ll get back to you as soon as
            possible."
            services={services}
            isForm={data?.form_area_html ? true : false}
          />
        </div>

        {data?.form_area_html && (
          <div
            className={`col-span-12 lg:col-span-6 wrapper-padding ${data?.form_area_html ? " lg:pt-24 pb-12" : "pt-0"}`}
          >
            <div
              className="locationListService"
              dangerouslySetInnerHTML={{ __html: data?.form_area_html }}
            />
          </div>
        )}
      </div>

      {faq_list && faq_title && (
        <FaqSchemaAccordion
          faqs_heading_footer={faq_title}
          faqs_list_footer={faq_list}
        />
      )}
    </>
  );
}

export default ServicesInnerPage;
