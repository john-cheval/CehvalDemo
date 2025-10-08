import { notFound } from "next/navigation";
import { cache } from "react";

export const fetchData = cache(async (url) => {
  try {
    const response = await fetch(url, {
      next: {
        // revalidate: 3600,
        revalidate: 120,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
      notFound();
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
});
