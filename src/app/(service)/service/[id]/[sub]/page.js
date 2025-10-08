import generatePageScripts from "@/util/getScriptData";
import { notFound } from "next/navigation";
import React from "react";
import ServicesSubInnerPage from "./ServicesSubInnerPage";
import { fetchData } from "@/server/getHomePageData";
import generateMetadataData from "@/util/generateMetaTitle";
import { baseUrl } from "@/util/baseUrl";
import MaintenancePage from "@/components/Services/Maintenance";

export async function generateMetadata({ params }) {
  const { id, sub } = await params;
  return await generateMetadataData(sub, `service/${id}/${sub}`, true);
}

export const revalidate = 60;
const ServicesSubPage = async ({ params }) => {
  const { id, sub } = await params;

  const [data, services, clients] = await Promise.all([
    fetchData(
      `${baseUrl}/wp-json/custom/v1/full_details?slug=${sub}&meta_type=service`
    ),
    fetchData(`${baseUrl}/wp-json/custom/v1/services`),
    fetchData(`${baseUrl}/wp-json/custom/v1/all_clients`),
  ]);

  const pageData = await generatePageScripts(sub, true);
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
      {meta_schema && <div dangerouslySetInnerHTML={{ __html: meta_schema }} />}
      {faqs_list_footer_schema && (
        <div dangerouslySetInnerHTML={{ __html: faqs_list_footer_schema }} />
      )}

      {data?.layout_type === "newservicepage" ? (
        <MaintenancePage
          bannerImage={data?.image}
          mobileBannerImage={data?.mobile_banner[0]}
          content={data}
          clientsData={clients}
          services={services}
        />
      ) : (
        <ServicesSubInnerPage
          data={data}
          services={services}
          faq_title={faqs_heading_footer}
          faq_list={faqs_list_footer}
        />
      )}
    </>
  );
};

export default ServicesSubPage;
