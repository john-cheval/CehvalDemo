/** @format */

import RiyadhPage from "@/page-views/Location/Riyadh";
// import { fetchData } from "@/server/getHomePageData";
import generateMetadataData from "@/util/generateMetaTitle";
import generatePageScripts from "@/util/getScriptData";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-development-company-riyadh",
    "web-development-company-riyadh",
    true
  );
}
export default async function Riyadh() {
  const pageData = await generatePageScripts(
    "web-development-company-riyadh",
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
      <RiyadhPage faq_title={faqs_heading_footer} faq_list={faqs_list_footer} />
    </>
  );
}
