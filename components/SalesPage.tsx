import { richTextOptions } from "@/lib/richTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";

// @ts-expect-error
const SalesInfoPage = ({ salesData }) => {
  
  const { description, featuredImage, tiles } = salesData;
  return (
    <>
      <div className="flex xl:flex-row flex-col items-center justify-between mb-28">
        <div className="xl:w-1/2 px-4">
          {description &&
            documentToReactComponents(description, richTextOptions)}
        </div>
        <Image
          src={`https:${featuredImage.fields.image.fields.file.url}`}
          alt={featuredImage.fields.altText}
          width={400}
          height={400}
          className="max-h-[400px]"
        />
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {tiles.map((tile: any) => (
          <Link href={tile.fields.link} target="_blank" key={tile.sys.id}>
            <div
              
              className="bg-cfyellow-1 rounded-xl w-[270px] p-4 hover:-translate-y-2 transition-transform transform"
            >
              <p className="font-bold text-center text-white">
                {tile.fields.documentTitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-20">
        <p className="font-bold text-center xl:text-start">Looking for more? Then take a look at our <Link className="text-cfblue-1 font-bold hover:underline" href={"/sales/case-study"}>Case Studies!</Link></p>
      </div>
    </>
  );
};

export default SalesInfoPage;
