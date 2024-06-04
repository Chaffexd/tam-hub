import { auth } from "@/auth";
import { SignIn } from "@/components/SignIn";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/")
  }

  return (
    <>
      <SignIn />
    </>
  );
};

export default LoginPage;
