import { fetchKnowledgeArticle } from "@/lib/contentful";
import { formatDate } from "@/lib/dateFormat";
import Image from "next/image";
import React from "react";
import { richTextOptions } from "@/lib/richTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BackArrow from "@/components/icons/BackArrow";
import Link from "next/link";

const ArticleDetailPage = async ({
  params,
}: {
  params: { knowledgeId: string; articleId: string };
}) => {
  const { knowledgeId, articleId } = params;
  const articleData = await fetchKnowledgeArticle(
    `/knowledge/${knowledgeId}/${articleId}`
  );

  // console.log("params =", articleData.items[0].fields.category.fields.categoryTitle);
  const { title, date, articleAuthor, articleBody, slug } =
    articleData.items[0].fields;
  const formattedDate = formatDate(date as string);

  return (
    <article className="min-h-screen lg:px-40 mt-16 mb-20">
      <Link
        href={
          // @ts-expect-error
          `${articleData.items[0].fields.category.fields.slug}`
        }
        className="mb-4 block w-8"
      >
        <BackArrow />
      </Link>
      <div className="border-b border-b-cfgrey-1 pb-4">
        <h1 className="text-2xl font-bold">{title as string}</h1>
        <div>
          <div className="flex items-center my-8">
            <Image
              // @ts-expect-error
              src={`https:${articleAuthor.fields.authorImage.fields.image.fields.file.url}`}
              alt=""
              width={75}
              height={75}
              className="mr-4 rounded-full"
            />
            <div>
              <h2 className="font-bold">
                {
                  // @ts-expect-error
                  articleAuthor?.fields.name
                }
              </h2>
              <p>
                {
                  // @ts-expect-error
                  articleAuthor?.fields.title
                }
              </p>
              <p>
                {
                  // @ts-expect-error
                  articleAuthor?.fields.location
                }
              </p>
            </div>
          </div>
          <time>{formattedDate}</time>
        </div>
      </div>
      {articleBody &&
        documentToReactComponents(
          // @ts-expect-error
          articleBody,
          richTextOptions
        )}
    </article>
  );
};

export default ArticleDetailPage;
