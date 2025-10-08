/** @format */
import Image from "next/image";
import React from "react";
// import { format } from "date-fns";
import { disableImageOptimization } from "@/util/constants";
import Link from "next/link";

function BlogsSection1({ data }) {
  return (
    <div className="relative w-screen h-fit py-32 bg-[#F6F6F4] overflow-x-hidden">
      <div className="relative flex-col space-y-10 flex h-fit w-full wrapper-padding text-[#101763]">
        <div className="w-full lg:h-[520px] gap-3 lg:gap-4 xl:gap-5 grid grid-rows-12 grid-cols-1 lg:grid-cols-2 ">
          {data &&
            data?.length > 0 &&
            data?.map(
              (data, index) =>
                index === 0 && (
                  <Link
                    href={`/blogs/${data.slug}`}
                    key={index}
                    className="row-span-12 lg:h-auto h-[520px] relative"
                  >
                    {data._embedded["wp:featuredmedia"] && (
                      <div className="h-full w-full object-cover rounded-[2rem]">
                        <Image
                          src={data._embedded["wp:featuredmedia"][0].source_url}
                          fill={true}
                          className="rounded-[2rem] object-cover"
                          alt={data.title.rendered}
                          unoptimized={disableImageOptimization}
                        />
                      </div>
                    )}

                    <div className="flex flex-col font-satoshi absolute bottom-0 h-full w-full justify-end bg-gradient-to-b from-50% from-transparent to-[#000] rounded-[2rem] px-10 py-10 text-white">
                      {/* <span className="text-[10px] sm:text-xs md:text-sm font-sora py-3 leading-loose">
                        {format(new Date(data.date), "EEEE dd MMM")}
                      </span> */}
                      <p className="text-base sm:text-lg md:text-xl line-clamp-2 leading-relaxed">
                        {data.title.rendered}
                      </p>
                    </div>
                  </Link>
                )
            )}
          {data?.length > 1 &&
            data?.map(
              (data, index) =>
                index === 1 && (
                  <Link
                    href={`/blogs/${data.slug}`}
                    key={index}
                    className="row-span-6 h-[85vw] sm:h-auto relative"
                  >
                    {data._embedded["wp:featuredmedia"] && (
                      <div className="h-full w-full object-cover rounded-[2rem]">
                        <Image
                          src={data._embedded["wp:featuredmedia"][0].source_url}
                          fill={true}
                          className="rounded-[2rem] object-cover"
                          alt={data.title.rendered}
                          unoptimized={disableImageOptimization}
                        />
                      </div>
                    )}

                    <div className="flex flex-col font-satoshi absolute bottom-0 h-full w-full justify-end bg-gradient-to-b from-transparent to-[#000] rounded-[2rem] px-10 py-10 text-white">
                      {/* <span className="text-[10px] sm:text-xs md:text-sm font-sora leading-loose">
                        {format(new Date(data.date), "EEEE dd MMM")}
                      </span> */}
                      <p className="text-base sm:text-lg md:text-xl line-clamp-2 leading-relaxed">
                        {data.title.rendered}
                      </p>
                    </div>
                  </Link>
                )
            )}
          {data?.length > 2 &&
            data?.map(
              (data, index) =>
                index === 2 && (
                  <Link
                    href={`/blogs/${data.slug}`}
                    key={index}
                    className="row-span-6 h-[85vw] sm:h-auto relative"
                  >
                    {data._embedded["wp:featuredmedia"] && (
                      <div className="h-full w-full object-cover rounded-[2rem]">
                        <Image
                          src={data._embedded["wp:featuredmedia"][0].source_url}
                          fill={true}
                          className="rounded-[2rem] object-cover"
                          alt={data.title.rendered}
                          unoptimized={disableImageOptimization}
                        />
                      </div>
                    )}

                    <div className="flex flex-col font-satoshi absolute bottom-0 h-full w-full justify-end bg-gradient-to-b from-transparent to-[#000] rounded-[2rem] px-10 py-10 text-white">
                      {/* <span className="text-[10px] sm:text-xs md:text-sm font-sora leading-loose">
                        {format(new Date(data.date), "EEEE dd MMM")}
                      </span> */}
                      <p className="text-base sm:text-lg md:text-xl line-clamp-2 leading-relaxed">
                        {data.title.rendered}
                      </p>
                    </div>
                  </Link>
                )
            )}
        </div>
        <div className="w-full h-fit gap-y-8 gap-3.5 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9">
          {data?.length > 3 &&
            data?.slice(3)?.map((data, index) => (
              <Link
                href={`/blogs/${data.slug}`}
                key={index}
                className="col-span-3 relative space-y-5 flex flex-col"
              >
                {data._embedded["wp:featuredmedia"] && (
                  <div className="w-full h-[80vw]- sm:h-[450px]- md:h-80- object-cover rounded-[8px] md:rounded-[12px] lg:rounded-[2rem] object-center">
                    <Image
                      src={data._embedded["wp:featuredmedia"][0].source_url}
                      // fill={true}
                      className="rounded-[2rem] object-cover w-full"
                      alt={data.title.rendered}
                      unoptimized={disableImageOptimization}
                      height={100}
                      width={400}
                    />
                  </div>
                )}

                <div className="flex flex-col space-y-3- px-1 text-black">
                  {/* <span className="text-[10px] sm:text-xs md:text-sm font-sora">
                        {format(new Date(data.date), "EEEE dd MMM")}
                      </span> */}
                  <p className="text-base sm:text-lg md:text-xl font-satoshi">
                    {data.title.rendered}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BlogsSection1;
