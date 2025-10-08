/** @format */

import SaudiArabiaPage from "@/page-views/Location/SaudiArabia";
import generateMetadataData from "@/util/generateMetaTitle";
import generatePageScripts from "@/util/getScriptData";

// import { fetchData } from "@/server/getHomePageData";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-design-company-saudi-arabia",
    "web-design-company-saudi-arabia",
    true
  );
}
export default async function SaudiArabia() {
  const pageData = await generatePageScripts(
    "web-design-company-saudi-arabia",
    true
  );
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
      <SaudiArabiaPage
        faq_title={faqs_heading_footer}
        faq_list={faqs_list_footer}
      />
    </>
  );
}
