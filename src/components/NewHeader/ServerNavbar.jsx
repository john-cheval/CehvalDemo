// components/ServerNavbar.js
import { fetchData } from "@/server/getHomePageData";
import DynamicNewHeader from "./NewHeader";
import { baseUrl } from "@/util/baseUrl";

export default async function ServerNavbar() {
  const MainNavLinks = await fetchData(
    ` ${baseUrl}/wp-json/custom/v1/menu/quicklinks`
  );

  return (
    <>
      {/* Static HTML for SEO */}
      <nav
        aria-hidden="true"
        style={{ display: "none", visibility: "hidden" }}
        className="seo-nav hidden lg:flex items-center text-sm font-medium space-x-6 md:space-x-8 lg:space-x-10 uppercase"
      >
        {MainNavLinks?.["0"]?.map(({ title, url, id, attr_title }) => (
          <a key={id} title={attr_title} href={url} className="seo-nav-link">
            {title}
          </a>
        ))}
      </nav>

      {/* Client-side enhanced navbar */}
      <DynamicNewHeader navLinksNew={MainNavLinks} />
    </>
  );
}
