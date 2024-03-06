"use client";

import { signIn } from "next-auth/react";

import { Form, Layout } from "@/features/auth";
import { AuthProps } from "@/features/auth/types";
import { getAuthFields } from "@/features/auth/utils/generateAuthFields";

export default function Login() {
  const props = getAuthFields("login");

  const handleLogin = async (data: AuthProps) => {
    try {
      const response = await signIn("credentials", {
        username: data.email,
        password: data.password,
        callbackUrl: "/",
      });
      console.log({ response });
    } catch (error) {}
  };

  return (
    <Layout>
      <Form {...props} action={handleLogin} />
    </Layout>
  );
}
