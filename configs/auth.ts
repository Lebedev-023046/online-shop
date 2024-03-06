import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import prisma from "@/lib/prisma";

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
        const user: User = await res.json();

        console.log({ user });

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  // providers: [
  //   Credentials({
  //     id: "credentials",
  //     name: "credentials",
  //     credentials: {
  //       email: {},
  //       password: {},
  //     },
  //     async authorize(credentials) {
  //       console.log(credentials || "no data");
  //       const { email, password } = credentials.data;
  //       console.log(email, password);
  //       return null;
  //       // const user = await fetch(
  //       //   `${process.env.NEXTAUTH_URL}/api/user/check-credentials`,
  //       //   {
  //       //     method: "POST",
  //       //     headers: {
  //       //       "Content-Type": "application/x-www-form-urlencoded",
  //       //       accept: "application/json",
  //       //     },
  //       //     body: credentials,
  //       //   },
  //       // );
  //       // if (user) {
  //       //   return user;
  //       // } else {
  //       //   return null;
  //       // }
  //     },
  //   }),
  // ],
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
      // I skipped the line below coz it gave me a TypeError
      // session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    },
  },
};
