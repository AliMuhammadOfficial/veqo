import NextAuth from "next-auth";
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string;
      role?: {
        id: string;
        name: string;
      };
    } & DefaultSession["user"]
  }

  interface JWT {
    role?: {
      id: string
      name: string
    }
  }
}
