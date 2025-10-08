import React from "react";
import TermsAndConditionPage from "@/page-views/TermsAndConditionPage";
import generateMetadataData from "@/util/generateMetaTitle";
import generatePageScripts from "@/util/getScriptData";
import { fetchData } from "@/server/getHomePageData";
import { baseUrl } from "@/util/baseUrl";

export async function generateMetadata() {
  return await generateMetadataData(167, `terms-conditions`, false);
}

export default async function TermsAndCondtions() {
  const pageData = await generatePageScripts(167, false);
  const {
    meta_schema,
    faqs_heading_footer,
    faqs_list_footer,
    faqs_list_footer_schema,
  } = pageData;

  const data = await fetchData(
    `${baseUrl}/wp-json/custom/v1/full_details?ID=167`
  );
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
      <TermsAndConditionPage
        faq_title={faqs_heading_footer}
        faq_list={faqs_list_footer}
        privacyData={data}
      />
    </>
  );
}
