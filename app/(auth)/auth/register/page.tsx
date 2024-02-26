import { Form } from "@/features/auth";
import { getAuthFields } from "@/features/auth/utils/generateAuthFields";

export default function Register() {
  const props = getAuthFields("register");

  return (
    <div className="mx-auto flex h-dvh">
      <div className="h-full w-[50%] bg-dark"></div>
      <div className="flex h-full w-[50%] items-center justify-center bg-soft">
        <Form {...props} />
      </div>
    </div>
  );
}
