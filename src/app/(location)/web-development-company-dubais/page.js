import DubaiPage from "@/page-views/Location/Dubai";
import generateMetadataData from "@/util/generateMetaTitle";
import generatePageScripts from "@/util/getScriptData";

// import { fetchData } from "@/server/getHomePageData";

export async function generateMetadata() {
  return await generateMetadataData(
    "web-development-company-dubai",
    "web-development-company-dubai",
    true
  );
}
export default async function Dubai() {
  const pageData = await generatePageScripts(
    "web-development-company-dubai",
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
      <DubaiPage faq_title={faqs_heading_footer} faq_list={faqs_list_footer} />
    </>
  );
}
