import TeamMember from "@/components/TeamMember";
import { fetchTeamMembers } from "@/lib/contentful";

const TAMTeamPage = async () => {
  const teamMembers = await fetchTeamMembers();

  // John
  const director = teamMembers.items[0].fields;
  
  return (
    <section className="min-h-screen md:px-40 pt-12">
      <h1 className="text-4xl text-center">Meet the TAM Team!</h1>
      <div className="w-full mt-8 flex justify-center flex-col">
        <div className="w-full flex justify-center">
          <TeamMember 
          // @ts-expect-error
          teamMemberData={director} />
        </div>
        <div className="flex flex-wrap justify-center mt-4">
          {teamMembers.items.slice(1).map((teamMember) => (
            <TeamMember
              key={teamMember.sys.id}
              // @ts-expect-error
              teamMemberData={teamMember.fields}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TAMTeamPage;
