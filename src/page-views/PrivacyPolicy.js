import FaqSchemaAccordion from "@/components/common/FaqSchemaAccordion";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";
import { fetchData } from "@/server/getHomePageData";
import { baseUrl } from "@/util/baseUrl";
import React from "react";

const PrivacyPolicyPage = async ({ faq_title, faq_list }) => {
  const privacyData = await fetchData(
    `${baseUrl}/wp-json/custom/v1/full_details?ID=165`
  );

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

export default PrivacyPolicyPage;
