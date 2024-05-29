import Homepage from "@/components/Homepage";
import { fetchHomePage } from "@/lib/contentful";

export default async function Home() {
  const homePageData = await fetchHomePage();

  const pageInfo = homePageData.items[0].fields;

  return (
    <section className="min-h-screen md:px-40 mt-8 ">
      <Homepage 
      // @ts-expect-error
      pageInfo={pageInfo} />
    </section>
  );
}
