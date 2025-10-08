import { disableImageOptimization } from "@/util/constants";
import Image from "next/image";
import React from "react";

const ScreenShotList = ({ data1, data2, ID }) => {
  const isVideo = (url) => url?.endsWith(".mp4");

  return (
    <>
      <div className="relative w-full flex flex-col py-2 md:py-4 lg:py-8 xl:py-10 gap-y-5">
        {data1 && (
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8  ">
            {data1?.map((img, index) =>
              img.image_type === "Half" ? (
                img?.image && isVideo(img?.image) ? (
                  <div
                    key={index + 10}
                    className="rounded-[1rem] overflow-hidden  col-span-1 md:col-span-2 w-full"
                  >
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      id="video"
                      className="w-full h-full object-cover"
                      alt="work-video"
                    >
                      <source src={img.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <Image
                    key={index + 62}
                    src={img?.image}
                    width={300}
                    height={400}
                    unoptimized={disableImageOptimization}
                    sizes="100vw"
                    className="rounded-[1rem] h-auto  w-full col-span-1 md:col-span-2 bg-transparent"
                    alt="workInner1"
                  />
                )
              ) : img.image_type === "Quarter" ? (
                <div
                  key={index + 73}
                  className="relative col-span-1 w-full aspect-square md:aspect-auto "
                >
                  {img?.image && isVideo(img?.image) ? (
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      id="video"
                      className="rounded-[1rem] w-full h-full object-cover"
                    >
                      <source src={img.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={img.image}
                      fill={true}
                      className="rounded-[1rem] w-full h-auto object-cover "
                      alt="workInner1"
                      sizes="100vw"
                      unoptimized={disableImageOptimization}
                    />
                  )}
                </div>
              ) : (
                img.image_type === "Full" &&
                (img?.image && isVideo(img.image) ? (
                  <div
                    key={index + 84}
                    className="rounded-[1rem] overflow-hidden h-auto col-span-1 md:col-span-3 w-full"
                  >
                    <video
                      autoPlay
                      muted
                      playsInline
                      loop
                      id="video"
                      className="w-full h-full object-cover"
                      alt="work-video"
                    >
                      <source src={img.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <Image
                    key={index + 31}
                    src={img.image}
                    width={300}
                    height={300}
                    sizes="100vw"
                    unoptimized={disableImageOptimization}
                    className="rounded-[1rem] col-span-1 md:col-span-3 w-full bg-transparent h-auto"
                    alt="workInner1"
                  />
                ))
              )
            )}
          </div>
        )}
      </div>

      <div className="space-y-8">
        {data2?.map((section, index) => (
          <div
            className="relative w-full flex flex-col gap-y-5"
            key={index + 56}
          >
            {section?.images && (
              /* ID !== 2023 && */ <div className="w-full grid-cols-1 md:grid-cols-6 grid-flow-row gap-5 h-fit grid">
                {section?.images?.map((img, index) => {
                  const fileExtension =
                    img?.image && img?.image?.split(".")?.pop()?.toLowerCase();
                  const isVideo = fileExtension === "mp4";

                  if (img.image_type === "Full") {
                    return isVideo ? (
                      <div
                        key={index + 7}
                        className="w-full col-span-1 md:col-span-6 bg-transparent rounded-[1rem]"
                      >
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          id="video"
                          className="rounded-[1rem] w-full h-full"
                          alt="work-video"
                        >
                          <source src={img.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <Image
                        key={index + 9}
                        src={img.image}
                        // overrideSrc="/Work/work1.png"
                        width={400}
                        height={400}
                        unoptimized={disableImageOptimization}
                        sizes="100vw"
                        className="rounded-[1rem] col-span-1 w-full h-auto md:col-span-6 object-fill"
                        alt="work-image"
                      />
                    );
                  }

                  if (img.image_type === "Half") {
                    return isVideo ? (
                      <div
                        key={index + 20}
                        className="w-full col-span-1 md:col-span-4 bg-transparent rounded-[1rem] h-auto overflow-hidden"
                      >
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          id="video"
                          className="rounded-[1rem] w-full h-full"
                          alt="work-video"
                        >
                          <source src={img.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <Image
                        key={index + 21}
                        src={img.image}
                        // overrideSrc="/Work/work1.png"
                        width={400}
                        height={400}
                        unoptimized={disableImageOptimization}
                        sizes="100vw"
                        className="rounded-[1rem] w-full col-span-1 md:col-span-4 bg-transparent h-auto"
                        alt="work-image"
                      />
                    );
                  }

                  if (img.image_type === "Quarter") {
                    return isVideo ? (
                      <div
                        key={index + 22}
                        className="h-auto col-span-1 md:col-span-2 w-full relative aspect-square md:aspect-auto"
                      >
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          id="video"
                          className="rounded-[1rem] h-full w-full"
                          alt="work-video"
                        >
                          <source src={img.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <div
                        key={index + 23}
                        className="h-full col-span-1 md:col-span-2 w-full relative"
                      >
                        <Image
                          src={img.image}
                          fill={true}
                          className="rounded-[1rem] h-auto w-full object-cover"
                          alt="work-image"
                          sizes="100vw"
                          unoptimized={disableImageOptimization}
                        />
                      </div>
                    );
                  }

                  if (img.image_type === "Half-1") {
                    return isVideo ? (
                      <div
                        key={index + 24}
                        className="w-full col-span-1 md:col-span-3 bg-transparent rounded-[1rem] h-auto overflow-hidden"
                      >
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          id="video"
                          className="rounded-[1rem] w-full h-full"
                          alt="work-video"
                        >
                          <source src={img.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <Image
                        key={index + 25}
                        src={img.image}
                        // overrideSrc="/Work/work1.png"
                        width={400}
                        height={400}
                        sizes="100vw"
                        className="rounded-[1rem] w-full col-span-1 md:col-span-3 bg-transparent h-auto"
                        alt="work-image"
                        unoptimized={disableImageOptimization}
                      />
                    );
                  }

                  if (img.image_type === "Half-2") {
                    return isVideo ? (
                      <div
                        key={index + 26}
                        className="w-full col-span-1 md:col-span-3 bg-transparent rounded-[1rem] h-auto overflow-hidden"
                      >
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          id="video"
                          className="rounded-[1rem] w-full h-full"
                          alt="work-video"
                        >
                          <source src={img.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <Image
                        key={index + 27}
                        src={img.image}
                        // overrideSrc="/Work/work1.png"
                        width={400}
                        height={400}
                        sizes="100vw"
                        className="rounded-[1rem] w-full col-span-1 md:col-span-3 bg-transparent h-auto"
                        alt="work-image"
                        unoptimized={disableImageOptimization}
                      />
                    );
                  }

                  return null;
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ScreenShotList;
