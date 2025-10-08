/** @format */

import DammamPage from "@/page-views/Location/Dammam";
import generateMetadataData from "@/util/generateMetaTitle";
import generatePageScripts from "@/util/getScriptData";

// import { fetchData } from "@/server/getHomePageData";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-development-company-dammam",
    "web-development-company-dammam",
    true
  );
}

export default async function Dammam() {
  const pageData = await generatePageScripts(
    "web-development-company-dammam",
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
      <DammamPage faq_title={faqs_heading_footer} faq_list={faqs_list_footer} />
    </>
  );
}
