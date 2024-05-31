import Image from "next/image";
import { richTextOptions } from "@/lib/richTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const CaseStudy = ({ caseData }) => {
  console.log("Case Data =", caseData.fields.outcomes);
  return (
    <>
      <p className="text-slate-600 font-bold mb-4">Case study</p>
      <div className="flex justify-between bg-slate-400 rounded-xl p-4">
        <div className="w-1/2 p-20 text-white">
          <h1 className="font-bold text-5xl mb-8">
            {caseData.fields.accountName}
          </h1>
          <h2 className="font-bold mb-2 text-xl">Use cases:</h2>
          {caseData.fields.useCases.map((useCase, index) => (
            <p className="font-md mb-2" key={index}>
              {useCase}
            </p>
          ))}
          <div className="mt-4">
            <p className="font-bold text-xl mb-2">Industry:</p>
            <p>{caseData.fields.industry}</p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src={`https:${caseData.fields.companyLogo.fields.image.fields.file.url}`}
            alt={caseData.fields.companyLogo.fields.altText}
            height={200}
            width={200}
          />
        </div>
      </div>
      <div className="p-4 mt-10">
        {caseData.fields.outcomes && documentToReactComponents(caseData.fields.outcomes, richTextOptions)}
      </div>
    </>
  );
};

export default CaseStudy;
