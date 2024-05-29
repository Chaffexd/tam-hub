import SalesInfoPage from "@/components/SalesPage";
import { fetchPage } from "@/lib/contentful";

const SalesPage = async () => {
  const salesData = await fetchPage("sales");

  return (
    <section className="min-h-screen md:px-40 mt-8">
      <SalesInfoPage salesData={salesData.items[0].fields} />
    </section>
  );
};

export default SalesPage;
