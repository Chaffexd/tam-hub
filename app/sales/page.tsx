import { auth } from "@/auth";
import SalesInfoPage from "@/components/SalesPage";
import { fetchPage } from "@/lib/contentful";
import { redirect } from "next/navigation";

const SalesPage = async () => {
  const salesData = await fetchPage("sales");


  const session = await auth();
  console.log("Session =", session === null);
  if (session === null || !session?.user) {
    return redirect("/login")
  }

  return (
    <section className="min-h-screen lg:px-40 mt-8 mb-20">
      <SalesInfoPage salesData={salesData.items[0].fields} />
    </section>
  );
};

export default SalesPage;
