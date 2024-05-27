import TeamMember from "@/components/TeamMember";
import { fetchTeamMembers } from "@/lib/contentful";
import React from "react";

const TAMTeamPage = async () => {
  const teamMembers = await fetchTeamMembers();

  console.log("Team Members = ", teamMembers.items[0].fields);
  // John
  const director = teamMembers.items[0].fields;
  return (
    <section className="min-h-screen px-40 pt-12">
      <h1 className="text-4xl">Meet the TAM Team!</h1>
      <div className="w-full mt-8 flex justify-center flex-col">
        <div className="w-full flex justify-center">
          <TeamMember teamMemberData={director} />
        </div>
        <div className="flex flex-wrap mt-4">
          {teamMembers.items.slice(1).map((teamMember) => (
            <TeamMember
              key={teamMember.sys.id}
              teamMemberData={teamMember.fields}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TAMTeamPage;
