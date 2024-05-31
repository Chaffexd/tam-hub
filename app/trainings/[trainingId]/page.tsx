import TrainingSession from "@/components/TrainingSession";
import { fetchPage, fetchTrainingSession } from "@/lib/contentful";
import React from "react";

const TrainingDetailPage = async ({ params }: { params: { trainingId: string } }) => {
  const trainingData = await fetchTrainingSession(params.trainingId);

  return (
    <section className="min-h-screen md:px-40 mt-8 w-full">
      <TrainingSession trainingSessionData={trainingData.items[0].fields} />
    </section>
  );
};

export default TrainingDetailPage;
