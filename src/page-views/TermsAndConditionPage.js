import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import dynamic from "next/dynamic";
import React from "react";
const PrivacyPolicyContent = dynamic(
  () => import("@/components/PrivacyPolicy/PrivacyPolicyContent")
);

const TermsAndConditionPage = ({ faq_title, faq_list, privacyData }) => {
  return (
    <>
      <PrivacyPolicyContent
        content={privacyData?.post_content}
        title={privacyData?.post_title}
      />
      {faq_list && faq_title && (
        <FaqSchemaAccordion
          faqs_heading_footer={faq_title}
          faqs_list_footer={faq_list}
        />
      )}
    </>
  );
};

export default TermsAndConditionPage;
