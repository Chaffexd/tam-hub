import TrainingPage from "@/components/TrainingPage";
import { fetchPage, fetchTrainingsPage } from "@/lib/contentful";

const TrainingsPage = async () => {
  const trainingData = await fetchPage("trainings");

  return (
    <section className="min-h-screen md:px-40 mt-8">
      <TrainingPage trainingData={trainingData.items[0].fields} />
    </section>
  );
};

export default TrainingsPage;
