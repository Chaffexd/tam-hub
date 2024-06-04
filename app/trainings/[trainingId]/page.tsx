import { auth } from "@/auth";
import TrainingSession from "@/components/TrainingSession";
import { fetchTrainingSession } from "@/lib/contentful";
import { redirect } from "next/navigation";
 
type Props = {
  params: { trainingId: string }
}

export async function generateMetadata({ params }: Props) {
  const trainingId = params.trainingId;

  const trainingData = await fetchTrainingSession(trainingId);

  return {
    title: `${trainingData.items[0].fields.topic} - Training Session | TAM Hub`,
    description: trainingData.items[0].fields.previewSnippet,
    openGraph: {
      images: ['./icon.svg']
    }
  }
}

const TrainingDetailPage = async ({ params }: { params: { trainingId: string } }) => {
  const trainingData = await fetchTrainingSession(params.trainingId);


  const session = await auth();
  console.log("Session =", session === null);
  if (session === null || !session?.user) {
    redirect("/login")
  }

  return (
    <section className="min-h-screen md:px-40 mt-8 w-full">
      <TrainingSession trainingSessionData={trainingData.items[0].fields} />
    </section>
  );
};

export default TrainingDetailPage;
