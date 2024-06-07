import FilteredArticles from "@/components/FilteredArticles";
import BackArrow from "@/components/icons/BackArrow";
import { fetchCategoryArticles, fetchCategoryInfo } from "@/lib/contentful";
import Link from "next/link";

const KnowledgeCategoryPage = async ({
  params,
}: {
  params: { knowledgeId: string };
}) => {
  const { knowledgeId } = params;
  const data = await fetchCategoryInfo(knowledgeId);
  const allArticles = await fetchCategoryArticles();

  // allArticles.items[0].fields.category.fields.categoryTitle or slug
  const { categoryTitle } = data.items[0].fields;

  const filteredArticles = allArticles.items.filter(
    // @ts-expect-error
    (item) => item.fields.category.fields.categoryTitle === categoryTitle
  );
  // console.log("Filtered Articles =", filteredArticles);

  return (
    <section className="min-h-screen mt-8 md:mx-40">
      <Link href={"/knowledge"} className="mb-4 block w-8">
        <BackArrow />
      </Link>
      <h1 className="font-bold text-3xl pt-4">{categoryTitle as string}</h1>
      <div className="mt-12 border-t-cfgrey-1 border-t pt-8">
        {filteredArticles.map((article) => (
          <FilteredArticles key={article.sys.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default KnowledgeCategoryPage;
