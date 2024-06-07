import { richTextOptions } from "@/lib/richTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";

const KnowledgePageContent = ({ knowledgeData }: any) => {
  const { title, description, featuredImage, tiles } = knowledgeData;
  
  return (
    <div className="md:px-40">
      <div className="flex justify-between mt-28 mb-24">
        <h1 className="font-bold text-3xl">{title}</h1>
        <Image
          src={`https:${featuredImage.fields.image.fields.file.url}`}
          alt={featuredImage.fields.image.fields.title}
          height={500}
          width={500}
          className="mb-16"
        />
      </div>
      {description && documentToReactComponents(description, richTextOptions)}
      <div className="flex flex-wrap gap-8 justify-center text-center mt-12">
        {tiles.map((tile: any) => (
          <Link
            href={tile.fields.slug}
            key={tile.sys.id}
            className="bg-cfblue-1 rounded-xl w-[270px] p-4 hover:-translate-y-2 transition-transform transform text-white font-bold"
          >
            {tile.fields.categoryTitle}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default KnowledgePageContent;
