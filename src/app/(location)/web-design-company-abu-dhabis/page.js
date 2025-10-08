/** @format */

import AbuDhabiPage from "@/page-views/Location/Abudhabi";
// import { fetchData } from "@/server/getHomePageData";
import generateMetadataData from "@/util/generateMetaTitle";
import generatePageScripts from "@/util/getScriptData";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-design-company-abu-dhabi",
    "web-design-company-abu-dhabi",
    true
  );
}
export default async function AbuDhabi() {
  const pageData = await generatePageScripts(
    "web-design-company-abu-dhabi",
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
      <AbuDhabiPage
        faq_title={faqs_heading_footer}
        faq_list={faqs_list_footer}
      />
    </>
  );
}
