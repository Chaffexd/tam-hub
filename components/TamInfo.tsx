import { richTextOptions } from "@/lib/richTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// @ts-expect-error
const TamInfo = ({ tamData }) => {
  // console.log("Tam data =", tamData);

  const { description, featuredImage, tiles } = tamData;
  return (
    <div className="w-full mb-20">
      {description && documentToReactComponents(description, richTextOptions)}
    </div>
  );
};

export default TamInfo;
