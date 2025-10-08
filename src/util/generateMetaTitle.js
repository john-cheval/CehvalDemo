import { notFound } from "next/navigation";
import { baseUrl } from "./baseUrl";

async function generateMetadataData(id, path, slug = false) {
  const url = `${baseUrl}/wp-json/custom/v1/full_details_meta?${slug ? "slug" : "ID"}=${id}`;
  const res = await fetch(url);

  if (!res.ok) {
    notFound();
    // return; // This line is crucial to stop execution here
  }

  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const text = await res.text();
    throw new Error(
      `Metadata expected JSON but got ${contentType}. First 200 chars: ${text.slice(
        0,
        200
      )}`
    );
  }

  const data = await res.json();

  const title =
    data?.meta_title ||
    "Best Web Developers in Dubai | Software Developers in Dubai";
  const description =
    data?.meta_description ||
    "Partner with top Web Developers in Dubai at Cheval. We Specialize in Mobile App and Software Development, delivering cutting-edge tailored digital solutions.";
  const image =
    data?.meta_image ||
    "https://bunny-wp-pullzone-1uo9uvm3si.b-cdn.net/wp-content/uploads/2025/03/cheval-social.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: `https://chevalme.com/${path}`,
    },
    openGraph: {
      title,
      description,
      url: `https://chevalme.com/${path}`,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default generateMetadataData;
