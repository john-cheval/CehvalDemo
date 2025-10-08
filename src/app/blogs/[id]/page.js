/** @format */

import generateMetadataData from "@/util/generateMetaTitle";
import BlogsInnerPage from "../../../page-views/BlogsInnerPage";

// import { fetchData } from "@/server/getHomePageData";
import generatePageScripts from "@/util/getScriptData";
export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `blogs/${id}`, true);
}

export default async function BlogsInner({ params }) {
  const dataID = await params;
  const pageData = await generatePageScripts(dataID?.id, true);
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
      <BlogsInnerPage
        id={dataID?.id}
        faq_title={faqs_heading_footer}
        faq_list={faqs_list_footer}
      />
    </>
  );
}
