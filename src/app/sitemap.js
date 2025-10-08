import { baseUrl } from "@/util/baseUrl";

export default async function () {
  const resposnse = await fetch(` ${baseUrl}/wp-json/custom/v1/projects`);

  const resposnseService = await fetch(
    `  ${baseUrl}/wp-json/custom/v1/services`
  );

  const resposnseProjectCategory = await fetch(
    `${baseUrl}/wp-json/custom/v1/category_list?show_in_filter=1`
  );

  const projects = await resposnse.json();
  const services = await resposnseService.json();
  const projectCategory = await resposnseProjectCategory.json();

  const dataArray = Object.values(projects);
  const dataArray2 = Object.values(services);
  const projectEntries = dataArray?.map((item) => ({
    url: `https://chevalme.com/projects/${item?.post_name}/`,
    lastModified: new Date(item?.post_date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const servicesEntries = dataArray2?.map((item) => ({
    url: `https://chevalme.com/service/${item?.post_name}/`,
    lastModified: new Date(item?.post_date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const projectCategoryEntries = projectCategory?.map((item) => ({
    url: `https://chevalme.com/projects_category/${item?.slug}/`,

    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [
    {
      url: "https://chevalme.com/about/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/projects/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/contact-us/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/privacy-policy/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/best-website-developers-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/ios-app-development-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/android-app-development-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/mobile-app-development-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/software-development-company-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/best-web-development-agency-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/dubai/mobile-app-development/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/ecommerce-development-company-saudi-arabia/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/ecommerce-company-dammam/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/ecommerce-company-riyadh/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/ecommerce-website-development-abu-dhabi/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/ecommerce-website-development-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/digital-marketing-company-saudi-arabia/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/digital-marketing-company-dammam/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/digital-marketing-company-riyadh/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/digital-marketing-agency-abu-dhabi/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/ios-app-development-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/ios-app-development-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/ios-app-development-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/ios-app-development-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/ios-app-development-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/ios-app-development-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/ios-app-development-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://chevalme.com/services/ios-app-development-in-dubai/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectEntries,
    ...servicesEntries,
    ...projectCategoryEntries,
  ];
}
