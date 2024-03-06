"use client";
import { Form, Layout } from "@/features/auth";
import { getAuthFields } from "@/features/auth/utils/generateAuthFields";
import { logger } from "@/lib/logger";

export default function Register() {
  const props = getAuthFields("register");

  const handleRegister = async <T,>(data: T, cb?: () => void) => {
    try {
      const formData = { ...data };
      console.log(`POSTing ${JSON.stringify(formData, null, 2)}`);
      const response = await fetch("/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      logger.debug(`response`, response);
      cb ? cb() : null;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Form {...props} action={handleRegister} />
    </Layout>
  );
}
