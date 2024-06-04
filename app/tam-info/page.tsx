import { auth } from "@/auth";
import TamInfo from "@/components/TamInfo";
import { fetchPage } from "@/lib/contentful";
import { redirect } from "next/navigation";
import React from "react";

const TamInfoPage = async () => {
  const tamData = await fetchPage("tam-info");


  /* const session = await auth();
  console.log("Session =", session === null);
  if (session === null || !session?.user) {
    return redirect("/login")
  } */

  return (
    <section className="min-h-screen md:px-40 mt-8">
      <TamInfo tamData={tamData.items[0].fields} />
    </section>
  );
};

export default TamInfoPage;
