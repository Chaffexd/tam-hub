import { formatDate } from "@/lib/dateFormat";
import Image from "next/image";
import React from "react";
import { richTextOptions } from "@/lib/richTextOptions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import BackArrow from "./icons/BackArrow";
import Link from "next/link";

// @ts-expect-error
const TrainingSession = ({ trainingSessionData }) => {
  
  return (
    <>
      <Link href={"/trainings"}>
        <BackArrow />
      </Link>
      <div className="w-full mt-8">
        <div className="rounded-xl border border-ctgrey-1 p-4 mb-8 bg-slate-100">
          <div className="flex items-center">
            <Image
              src={`https:${trainingSessionData.sessionHost.fields.authorImage.fields.image.fields.file.url}`}
              alt={
                trainingSessionData.sessionHost.fields.authorImage.fields.image
                  .fields.description
              }
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-bold text-slate-700">
                {trainingSessionData.sessionHost.fields.name}
              </p>
              <p className="text-slate-500">
                {trainingSessionData.sessionHost.fields.title} -{" "}
                {trainingSessionData.sessionHost.fields.location}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-semibold text-cfgrey-2 mb-1">
              {trainingSessionData.topic}
            </p>
            <time className="text-slate-700">
              {formatDate(trainingSessionData.dateOfSession)}
            </time>
          </div>
        </div>
        <video
          src={`https:${trainingSessionData.video.fields.file.url}`}
          controls
          className="rounded-xl mb-8 hover:cursor-pointer w-full"
        />
        <div className="mt-8 mb-20">
          {trainingSessionData.description &&
            documentToReactComponents(
              trainingSessionData.description,
              richTextOptions
            )}
        </div>
      </div>
    </>
  );
};

export default TrainingSession;
