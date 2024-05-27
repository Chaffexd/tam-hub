import Image from "next/image";
import React from "react";

type TeamMemberProps = {
  teamMemberData: {
    name: string;
    title: string;
    location: string
    authorImage: {}
  };
};

const TeamMember = ({ teamMemberData }: TeamMemberProps) => {
  
  return (
    <div className="w-1/3 flex flex-col items-center justify-center my-4">
      <Image
        src={`https:${teamMemberData.authorImage.fields.image.fields.file.url}`}
        alt={teamMemberData.authorImage.fields.image.fields.description}
        width={250}
        height={250}
        className="rounded-lg"
      />
      <div className="text-center">
        <h2 className="text-2xl my-1">{teamMemberData.name}</h2>
        <p className="text-slate-500">{teamMemberData.title}</p>
        <p className="text-slate-500">{teamMemberData.location}</p>
      </div>
    </div>
  );
};

export default TeamMember;
