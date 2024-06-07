import Homepage from "@/components/Homepage";
import { fetchPage } from "@/lib/contentful";

export default async function Home({ params }: { params: string }) {
  const homePageData = await fetchPage("/");
  // console.log("Page = ", homePageData.items[0]);

  const pageInfo = homePageData.items[0].fields;

  return (
    <section className="min-h-screen md:px-40 mt-8">
      <Homepage
        // @ts-expect-error
        pageInfo={pageInfo}
      />
    </section>
  );
}
