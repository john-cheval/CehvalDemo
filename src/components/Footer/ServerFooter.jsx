// components/ServerFooter.js
import { fetchData } from "@/server/getHomePageData";
import DynamicNewFooter from "./NewFooter";
import { baseUrl } from "@/util/baseUrl";

export default async function ServerFooter() {
  // Fetch footer data on the server
  const footer = await fetchData(`${baseUrl}/wp-json/custom/v1/menu/footer`);

  return (
    <>
      {/* Static HTML for SEO */}
      <footer
        className="seo-footer"
        aria-hidden="true"
        style={{ display: "none", visibility: "hidden" }}
      >
        <div className="footer-content">
          {footer?.menu_tree?.map((data) => (
            <div key={data?.id}>
              <p>{data?.title}</p>
              <div>
                {data?.children?.map((item) => (
                  <a key={item?.url} title={item?.attr_title} href={item?.url}>
                    {item?.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <a href="mailto:info@chevalme.com" rel="nofollow">
            info@chevalme.com
          </a>
          <a href="tel:+971503560927" rel="nofollow">
            +971 50 356 0927
          </a>
          <a rel="nofollow" href="https://maps.app.goo.gl/Y26or1kGZwuEGq5s6">
            Suite 1, 101, Capital Golden Tower, Business Bay, Dubai, UAE
          </a>
        </div>
      </footer>
      {/* Client-side enhanced footer */}
      <DynamicNewFooter footer={footer?.menu_tree} />
    </>
  );
}
