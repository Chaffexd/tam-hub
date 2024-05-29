import React from "react";

const TrainingDetailPage = ({ params }: { params: { trainingId: string } }) => {
  return <section className="min-h-screen md:px-40 mt-8">The training for {params.trainingId}</section>;
};

export default TrainingDetailPage;
