import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import ContactForm from "@/components/Contact/NewContact/ContactForm";
import SectionFour from "@/components/ServicesInner/NewServiceInner/ServicesSub/SectionFour";
import SectionOne from "@/components/ServicesInner/NewServiceInner/ServicesSub/SectionOne";
import SectionThree from "@/components/ServicesInner/NewServiceInner/ServicesSub/SectionThree";
import SectionTwo from "@/components/ServicesInner/NewServiceInner/ServicesSub/SectionTwo";
import ServiceSubBanner from "@/components/ServicesInner/NewServiceInner/ServicesSub/ServiceSubBanner";

const ServicesSubInnerPage = ({ data, faq_title, faq_list, services }) => {
  return (
    <>
      {data?.image && (
        <ServiceSubBanner
          image={data?.image}
          heading={data?.sub_service_short_heading}
          desc={data?.sub_service_banner_small_heading}
        />
      )}

      {data?.sub_service_page_details && (
        <div className="pt-10 sm:pt-12 md:pt-16 space-y-12 bg-white ">
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
            }
          })}
        </div>
      )}

      {data?.sub_service_page_details?.map((section, index) => {
        if (section?.section_type === "contactus") {
          return (
            <div className="bg-white">
              <ContactForm
                key={index}
                title={section?.title}
                desc={section?.description}
                services={services}
              />
            </div>
          );
        }
      })}

      {faq_list && faq_title && (
        <FaqSchemaAccordion
          faqs_heading_footer={faq_title}
          faqs_list_footer={faq_list}
        />
      )}
    </>
  );
};

export default ServicesSubInnerPage;
