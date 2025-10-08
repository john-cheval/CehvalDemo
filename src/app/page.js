import generateMetadataData from "@/util/generateMetaTitle";
import HomePage from "../page-views/Home";
// import { fetchData } from "@/server/getHomePageData";
import generatePageScripts from "@/util/getScriptData";
import { fetchWithFallback } from "@/util/fetchWithCallback";
import { baseUrl } from "@/util/baseUrl";

export async function generateMetadata() {
  return await generateMetadataData(8, "", false);
}

export default async function Home() {
  const pageData = await generatePageScripts(8, "", false);

  const {
    meta_schema,
    faqs_heading_footer,
    faqs_list_footer,
    faqs_list_footer_schema,
  } = pageData;

  try {
    const [
      homeContent,
      worksHomePage,
      services,
      gallery,
      blogsHomePage,
      googleReviews,
      clients,
    ] = await Promise.all([
      fetchWithFallback(`${baseUrl}/wp-json/custom/v1/homepage_details?ID=8`),
      fetchWithFallback(`${baseUrl}/wp-json/custom/v1/homeprojects`),
      fetchWithFallback(`${baseUrl}/wp-json/custom/v1/services`),
      fetchWithFallback(`${baseUrl}/wp-json/custom/v1/full_details?ID=8`),
      fetchWithFallback(`${baseUrl}/wp-json/wp/v2/posts?_embed`),
      fetchWithFallback(`${baseUrl}/wp-json/custom/v1/google_reviews`),
      fetchWithFallback(` ${baseUrl}/wp-json/custom/v1/all_clients`),
    ]);

    return (
      <>
        {meta_schema && (
          <div
            // type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: meta_schema }}
          />
        )}

        {/* {metaSchema && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: metaSchema }}
  />
)} */}

        {faqs_list_footer_schema && (
          <div dangerouslySetInnerHTML={{ __html: faqs_list_footer_schema }} />
        )}

        <HomePage
          homeContent={homeContent}
          worksHomePage={worksHomePage}
          services={services}
          gallery={gallery}
          blogsHomePage={blogsHomePage}
          googleReviews={googleReviews}
          clients={clients}
          faq_title={faqs_heading_footer}
          faq_list={faqs_list_footer}
        />
      </>
    );
  } catch (error) {
    return <div>Error loading page content. Please try again later.</div>;
  }
}
