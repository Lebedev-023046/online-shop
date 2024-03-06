import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import prisma from "@/lib/prisma";
import { IUserResponse } from "@/types";

export const authConfig: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXTAUTH_URL}/api/user/check-credentials`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              accept: "application/json",
            },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          },
        );
        const user = await res.json();

        console.log("user from authConfig: ", user);

        const userResponse = user as IUserResponse;

        if (userResponse.success) {
          return userResponse.success;
        } else {
          throw new Error(userResponse.error);
        }
      },
    }),
  ],

  adapter: PrismaAdapter(prisma),
  callbacks: {
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user?.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
};
