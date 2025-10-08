/** @format */
import generateMetadataData from "@/util/generateMetaTitle";
import AboutPage from "../../page-views/About";
import { fetchData } from "@/server/getHomePageData";
import generatePageScripts from "@/util/getScriptData";
import { baseUrl } from "@/util/baseUrl";

export async function generateMetadata() {
  return await generateMetadataData(100, "about", false);
}

export async function fetchWithFallback(url) {
  try {
    return await fetchData(url);
  } catch (error) {
    console.error(`Failed to fetch data from ${url}:`, error);
    return null;
  }
}

export default async function About() {
  try {
    const [aboutData] = await Promise.all([
      fetchWithFallback(`${baseUrl}/wp-json/custom/v1/full_details?ID=100`),
    ]);

    const pageData = await generatePageScripts(100, false);
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
        <AboutPage
          aboutData={aboutData}
          faq_title={faqs_heading_footer}
          faq_list={faqs_list_footer}
        />
      </>
    );
  } catch (error) {
    return <div>Error loading page content. Please try again later.</div>;
  }
}
