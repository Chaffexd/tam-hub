import { auth } from "@/auth";
import { fetchPage } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const CaseStudiesPage = async () => {
  const homePageData = await fetchPage("/");

  const { accounts } = homePageData.items[0].fields;


  const session = await auth();
  console.log("Session =", session === null);
  if (session === null || !session?.user) {
    return redirect("/login")
  }
  return (
    <section className="min-h-screen md:px-40 mt-8">
      <p className="font-bold text-4xl md:px-0 px-4">Our Accounts</p>
      <div className="w-full mt-12 bg-cfblue-1 p-8 xl:rounded-xl flex flex-wrap gap-12 justify-center mb-20">
        { // @ts-expect-error
        accounts?.map((account: any) => (
          <Link
            key={account.sys.id}
            href={account.fields.slug}
            className="hover:-translate-y-2 transition-transform transform"
          >
            <div className="bg-blue-100 rounded-xl w-[300px] h-[340px]">
              <div className="bg-white w-full rounded-t-lg flex justify-center">
                <Image
                  src={`https:${account.fields.image.fields.image.fields.file.url}`}
                  alt={account.fields.title}
                  width={200}
                  height={300}
                  className=" w-[250px] h-[250px]  p-8"
                />
              </div>

              <div>
                <p className="font-bold text-center mt-8">
                  {account.fields.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesPage;
