import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email! },
          include: { role: true },
        });
        token.role = dbUser?.role;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user && token) {
        session.user.role = token.role as
          | { id: string; name: string }
          | undefined;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      if (!user?.email) return false;

      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
          include: { role: true },
        });

        if (!existingUser) {
          const defaultRole = await prisma.role.findFirstOrThrow({
            where: { name: "USER" },
          });

          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
              role: {
                connect: { id: defaultRole.id },
              },
            },
          });
        }
        return true;
      } catch (error) {
        console.error("Authentication error:", error);
        return false;
      }
    },
  },
});
