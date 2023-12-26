import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <Link className={buttonVariants({ variant: "default" })} href={"/"}>
        Sign in
      </Link>
    </div>
  );
};

export default SignInPage;
