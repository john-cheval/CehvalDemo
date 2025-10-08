import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import Section11 from "@/components/Home/Section11";
import Section9 from "@/components/Home/Section9";
import LocationContact from "@/components/Location/Common/LocationContact";
import Section1 from "@/components/locationSubPage/Section1";
import LocationServicesLoc from "@/components/locationSubPage/ServicesLoc";

import React from "react";

const LocationInnerPageAlter = ({
  pageData,
  faq_title,
  faq_list,
  blogsHomePage,

  review,
}) => {
  return (
    <>
      <Section1 data={pageData} />
      <LocationContact
        title={pageData?.contact_form_heading}
        desc={pageData?.contact_form_description}
      />

      <Section11
        data={review}
        title={"Our Success Stories"}
        isLocation={true}
      />

      {pageData?.other_services_list && (
        <LocationServicesLoc
          service={pageData?.other_services_list}
          heading={pageData?.other_services_heading}
        />
      )}

      <Section9 data={blogsHomePage} title={"Insights and Ideas"} />
      {faq_list && faq_title && (
        <FaqSchemaAccordion
          faqs_heading_footer={faq_title}
          faqs_list_footer={faq_list}
        />
      )}
    </>
  );
};

export default LocationInnerPageAlter;
