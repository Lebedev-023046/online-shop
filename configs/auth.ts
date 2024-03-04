import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import prisma from "@/lib/prisma";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        // const { email, password } = credentials as {
        //   email: string;
        //   password: string;
        // };
        if (!credentials?.email || !credentials?.password) return null;

        return null;
      },
    }),
  ],
  // adapter: PrismaAdapter(prisma),
  // callbacks: {
  //   // triggered by getSession and useSession calls
  //   // documents https://next-auth.js.org/configuration/callbacks
  //   async session({ session, user }) {
  //     if (user.id && session?.user) {
  //       session.user.id = user.id;
  //     }
  //     return session;
  //   },
  // },
  pages: {
    signIn: "/auth/login",
  },
};
