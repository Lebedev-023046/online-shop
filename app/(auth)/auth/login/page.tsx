import { Form, Layout } from "@/features/auth";
import { getAuthFields } from "@/features/auth/utils/generateAuthFields";

export default function Login() {
  const props = getAuthFields("login");

  return (
    <Layout>
      <Form {...props} />
    </Layout>
  );
}
