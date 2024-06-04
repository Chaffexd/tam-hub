import { richTextOptions } from "@/lib/richTextOptions";
import { HomePageProps } from "@/types/contentfulTypes";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";

const Homepage = ({ pageInfo }: HomePageProps) => {
  const { description, featuredImage, tiles, accounts } = pageInfo;

  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-between mb-28 px-4 lg:px-0">
        <div className="lg:w-1/2">
          {description &&
            // @ts-expect-error
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
      <p className="font-bold text-4xl">Our Accounts</p>
      <div className="w-full mt-12 bg-cfblue-1 p-8 md:rounded-xl flex flex-wrap gap-12 justify-center">
        {accounts.map((account) => (
          <Link
            key={account.sys.id}
            href={account.fields.slug}
            className="hover:-translate-y-2 transition-transform transform"
          >
            <div className="bg-blue-100 rounded-xl w-[300px] h-[340px]">
              <div className="bg-white w-full rounded-t-lg flex justify-center">
                <Image
                  src={`https:${account.fields.image.fields.image.fields.file.url}`}
                  alt={account.fields.title}
                  width={200}
                  height={300}
                  className=" w-[250px] h-[250px]  p-8"
                />
              </div>

              <div>
                <p className="font-bold text-center mt-8">
                  {account.fields.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full">
        <h3 className="text-3xl mt-28 mb-4 px-4 lg:px-0">Explore</h3>
        <p className="mb-16 px-4 lg:px-0">
          Find materials for technical aspects of the product and enablement
          materials
        </p>
        <div className="flex flex-wrap gap-8 mb-12 justify-evenly">
          {tiles.map((card: any) => (
            <Link
              key={card.sys.id}
              href={card.fields.slug}
              className="w-56 p-8 min-h-64 border-2 border-cfgrey-1 hover:bg-blue-50 rounded-xl hover:-translate-y-2 transition-transform transform"
            >
              <h4 className="text-xl font-bold mb-2">{card.fields.title}</h4>
              <p>{card.fields.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
