import { auth } from "@/auth";
import CaseStudy from "@/components/CaseStudy";
import { fetchCaseStudy } from "@/lib/contentful";
import { redirect } from "next/navigation";
import React from "react";

const CaseStudyPage = async ({ params }: { params: { caseId: string } }) => {
  const caseData = await fetchCaseStudy(params.caseId);

  if (!caseData) {
    redirect("/sales")
  }

  const session = await auth();
  console.log("Session =", session === null);
  if (session === null || !session?.user) {
    redirect("/login")
  }

  return (
    <section className="min-h-screen md:px-40 mt-8">
      <CaseStudy caseData={caseData.items[0]} />
    </section>
  );
};

export default CaseStudyPage;
