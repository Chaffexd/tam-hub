import { auth } from "@/auth";
import TrainingPage from "@/components/TrainingPage";
import { fetchPage, fetchTechTalks } from "@/lib/contentful";

const TrainingsPage = async () => {
  const trainingData = await fetchPage("trainings");
  const trainingSessions = await fetchTechTalks()
  console.log("Training Data = ", trainingSessions.items);

  return (
    <section className="min-h-screen md:px-40 mt-8">
      <TrainingPage trainingData={trainingData.items[0].fields} trainingSessions={trainingSessions.items} />
    </section>
  );
};

export default TrainingsPage;
