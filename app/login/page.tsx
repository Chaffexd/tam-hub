import { auth } from "@/auth";
import { SignIn } from "@/components/SignIn";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();

  console.log("SESSION /LOGIN =", session);

  
  /* if (session?.user) {
    return redirect("/")
  } */


  return (
    <>
      <SignIn />
    </>
  );
};

export default LoginPage;
