import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex place-items-center place-content-center min-h-[50vh]">
      <SignIn />
    </div>
  );
}
