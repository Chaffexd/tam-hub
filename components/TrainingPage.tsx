import { richTextOptions } from "@/lib/richTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";

// @ts-expect-error
const TrainingPage = ({ trainingData }) => {
  const { description, featuredImage, tiles } = trainingData;
  return (
    <>
      <div className="flex xl:flex-row flex-col items-center justify-between mb-28 xl:px-0 px-4">
        <div className="xl:w-1/2">
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
      <div className="lg:px-0 px-4">
        {tiles.map((tile: any) => (
          <Link key={tile.sys.id} href={`${tile.fields.slug}`}>
            <div className="rounded-xl border border-ctgrey-1 p-4 cursor-pointer hover:bg-blue-50 hover:-translate-y-2 transition-transform transform mb-12">
              <div className="flex items-center">
                <Image
                  src={`https:${tile.fields.sessionHost.fields.authorImage.fields.image.fields.file.url}`}
                  alt={
                    tile.fields.sessionHost.fields.authorImage.fields.image
                      .fields.description
                  }
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-slate-700">
                    {tile.fields.sessionHost.fields.name}
                  </p>
                  <p className="text-slate-500">
                    {tile.fields.sessionHost.fields.title}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-semibold text-cfgrey-2">
                  {tile.fields.topic}
                </p>
                <p className="mt-2 text-lg text-slate-500">
                  {tile.fields.previewSnippet}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TrainingPage;
