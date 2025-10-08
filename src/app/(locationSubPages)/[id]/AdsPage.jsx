import OurProcessSection from "@/components/AdsPage/OurProcessSection";
import PortfolioSection from "@/components/AdsPage/PortfolioSection";
import SectionClients from "@/components/AdsPage/SectionClients";
import SectionHero from "@/components/AdsPage/SectionHero";
import ServicesSection from "@/components/AdsPage/ServicesSection";
import WhyChooseUsSection from "@/components/AdsPage/WhyChooseUsSection";
import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import ContactForm from "@/components/Contact/NewContact/ContactForm";
import Section11 from "@/components/Home/Section11";
import SectionFour from "@/components/ServicesInner/NewServiceInner/ServicesSub/SectionFour";
import SectionOne from "@/components/ServicesInner/NewServiceInner/ServicesSub/SectionOne";
import SectionThree from "@/components/ServicesInner/NewServiceInner/ServicesSub/SectionThree";
import SectionTwo from "@/components/ServicesInner/NewServiceInner/ServicesSub/SectionTwo";
import React from "react";

const AdsPage = ({
  faq_title,
  faq_list,
  pageData,
  clientsData,
  reviews,
  servicesData,
}) => {
  return (
    <>
      <SectionHero
        title={pageData?.sub_heading}
        desc={pageData?.short_description}
        bannerImg={pageData?.banner_image}
        bannerVideo={pageData?.banner_video}
        bannerList={pageData?.banner_list_option}
      />

      <div className="bg-white">
        <SectionClients clients={clientsData} />
      </div>

      {pageData?.section_for_landing_marketing?.some((section) =>
        [
          "listwithrightdesc",
          "listwithleftdesc",
          "listwithleftdescwithtoggle",
          "listwithleftdescfive",
          "listwithrightdescfive",
          "listwithleftdescwithnumber",
        ].includes(section?.section_type)
      ) && (
        <div className="bg-white py-10 sm:py-12 md:py-16 space-y-12">
          {pageData.section_for_landing_marketing.map((section, index) => {
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
            }
          })}
        </div>
      )}

      {pageData?.section_for_landing_marketing && (
        <div className="bg-white">
          {pageData?.section_for_landing_marketing?.map((section, index) => {
            switch (section?.section_type) {
              case "ourservices":
                return <ServicesSection key={index} section={section} />;

              case "portfolio_highlights_layout":
                return <PortfolioSection key={index} section={section} />;

              case "why_choose":
                return <WhyChooseUsSection key={index} section={section} />;

              case "our_process":
                return <OurProcessSection key={index} section={section} />;

              case "testimonials":
                return (
                  <Section11
                    key={index}
                    data={reviews}
                    title={section?.title}
                  />
                );

              case "contactus":
                return (
                  <ContactForm
                    key={index}
                    title={section?.title}
                    desc={section?.description}
                    services={servicesData}
                  />
                );

              default:
                return null;
            }
          })}
        </div>
      )}

      {faq_list && faq_title && (
        <FaqSchemaAccordion
          faqs_heading_footer={faq_title}
          faqs_list_footer={faq_list}
        />
      )}
    </>
  );
};

export default AdsPage;
