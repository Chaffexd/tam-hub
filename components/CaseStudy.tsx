"use client"
import Image from "next/image";
import { richTextOptions } from "@/lib/richTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BackArrow from "./icons/BackArrow";
import Link from "next/link";

// @ts-expect-error
const CaseStudy = ({ caseData }) => {
  return (
    <>
      <Link href={"/sales/case-study"} className="mb-8 block w-8">
        <BackArrow />
      </Link>
      <p className="text-slate-600 font-bold mb-4">Case study</p>
      <div className="flex justify-between bg-slate-400 rounded-xl p-4">
        <div className="w-1/2 p-20 text-white">
          <h1 className="font-bold text-5xl mb-8">
            {caseData.fields.accountName}
          </h1>
          <h2 className="font-bold mb-2 text-xl">Use cases:</h2>
          {caseData.fields.useCases.map((useCase: any, index: number) => (
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
            className="rounded-xl w-[250px] bg-white p-2"
          />
        </div>
      </div>
      <div className="p-4 mt-10 mb-24">
        {caseData.fields.outcomes &&
          documentToReactComponents(caseData.fields.outcomes, richTextOptions)}
      </div>
    </>
  );
};

export default CaseStudy;
