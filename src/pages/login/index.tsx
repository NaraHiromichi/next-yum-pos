import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Login = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="text-8xl text-primary mb-10">Yum POS</h1>
      <button
        className="w-70 h-10 bg-primary px-5 rounded-md"
        onClick={() => signIn("google", { callbackUrl: "/backoffice" })}
      >
        Login with Google
      </button>
    </main>
  );
};

export default Login;
