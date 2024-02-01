import { Form } from "@/features/auth";
import { getAuthFields } from "@/features/auth/utils/generateAuthFields";

export default function Register() {
  const props = getAuthFields("register");

  return (
    <div className="flex h-dvh mx-auto">
      <div className="w-[50%] h-full bg-dark"></div>
      <div className="flex justify-center items-center w-[50%] h-full bg-soft">
        <Form {...props} />
      </div>
    </div>
  );
}