import { auth } from "@/auth";
import TeamMember from "@/components/TeamMember";
import { fetchDirector, fetchTeamMembers } from "@/lib/contentful";
import { redirect } from "next/navigation";

const TAMTeamPage = async () => {
  const teamMembers = await fetchTeamMembers();
  const getDirector = await fetchDirector();

  // John
  const director = getDirector.items[0].fields;


  const session = await auth();
  console.log("Session =", session === null);
  if (session === null || !session?.user) {
    redirect("/login")
  }

  return (
    <section className="min-h-screen md:px-40 pt-12">
      <h1 className="text-4xl text-center">Meet the TAM Team!</h1>
      <div className="w-full mt-8 flex justify-center flex-col">
        <div className="w-full flex justify-center">
          <TeamMember
            // @ts-expect-error
            teamMemberData={director}
          />
        </div>
        <div className="flex flex-wrap justify-center mt-4">
          {
            // @ts-expect-error
            teamMembers.items[0].fields.members.map((teamMember: any) => (
              <TeamMember
                key={teamMember.sys.id}
                teamMemberData={teamMember.fields}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default TAMTeamPage;
