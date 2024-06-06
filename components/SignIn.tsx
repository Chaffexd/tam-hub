import { signIn } from "@/auth";

export function SignIn() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("okta");
        }}
        className="w-full h-screen flex items-center justify-center"
      >
        <button
          type="submit"
          className="p-4 bg-cfblue-1  rounded-xl font-bold text-white -mt-44 hover:bg-sky-400"
        >
          Signin with Okta
        </button>
      </form>
    </>
  );
}
