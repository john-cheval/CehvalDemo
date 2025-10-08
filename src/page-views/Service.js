/** @format */

const ServiceListNew = dynamic(
  () => import("@/components/Services/NewService/ServiceListNew")
);
const ServiceHeader = dynamic(
  () => import("@/components/Services/ServiceHeader")
);
import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";

import dynamic from "next/dynamic";

function ServicePage({ serviceHeader, faq_title, faq_list, list, data }) {
  return (
    <>
      <ServiceHeader data={serviceHeader} />
      <ServiceListNew data={data} services={list} />
      {faq_list && faq_title && (
        <FaqSchemaAccordion
          faqs_heading_footer={faq_title}
          faqs_list_footer={faq_list}
        />
      )}
    </>
  );
}

export default ServicePage;
