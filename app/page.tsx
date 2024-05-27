import { fetchHomePage } from "@/lib/contentful";


export default async function Home() {
  const homePageData = await fetchHomePage();

  // console.log("Data =", homePageData.fields);
  // homePageData.fields.featuredImage.fields.image.fields.file.url
  return (
   <section className="min-h-screen">Hi</section>
  );
}
