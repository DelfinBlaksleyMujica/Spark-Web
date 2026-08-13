import { data as blogData } from "./blog/page";

const BASE_URL = "https://www.sparkclub.xyz";

export default function sitemap() {
  const staticRoutes = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/provider`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const blogRoutes = blogData.posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.id}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.64,
  }));

  return [...staticRoutes, ...blogRoutes];
}
