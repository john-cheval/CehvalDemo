"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useFetch = (url) => {
  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 10 * 60 * 1000,
    // dedupingInterval: 60000,
    keepPreviousData: true,
  });

  const googleReviewsSorted = data?.all_reviews || [];

  return { data, loading: isLoading, error, googleReviewsSorted };
};

export default useFetch;
