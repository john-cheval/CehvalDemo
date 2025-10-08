/** @format */

import ServicePage from "@/page-views/Service";
import { fetchData } from "@/server/getHomePageData";
import { baseUrl } from "@/util/baseUrl";
import generateMetadataData from "@/util/generateMetaTitle";
import generatePageScripts from "@/util/getScriptData";

export async function generateMetadata() {
  return await generateMetadataData(98, `services`, false);
}

export const revalidate = 3600;

export default async function Services() {
  const pageData = await generatePageScripts(98, false);
  const {
    meta_schema,
    faqs_heading_footer,
    faqs_list_footer,
    faqs_list_footer_schema,
  } = pageData;

  const [serviceHeader, servicesList, services] = await Promise.all([
    fetchData(`${baseUrl}/wp-json/custom/v1/full_details?ID=98`),
    fetchData(` ${baseUrl}/wp-json/custom/v1/services_by_category`),
    fetchData(`${baseUrl}/wp-json/custom/v1/services`),
  ]);

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
      <ServicePage
        serviceHeader={serviceHeader}
        faq_title={faqs_heading_footer}
        faq_list={faqs_list_footer}
        list={servicesList}
        data={services}
      />
    </>
  );
}
