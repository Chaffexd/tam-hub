import KnowledgePageContent from "@/components/KnowledgePage";
import { fetchPage } from "@/lib/contentful";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Internal Knowledge Base | Support',
  description: 'The Internal TAM Knowledge Hub',
}

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
