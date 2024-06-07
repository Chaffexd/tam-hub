import KnowledgePageContent from "@/components/KnowledgePage";
import { fetchPage } from "@/lib/contentful";
import React from "react";

const KnowledgePage = async () => {
  const data = await fetchPage("/knowledge");
  
  return (
    <section className="min-h-screen mt-8">
      <KnowledgePageContent 
      knowledgeData={data.items[0].fields} />
    </section>
  );
};

export default KnowledgePage;
