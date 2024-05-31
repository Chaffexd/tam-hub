import TamInfo from "@/components/TamInfo";
import { fetchPage } from "@/lib/contentful";
import React from "react";

const TamInfoPage = async () => {
  const tamData = await fetchPage("tam-info");

  return (
    <section className="min-h-screen md:px-40 mt-8">
      <TamInfo tamData={tamData.items[0].fields} />
    </section>
  );
};

export default TamInfoPage;
