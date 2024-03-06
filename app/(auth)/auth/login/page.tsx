"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

import { Form, Layout } from "@/features/auth";
import { AuthProps } from "@/features/auth/types";
import { getAuthFields } from "@/features/auth/utils/generateAuthFields";

export default function Login() {
  const props = getAuthFields("login");
  const router = useRouter();

  const handleLogin = async (data: AuthProps) => {
    try {
      const response = await signIn("credentials", {
        username: data.email,
        password: data.password,
        redirect: false,
      });

      if (response?.ok) {
        toast.success("Добро пожаловать!");
        router.push("/");
      } else {
        toast.error(response?.error as string);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Form {...props} action={handleLogin} />
    </Layout>
  );
}
