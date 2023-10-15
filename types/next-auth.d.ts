import NextAuth, { DefaultSession } from "next-auth"
 
declare module "next-auth" {
  interface Session {
    user: {
      moderator: boolean | undefined | null
    } & DefaultSession["user"]
  }
}
