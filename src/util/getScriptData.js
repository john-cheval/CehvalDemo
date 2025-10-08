import { notFound } from "next/navigation";
import { baseUrl } from "./baseUrl";

async function generatePageScripts(id, slug = false) {
  const url = `${baseUrl}/wp-json/custom/v1/full_details_meta?${slug ? "slug" : "ID"}=${id}`;
  const res = await fetch(url);

  if (!res.ok) {
    notFound(); // This will throw an error and stop execution
  }

  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const text = await res.text();
    throw new Error(
      `MetaScripts expected JSON but got ${contentType}. First 200 chars: ${text.slice(
        0,
        200
      )}`
    );
  }

  const data = await res.json();
  return data;
}

export default generatePageScripts;
