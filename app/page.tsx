import Homepage from "@/components/Homepage";
import { fetchPage } from "@/lib/contentful";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: string }) {
  const homePageData = await fetchPage("/");
  // console.log("Page = ", homePageData.items[0]);

  const pageInfo = homePageData.items[0].fields;

  const session = await auth();
  console.log("Session =", session === null);
  console.log("SESSION / =", session);
  /* if (session === null || !session?.user) {
    return redirect("/login");
  } */

  return (
    <section className="min-h-screen md:px-40 mt-8">
      <Homepage
        // @ts-expect-error
        pageInfo={pageInfo}
      />
    </section>
  );
}
