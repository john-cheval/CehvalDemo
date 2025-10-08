import { fetchData } from "@/server/getHomePageData";

export async function fetchWithFallback(url) {
  try {
    return await fetchData(url);
  } catch (error) {
    console.error(`Failed to fetch data from ${url}:`, error);
    return null;
  }
}
