import { formatDate } from "@/lib/dateFormat";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FilteredArticles = ({ article }: any) => {
  const { title, date, category, articleAuthor, articleBody } = article.fields;

  const articleSlug = `${article.fields.category.fields.slug}/${title}`.replaceAll(" ", "-").toLocaleLowerCase();
  const formattedDate = formatDate(date);

  return (
    <Link
      href={`${articleSlug}`}
      className="w-[305px] border-2 border-cfgrey-1 hover:bg-blue-50 rounded-xl hover:-translate-y-2 transition-transform transform p-4 flex flex-col justify-between"
    >
      <h1 className="text-xl font-bold mb-8">{title}</h1>
      <div className="flex justify-between items-center">
        <Image
          src={`https:${articleAuthor.fields.authorImage.fields.image.fields.file.url}`}
          alt={articleAuthor.fields.authorImage.fields.altText}
          height={35}
          width={35}
          className="rounded-full"
        />
        <time>{formattedDate}</time>
      </div>
    </Link>
  );
};

export default FilteredArticles;
