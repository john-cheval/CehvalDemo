/** @format */

import generateMetadataData from "@/util/generateMetaTitle";
import ServicesInnerPage from "./ServiceInnerPage";
import { fetchData } from "@/server/getHomePageData";
import { notFound } from "next/navigation";
import generatePageScripts from "@/util/getScriptData";
import { baseUrl } from "@/util/baseUrl";
import ServiceInnerPageAI from "./ServiceInnerPageAI";

export async function generateMetadata({ params }) {
  const id = (await params).id;
  return await generateMetadataData(id, `service/${id}`, true);
}

export default async function ServicesInner({ params }) {
  const paramsId = await params;

  const [data, services, clients, googleReviews] = await Promise.all([
    fetchData(
      `${baseUrl}/wp-json/custom/v1/full_details?slug=${paramsId.id}&meta_type=service`
    ),
    fetchData(`${baseUrl}/wp-json/custom/v1/services`),
    fetchData(`${baseUrl}/wp-json/custom/v1/all_clients`),
    fetchData(`${baseUrl}/wp-json/custom/v1/google_reviews`),
  ]);

  const pageData = await generatePageScripts(paramsId?.id, true);
  const {
    meta_schema,
    faqs_heading_footer,
    faqs_list_footer,
    faqs_list_footer_schema,
  } = pageData;

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

      {data?.layout_type === "adspage" ? (
        <ServiceInnerPageAI
          pageData={data}
          clientsData={clients}
          servicesData={services}
          reviews={googleReviews}
          faq_title={faqs_heading_footer}
          faq_list={faqs_list_footer}
        />
      ) : (
        <ServicesInnerPage
          data={data}
          faq_title={faqs_heading_footer}
          faq_list={faqs_list_footer}
          services={services}
        />
      )}
    </>
  );
}
