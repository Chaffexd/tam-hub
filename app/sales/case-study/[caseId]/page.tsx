import CaseStudy from "@/components/CaseStudy";
import { fetchCaseStudy } from "@/lib/contentful";
import React from "react";

const CaseStudyPage = async ({ params }: { params: { caseId: string } }) => {
  const caseData = await fetchCaseStudy(params.caseId);

  return (
    <section className="min-h-screen md:px-40 mt-8">
      <CaseStudy caseData={caseData.items[0]} />
    </section>
  );
};

export default CaseStudyPage;
