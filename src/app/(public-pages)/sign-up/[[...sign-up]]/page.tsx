import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex place-items-center place-content-center min-h-[50vh]">
      <SignUp />
    </div>
  );
}
