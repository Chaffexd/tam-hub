import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // allow: "/",
        // this will disable crawling on below pages
        disallow: ["/"]
      },
    ],
  };
}
