import PrivacyPolicyPage from "@/page-views/PrivacyPolicy";
import generateMetadataData from "@/util/generateMetaTitle";
import generatePageScripts from "@/util/getScriptData";
import React from "react";

export async function generateMetadata() {
  return await generateMetadataData(165, `privacy-policy`, false);
}
export default async function PrivacyPolicy() {
  const pageData = await generatePageScripts(165, false);
  const {
    meta_schema,
    faqs_heading_footer,
    faqs_list_footer,
    faqs_list_footer_schema,
  } = pageData;
  return (
    <>
      {meta_schema && (
        <div
          // type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: meta_schema }}
        />
      )}
      {faqs_list_footer_schema && (
        <div dangerouslySetInnerHTML={{ __html: faqs_list_footer_schema }} />
      )}
      <PrivacyPolicyPage
        faq_title={faqs_heading_footer}
        faq_list={faqs_list_footer}
      />
    </>
  );
}
