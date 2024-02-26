import { Form, Layout } from "@/features/auth";
import { getAuthFields } from "@/features/auth/utils/generateAuthFields";

export default function Register() {
  const props = getAuthFields("register");

  return (
    <Layout>
      <Form {...props} />
    </Layout>
  );
}
