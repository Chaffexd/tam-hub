import { auth } from "@/auth";
import TrainingPage from "@/components/TrainingPage";
import { fetchPage } from "@/lib/contentful";
import { redirect } from "next/navigation";

const TrainingsPage = async () => {
  const trainingData = await fetchPage("trainings");
  console.log("Training Data = ", trainingData.items[0].fields.tiles);


  const session = await auth();
  console.log("Session =", session === null);
  if (session === null || !session?.user) {
    redirect("/login")
  }

  return (
    <section className="min-h-screen md:px-40 mt-8">
      <TrainingPage trainingData={trainingData.items[0].fields} />
    </section>
  );
};

export default TrainingsPage;
