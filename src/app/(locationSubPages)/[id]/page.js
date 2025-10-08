import { notFound } from "next/navigation";
import generateMetadataData from "@/util/generateMetaTitle";
import generatePageScripts from "@/util/getScriptData";
import LocalInnerPage from "./LocalInnerPage";
import LocationInnerPageAlter from "./LocationInnerPageAlter";
import AdsPage from "./AdsPage";
import { fetchData } from "@/server/getHomePageData";
import AdsAlterComp from "@/components/AdsPage/AdsAlterComp";
import { baseUrl } from "@/util/baseUrl";

async function fetchDatas(id) {
  const res = await fetch(
    `${baseUrl}/wp-json/custom/v1/full_details?slug=${id}&meta_type=page`
  );
  if (!res.ok) return undefined;
  return res.json();
}

export async function generateMetadata({ params }) {
  const id = (await params).id;

  return await generateMetadataData(id, id, true);
}
const LocationSubPage = async ({ params }) => {
  const data = await fetchDatas((await params).id);

  const [clients, googleReviews, services, blogData] = await Promise.all([
    fetchData(`${baseUrl}/wp-json/custom/v1/all_clients`),
    fetchData(`  ${baseUrl}/wp-json/custom/v1/google_reviews`),
    fetchData(`${baseUrl}/wp-json/custom/v1/services`),
    fetchData(`${baseUrl}/wp-json/wp/v2/posts?_embed`),
  ]);

  const pageDatas = await generatePageScripts((await params).id, true);
  const {
    meta_schema,
    faqs_heading_footer,
    faqs_list_footer,
    faqs_list_footer_schema,
  } = pageDatas;

  if (!data) {
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

      {data?.page_template_name === "ads-digital-marketing" ? (
        <AdsPage
          pageData={data}
          faq_title={faqs_heading_footer}
          faq_list={faqs_list_footer}
          clientsData={clients}
          reviews={googleReviews}
          servicesData={services}
        />
      ) : data?.page_template_name === "seo-services-locations" ? (
        <LocationInnerPageAlter
          pageData={data}
          faq_title={faqs_heading_footer}
          faq_list={faqs_list_footer}
          blogsHomePage={blogData}
          review={googleReviews}
        />
      ) : data?.page_template_name === "ads-statichtml-marketing" ? (
        <AdsAlterComp
          page={data?.page_template_name}
          // page={data?.post_content}
          faq_title={faqs_heading_footer}
          faq_list={faqs_list_footer}
          review={googleReviews}
          services={services}
          clientData={clients}
        />
      ) : (
        <LocalInnerPage
          pageData={data?.page_template_name}
          faq_title={faqs_heading_footer}
          faq_list={faqs_list_footer}
        />
      )}
    </>
  );
};

export default LocationSubPage;
