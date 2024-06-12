"use client";
import Image from "next/image";
import { richTextOptions } from "@/lib/richTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BackArrow from "./icons/BackArrow";
import Link from "next/link";

// @ts-expect-error
const CaseStudy = ({ caseData }) => {
  console.log("Case study =", caseData.fields.tam.fields);
  return (
    <>
      <Link href={"/sales/case-study"} className="mb-8 block w-8 md:pl-0 pl-4">
        <BackArrow />
      </Link>
      <p className="text-slate-600 font-bold mb-4 md:pl-0 pl-4">Case study</p>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between bg-slate-400 lg:rounded-xl p-4">
        <div className="sm:w-1/2 p-20 text-white">
          <h1 className="font-bold text-5xl mb-8">
            {caseData.fields.accountName}
          </h1>
          <p className="mb-4 font-bold">
            Technical Account Manager:
            <br /> <span className="font-normal">{caseData.fields.tam.fields.name}</span>
          </p>
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
