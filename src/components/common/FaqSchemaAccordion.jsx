import React from "react";
import FaqAccordion from "./FaqAccordion";

const FaqSchemaAccordion = ({ faqs_heading_footer, faqs_list_footer }) => {
  return (
    <>
      <FaqAccordion title={faqs_heading_footer} faqList={faqs_list_footer} />
    </>
  );
};

export default FaqSchemaAccordion;
