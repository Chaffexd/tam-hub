import NextAuth from "next-auth"
import okta from "next-auth/providers/okta"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [okta],
})