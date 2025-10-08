/** @format */

import WorkInnerPage from "@/app/projects/[id]/WorkInner";
import { fetchData } from "@/server/getHomePageData";
import { baseUrl } from "@/util/baseUrl";
import generateMetadataData from "@/util/generateMetaTitle";
import generatePageScripts from "@/util/getScriptData";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `projects/${id}`, true);
}

export default async function WorkInner({ params }) {
  const parmasID = await params;
  const pageData = await generatePageScripts(parmasID?.id, true);
  const {
    meta_schema,
    faqs_heading_footer,
    faqs_list_footer,
    faqs_list_footer_schema,
  } = pageData;

  const [data2, data] = await Promise.all([
    fetchData(`${baseUrl}/wp-json/custom/v1/projects`),
    fetchData(
      `${baseUrl}/wp-json/custom/v1/projects_details?slug=${parmasID?.id}`
    ),
  ]);

  if (!data || Object.keys(data).length === 0) {
    notFound();
  }

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
      <WorkInnerPage
        innerID={parmasID}
        data2={data2}
        data={data}
        faq_title={faqs_heading_footer}
        faq_list={faqs_list_footer}
      />
    </>
  );
}
