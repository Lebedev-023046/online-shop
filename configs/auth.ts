import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        return null;
      },
    }),
  ],
};
