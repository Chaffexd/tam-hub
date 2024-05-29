import { richTextOptions } from "@/lib/richTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

// @ts-expect-error
const SalesInfoPage = ({ salesData }) => {
  console.log("Sales =", salesData);
  const { description, featuredImage, tiles } = salesData;
  return (
    <>
      <div className="flex justify-between mb-28">
        <div className="w-1/2">
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
    </>
  );
};

export default SalesInfoPage;
